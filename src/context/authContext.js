import React, { useState, createContext, useContext, useEffect } from "react";
import { auth, db } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, arrayUnion, updateDoc } from "firebase/firestore";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", email), {
      collection: [],
      liked: [],
    });
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    await signOut(auth);
    alert("Oya Sope OTILO!!!!");
  };

  const addToUserCollection = async (chart) => {
    await updateDoc(doc(db, "users", user), {
      collection: arrayUnion({
        id: chart.id,
        title: chart.title,
        img: chart.cover,
      }),
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (cred) => {
      setUser(cred?.email);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <authContext.Provider
      value={{ user, signUp, logIn, logOut, addToUserCollection }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext);
};
