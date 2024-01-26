/* eslint-disable no-new */
const { Router } = require('express')
const router = Router()
const { getAllTasks, getTaskByID, createTask, updatedTask, deleteTask } = require('../handlers/index')

router.get('/', getAllTasks)

router.get('/:id', getTaskByID)

router.post('/', createTask)

router.put('/:id', updatedTask)

router.delete('/:id', deleteTask)

module.exports = router
