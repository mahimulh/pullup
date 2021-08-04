import React from "react";

// import {
//     Route
// } from "react-router-dom";

import { NativeRouter, Route, Link } from "react-router-native";

const Test = React.lazy(() => import("features/test.js"));
const Hello = React.lazy(() => import("features/hello.js"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Home />
    ),
    routeComponent: Route,
  },
  {
    path: "/test",
    render: () => (
      <Test />
    ),
    routeComponent: GuestRoute,
  },
  {
    path: "/hello",
    render: () => (
      <Hello />
    ),
    routeComponent: Route,
  },

]

export default routes;