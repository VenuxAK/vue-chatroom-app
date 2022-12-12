import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4QAtcr0SWsAKF_56HKzi5g2YWskXgevw",
    authDomain: "back-end-service.firebaseapp.com",
    projectId: "back-end-service",
    storageBucket: "back-end-service.appspot.com",
    messagingSenderId: "392417906562",
    appId: "1:392417906562:web:836dddf6ab1afbed14c99b",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
