// import ro from 'mongoose'
import express from 'express'
import { loginUser, logoutUser, registerUser,getProfile} from "../controllers/authController.js";
import { protect } from '../middleware/Authmiddleware.js';
import {registerRules, Validator, loginRules} from '../validator/authValidator.js'
import limiter from '../middleware/rateLimit.js'


const router = express.Router();

router.post("/register",registerRules,Validator, registerUser);
router.post("/login",limiter,loginRules,Validator,loginUser);
router.post("/logout",logoutUser);
router.get("/profile",protect,getProfile);

export default router;


