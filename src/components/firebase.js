import firebase from "firebase/app";
import "firebase/firestore";

// const APIKEY = process.env.REACT_APP_FBKEY;
// const ADOMAIN = process.env.REACT_APP_ADOMAIN;
// const PROJECTID = process.env.REACT_APP_PROJECTID
// const SBUCKET = process.env.REACT_APP_SBUCKET
// const MSI = process.env.REACT_APP_MSI
// const APPID = process.env.REACT_APP_APPID
// const MID = process.env.REACT_APP_MID

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
