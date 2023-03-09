import firebase from "firebase";

//Configuring the details for firebase connection

var firebaseConfig = {
  apiKey: "AIzaSyBp8pFyz0OptMf1I1b43ppOqU-hgFc64XI",
  authDomain: "myfirebaseproject-46ea2.firebaseapp.com",
  projectId: "myfirebaseproject-46ea2",
  storageBucket: "myfirebaseproject-46ea2.appspot.com",
  messagingSenderId: "52876465545",
  appId: "1:52876465545:web:bf609d659dc3d5c91c3d58" , 
   
};

// Initialize Firebase
let instance;

//Establishing  the firebase connection 
//to the owned Firebase API 
//Using the credentials


export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
