import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Tag,
  Text,
} from '@chakra-ui/react';

function ReadProjectModal({ isOpen, onClose, projectId, onProjectDeleted }) {
  const [projectData, setProjectData] = useState(null); // State to hold project data
  const [loading, setLoading] = useState(false); // State to manage loading
    // At the top of your ReadProjectModal component (inside the function, before any useEffect)
    const token = localStorage.getItem('tm_token');

  // Fetch project data when modal opens
  useEffect(() => {
    if (isOpen && projectId) {
      const fetchProject = async () => {
        setLoading(true);
        try {
          // Ensure this endpoint matches your backend API
          const response = await axios.get(`/api/projects/${projectId}`, { headers: { Authorization: `Bearer ${token}` } });

          setProjectData(response.data); // Update state with fetched project
        } catch (error) {
          console.error("Error fetching project:", error);
          // Optionally, display an error toast/message here
        } finally {
          setLoading(false);
        }
      };
      fetchProject();
    }
  }, [isOpen, projectId]);

  // Example delete handler (if deletion is needed)
  const handleDelete = async () => {
    if (!projectId) return;
    try {
      await axios.delete(`/api/project/${projectId}`, { headers: { Authorization: `Bearer ${token}` } });
      // Optionally notify parent about deletion:
      if (onProjectDeleted) {
        onProjectDeleted(projectId);
      }
      onClose();
    } catch (error) {
      console.error("Error deleting project:", error);
      // Optionally, show user feedback on failure
    }
  };

  // If loading, show a simple loading modal
  if (loading) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Loading...</ModalHeader>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{projectData?.title || 'Project Details'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {projectData ? (
            <div className='task-card-container'>
              <Text fontWeight="bold" fontSize="lg">
                {projectData.title}
              </Text>
              <div className='task-desc-container'>
                <Text className='task-desc'>{projectData.description}</Text>
              </div>
              <div className='task-card-footer-container'>
                <Tag size='lg' colorScheme='red' borderRadius='full'>
                  <Text className='tag-text'>{projectData.priority}</Text>
                </Tag>
              </div>
              <Text className='created'>
                Created on: {new Date(projectData.startDate).toLocaleDateString()}
              </Text>
            </div>
          ) : (
            <Text>No project data available</Text>
          )}
        </ModalBody>
        <ModalFooter>
          {/* Delete button for deletion functionality */}
          <Button colorScheme='red' onClick={handleDelete} mr={3}>
            Delete
          </Button>
          <Button variant='solid' color="white" bg='darkcyan' onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ReadProjectModal;
