// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e4b7e.firebaseapp.com",
  projectId: "mern-estate-e4b7e",
  storageBucket: "mern-estate-e4b7e.firebasestorage.app",
  messagingSenderId: "70844204486",
  appId: "1:70844204486:web:758b95779916dd59b05ec7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
