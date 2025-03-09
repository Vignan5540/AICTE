import React, { useState, useEffect } from 'react';
import Sidenav from '../../components/sidenav/Sidenav';
import { CircularProgress, CircularProgressLabel, Tag, Button } from '@chakra-ui/react';
import pending from '../../assets/tasks/Pending.png';
import complete from '../../assets/tasks/complete.png';
import book from '../../assets/tasks/Book.png';
import totaltasks from '../../assets/tasks/totaltasks.png';
import totalprogress from '../../assets/tasks/totalprogress.png';
import totalpending from '../../assets/tasks/totalpending.png';
import totalcomplete from '../../assets/tasks/totalcomplete.png';
import { IoReaderOutline } from "react-icons/io5";
import { FcStatistics } from "react-icons/fc";
import Navbar from '../../components/navbar/Navbar';
import AddProjectModal from './modals/AddProject';
import ReadProjectModal from './modals/ReadProject';
import { IoMdAdd } from "react-icons/io";
import axios from 'axios';
import "./projects.css";

function Projects() {
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isReadProjectModalOpen, setIsReadProjectModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [projects, setProjects] = useState([]);

  // Fetch projects on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects'); // Adjust endpoint if needed
        // Assuming response.data is an array of project objects.
        setProjects(response.data.projects);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };
    fetchProjects();
  }, []);

  // Open modals
  const openAddProjectModal = () => {
    setIsAddProjectModalOpen(true);
  };

  const openReadProjectModal = (id) => {
    setSelectedProjectId(id);
    setIsReadProjectModalOpen(true);
  };

  // Close modals
  const closeAddProjectModal = () => {
    setIsAddProjectModalOpen(false);
  };

  const closeReadProjectModal = () => {
    setIsReadProjectModalOpen(false);
  };

  // Callback to add new project to state without refetching the list
  const handleProjectAdded = (newProject) => {
    setProjects((prevProjects) => [newProject, ...prevProjects]);
  };

  // Callback to remove deleted project from state
  const handleProjectDeleted = (deletedProjectId) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project._id !== deletedProjectId)
    );
  };

  return (
    <>
      {/* Modals */}
      <AddProjectModal 
        isOpen={isAddProjectModalOpen} 
        onClose={closeAddProjectModal} 
        onProjectAdded={handleProjectAdded} 
      />
      <ReadProjectModal 
        isOpen={isReadProjectModalOpen} 
        onClose={closeReadProjectModal} 
        projectId={selectedProjectId} 
        onProjectDeleted={handleProjectDeleted}
      />

      {/* Main Layout */}
      <div className='app-main-container'>
        <div className='app-main-left-container'>
          <Sidenav />
        </div>
        <div className='app-main-right-container'>
          <Navbar />
          <div className='dashboard-main-container'>
            {/* Left Dashboard: Projects List & Statistics */}
            <div className='dashboard-main-left-container'>
              <div className='task-status-card-container'>
                <div className='add-task-inner-div'>
                  <FcStatistics className='task-stats' />
                  <p className='todo-text'>Projects Statistics</p>
                </div>
                <div className='stat-first-row'>
                  <div className='stats-container container-bg1'>
                    <img className='stats-icon' src={totaltasks} alt="Total Projects" />
                    <div>
                      <p className='stats-num'>1200</p>
                      <p className='stats-text'>Total Projects</p>
                    </div>
                  </div>
                  <div className='stats-container container-bg4'>
                    <img className='stats-icon' src={totalcomplete} alt="Completed" />
                    <div>
                      <p className='stats-num'>1200</p>
                      <p className='stats-text'>Completed</p>
                    </div>
                  </div>
                </div>
                <div className='stat-second-row'>
                  <div className='stats-container container-bg2'>
                    <img className='stats-icon' src={totalprogress} alt="In Progress" />
                    <div>
                      <p className='stats-num'>1200</p>
                      <p className='stats-text'>In Progress</p>
                    </div>
                  </div>
                  <div className='stats-container container-bg3'>
                    <img className='stats-icon' src={totalpending} alt="Pending" />
                    <div>
                      <p className='stats-num'>1200</p>
                      <p className='stats-text'>Pending</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='add-task-main-container'>
                <div className='add-task-main-div'>
                  <div className='add-task-inner-div'>
                    <img src={pending} alt="Pending" />
                    <p className='todo-text'>To-Do Projects</p>
                  </div>
                  <button className='table-btn-task' onClick={openAddProjectModal}>
                    <IoMdAdd /> Add Project
                  </button>
                </div>
                {projects.map((project) => (
                  <div className='task-card-container' key={project._id}>
                    <p className='task-title'>{project.title}</p>
                    <div className='task-desc-container'>
                      <p className='task-desc'>{project.description}</p>
                    </div>
                    <div className='task-card-footer-container'>
                      <div>
                        <Tag size='lg' colorScheme='blue' borderRadius='full'>
                          <p className='tag-text'>{project.priority}</p>
                        </Tag>
                      </div>
                      <div>
                        <div className='task-read' onClick={() => openReadProjectModal(project._id)}>
                          <IoReaderOutline className='read-icon' />
                        </div>
                      </div>
                      <p className='created'>Created on: {new Date(project.startDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Dashboard: Additional Project Status or Hard-Coded Cards */}
            <div className='dashboard-main-right-container'>
              <div className='task-status-card-container'>
                <div className='add-task-inner-div'>
                  <img src={complete} alt="Completed" />
                  <p className='todo-text'>Projects Status</p>
                </div>
                <div className='task-status-progress-main-container'>
                  <div>
                    <CircularProgress value={80} color='#05A301' size='100px'>
                      <CircularProgressLabel>80%</CircularProgressLabel>
                    </CircularProgress>
                    <p className='completed'>Completed</p>
                  </div>
                  <div>
                    <CircularProgress value={60} color='#0225FF' size='100px'>
                      <CircularProgressLabel>60%</CircularProgressLabel>
                    </CircularProgress>
                    <p className='progress'>In Progress</p>
                  </div>
                  <div>
                    <CircularProgress value={40} color='orange' size='100px'>
                      <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                    <p className='testing'>Testing</p>
                  </div>
                  <div>
                    <CircularProgress value={20} color='#F21E1E' size='100px'>
                      <CircularProgressLabel>20%</CircularProgressLabel>
                    </CircularProgress>
                    <p className='pending'>Pending</p>
                  </div>
                </div>
              </div>
              {/* The following hard-coded cards may serve as examples */}
              <div className='add-task-main-container'>
                <div className='add-task-main-div'>
                  <div className='add-task-inner-div'>
                    <img src={book} alt="Book" />
                    <p className='todo-text'>In Progress Projects</p>
                  </div>
                </div>
                <div className='task-card-container'>
                  <p className='task-title'>Attend Nischal’s Birthday Party</p>
                  <div className='task-desc-container'>
                    <p className='task-desc'>
                      Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)
                    </p>
                  </div>
                  <div className='task-card-footer-container'>
                    <div>
                      <Tag size='lg' colorScheme='blue' borderRadius='full'>
                        <p className='tag-text'>In Progress</p>
                      </Tag>
                    </div>
                    <div>
                      <div className='task-read'>
                        <IoReaderOutline className='read-icon' />
                      </div>
                    </div>
                    <div>
                      <CircularProgress value={40} color='#0225FF'>
                        <CircularProgressLabel>40%</CircularProgressLabel>
                      </CircularProgress>
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional hard-coded sections for Testing or Completed Projects can follow */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

