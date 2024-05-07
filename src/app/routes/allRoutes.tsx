import React from "react";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/Home/page.home"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
];

export default routes;
