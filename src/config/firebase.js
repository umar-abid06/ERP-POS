// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8fSCQTNRb7v99sK3yN1fYHxfDJoJKd6Q",
  authDomain: "minierp-be411.firebaseapp.com",
  projectId: "minierp-be411",
  storageBucket: "minierp-be411.appspot.com",
  messagingSenderId: "771262030558",
  appId: "1:771262030558:web:cbaa0ee241fd38cbbf584f",
  measurementId: "G-3M1SXX546T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

async function register(email, password, fullname, phoneNumber, role) {
  return new Promise((res, rej) => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then((result) => {
        const uid = result.user.uid;
        setDoc(doc(db, "RegisteredUsers", uid), {
          email,
          fullname,
          phoneNumber,
          role,
        });
        alert("Registered Successfully");
        res(true);
      });
    } catch (e) {
      rej(e);
    }
  });
}

async function login(email, password) {
  const userObj = await signInWithEmailAndPassword(auth, email, password);
  const user = await getDoc(doc(db, "RegisteredUsers", userObj.user.uid));
  alert("Login successful");
  return user.data();
}

export { register, login };
