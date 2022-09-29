import { auth } from "./authentication.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = async(email, password) => {
    try {
       const userAuth = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        return null;
    }
};