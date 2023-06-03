
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDKotsBFXD-6HGpQr0tbsKp0yDFFUbCePU",
  authDomain: "react-coder-11.firebaseapp.com",
  projectId: "react-coder-11",
  storageBucket: "react-coder-11.appspot.com",
  messagingSenderId: "339968036969",
  appId: "1:339968036969:web:8de43d7663b39ca34712f8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()