import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD3DrvhP27xzpfCQ-wt8hTxcCPOUgzrygM",
    authDomain: "facegram-9d657.firebaseapp.com",
    projectId: "facegram-9d657",
    storageBucket: "facegram-9d657.appspot.com",
    messagingSenderId: "509842666319",
    appId: "1:509842666319:web:b48ae81670e61f8441cb3a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };