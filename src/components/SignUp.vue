<template>
    <form @submit.prevent="signup">
        <div class="text-center">
            <p class="text-danger fw-bold">{{ userError }}</p>
            <p class="text-danger fw-bold">{{ error }}</p>
        </div>
        <!-- Username input -->
        <div class="mb-4">
            <label class="form-label" for="registerUsername">Username</label>
            <input
                type="text"
                id="registerUsername"
                class="form-control"
                v-model="username"
            />
        </div>

        <!-- Email input -->
        <div class="mb-4">
            <label class="form-label" for="registerEmail">Email</label>
            <input
                type="email"
                id="registerEmail"
                class="form-control"
                v-model="email"
            />
        </div>

        <!-- Password input -->
        <div class="mb-4 pw-toggler">
            <label class="form-label" for="registerPassword">Password</label>
            <input
                type="password"
                id="registerPassword"
                class="form-control"
                ref="PwToText"
                v-model="password1"
            />
            <i
                class="fa-solid fa-eye-slash"
                ref="hideShowIcon"
                @click="hideShow"
            ></i>
        </div>

        <!-- Repeat Password input -->
        <div class="mb-4 pw-toggler">
            <label class="form-label" for="registerRepeatPassword"
                >Repeat password</label
            >
            <input
                type="password"
                id="registerRepeatPassword"
                class="form-control"
                ref="PwToTextRep"
                v-model="password2"
            />
            <i
                class="fa-solid fa-eye-slash"
                @click="hideShowRep"
                ref="hideShowIconRep"
            ></i>
        </div>

        <!-- Checkbox -->
        <div class="form-check d-flex justify-content-center mb-4">
            <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                checked
                aria-describedby="registerCheckHelpText"
            />
            <label class="form-check-label" for="registerCheck">
                I have read and agree to the terms
            </label>
        </div>

        <!-- Submit button -->
        <button class="btn btn-primary btn-block mb-3" :disabled="status">
            <span v-if="!status">
                <span>Sign in</span>
            </span>
            <span v-if="status">
                <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                ></span>
            </span>
        </button>
    </form>
</template>

<script>
import {
    usePasswordHideShow,
    usePasswordHideShowRep,
} from "@/composables/usePasswordHideShow";
import useSignUp from "@/composables/auth/useSignUp";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
    setup() {
        let router = useRouter();
        let status = ref(false);
        let username = ref("");
        let email = ref("");
        let password1 = ref("");
        let password2 = ref("");
        let password = ref("");
        let userError = ref("");
        // Authenticator
        let { signupUser, error } = useSignUp();
        let signup = async () => {
            if (
                !username.value &&
                !email.value &&
                !password1.value &&
                !password2.value
            ) {
                userError.value = "Please fill the required field";
            } else if (!username.value) {
                userError.value = "User name can't be empty";
            } else if (!email.value) {
                userError.value = "Email address can't be empty";
            } else if (!password1.value && !password2.value) {
                userError.value = "Password can't be empty";
            } else if (password1.value && !password2.value) {
                userError.value = "Repeat password can't be empty";
            } else if (!password1.value && password2.value) {
                userError.value = "Password can't be empty";
            } else if (
                password1.value.length < 6 &&
                password2.value.length < 6
            ) {
                userError.value =
                    "Weak password! Password should be at least 6 characters";
            } else if (password1.value !== password2.value) {
                userError.value = "Password does not match";
            } else {
                password.value = password1.value;
                status.value = true;
                let res = await signupUser(
                    username.value,
                    email.value,
                    password.value,
                );
                if (res) {
                    // console.log("Created success");
                    // console.log(res.user);
                    error.value = "";
                    router.push({ name: "chatroom" });
                }
                status.value = false;
            }
        };
        let { PwToText, hideShowIcon, hideShow } = usePasswordHideShow();
        let { PwToTextRep, hideShowIconRep, hideShowRep } =
            usePasswordHideShowRep();
        return {
            status,
            username,
            email,
            password1,
            password2,
            signup,
            userError,
            error,
            PwToText,
            hideShowIcon,
            hideShowIconRep,
            PwToTextRep,
            hideShow,
            hideShowRep,
        };
    },
};
</script>

<style></style>
