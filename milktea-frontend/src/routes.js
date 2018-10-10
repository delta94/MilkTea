import React from "react";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MenuMilkTea from './pages/MenuMilkTea';
import Order from './pages/OrderMilkTea';
import SignUp from './components/User/SignUp';
import Login from './components/User/Login';
import Meterial from './components/Bills/Meterial';
import Bills from './components/Bills/Bills'

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
    path: "/SignUp",
    exact: true,
    main: () => <SignUp />
  },
  {
    path: "/Login",
    exact: true,
    main: () => <Login />
  },
  {
    path: "/Bills",
    exact: true,
    main: () => <Bills />
  },
  {
    path: "/Manager",
    exact: true,
    main: () => <Meterial />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
]
export default routes;
