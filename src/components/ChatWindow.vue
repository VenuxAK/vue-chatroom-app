<template>
    <div>
        <div class="container border border-light shadow p-3">
            <div>
                <div class="messages-container" ref="chatBox">
                    <div
                        v-for="message in formattedMessages"
                        :key="message.username"
                    >
                        <div class="message-controller">
                            <p class="text-muted mb-2">
                                {{ message.send_at }}
                            </p>
                            <p>
                                {{ message.username }}
                                <span class="message">{{
                                    message.message
                                }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from "@/firebase/config";
import { ref } from "@vue/reactivity";
import { computed, onUpdated } from "@vue/runtime-core";
import { formatDistanceToNow } from "date-fns";
export default {
    setup() {
        let chatBox = ref();
        onUpdated(() => {
            chatBox.value.scrollTop = chatBox.value.scrollHeight;
        });
        let messages = ref([]);
        let formattedMessages = computed(() => {
            return messages.value.map((msg) => {
                let formattedDate = formatDistanceToNow(msg.send_at.toDate());
                return { ...msg, send_at: formattedDate };
            });
        });
        db.collection("messages")
            .orderBy("send_at")
            .onSnapshot((snap) => {
                let results = [];
                snap.docs.forEach((doc) => {
                    if (doc.data().send_at) {
                        let documents = { ...doc.data(), id: doc.id };
                        results.push(documents);
                    }
                });
                messages.value = results;
            });
        return { formattedMessages, chatBox };
    },
};
</script>

<style>
.messages-container {
    width: 100%;
    height: 55vh;
    overflow: hidden scroll;
}
.message-controller {
    margin-bottom: 1.5rem;
}
.message-controller p {
    margin: 0;
}
.message-controller .message {
    border: 1px solid royalblue;
    border-radius: 1.2785rem;
    background-color: royalblue;
    color: #fff;
    font-weight: bold;
    padding: 0.5rem;
    margin-left: 1rem;
}
</style>
