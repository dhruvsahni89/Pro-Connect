import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyALx_kT2dZMgmFgfPR7FT8sXYIauawp8CU",
    authDomain: "linkedin-clone-36ef2.firebaseapp.com",
    projectId: "linkedin-clone-36ef2",
    storageBucket: "linkedin-clone-36ef2.appspot.com",
    messagingSenderId: "994211680608",
    appId: "1:994211680608:web:9d0e5b052bcd9d70d78e05"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth,provider,storage};
  export default db;