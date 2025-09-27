import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5X8SHGtHwAokCr8j3yVjVdmKi58UMi6c",
    authDomain: "handmade-shop-91d66.firebaseapp.com",
    projectId: "handmade-shop-91d66",
    storageBucket: "handmade-shop-91d66.appspot.com", 
    messagingSenderId: "931803628087",
    appId: "1:931803628087:web:96d63251010bf1009a75b2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
