import React from "react";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Menu from './pages/Menu';
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
    exact: false,
    main: () => <Menu />
  },
  // {
  //   path: "/Order",
  //   exact: true,
  //   main: () => <Order />
  // },
  {
    path: "/SignUp",
    exact: false,
    main: () => <SignUp />
  },
  {
    path: "/Login",
    exact: false,
    main: () => <Login />
  },
  {
    path: "/Bills",
    exact: false,
    main: () => <Bills />
  },
  {
    path: "/Manager",
    exact: false,
    main: () => <Meterial />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
]
export default routes;
