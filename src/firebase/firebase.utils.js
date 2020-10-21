import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBt7tFNtN5HP6rxgf1SbNWFilwgdrULth8',
  authDomain: 'crwn-db-5d14e.firebaseapp.com',
  databaseURL: 'https://crwn-db-5d14e.firebaseio.com',
  projectId: 'crwn-db-5d14e',
  storageBucket: 'crwn-db-5d14e.appspot.com',
  messagingSenderId: '1038797098726',
  appId: '1:1038797098726:web:5029e5c2db27f949d43527',
  measurementId: 'G-ZBRBSZL7K5',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc('users/sdjfhu23');

    const snapShot = await userRef.get();

    console.log(firestore.doc(snapShot));
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;