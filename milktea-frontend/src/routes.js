import React from "react";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MenuMilkTea from './pages/MenuMilkTea';
import Order from './pages/OrderMilkTea';
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/MilkTea",
    exact: true,
    main: () => <MenuMilkTea />
  },
  {
    path: "/Order",
    exact: true,
    main: () => <Order />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
]
export default routes;
