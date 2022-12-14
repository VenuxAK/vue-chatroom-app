<template>
    <form @submit.prevent="signin">
        <!-- Error -->
        <div v-if="error">
            <p class="text-center text-danger">{{ error }}</p>
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
        <button
            class="btn btn-primary btn-block mb-4"
            :disabled="!email || !password || status"
        >
            <span v-if="!status">Sign in</span>
            <span v-if="status">
                <span class="spinner-border spinner-border-sm" role="status">
                </span>
            </span>
        </button>
    </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { usePasswordHideShow } from "@/composables/usePasswordHideShow";
import useSignin from "@/composables/auth/useSignin";
import { useRouter } from "vue-router";
export default {
    setup() {
        let { signinUser, error } = useSignin();
        let router = useRouter();
        let email = ref("");
        let password = ref("");
        let status = ref(false);
        let signin = async () => {
            status.value = true;
            let res = await signinUser(email.value, password.value);
            if (res) {
                router.push("/chatroom");
                error.value = "";
            }
            status.value = false;
        };
        let { PwToText, hideShowIcon, hideShow } = usePasswordHideShow();

        return {
            email,
            password,
            signin,
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
