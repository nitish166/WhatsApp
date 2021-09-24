// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJD48MJYinyk0J_0wGnSo8sbC7UOcIaiQ",
  authDomain: "whats-app-clone-13a44.firebaseapp.com",
  projectId: "whats-app-clone-13a44",
  storageBucket: "whats-app-clone-13a44.appspot.com",
  messagingSenderId: "273122475612",
  appId: "1:273122475612:web:7430cb70edfe0c4d51f099",
  measurementId: "G-WE4BBMY67W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
