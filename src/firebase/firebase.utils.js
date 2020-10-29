import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyBt7tFNtN5HP6rxgf1SbNWFilwgdrULth8',
  authDomain: 'crwn-db-5d14e.firebaseapp.com',
  databaseURL: 'https://crwn-db-5d14e.firebaseio.com',
  projectId: 'crwn-db-5d14e',
  storageBucket: 'crwn-db-5d14e.appspot.com',
  messagingSenderId: '1038797098726',
  appId: '1:1038797098726:web:2994c8ec86bd30ebd43527',
  measurementId: 'G-Q22D33T8CM',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //return userRef;
  //console.log(firestore.doc(`users/${userAuth.uid}`));
  //console.log("userRef",userRef);
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
      console.log('error creating user ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
