import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

let logout = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.log(err.message);
    }
};

let useSignOut = () => {
    return logout;
};

export default useSignOut;
