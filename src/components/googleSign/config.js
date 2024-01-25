// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiOU-DsJtG3kYK4Wh_nuZRgPf_8KHDGy4",
    authDomain: "celtic-shape-364919.firebaseapp.com",
    projectId: "celtic-shape-364919",
    storageBucket: "celtic-shape-364919.appspot.com",
    messagingSenderId: "928702121134",
    appId: "1:928702121134:web:6151d664b73c0a28e4993f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};