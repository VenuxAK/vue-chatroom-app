import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChatroomView from "../views/ChatroomView.vue";
import { auth } from "@/firebase/config";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        beforeEnter: (to, from, next) => {
            let user = auth.currentUser;
            if (!user) {
                next();
            } else {
                next({ name: "chatroom" });
            }
        },
    },
    {
        path: "/chatroom",
        name: "chatroom",
        component: ChatroomView,
        beforeEnter: (to, from, next) => {
            let user = auth.currentUser;
            if (user) {
                next();
            } else {
                next("/");
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// router.beforeEach((to, from, next) => {
//     if (to.name === "chatroom" && !user.value) next();
//     else next({ name: "home" });
//     if (to.name === "home" && !user.value) next();
//     else next({name: "chatroom"})
// });

export default router;
