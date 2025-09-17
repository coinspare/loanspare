// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjmI_iSJ8HNlgNLXus7NAUfKgbBu7nPGA",
  authDomain: "finvare-login.firebaseapp.com",
  projectId: "finvare-login",
  storageBucket: "finvare-login.firebasestorage.app",
  messagingSenderId: "695522895152",
  appId: "1:695522895152:web:cfbef6b0daca1d7bd094f5",
  measurementId: "G-MCTMW1099Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, sendEmailVerification };
