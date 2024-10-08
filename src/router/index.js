import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

// 定义路由
const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
];

// 创建路由实例
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
