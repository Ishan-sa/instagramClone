// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCplYD_flhe_BCn4-fpRxJN0dxT9Xlb5Eo",
    authDomain: "instagram-76639.firebaseapp.com",
    projectId: "instagram-76639",
    storageBucket: "instagram-76639.appspot.com",
    messagingSenderId: "196864445453",
    appId: "1:196864445453:web:cbf455f60f94e51f201944"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };