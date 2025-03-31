import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: Inicio,
    },
    {
      path: "/experiencia",
      name: "experiencia",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Experiencia.vue"),
    },

    {
      path: "/sobre-mi",
      name: "sobre-mi",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
    {
      path: "/contacto",
      name: "contacto",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactMe.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" }; // Scroll suave al inicio de la página
  },
});

export default router;
