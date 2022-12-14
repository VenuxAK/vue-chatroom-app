import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";

let error = ref("");
let signupUser = async (username, email, password) => {
    try {
        let res = await createUserWithEmailAndPassword(auth, email, password);
        if (!res) {
            throw new Error("Can't create user");
        }
        updateProfile(res.user, { displayName: username });
        return res;
    } catch (err) {
        error.value = err.message;
    }
};

let useSignUp = () => {
    return { signupUser, error };
};

export default useSignUp;
