// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6nP-4eEcZmiHfKZsqjzwVBgiCJ2llHMk",
  authDomain: "realtor-clone-react-8380c.firebaseapp.com",
  projectId: "realtor-clone-react-8380c",
  storageBucket: "realtor-clone-react-8380c.appspot.com",
  messagingSenderId: "296028274124",
  appId: "1:296028274124:web:5322ca21acb5af6ed63169"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()