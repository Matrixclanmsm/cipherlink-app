import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage' ;



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBYzXlHIlo4a73uVOwv50-TZpz_QG3UNI",
  authDomain: "inviso-e3026.firebaseapp.com",
  projectId: "inviso-e3026",
  storageBucket: "inviso-e3026.appspot.com",
  messagingSenderId: "396027598622",
  appId: "1:396027598622:web:587fbedd4f5739bb46db0f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
