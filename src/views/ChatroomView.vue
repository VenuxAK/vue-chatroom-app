<template>
    <div>
        <Navbar></Navbar> 
        <ChatWindow></ChatWindow>
        <ChatForm></ChatForm>
    </div>
</template>

<script>
import ChatForm from '../components/ChatForm'
import ChatWindow from '../components/ChatWindow'
import Navbar from "../components/Navbar";
import getUser from "@/composables/auth/getUser";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
    components: {
    ChatForm,
    ChatWindow, Navbar },
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
