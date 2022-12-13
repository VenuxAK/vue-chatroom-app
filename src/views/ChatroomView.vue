<template>
    <div>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
import getUser from "@/composables/auth/getUser";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
    components: { Navbar },
    setup() {
        let router = useRouter();
        let { user } = getUser();
        // console.log(user);
        watch(user, () => {
            if (!user.value) {
                router.push("/");
            }
        });
    },
};
</script>

<style></style>
