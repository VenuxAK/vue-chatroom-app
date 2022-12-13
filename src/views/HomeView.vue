<template>
    <div class="container">
        <div class="row justify-content-center my-4">
            <div
                class="col-12 col-sm-10 col-md-7 col-lg-5 border rounded shadow p-3"
            >
                <!-- Pills navs -->
                <ul
                    class="nav nav-pills nav-justified mb-3"
                    id="ex1"
                    role="tablist"
                >
                    <li class="nav-item" role="presentation">
                        <a
                            href="#"
                            class="nav-link"
                            :class="{ active: activeIn }"
                            @click="toggleSignin"
                            >Sign in</a
                        >
                    </li>
                    <li class="nav-item" role="presentation">
                        <a
                            href="#"
                            class="nav-link"
                            :class="{ active: activeUp }"
                            @click="toggleSignup"
                            >Sign up</a
                        >
                    </li>
                </ul>
                <!-- Pills navs -->

                <!-- Pills content -->
                <div class="tab-content">
                    <div
                        class="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                    >
                        <div class="text-center mb-3">
                            <p>{{ text }} with:</p>
                            <button
                                type="button"
                                class="btn btn-secondary btn-floating mx-1"
                            >
                                <i class="fab fa-facebook-f"></i>
                            </button>

                            <button
                                type="button"
                                class="btn btn-secondary btn-floating mx-1"
                            >
                                <i class="fab fa-google"></i>
                            </button>

                            <button
                                type="button"
                                class="btn btn-secondary btn-floating mx-1"
                            >
                                <i class="fab fa-twitter"></i>
                            </button>

                            <button
                                type="button"
                                class="btn btn-secondary btn-floating mx-1"
                            >
                                <i class="fab fa-github"></i>
                            </button>
                        </div>

                        <p class="text-center">or:</p>
                        <div v-if="toggleForm">
                            <SignIn></SignIn>
                        </div>
                        <div v-else>
                            <SignUp></SignUp>
                        </div>
                    </div>
                </div>
                <!-- Pills content -->
            </div>
        </div>
    </div>
</template>

<script>
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { ref } from "@vue/reactivity";
import useToggleForm from "@/composables/useToggleForm";
import getUser from "@/composables/auth/getUser";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default {
    components: {
        SignUp,
        SignIn,
    },
    setup() {
        let {
            toggleForm,
            toggleSignin,
            toggleSignup,
            activeIn,
            activeUp,
            text,
        } = useToggleForm();
        // let { user } = getUser();
        // let router = useRouter();
        // console.log(user.value);
        // watch(user, () => {
        //     if (user.value) {
        //         router.push("/chatroom");
        //     }
        // });
        return {
            toggleForm,
            toggleSignup,
            toggleSignin,
            activeIn,
            activeUp,
            text,
        };
    },
};
</script>
<style>
.pw-toggler {
    position: relative;
}
.pw-toggler i {
    position: absolute;
    top: 63%;
    right: 0.7rem;
    cursor: pointer;
    z-index: 100;
}
.pw-toggler input {
    padding-right: 2.1rem;
}
</style>
