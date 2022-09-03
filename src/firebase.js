// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbzKkbO_GiJejhIm11CtiHotLY1CByQi4",
  authDomain: "linkedin-clone-12d2a.firebaseapp.com",
  projectId: "linkedin-clone-12d2a",
  storageBucket: "linkedin-clone-12d2a.appspot.com",
  messagingSenderId: "136496920459",
  appId: "1:136496920459:web:dc2fc3f493d8270cc9618e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export {db,auth};