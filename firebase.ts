// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4kuDS45emiM4c6a4bTPKrGb8rx9PKA4s",
  authDomain: "netflix-clone-c811f.firebaseapp.com",
  projectId: "netflix-clone-c811f",
  storageBucket: "netflix-clone-c811f.appspot.com",
  messagingSenderId: "711497899996",
  appId: "1:711497899996:web:76c93a162056667661f919",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
