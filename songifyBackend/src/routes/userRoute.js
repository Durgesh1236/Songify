import express from 'express';
import { adminLogin } from '../controllers/UserController.js'

const userRouter = express.Router();

userRouter.post('/admin',adminLogin)

export default userRouter;