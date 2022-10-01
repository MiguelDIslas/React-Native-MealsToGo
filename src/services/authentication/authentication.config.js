import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { API_KEY, API_ID } from "@env";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "meals-to-go-5b167.firebaseapp.com",
    projectId: "meals-to-go-5b167",
    storageBucket: "meals-to-go-5b167.appspot.com",
    messagingSenderId: "731084381316",
    appId: API_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);

export { auth };