import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

let user = ref(auth.currentUser);
onAuthStateChanged(auth, (_user) => {
    user.value = _user;
    console.log(user.value);
});

let getUser = () => {
    return { user };
};

export default getUser;
