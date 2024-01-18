import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  writeBatch,
} from "firebase/firestore";
import { firebaseStore } from "../remote/config/firebase_config";
import {
  BOOK_COLLECTION,
  CHAPTER_COLLECTION,
} from "../remote/config/firebase_constant";

export const createNewChapter = async (bookId, chap, title, content) => {
  try {
    let batch = writeBatch(firebaseStore);
    batch.set(
      doc(firebaseStore, BOOK_COLLECTION, bookId, CHAPTER_COLLECTION, chap),
      { bookId: bookId, title: title, content: content }
    );
    batch.update(doc(firebaseStore, BOOK_COLLECTION, bookId), {
      newestChapter: chap,
    });
    await batch.commit();
    return {
      chapter: {
        id: chap,
        bookId: bookId,
        title: title,
        content: content,
      },
    };
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: error.message };
  }
};

export const getAllChapter = async (bookId) => {
  try {
    const q = query(
      collection(firebaseStore, BOOK_COLLECTION, bookId, CHAPTER_COLLECTION),
      orderBy("chap")
    );
    let chaps = (await getDocs(q)).docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { chaps: [...chaps] };
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: error.message };
  }
};
