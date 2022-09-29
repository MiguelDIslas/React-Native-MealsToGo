import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDHY6Gi_bdFNUcyTfKbYBA-l8uTf59C3XQ",
    authDomain: "meals-to-go-5b167.firebaseapp.com",
    projectId: "meals-to-go-5b167",
    storageBucket: "meals-to-go-5b167.appspot.com",
    messagingSenderId: "731084381316",
    appId: "1:731084381316:web:e8f103050cc51c7d1936d1"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);

export { auth };