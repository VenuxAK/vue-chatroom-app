import { ref } from "vue";

let toggleForm = ref(true);
let activeIn = ref(true);
let activeUp = ref(false);
let text = ref("Sign in");
let toggleSignin = () => {
    toggleForm.value = true;
    activeIn.value = true;
    activeUp.value = false;
    text.value = "Sign in";
};
let toggleSignup = () => {
    toggleForm.value = false;
    activeUp.value = true;
    activeIn.value = false;
    text.value = "Sign up";
};

let useToggleForm = () => {
    return { toggleForm, toggleSignin, toggleSignup, activeIn, activeUp, text };
};

export default useToggleForm;
