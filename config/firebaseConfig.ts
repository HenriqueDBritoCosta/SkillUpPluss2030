import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCadlLyTVJD3gKV0VC-T-oouTQtLXBy79A",
  authDomain: "gs-mobile-a5ce6.firebaseapp.com",
  projectId: "gs-mobile-a5ce6",
  storageBucket: "gs-mobile-a5ce6.firebasestorage.app",
  messagingSenderId: "456962279052",
  appId: "1:456962279052:web:b9deea6285d2d1c13a5da9"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
