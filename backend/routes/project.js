const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');
const userController = require('../controllers/user');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

// Import the project controller
// routes definitions
router.post('/', auth, userController.checkUp, multer, projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.put('/:id', auth,userController.checkUp, multer, projectController.updateProject);
router.delete('/:id', auth, userController.checkUp, projectController.deleteProject);

module.exports = router;