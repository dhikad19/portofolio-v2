import { createRouter, createWebHistory } from "vue-router";

// Import your components (pages) that you want to route to
import Home from "../views/Home.vue";
import About from "../views/About.vue";

// Define your routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
