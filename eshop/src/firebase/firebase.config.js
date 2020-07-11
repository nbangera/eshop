import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCW2v6g7s3PcsImSymB6371j18avAWn9ag",
  authDomain: "estore-d874d.firebaseapp.com",
  databaseURL: "https://estore-d874d.firebaseio.com",
  projectId: "estore-d874d",
  storageBucket: "estore-d874d.appspot.com",
  messagingSenderId: "421695110479",
  appId: "1:421695110479:web:cf465014aa3a9d70add93a",
  measurementId: "G-HH9MK9VBFC",
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (
  userAuth,
  additionalDetails
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);  
  const userSnapshot = await userRef.get();
  if (!userSnapshot.exists) {
    //console.log(userAuth);
    const { displayName, email } = userAuth;
    const date = new Date();
    try {
      await userRef.set({ displayName, date, ...additionalDetails });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
