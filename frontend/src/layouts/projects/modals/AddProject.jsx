import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  Tag,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';

function AddProjectModal({ isOpen, onClose, onProjectAdded }) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    clientName: '',
    startDate: '',
    status: 'On Hold',
    priority: 'Most Important',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStatusClick = (status) => {
    setFormData({ ...formData, status });
  };

  const handleTagClick = (priority) => {
    setFormData({ ...formData, priority });
  };

  const token = localStorage.getItem('tm_token');
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post('/api/project', formData);
      if (response && response.data) {
        const { message, project } = response.data;
        toast({
          title: message,
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });
        if (onProjectAdded) {
          onProjectAdded(project);
        }
      } else {
        throw new Error('No data returned from API');
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        'Error occurred while adding project!';
      toast({
        title: errorMessage,
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
      console.error('AddProjectModal error:', error);
    } finally {
      setLoading(false);
      onClose();
      setFormData({
        title: '',
        description: '',
        clientName: '',
        startDate: '',
        status: 'On Hold',
        priority: 'Most Important',
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" closeOnOverlayClick={false} isCentered>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Add Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              mt={3}
              mb={3}
              placeholder="Title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <Textarea
              rows={7}
              mt={3}
              mb={3}
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <Input
              mt={3}
              mb={3}
              placeholder="Client Name"
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
            />
            <Input
              mt={3}
              mb={3}
              placeholder="Start Date"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />

            <div className="priority-container" style={{ display: 'flex', gap: '12px', marginBottom: '1rem' }}>
              <p>Status:</p>
              <Tag
                size="lg"
                cursor="pointer"
                colorScheme={formData.status === 'On Hold' ? 'red' : 'gray'}
                borderRadius="full"
                onClick={() => handleStatusClick('On Hold')}
              >
                On Hold
              </Tag>
              <Tag
                size="lg"
                cursor="pointer"
                colorScheme={formData.status === 'In Progress' ? 'blue' : 'gray'}
                borderRadius="full"
                onClick={() => handleStatusClick('In Progress')}
              >
                In Progress
              </Tag>
              <Tag
                size="lg"
                cursor="pointer"
                colorScheme={formData.status === 'Testing' ? 'yellow' : 'gray'}
                borderRadius="full"
                onClick={() => handleStatusClick('Testing')}
              >
                Testing
              </Tag>
              <Tag
                size="lg"
                cursor="pointer"
                colorScheme={formData.status === 'Completed' ? 'green' : 'gray'}
                borderRadius="full"
                onClick={() => handleStatusClick('Completed')}
              >
                Completed
              </Tag>
            </div>

            <div className="priority-container" style={{ display: 'flex', gap: '12px', marginBottom: '1rem' }}>
              <p>Priority:</p>
              <Tag
                size="lg"
                cursor="pointer"
                colorScheme={formData.priority === 'Most Important' ? 'red' : 'gray'}
                borderRadius="full"
                onClick={() => handleTagClick('Most Important')}
              >
                Most Important
              </Tag>
              <Tag
                size="lg"
                cursor="pointer"
                colorScheme={formData.priority === 'Important' ? 'yellow' : 'gray'}
                borderRadius="full"
                onClick={() => handleTagClick('Important')}
              >
                Important
              </Tag>
              <Tag
                size="lg"
                cursor="pointer"
                colorScheme={formData.priority === 'Least Important' ? 'green' : 'gray'}
                borderRadius="full"
                onClick={() => handleTagClick('Least Important')}
              >
                Least Important
              </Tag>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="solid" colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="outline" type="submit">
              {loading ? <Spinner color="green.500" /> : 'Add Project'}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default AddProjectModal;
