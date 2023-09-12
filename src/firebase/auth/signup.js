import FirebaseApp  from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth=getAuth(FirebaseApp);

const sighup=async (emial,password)=>{
    try {
        const result=await createUserWithEmailAndPassword(auth,emial,password)
        return result;
    } catch (error) {
        console.log(error.message);
        return error;
    }
}