// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBCzRlmLyfcH7_JCEDldkD8CJPjPZEUqgY",
  authDomain: "fir-auth-e41c5.firebaseapp.com",
  projectId: "fir-auth-e41c5",
  storageBucket: "fir-auth-e41c5.appspot.com",
  messagingSenderId: "940812438860",
  appId: "1:940812438860:web:09bbfc3ea57dd09dfcd3e9",
  measurementId: "G-DQKW6ZT005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth()
export {app,auth}
