// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ6r3tNJjcptLnuMtjCctg9wpJ86Vr9fY",
  authDomain: "crwn-clothing-db-4dc88.firebaseapp.com",
  projectId: "crwn-clothing-db-4dc88",
  storageBucket: "crwn-clothing-db-4dc88.appspot.com",
  messagingSenderId: "380819987096",
  appId: "1:380819987096:web:f562296a891b6abaa48eed"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();


export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
  ) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    }catch(error) {
      console.log('error creating the user', error.message);

    }

    }

    return userDocRef;

  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  };


//if user data does not exist
//credate/set the document with the data from userAuth in my collection

// check if user data exists


//if does return userDocRef