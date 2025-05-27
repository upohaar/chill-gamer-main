// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP7A2bSsdsco0pRfPXmfJ8ecUUMIAHn3I",
  authDomain: "chill-gamer-main.firebaseapp.com",
  projectId: "chill-gamer-main",
  storageBucket: "chill-gamer-main.firebasestorage.app",
  messagingSenderId: "689504282200",
  appId: "1:689504282200:web:9e85e5e8673e51ea498c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);