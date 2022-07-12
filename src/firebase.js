import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZejf2yP30lpHnSucx2rKMGsU86PorUO8",
  authDomain: "netflix-clone-app-346be.firebaseapp.com",
  projectId: "netflix-clone-app-346be",
  storageBucket: "netflix-clone-app-346be.appspot.com",
  messagingSenderId: "777621329281",
  appId: "1:777621329281:web:3939abfece8d8b3d8a0480"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
