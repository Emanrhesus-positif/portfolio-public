const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

// Import the project controller
// routes definitions
router.post('/', auth, multer, projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.put('/:id', auth, multer, projectController.updateProject);
router.delete('/:id', auth, projectController.deleteProject);

module.exports = router;