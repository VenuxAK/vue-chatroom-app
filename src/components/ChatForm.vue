<template>
    <div class="container mt-4 mb-3">
        <div>
            <form>
                <div class="">
                    <div
                        class="d-flex justify-content-between align-items-center my-2"
                    >
                        <label>Message</label>
                        <button
                            class="btn btn-primary"
                            @click.prevent="sendMsg"
                        >
                            Send
                        </button>
                    </div>
                    <input type="text" class="form-control" v-model="message" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { db, colRef } from "@/firebase/config";
import { addDoc, serverTimestamp } from "@firebase/firestore";
import getUser from "@/composables/auth/getUser";
export default {
    setup() {
        let message = ref("");
        let error = ref("");
        let { user } = getUser();
        let sendMsg = async () => {
            let chat = {
                username: user.value.displayName,
                message: message.value,
                send_at: serverTimestamp(),
            };
            await addDoc(colRef, chat);
            message.value = "";
        };

        return { message, sendMsg };
    },
};
</script>

<style></style>
