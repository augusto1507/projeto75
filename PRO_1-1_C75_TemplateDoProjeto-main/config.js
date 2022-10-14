import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCPCwu7TCpbJGsuN8UA_mohyKDulIes0WI",
  authDomain: "ciclistaeletronico-6c3f7.firebaseapp.com",
  projectId: "ciclistaeletronico-6c3f7",
  storageBucket: "ciclistaeletronico-6c3f7.appspot.com",
  messagingSenderId: "305862030800",
  appId: "1:305862030800:web:71d05481ac2be70087b5d5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
