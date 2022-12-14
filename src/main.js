import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// MDB
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";
import { auth } from "./firebase/config";

let runApp;
auth.onAuthStateChanged(() => {
    if (!runApp) runApp = createApp(App).use(router).mount("#app");
});
