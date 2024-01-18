import { async } from "@firebase/util";
import {
  setDoc,
  doc,
  addDoc,
  collection,
  query,
  orderBy,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { firebaseStore } from "../remote/config/firebase_config";

const CATEGORIES_COLLECTION = "categories";

export const createNewCategory = async (categoryName) => {
  try {
    let doc = await addDoc(collection(firebaseStore, CATEGORIES_COLLECTION), {
      name: categoryName,
    });
    return { category: { id: doc.id, name: categoryName } };
  } catch (error) {
    console.log(error);

    console.log(error.message);
    return { error: error.message };
  }
};

export const getAllCategory = async () => {
  try {
    const q = query(
      collection(firebaseStore, CATEGORIES_COLLECTION),
      orderBy("name")
    );

    let categories = (await getDocs(q)).docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
    }));
    return { categories: [...categories] };
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: error.message };
  }
};
