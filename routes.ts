import HomePage from "./src/pages/Homepage";
import LoginPage from "./src/pages/Login";

export const RoutesWrapped = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/login",
    element: LoginPage,
  },
];
