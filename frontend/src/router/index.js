import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import Dashboard from "../views/Dashboard";
import Tables from "../views/Tables";
import Billing from "../views/Billing";
import RTL from "../views/Rtl";
import Notifications from "../views/Notifications";
import Profile from "../views/Profile";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import ErrorPage from "../views/ErrorPage";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/sign-in",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/404",
    name: "ErrorPage",
    component: ErrorPage,
    meta: {
      requiresAuth: true
    }
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters["sessionManager/isLoggedIn"]) {
      next({ name: 'SignIn' })
    } else {
      next() // go to wherever I'm going
    }
  } else if (to.fullPath === '/sign-in' && store.getters["sessionManager/isLoggedIn"]) {
    next({ name: 'Dashboard' })
  } else if (to.fullPath !== '/sign-in' && !to.matched.some(record => record.meta.requiresAuth) && store.getters["sessionManager/isLoggedIn"]) {
      next({ name: 'ErrorPage' })
  } else {
    next() // does not require auth, make sure to always call next()!
  }
});

export default router;
