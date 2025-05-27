// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRTay6_T1H9CQ4X3JX2rAEu5cYXdmRXdo",
  authDomain: "chill-gamer-a067b.firebaseapp.com",
  projectId: "chill-gamer-a067b",
  storageBucket: "chill-gamer-a067b.firebasestorage.app",
  messagingSenderId: "660637215819",
  appId: "1:660637215819:web:5077f2fe76bc6956fe31ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);