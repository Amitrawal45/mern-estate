// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-34ced.firebaseapp.com",
  projectId: "mern-estate-34ced",
  storageBucket: "mern-estate-34ced.appspot.com",
  messagingSenderId: "732669976196",
  appId: "1:732669976196:web:114100d7e967f0fb642cd1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);