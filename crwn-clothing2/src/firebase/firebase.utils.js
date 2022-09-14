import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCwi4D2ptdLZRgM0rXSFpM7D2QVDuct-8Q",
  authDomain: "crwn-db-f0817.firebaseapp.com",
  projectId: "crwn-db-f0817",
  storageBucket: "crwn-db-f0817.appspot.com",
  messagingSenderId: "1082386625653",
  appId: "1:1082386625653:web:bf83ca81b2878a6d34343c",
  measurementId: "G-FZ718RSYJ9",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
