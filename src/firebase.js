// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFm5hcfnz5QP3Hk6hpIiupiL_e5vmOgP8",
  authDomain: "webclass-39e91.firebaseapp.com",
  projectId: "webclass-39e91",
  storageBucket: "webclass-39e91.appspot.com",
  messagingSenderId: "635819848609",
  appId: "1:635819848609:web:25b7941e859b068af711e0",
  measurementId: "G-RKXCNTBV0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();