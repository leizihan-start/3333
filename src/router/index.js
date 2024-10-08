import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import VisitPage from "../views/Home/VisitPage.vue";
import AllPage from "../views/Home/AllPage.vue";

// 定义路由
const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
  {
    path:'/visit',
    component:VisitPage,
  },{
    path:'/all',
    component:AllPage,
  }
];

// 创建路由实例
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
