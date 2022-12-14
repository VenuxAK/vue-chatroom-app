<template>
    <div>
        <div class="container">
            <div class="border border-secondary rounded mt-4 p-3 mx-1">
                <div class="chatwindow" ref="chatBox">
                    <div v-for="message in formattedMessages" :key="message">
                        <div v-if="message">
                            <div class="chat">
                                <p class="time">{{ message.send_at }}</p>
                                <span class="user-name">{{
                                    message.username
                                }}</span>
                                <span class="message">{{
                                    message.message
                                }}</span>
                            </div>
                        </div>
                        <div v-else>
                            <h3 class="text-center my-5">No messages yet</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { colRef } from "@/firebase/config";
import { onSnapshot, orderBy, query } from "@firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import { ref } from "@vue/reactivity";
import { computed, onUpdated } from "@vue/runtime-core";
export default {
    setup() {
        let messages = ref([]);
        let chatBox = ref(null);
        onUpdated(() => {
            chatBox.value.scrollTop = chatBox.value.scrollHeight;
        });
        let col = query(colRef, orderBy("send_at", "asc"));

        let formattedMessages = computed(() => {
            return messages.value.map((message) => {
                let formattedDate = formatDistanceToNow(
                    message.send_at.toDate(),
                );
                return { ...message, send_at: formattedDate };
            });
        });

        onSnapshot(col, (snapshot) => {
            let results = [];
            snapshot.docs.forEach((doc) => {
                let documents = { ...doc.data(), id: doc.id };
                doc.data().send_at && results.push(documents);
            });
            messages.value = results;
        });

        return { formattedMessages, chatBox };
    },
};
</script>

<style>
.chatwindow {
    width: 100%;
    height: 57vh;
    overflow: hidden scroll;
}
.chat {
    margin-bottom: 1.685rem;
}
.chat .time {
    color: #777;
    margin-bottom: 0.5rem;
}
.chat .user-name {
    font-weight: 600;
    padding-right: 0.785rem;
}
.chat .message {
    color: #fff;
    border: 1px solid royalblue;
    border-radius: 1.2rem;
    background-color: royalblue;
    padding: 0.6rem;
}
</style>
