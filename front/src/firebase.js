// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo0rROJHXjkNcEZ2FMC2fsXGKB3KMnFkQ",
  authDomain: "auth-yt-8568d.firebaseapp.com",
  projectId: "auth-yt-8568d",
  storageBucket: "auth-yt-8568d.appspot.com",
  messagingSenderId: "5453949369",
  appId: "1:5453949369:web:d6874d519bfb732b04ee68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 