import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { requestMember } from "./redux/action";
import UserService from "./utilities/UserService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "./components/Sidebar";
import AuthIndex from "./page/AuthIndex"; // Assuming you have these components
import Dashboard from "./page/Dashboard";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../src/assets/scss/main.scss";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Get user details from Redux
  const { isLogged, role } = useSelector((state) => state.loginReducer);
  const { members } = useSelector((state) => state.requestMemberReducer);

  const [isAddingMember, setIsAddingMember] = useState(false);

  useEffect(() => {
    dispatch(requestMember());
  }, [dispatch]);

  useEffect(() => {
    if (members && members.length === 0) {
      setIsAddingMember(true);
    }
  }, [members]);

  const memberAdd = async (newMember) => {
    try {
      const response = await UserService.addMember({
        ...newMember,
        role: "admin",
      });
      if (response?.success) {
        toast.success("The user is registered as admin");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Failed to register user.");
    }
  };

  const activeKey = () => {
    return location.pathname;
  };

  if (activeKey() === "/sign-in" || activeKey() === "/sign-up" || activeKey() === "/password-reset" || activeKey() === "/2-step-authentication" || activeKey() === "/page-404") {
    return (
      <div id="mytask-layout" className="theme-indigo">
        <Routes>
          <Route path="/sign-in" element={<AuthIndex />} />
          <Route path="/sign-up" element={<AuthIndex />} />
          <Route path="/password-reset" element={<AuthIndex />} />
          <Route path="/2-step-authentication" element={<AuthIndex />} />
          <Route path="/page-404" element={<AuthIndex />} />
        </Routes>
      </div>
    );
  }

  return (
    <div id="mytask-layout" className="theme-indigo">
      {/* <Sidebar activeKey={activeKey()} /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Home;
