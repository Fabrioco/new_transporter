import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC69R6IWEE-gpAYREkJs4vUYWGtioIgGKQ",
  authDomain: "transportadora-a53c5.firebaseapp.com",
  projectId: "transportadora-a53c5",
  storageBucket: "transportadora-a53c5.appspot.com",
  messagingSenderId: "554642273052",
  appId: "1:554642273052:web:25eb3f476b1da20db1c0d9",
  measurementId: "G-37VS4RSYX1",
};

const firebasApp = initializeApp(firebaseConfig);

const db = getFirestore(firebasApp);
const auth = getAuth(firebasApp);
const storage = getStorage(firebasApp);

export { db, auth, storage };
