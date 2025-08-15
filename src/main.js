import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "quasar/dist/quasar.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
