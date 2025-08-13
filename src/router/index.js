import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import DealerView from "../views/DealerView.vue";
import ManufacturerView from "../views/ManufacturerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
    {
      path: "/car/:id",
      name: "car",
      component: CarView,
      children: [
        {
          path: "dealer",
          name: "Dealer",
          component: DealerView,
        },
        {
          path: "manufacturer",
          name: "Manufacturer",
          component: ManufacturerView,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFoundView,
    },
  ],
});

export default router;
