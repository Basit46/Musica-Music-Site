import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhIjnswfnrX7KruJ1JrVp8e5Z8fL4GGzI",
  authDomain: "musica-a1e93.firebaseapp.com",
  projectId: "musica-a1e93",
  storageBucket: "musica-a1e93.appspot.com",
  messagingSenderId: "1007901057322",
  appId: "1:1007901057322:web:d876e65436c9943f25be53",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
