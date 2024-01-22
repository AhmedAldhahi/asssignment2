// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwjN2sEzlCUs5xUxQYMWgtCFppy_TyXI0",
    authDomain: "my-app-2e750.firebaseapp.com",
    projectId: "my-app-2e750",
    storageBucket: "my-app-2e750.appspot.com",
    messagingSenderId: "413017010640",
    appId: "1:413017010640:web:005a9fd8523c6a73e709d5",
    measurementId: "G-B7VGPBCEYT"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);