import firebase from 'firebase'
import 'firebase/auth'
const firebaseConfig = {
//     apiKey: add your key,
//     authDomain: your own keys,
//     projectId:add your key here ,
//     storageBucket: add your key here,
//     messagingSenderId: add your key here,
//     appId:add your key here ,
  };

firebase.initializeApp(firebaseConfig);


export default firebase.auth();
