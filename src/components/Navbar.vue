<template>
    <div v-if="user">
        <div class="container border border-light shadow px-3 py-4 my-3">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p class="m-0">
                        Welcome
                        <span class="fw-bold">{{ user.displayName }}</span>
                    </p>
                    <p class="m-0">
                        Logged in as
                        <span class="fw-bold">{{ user.email }}</span>
                    </p>
                </div>
                <div>
                    <button class="btn btn-danger" @click="logout">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getUser from "@/composables/auth/getUser";
import { ref } from "@vue/reactivity";
import { auth } from "@/firebase/config";
export default {
    setup() {
        let { user } = getUser();
        let logout = async () => {
            try {
                await auth.signOut();
            } catch (err) {
                console.log(err.message);
            }
        };
        return { user, logout };
    },
};
</script>

<style></style>
