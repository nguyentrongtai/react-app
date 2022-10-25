import About from "@pages/About";
import Home from "@pages/Home";
import Topics from "@pages/Topics";
import Login from "@pages/Login";
export const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/topics",
    component: Topics,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/login",
    component: Login,
  },
];
