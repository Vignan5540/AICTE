const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth'); // If needed for protected routes
const Project = require('../models/projects');

// POST route to create a project
router.post('/project', async (req, res) => {
  try {
    const { title, description, clientName, startDate, status, priority } = req.body;

    const newProject = new Project({
      title,
      description,
      clientName,
      startDate,
      status,
      priority
    });

    await newProject.save();

    // Return both a message and the new project details
    res.status(201).json({ 
      message: 'Project added successfully',
      project: newProject
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET route for all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    // Wrap the projects in a key if your frontend expects it
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET route for a single project by ID
router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch project data' });
  }
});

// DELETE route for a project
router.delete('/project/:id', async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
