// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJBvUmKDxhJTxQhndaZeUNDeN-_jSo9tc",
  authDomain: "agency-website-6c95a.firebaseapp.com",
  projectId: "agency-website-6c95a",
  storageBucket: "agency-website-6c95a.appspot.com",
  messagingSenderId: "155486343754",
  appId: "1:155486343754:web:6841c6d064b56bba894cb3",
  measurementId: "G-29NPZT7MYC"
};

// Initialize Firebases
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);