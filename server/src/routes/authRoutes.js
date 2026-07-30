// import ro from 'mongoose'
import express from 'express'
import { loginUser, logoutUser, registerUser,getProfile} from "../controllers/authController.js";
import { protect } from '../middleware/Authmiddleware.js';
import {registerRules, registerValidate} from '../validator/authValidator.js'

const router = express.Router();

router.post("/register",registerRules,registerValidate, registerUser);
router.post("/login",loginUser);
router.post("/logout",logoutUser);
router.get("/profile",protect,getProfile);

export default router;
