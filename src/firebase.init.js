// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7zcg8StQYFnOkAJhmsuffLCZ6yPGw7D8",
  authDomain: "warehouse-management-e1fee.firebaseapp.com",
  projectId: "warehouse-management-e1fee",
  storageBucket: "warehouse-management-e1fee.appspot.com",
  messagingSenderId: "948448258131",
  appId: "1:948448258131:web:d883257560eb268a66fea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
export default auth;