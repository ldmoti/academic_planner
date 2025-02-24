const Task = require('../models/task');

// Fetch all tasks for the logged-in user
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;

  try {
    const task = new Task({ title, description, dueDate, user: req.userId });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  const { title, description, dueDate } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};