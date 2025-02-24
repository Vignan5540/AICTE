import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import {
  FaBell,
  FaTasks,
  FaProjectDiagram,
  FaUsers,
  FaTrash,
  FaBars
} from "react-icons/fa";

import AlertDialogComponent from "@/components/AlertDialogComponent";
import NavforMoboile from "@/components/NavforMoboile";
// import NavBar from "@/components/NavBar";
import ProjectPage from "@/page/ProjectPage";
import CompletePage from "./CompletePage";
import TaskPage from "./TaskPage";
import MembersPage from "./MembersPage";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, requestDashbordAction } from "@/redux/action";
import UserService from "@/utilities/UserService";
import timeAgo from "@/utilities/timeAgo";
import Sidebar from "@/components/Sidebar";
import Projects from "../projects/project";
import Tasks from "../projects/Task";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/assets/scss/main.scss'
import LeaveRequest from "@/employee/LeaveRequest";
import Departments from "@/employee/Departments";
import ChatApp from "@/Apps/Chat";
import Calender from "@/Apps/Calender";
import ProjectDashboard from "@/components/ProjectDashboard";


const Dashboard = () => {
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const { role, id } = useSelector((state) => {
    return state.loginReducer;
  });
  const whatUser = role;

  const [notifications, setNotifications] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const countUnreadNotification = () => {
    const total = notifications.filter(
      (notification) => !notification.isRead
    ).length;
    setUnreadNotifications(total);
  };

  const getNotific = async () => {
    try {
      const response = await UserService.getNotification(id);
      if (response?.success) {
        setNotifications(response.data);
      } else {
        console.error("Failed to fetch notifications:", response?.message);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const handleDeleteNotification = async (notificationId) => {
    const form = { notificationId: notificationId, userId: id };
    try {
      const response = await UserService.deleteNotification(form);
      if (response?.success) {
        setNotifications(
          notifications.filter(
            (notification) => notification._id !== notificationId
          )
        );
        countUnreadNotification();
      } else {
        console.error("Failed to delete notification:", response?.message);
      }
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    const form = { notificationId: notificationId, userId: id };
    try {
      const response = await UserService.markNotificationAsRead(form);
      if (response?.success) {
        console.log("Notification marked as read:", notificationId);
      } else {
        console.error(
          "Failed to mark notification as read:",
          response?.message
        );
      }
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const handleMessageClick = async (message, id) => {
    setSelectedMessage({ ...message, message: message.content });
    setIsMessageModalOpen(true);
    setIsNotificationOpen(false);

    setNotifications(
      notifications.map((item) =>
        item._id === id ? { ...item, isRead: true } : item
      )
    );

    await markNotificationAsRead(id);

    countUnreadNotification();
  };

  useEffect(() => {
    getNotific();
    countUnreadNotification();
    dispatch(requestDashbordAction());
  }, [dispatch, notifications]);

  const { dashbord } = useSelector((state) => {
    return state.requestDashbord;
  });

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleModalClose = () => {
    setIsMessageModalOpen(false);
    setSelectedMessage(null);
  };

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    setIsLogoutModalOpen(false);
    dispatch(
      loginAction({
        token: "",
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        isLogged: false,
      })
    );
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-evenly items-center shadow-md p-5">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-2xl mr-4 focus:outline-none position-bolck top-0 end-0 m-3"
            >
              <FaBars />
             </button>
            
       

        {/* <NavBar setActivePage={setActivePage} activePage={activePage} /> */}
        <NavforMoboile setActivePage={setActivePage} activePage={activePage} />

        {/* <Menu as="div" className="relative flex">
          <div className="relative mr-4 mt-2">
            <div
              className="cursor-pointer hover:text-[#F87F16]"
              onClick={handleNotificationClick}
            >
              <FaBell className="text-xl" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
                  {unreadNotifications}
                </span>
              )}
            </div>

            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-64 sm:w-104 bg-white shadow-lg rounded-lg border z-50 max-h-96 overflow-y-auto">
                <ul>
                  {notifications.map((notification) => (
                    <li
                      key={notification._id}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                    >
                      <span
                        className="text-lg text-gray-700 flex items-center"
                        onClick={() =>
                          handleMessageClick(notification, notification._id)
                        }
                      >
                        <div className="flex flex-col text-sm font-semibold">
                          <div className="flex items-center">
                            {!notification.isRead && (
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            )}
                            {notification.title}
                          </div>
                          <div className="font-medium mt-1 w-38 max-h-10 overflow-hidden text-ellipsis line-clamp-2">
                            {notification.content}
                          </div>
                        </div>
                      </span>
                      <button
                        className="text-red-500 hover:text-red-700 p-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteNotification(notification._id);
                        }}
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div> */}
          {/* <MenuButton className="focus:outline-none">
            <img
              src="/logo.jpeg"
              width={50}
              height={50}
              className="rounded-full cursor-pointer"
              alt="Profile"
            />
          </MenuButton>

          <MenuItems className="absolute right-0 mt-8 w-38 bg-white shadow-lg rounded-lg border z-50">
            <MenuItem>
              {({ focus }) => (
                <button
                  className={`block text-xl sm:text-2xl sm:px-4 sm:py-2 text-gray-700 ${
                    focus ? "bg-gray-200" : ""
                  }`}
                  onClick={() => {
                    setActivePage("profile");
                  }}
                >
                  Profile
                </button>
              )}
            </MenuItem>

            <MenuItem>
              {({ focus }) => (
                <button
                  className={`block w-full text-left text-xl px-1 sm:text-2xl sm:px-4 sm:py-2 text-red-600 ${
                    focus ? "bg-gray-200" : ""
                  }`}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Menu> */}
      </div>

      <div>
        <AlertDialogComponent
          isMessageModalOpen={isMessageModalOpen}
          setIsMessageModalOpen={setIsMessageModalOpen}
          selectedMessage={selectedMessage}
          handleModalClose={handleModalClose}
          title={"Alert"}
        />{" "}
        <AlertDialogComponent
          isMessageModalOpen={isLogoutModalOpen}
          setIsMessageModalOpen={setIsLogoutModalOpen}
          handleModalClose={() => setIsLogoutModalOpen(false)}
          selectedMessage={{
            title: "Confirm Logout",
            message: "Are you sure you want to log out?",
          }}
          onConfirm={confirmLogout}
        />
        <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleSidebarClose}
        setActivePage={setActivePage}
        activePage={activePage}
        whatUser={whatUser}
      />

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleSidebarClose}
        ></div>
      )}
       
        {activePage === "project" && <Projects whatUser={whatUser} />}
        {activePage === "complete" && <CompletePage />}
        {activePage === "project1" && <Projects whatUser={whatUser} />}
        {activePage === "task" && <Tasks whatUser={whatUser} />}
        {activePage === "Leave" && <LeaveRequest whatUser={whatUser} />}
        {activePage === "Calender" && <Calender whatUser={whatUser} />}
        {activePage === "Chat" && <ChatApp whatUser={whatUser} />}
        {activePage === "Department" && <Departments whatUser={whatUser} />}
        {activePage === "members" && <MembersPage whatUser={whatUser} />}
        {activePage === "profile" && <ProfilePage />}




        {activePage === "dashboard" && (
          < ProjectDashboard />
          
        )}
      </div>
    </>
  );
};

export default Dashboard;
