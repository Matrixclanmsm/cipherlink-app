import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage' ;



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
// Import the functions you need from the SDKs you need
  apiKey: "AIzaSyDRQfeqTYsMT0TqdOnOOSXrMtdme4YgG4U",
  authDomain: "creative-43358.firebaseapp.com",
  projectId: "creative-43358",
  storageBucket: "creative-43358.appspot.com",
  messagingSenderId: "1070785313020",
  appId: "1:1070785313020:web:7c90577fd02a7f48e2bf79"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
