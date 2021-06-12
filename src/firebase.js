import firebase from 'firebase'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "",
    authDomain: "clone-2-9997b.firebaseapp.com",
    projectId: "clone-2-9997b",
    storageBucket: "clone-2-9997b.appspot.com",
    messagingSenderId: "",
    appId: ""
  };

firebase.initializeApp(firebaseConfig);


export default firebase.auth();
