<template>
    <div v-if="user">
        <div class="container">
            <div class="border border-light py-2 px-3 my-3 shadow rounded">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="m-0">
                            Welcome
                            <span class="text-muted fw-bold">{{
                                user.displayName
                            }}</span>
                        </p>
                        <p class="m-0">
                            Logged in as
                            <span class="text-muted fw-bold">{{
                                user.email
                            }}</span>
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
    </div>
</template>

<script>
import getUser from "@/composables/auth/getUser";
import useSignOut from "@/composables/auth/useSignOut";

export default {
    setup() {
        let { user } = getUser();
        let logout = useSignOut();

        return { user, logout };
    },
};
</script>

<style></style>
