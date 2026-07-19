import express from 'express'
import {createTask,deleteTask,updateTask,getTask } from '../controllers/noteController.js'
const router = express.Router();

router.post('/createTask',createTask); //create
router.delete('/deleteTask/:id',deleteTask); // delete
router.put('/updateTask/:id',updateTask); // update
router.get("/getTask",getTask); // getTask

export default router;










