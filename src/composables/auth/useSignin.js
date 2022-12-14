import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref("");
let signinUser = async (email, password) => {
    try {
        let res = await auth.signInWithEmailAndPassword(email, password);
        if (!res) {
            throw new Error("Error Occured");
        }
        return res;
    } catch (err) {
        error.value = err.message;
    }
};

let useSignin = () => {
    return { signinUser, error };
};

export default useSignin;
