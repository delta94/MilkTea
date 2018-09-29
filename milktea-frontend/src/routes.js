import React from "react";
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
]
export default routes;
