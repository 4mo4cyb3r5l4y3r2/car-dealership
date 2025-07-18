// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmgLVsjJLrrFgQCisat_EMxK5MeiijsYs",
  authDomain: "nda-auto-emporium.firebaseapp.com",
  projectId: "nda-auto-emporium",
  storageBucket: "nda-auto-emporium.firebasestorage.app",
  messagingSenderId: "580631751485",
  appId: "1:580631751485:web:d4c657193d0fcaabf27354",
  measurementId: "G-YB8TQSTVQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);