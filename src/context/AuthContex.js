import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth,db } from "../firebase";
import {setDoc,doc} from 'firebase/firestore';



const AuthContex = createContext();

export function AuthContexProvider ({ children })  {
  const [user, setUser] = useState({});

  function signUp  (email, password){
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, 'users', email), {
      savedShows: []
  })
  };

  function signIn (email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  };
  function logOut  ()  {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubCribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
    });
    return () => {
      unsubCribe();
    };
  }, []);

  return <AuthContex.Provider value={{user,signIn,logOut,signUp}}>{children}</AuthContex.Provider>;
};

export const UseAuth = () => {
  return useContext(AuthContex);
};
