<template>
    <div>
        <Navbar></Navbar>
        <ChatWindow></ChatWindow>
        <ChatForm></ChatForm>
    </div>
</template>

<script>
import ChatForm from "../components/ChatForm";
import ChatWindow from "../components/ChatWindow";
import Navbar from "../components/Navbar";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import getUser from "@/composables/auth/getUser";
export default {
    components: {
        ChatForm,
        ChatWindow,
        Navbar,
    },
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
