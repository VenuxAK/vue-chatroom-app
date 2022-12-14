<template>
    <form @submit.prevent="signup">
        <!-- Error -->
        <div v-if="error">
            <!-- <p class="text-center text-danger">{{ userError }}</p> -->
            <p class="text-center text-danger">{{ error }}</p>
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
        <button
            class="btn btn-primary btn-block mb-3"
            :disabled="
                !username || !email || !password1 || !password2 || status
            "
        >
            <span v-if="!status">
                <span>Sign up</span>
            </span>
            <span v-if="status">
                <span class="spinner-border spinner-border-sm" role="status">
                </span>
            </span>
        </button>
    </form>
</template>

<script>
import {
    usePasswordHideShow,
    usePasswordHideShowRep,
} from "@/composables/usePasswordHideShow";
import { ref } from "@vue/reactivity";
import useSignup from "@/composables/auth/useSignup";
import { useRouter } from "vue-router";
export default {
    setup() {
        let { signupUser, error } = useSignup();
        let router = useRouter();
        let username = ref("");
        let email = ref("");
        let password = ref("");
        let password1 = ref("");
        let password2 = ref("");
        let status = ref(false);
        let signup = async () => {
            if (password1.value !== password2.value) {
                error.value = "Password does not match";
            } else {
                status.value = true;
                password.value = password1.value;
                let res = await signupUser(
                    username.value,
                    email.value,
                    password.value,
                );
                error.value = "";
                status.value = false;
                if (res) {
                    router.push("/chatroom");
                }
            }
        };

        let { PwToText, hideShowIcon, hideShow } = usePasswordHideShow();
        let { PwToTextRep, hideShowIconRep, hideShowRep } =
            usePasswordHideShowRep();
        return {
            username,
            email,
            password1,
            password2,
            error,
            status,
            signup,
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
