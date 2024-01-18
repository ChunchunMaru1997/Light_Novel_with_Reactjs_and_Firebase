import { async } from "@firebase/util";
import {
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { firebaseStore } from "../remote/config/firebase_config";
import { CATEGORIES_COLLECTION } from "../remote/config/firebase_constant";

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

export const editCategory = async (categoryId, categoryName) => {
  try {
    updateDoc(doc(firebaseStore, CATEGORIES_COLLECTION, categoryId), {
      name: categoryName,
    });
    return { category: { categoryId: categoryId, name: categoryName } };
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: error.message };
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    await deleteDoc(doc(firebaseStore, CATEGORIES_COLLECTION, categoryId));
    return { category: { categoryId: categoryId } };
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
