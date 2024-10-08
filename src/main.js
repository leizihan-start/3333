import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { Icon } from "@iconify/vue";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(Icon)
app.mount("#app");
