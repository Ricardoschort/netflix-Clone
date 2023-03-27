import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyDZ18hliQS8_OZ1PLAoCcrXrSY5VJGNh9s",

  authDomain: "neftlix-clone-ac913.firebaseapp.com",

  projectId: "neftlix-clone-ac913",

  storageBucket: "neftlix-clone-ac913.appspot.com",

  messagingSenderId: "887230866897",

  appId: "1:887230866897:web:793cdd3d59713be2182cf0"

};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth
}