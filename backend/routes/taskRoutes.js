const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Protect all task routes with authentication middleware
router.use(authMiddleware);

// Fetch all tasks
router.get('/', getTasks);

// Create a new task
router.post('/', createTask);

// Update a task
router.put('/:id', updateTask);

// Delete a task
router.delete('/:id', deleteTask);

module.exports = router;