// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhC4HkaSdxLTnHlwWBFnAiSlmFcnu3W1Q",
    authDomain: "moneytracker-06.firebaseapp.com",
    projectId: "moneytracker-06",
    storageBucket: "moneytracker-06.firebasestorage.app",
    messagingSenderId: "392680617497",
    appId: "1:392680617497:web:946dec8d2839ec3ccedc88",
    measurementId: "G-BRN4PN9Y6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);