import firebase from 'firebase'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAjzrPW7lT1tw9MdlD4R13sqZson8taS-I",
    authDomain: "clone-2-9997b.firebaseapp.com",
    projectId: "clone-2-9997b",
    storageBucket: "clone-2-9997b.appspot.com",
    messagingSenderId: "106340092828",
    appId: "1:106340092828:web:ecd7616575dbca2c165659"
  };

firebase.initializeApp(firebaseConfig);


export default firebase.auth();
