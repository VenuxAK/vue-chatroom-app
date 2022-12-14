import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref("");
let signupUser = async (username, email, password) => {
    try {
        let res = await auth.createUserWithEmailAndPassword(email, password);
        if (!res) {
            throw new Error("Error occured");
        }
        res.user.updateProfile({ displayName: username });
        return res;
    } catch (err) {
        error.value = err.message;
    }
};

let useSignup = () => {
    return { signupUser, error };
};

export default useSignup;
