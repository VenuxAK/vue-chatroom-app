<template>
    <form>
        <!-- Email input -->
        <div class="mb-4">
            <label class="form-label" for="loginName">Email or username</label>
            <input type="email" id="loginName" class="form-control" />
        </div>

        <!-- Password input -->
        <div class="mb-4 pw-toggler">
            <label class="form-label" for="loginPassword">Password</label>
            <input
                type="password"
                id="loginPassword"
                class="form-control"
                ref="PwToText"
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
        <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign in
        </button>
    </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { usePasswordHideShow } from "@/composables/usePasswordHideShow";
export default {
    setup() {
        let { PwToText, hideShowIcon, hideShow } = usePasswordHideShow();

        return {
            hideShow,
            PwToText,
            hideShowIcon,
        };
    },
};
</script>

<style></style>
