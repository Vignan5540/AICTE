import React from "react";

import Login from "./page/form/Login";
import Dashboard from "./page/Dashboard";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { isLogged } = useSelector((state) => {
    // console.log(state.loginReducer);
    return state.loginReducer;
  });
  return (
    <div className="text-3xl text-black ">
      {isLogged ? <Dashboard /> : <Login />}
    </div>
  );
};

export default Home;
