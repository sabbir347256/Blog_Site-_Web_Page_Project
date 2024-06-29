// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV227WoriJoGC5yPvvXJ64gSpK2AmwUnE",
  authDomain: "himu-lab.firebaseapp.com",
  projectId: "himu-lab",
  storageBucket: "himu-lab.appspot.com",
  messagingSenderId: "355636449900",
  appId: "1:355636449900:web:ab87ca27fd5bf7003e3e49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
