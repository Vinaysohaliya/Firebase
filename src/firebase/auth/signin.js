import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth=getAuth();

const signin=async(email,password)=>{
    try {
        const result=signInWithEmailAndPassword(auth,email,password);
        return result;
    } catch (error) {
        console.log(error.message);
        return error
    }
}