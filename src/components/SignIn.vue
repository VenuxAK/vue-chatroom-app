<template>
    <form @submit.prevent="signin">
        <div class="text-center">
            <p class="text-danger fw-bold">{{ error }}</p>
            <p class="text-danger fw-bold">{{ userError }}</p>
        </div>
        <!-- Email input -->
        <div class="mb-4">
            <label class="form-label" for="loginName">Email or username</label>
            <input
                type="email"
                id="loginName"
                class="form-control"
                v-model="email"
            />
        </div>

        <!-- Password input -->
        <div class="mb-4 pw-toggler">
            <label class="form-label" for="loginPassword">Password</label>
            <input
                type="password"
                id="loginPassword"
                class="form-control"
                ref="PwToText"
                v-model="password"
            />
            <i
                class="fa-solid fa-eye-slash"
                ref="hideShowIcon"
                @click="hideShow"
            ></i>
        </div>

        <!-- 2 column grid layout -->
        <div class="row mb-4">
            <div class="col-md-6 d-flex justify-content-center">
                <!-- Checkbox -->
                <div class="form-check mb-3 mb-md-0">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="loginCheck"
                        checked
                    />
                    <label class="form-check-label" for="loginCheck">
                        Remember me
                    </label>
                </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center">
                <!-- Simple link -->
                <a href="#!">Forgot password?</a>
            </div>
        </div>

        <!-- Submit button -->
        <button class="btn btn-primary btn-block mb-4" :disabled="status">
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
import { ref } from "@vue/reactivity";
import useSigIn from "@/composables/auth/useSignIn";
import { usePasswordHideShow } from "@/composables/usePasswordHideShow";
import { useRouter } from "vue-router";
export default {
    setup() {
        let router = useRouter();
        let status = ref(false);
        let { signinUser, error } = useSigIn();
        let email = ref("");
        let password = ref("");
        let userError = ref("");
        let signin = async () => {
            if (!email.value || !password.value) {
                userError.value = "Please fill the required field";
            } else {
                status.value = true;
                let res = await signinUser(email.value, password.value);
                if (res) {
                    router.push({ name: "chatroom" });
                }
                status.value = false;
            }
        };

        let { PwToText, hideShowIcon, hideShow } = usePasswordHideShow();
        return {
            email,
            password,
            signin,
            userError,
            error,
            status,
            hideShow,
            PwToText,
            hideShowIcon,
        };
    },
};
</script>

<style></style>
