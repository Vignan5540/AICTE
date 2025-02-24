import React, { useState } from 'react';
import { FaHome, FaTasks, FaProjectDiagram, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, setActivePage, activePage, whatUser }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isEmployeesOpen, setIsEmployeesOpen] = useState(false);
  const [isAppOpen, setIsAppOpen] = useState(false);

  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out bg-white w-64 z-50`}
    >
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="focus:outline-none">
          &times;
        </button>
      </div>
      {/* Sidebar content */}
      <nav className="flex flex-col p-4 space-y-4">
        <button
          className={`flex items-center space-x-2 ${
            currentPath === '/dashboard' ? 'text-[#F87F16]' : 'text-gray-700'
          }`}
          onClick={() => {
            setActivePage('dashboard');
            onClose();
          }}
        >
          <FaHome />
          <span>Dashboard</span>
        </button>

        <button
          className={`flex items-center space-x-2 ${
            isProjectsOpen ? 'text-[#F87F16]' : 'text-gray-700'
          }`}
          onClick={() => setIsProjectsOpen(!isProjectsOpen)}
        >
          <FaProjectDiagram />
          <span>Projects</span>
          <span className={`ml-auto ${isProjectsOpen ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {isProjectsOpen && (
          <div className="ml-4 space-y-2">
            <button
              className={`flex items-center space-x-2 ${
                currentPath === '/project1' ? 'text-[#F87F16]' : 'text-gray-700'
              }`}
              onClick={() => {
                setActivePage('project1');
                onClose();
              }}
            >
              Project 1
            </button>
            <button
              className={`flex items-center space-x-2 ${
                currentPath === '/task' ? 'text-[#F87F16]' : 'text-gray-700'
              }`}
              onClick={() => {
                setActivePage('task');
                onClose();
              }}
            >
              Task
            </button>
            <button
              className={`flex items-center space-x-2 ${
                currentPath === '/project3' ? 'text-[#F87F16]' : 'text-gray-700'
              }`}
              onClick={() => {
                setActivePage('project3');
                onClose();
              }}
            >
              Project 3
            </button>
          </div>
        )}

        <button
          className={`flex items-center space-x-2 ${
            isEmployeesOpen ? 'text-[#F87F16]' : 'text-gray-700'
          }`}
          onClick={() => setIsEmployeesOpen(!isEmployeesOpen)}
        >
          <FaProjectDiagram />
          <span>Employees</span>
          <span className={`ml-auto ${isEmployeesOpen ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {isEmployeesOpen && (
          <div className="ml-4 space-y-2">
            <button
              className={`flex items-center space-x-2 ${
                currentPath === '/Leave' ? 'text-[#F87F16]' : 'text-gray-700'
              }`}
              onClick={() => {
                setActivePage('Leave');
                onClose();
              }}
            >
              Leave Request
            </button>
            <button
              className={`flex items-center space-x-2 ${
                currentPath === '/Department' ? 'text-[#F87F16]' : 'text-gray-700'
              }`}
              onClick={() => {
                setActivePage('Department');
                onClose();
              }}
            >
              Department
            </button>
          </div>
        )}

        {/* this is app/chat */}
        <button
          className={`flex items-center space-x-2 ${
            isAppOpen ? 'text-[#F87F16]' : 'text-gray-700'
          }`}
          onClick={() => setIsAppOpen(!isAppOpen)}
        >
          <FaProjectDiagram />
          <span>Apps</span>
          <span className={`ml-auto ${isAppOpen ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {isAppOpen && (
          <div className="ml-4 space-y-2">
            <button
              className={`flex items-center space-x-2 ${
                currentPath === '/Chat' ? 'text-[#F87F16]' : 'text-gray-700'
              }`}
              onClick={() => {
                setActivePage('Chat');
                onClose();
              }}
            >
              Chat
            </button>
            <button
              className={`flex items-center space-x-2 ${
                currentPath === '/Calender' ? 'text-[#F87F16]' : 'text-gray-700'
              }`}
              onClick={() => {
                setActivePage('Calender');
                onClose();
              }}
            >
              Calender
            </button>
          </div>
        )}

        <button
          className={`flex items-center space-x-2 ${
            currentPath === '/task' ? 'text-[#F87F16]' : 'text-gray-700'
          }`}
          onClick={() => {
            setActivePage('task');
            onClose();
          }}
        > 
        </button>
        {whatUser === 'admin' && (
          <button
            className={`flex items-center space-x-2 ${
              currentPath === '/members' ? 'text-[#F87F16]' : 'text-gray-700'
            }`}
            onClick={() => {
              setActivePage('members');
              onClose();
            }}
          >
            <FaUsers />
            <span>Members</span>
          </button>
        )}
        <button
          className="flex items-center space-x-2 text-red-600"
          onClick={() => {
            onClose();
            // Trigger logout modal or function
          }}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
