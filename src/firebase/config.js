import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4QAtcr0SWsAKF_56HKzi5g2YWskXgevw",
    authDomain: "back-end-service.firebaseapp.com",
    projectId: "back-end-service",
    storageBucket: "back-end-service.appspot.com",
    messagingSenderId: "392417906562",
    appId: "1:392417906562:web:836dddf6ab1afbed14c99b",
};

// Init App
initializeApp(firebaseConfig);

// Init Service
const auth = getAuth();
const db = getFirestore();

const colRef = collection(db, "messages");

export { auth, db, colRef };
