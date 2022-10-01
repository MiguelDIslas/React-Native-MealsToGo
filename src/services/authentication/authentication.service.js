import { auth } from "./authentication.config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const loginRequest = async (email, password) => {
    try {
        const userAuth = await signInWithEmailAndPassword(auth, email, password);
        return userAuth;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const createUserRequest = async (email, password) => {
    try {
        const userAuth = await createUserWithEmailAndPassword(auth, email, password);
        return userAuth;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const logout = async () => {
    const result = await signOut(auth);
};