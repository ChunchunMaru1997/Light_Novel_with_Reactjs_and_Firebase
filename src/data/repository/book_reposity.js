import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { firebaseStore } from "../remote/config/firebase_config";
import { BOOK_COLLECTION } from "../remote/config/firebase_constant";

export const createNewBook = async (
  bookName,
  bookCategory,
  bookAuthor,
  bookDetail
) => {
  try {
    let doc = await addDoc(collection(firebaseStore, BOOK_COLLECTION), {
      name: bookName,
      categoryId: bookCategory,
      author: bookAuthor,
      detail: bookDetail,
      newestChapter: 0,
    });
    return {
      book: [
        {
          id: doc.id,
          name: bookName,
          categoryId: bookCategory,
          author: bookAuthor,
          detail: bookDetail,
        },
      ],
    };
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: error.message };
  }
};

export const getBook = async (bookId) => {
  try {
    let book = await (
      await getDoc(doc(firebaseStore, BOOK_COLLECTION, bookId))
    ).data();

    return {
      bookId: bookId,
      name: book.name,
      categoryId: book.categoryId,
      author: book.author,
      detail: book.detail,
      newestChap: book.newestChapter,
    };
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: error.message };
  }
};

export const getAllBook = async () => {
  try {
    const q = query(
      collection(firebaseStore, BOOK_COLLECTION),
      orderBy("name")
    );
    let books = (await getDocs(q)).docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { books: [...books] };
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: error.message };
  }
};
