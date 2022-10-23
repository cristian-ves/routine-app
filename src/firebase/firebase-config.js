

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getEnvVariables } from "../helpers"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const viteVar = getEnvVariables();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: viteVar.VITE_API_KEY,
  authDomain: viteVar.VITE_AUTH_DOMAIN,
  projectId: viteVar.VITE_PROJECT_ID,
  storageBucket: viteVar.VITE_STORAGE_BUCKET,
  messagingSenderId: viteVar.VITE_MESSAGING_SENDER_ID,
  appId: viteVar.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
  auth,
  db,
  provider
}
