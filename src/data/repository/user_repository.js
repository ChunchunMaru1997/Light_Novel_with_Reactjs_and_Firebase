import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firebaseAuth, firebaseStore } from "../remote/config/firebase_config";

const USER_COLLECTION = "user";

export async function createNewAccount(username, email, password) {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    await setDoc(doc(firebaseStore, USER_COLLECTION, userCredential.user.uid), {
      email: email,
      username: username,
    });
    return {
      user: { id: userCredential.user.uid, email: email, username: username },
    };
  } catch (e) {
    console.log(e.message);
    return { error: e.message };
  }
}

export async function login(email, password) {
  try {
    let userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    var data = (
      await getDoc(doc(firebaseStore, USER_COLLECTION, userCredential.user.uid))
    ).data();
    console.log(data);
    return {
      id: userCredential.user.uid,
      user: {
        email: data.email,
        username: data.username,
        isAdmin: data.isAdmin,
      },
    };
  } catch (e) {
    console.log(e.message);
    return { error: e.message };
  }
}

export const getAllUser = async () => {
  try {
    const q = query(
      collection(firebaseStore, USER_COLLECTION),
      orderBy("username")
    );

    let users = (await getDocs(q)).docs.map((doc) => ({
      id: doc.id,
      username: doc.data().username,
      email: doc.data().email,
    }));

    return { users: users };
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return { error: error.message };
  }
};
