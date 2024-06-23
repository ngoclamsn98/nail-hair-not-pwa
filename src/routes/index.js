import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("../pages/Login"),
      meta: { requiresAuth: false },
    },
  ],
});

export default router;
