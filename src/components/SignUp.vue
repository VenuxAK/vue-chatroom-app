<template>
    <form>
        <!-- Username input -->
        <div class="mb-4">
            <label class="form-label" for="registerUsername">Username</label>
            <input type="text" id="registerUsername" class="form-control" />
        </div>

        <!-- Email input -->
        <div class="mb-4">
            <label class="form-label" for="registerEmail">Email</label>
            <input type="email" id="registerEmail" class="form-control" />
        </div>

        <!-- Password input -->
        <div class="mb-4 pw-toggler">
            <label class="form-label" for="registerPassword">Password</label>
            <input
                type="password"
                id="registerPassword"
                class="form-control"
                ref="PwToText"
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
        <button type="submit" class="btn btn-primary btn-block mb-3">
            Sign up
        </button>
    </form>
</template>

<script>
import {
    usePasswordHideShow,
    usePasswordHideShowRep,
} from "@/composables/usePasswordHideShow";
import { ref } from "@vue/reactivity";
export default {
    setup() {
        let { PwToText, hideShowIcon, hideShow } = usePasswordHideShow();
        let { PwToTextRep, hideShowIconRep, hideShowRep } =
            usePasswordHideShowRep();
        return {
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
