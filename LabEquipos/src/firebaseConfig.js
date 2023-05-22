// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN, 
  projectId: "proyecto-16va",
  storageBucket: "proyecto-16va.appspot.com",
  messagingSenderId: "955980161747",
  appId: "1:955980161747:web:dadf66b025333927592a26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);