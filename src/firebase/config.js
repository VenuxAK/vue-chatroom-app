import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD4QAtcr0SWsAKF_56HKzi5g2YWskXgevw",
    authDomain: "back-end-service.firebaseapp.com",
    projectId: "back-end-service",
    storageBucket: "back-end-service.appspot.com",
    messagingSenderId: "392417906562",
    appId: "1:392417906562:web:836dddf6ab1afbed14c99b",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
