// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBe-urWDfqWW0KH13n3t9gpRS6oBr_SBA4",
  authDomain: "babynamefinder-6d4e4.firebaseapp.com",
  projectId: "babynamefinder-6d4e4",
  storageBucket: "babynamefinder-6d4e4.appspot.com",
  messagingSenderId: "588589100277",
  appId: "1:588589100277:web:6b7e2a84874fed112829bc",
  measurementId: "G-T9Q7W78V47"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
