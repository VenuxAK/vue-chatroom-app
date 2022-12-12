import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

let error = ref("");
let signinUser = async (email, password) => {
    try {
        let res = await signInWithEmailAndPassword(auth, email, password);
        if (!res) {
            throw new Error("Can't sign in");
        }
        return res;
    } catch (err) {
        error.value = err.message;
    }
};

let useSignIn = () => {
    return { signinUser, error };
};

export default useSignIn;
