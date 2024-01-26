const Task = require('../models/index')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().exec()
    console.log(tasks)
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const getTaskByID = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    res.json(task)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body
    const task = new Task({ title, description })
    await task.save()
    res.json({ status: 'Task saved' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const updatedTask = async (req, res) => {
  try {
    const { title, description } = req.body
    const newTask = { title, description }
    await Task.findByIdAndUpdate(req.params.id, newTask)
    res.json({ status: 'Task updated' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id)
    res.json({ status: 'Task deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

module.exports = {
  getAllTasks,
  getTaskByID,
  createTask,
  updatedTask,
  deleteTask
}
