// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGPijiJ1c1_X63MdjeNcT5d5yebJStJ8A",
  authDomain: "uber-next-clone-live-cea0d.firebaseapp.com",
  projectId: "uber-next-clone-live-cea0d",
  storageBucket: "uber-next-clone-live-cea0d.appspot.com",
  messagingSenderId: "518427688044",
  appId: "1:518427688044:web:65a21a0f0c885b21b7ac49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}