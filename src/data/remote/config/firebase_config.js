import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkjN7Ru56as-gSQuu02TDyZN5ptTvw8g0",
  authDomain: "read-book-web-app.firebaseapp.com",
  projectId: "read-book-web-app",
  storageBucket: "read-book-web-app.appspot.com",
  messagingSenderId: "570484960625",
  appId: "1:570484960625:web:588fd906f7d8d1d7d55ad0",
  measurementId: "G-491W0534MD",
};
// Initialize Firebase
const initFirebase = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(initFirebase);
export const firebaseStore = getFirestore(initFirebase);
