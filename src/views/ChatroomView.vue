<template>
    <div>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { auth } from "@/firebase/config";
import getUser from "@/composables/auth/getUser";
export default {
    components: { Navbar },
    setup() {
        let { user } = getUser();
        let router = useRouter();
        watch(user, () => {
            if (!user.value) {
                router.push("/");
            }
        });
    },
};
</script>

<style></style>
