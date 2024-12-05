// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYXuktPPyVQR_f6WTJHS_Kk7bly1IwE3o",
  authDomain: "intranet-8d184.firebaseapp.com",
  projectId: "intranet-8d184",
  storageBucket: "intranet-8d184.firebasestorage.app",
  messagingSenderId: "572951490574",
  appId: "1:572951490574:web:e8337feacce58b4c28cc5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
