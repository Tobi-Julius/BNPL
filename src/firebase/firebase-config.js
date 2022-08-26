import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2hIDOcZG8F1xf-zv1r0rqwTHQZmEFUhQ",
  authDomain: "bnpl-965c5.firebaseapp.com",
  projectId: "bnpl-965c5",
  storageBucket: "bnpl-965c5.appspot.com",
  messagingSenderId: "17228863830",
  appId: "1:17228863830:web:be9960674f67418deb9ef7",
  measurementId: "G-JCXTHPE91D",
};

const App = initializeApp(firebaseConfig);

export const Auth = getAuth(App);
