// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSEGechG8-SuPpsq5WlLWqbErWO2OSJRo",
  authDomain: "doctorslist-18b18.firebaseapp.com",
  projectId: "doctorslist-18b18",
  storageBucket: "doctorslist-18b18.appspot.com",
  messagingSenderId: "497355719958",
  appId: "1:497355719958:web:5171d5902119ff828f3c37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;