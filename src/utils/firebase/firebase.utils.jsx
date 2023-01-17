import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5Hspo7VFTs3AMkmdoH7OrTSNW4_d8LfU",
    authDomain: "crwn-clothing-db-d42c3.firebaseapp.com",
    projectId: "crwn-clothing-db-d42c3",
    storageBucket: "crwn-clothing-db-d42c3.appspot.com",
    messagingSenderId: "774299650348",
    appId: "1:774299650348:web:c6ce1a4a9c56e3fb090489"
  };

  initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });

        } catch (err){

            console.log(err)

        }
    }

    return userDocRef;

  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }