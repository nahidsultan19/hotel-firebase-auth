// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcs1BylwbZ2yPzsY4knlxYlfibYm8yyKM",
    authDomain: "hotel-firebase-auth-579a8.firebaseapp.com",
    projectId: "hotel-firebase-auth-579a8",
    storageBucket: "hotel-firebase-auth-579a8.appspot.com",
    messagingSenderId: "1038450420742",
    appId: "1:1038450420742:web:4cc7479faa805262692787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;