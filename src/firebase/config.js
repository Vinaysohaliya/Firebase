// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaTCPfcXPLIFWY7yEKaCJRKe7M3frzrro",
  authDomain: "fun-project-157ab.firebaseapp.com",
  projectId: "fun-project-157ab",
  storageBucket: "fun-project-157ab.appspot.com",
  messagingSenderId: "999880725254",
  appId: "1:999880725254:web:aa5c2a455f800cd9294487",
  measurementId: "G-4N75QEQ36M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);