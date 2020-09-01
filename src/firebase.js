import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDfY7Uw_FyOZTBrkcmuxLcKulNle9xu3pc",
    authDomain: "facebook-clone123.firebaseapp.com",
    databaseURL: "https://facebook-clone123.firebaseio.com",
    projectId: "facebook-clone123",
    storageBucket: "facebook-clone123.appspot.com",
    messagingSenderId: "919048438783",
    appId: "1:919048438783:web:14da19e5d3f99e3b23ddca",
    measurementId: "G-4NTV9V4YH1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;