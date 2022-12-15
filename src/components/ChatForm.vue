<template>
    <div>
        <div class="container my-3">
            <form>
                <div>
                    <div
                        class="d-flex justify-content-between align-items-center my-2"
                    >
                        <label for="msg">Message</label>
                        <button class="btn btn-primary" @click="sendMsg">
                            Send
                        </button>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        id="msg"
                        v-model="message"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { db, timestamp } from "@/firebase/config";
import getUser from "@/composables/auth/getUser";
export default {
    setup() {
        let message = ref("");
        let error = ref("");
        let { user } = getUser();
        let sendMsg = async (e) => {
            e.preventDefault();
            if (message.value) {
                let chat = {
                    username: user.value.displayName,
                    message: message.value,
                    send_at: timestamp,
                };
                try {
                    await db.collection("messages").add(chat);
                    message.value = "";
                } catch (err) {
                    error.value = err.message;
                }
            }
        };

        return { message, sendMsg };
    },
};
</script>

<style></style>
