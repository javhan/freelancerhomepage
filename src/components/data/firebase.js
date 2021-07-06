import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC94PYY6IwRz5HDsemouRcZOqjQtmZW5Xc",
  authDomain: "scheduled-events-1d7b5.firebaseapp.com",
  projectId: "scheduled-events-1d7b5",
  storageBucket: "scheduled-events-1d7b5.appspot.com",
  messagingSenderId: "655473634807",
  appId: "1:655473634807:web:53f584258df318640392f2",
  measurementId: "G-YSD64GVKYC",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
