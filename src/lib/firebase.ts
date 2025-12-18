// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQAnB6L-u4cnjuWRq4C6WyQIQGo1dSBKM",
  authDomain: "vidora-2aedd.firebaseapp.com",
  projectId: "vidora-2aedd",
  storageBucket: "vidora-2aedd.firebasestorage.app",
  messagingSenderId: "748371549568",
  appId: "1:748371549568:web:89bda370f0078f81bb7565",
  measurementId: "G-2W3JCG1EF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (only on client side)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
