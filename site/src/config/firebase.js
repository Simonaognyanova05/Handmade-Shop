import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';;

const firebaseConfig = {
    apiKey: "AIzaSyAi4o3jBixR0l4D_NZVblYGTbbkHQ6sOp0",
    authDomain: "smart-point-shop.firebaseapp.com",
    projectId: "smart-point-shop",
    storageBucket: "smart-point-shop.firebasestorage.app",
    messagingSenderId: "469718958378",
    appId: "1:469718958378:web:1213340a6e519bcfa55e53"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);