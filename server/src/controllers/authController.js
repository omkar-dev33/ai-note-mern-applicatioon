import Auth from '../models/authModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async(req,res,next)  => {
    try {
        const {first_name, last_name, email, password} = req.body;

        const existedUser  = await Auth.findOne({email});

        if(existedUser){
            const error = new Error(`User already existed`);
            error.status = 400;
            throw error;
            // return res.status(400).json({
            //     message:`User already existed`
            // });
        }
       
        const hashPassword = await bcrypt.hash(password,10);

        const generateToken = (id) =>{
            return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn : "7d"});
        }

        
        const user = await Auth.create({
            first_name,
            last_name,
            email,
            password:hashPassword
        });

        const token = generateToken(user._id);
        
        res.status(201).json({
            _id:user._id,
            first_name:user.first_name,
            last_name:user.last_name,
            email : user.email,
            // password : hashPassword,
            token
        })

    } catch (error) {
        // console.log("Calliing next");
        next(error);
        // res.status(500).json({success : false, message: error.message});
    }
}

export const loginUser = async(req,res,next)  => {
    try {
        const {email,password} = req.body;
        
        const user = await Auth.findOne({email});

        if(!user){
            const error = new Error(`Invalid Credentials`);
            error.status = 401;
            throw error;
            // return res.status(401).json({ message: "Invalid Credentials"});
        }

        const match = await bcrypt.compare(password,user.password);

        if(!match){
            const error = new Error(`Invalid Credentials`);
            error.status = 401;
            throw error;
            // return res.status(401).json({message :"Invalid Credentials"});
        }

        const generateToken = (id) =>{
            return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn : "7d"});
        }

        res.json({
            _id : user._id,
            first_name:user.first_name,
            last_name: user.last_name,
            email:user.email,
            token: generateToken(user._id),
        });

    } catch (error) {
        next(error);
        // res.status(500).json({success : false, message: error.message});
    }
}

export const logoutUser = async(req,res,next)  => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure:true,
            sameSite:"Strict"
        });

        res.status(200).json({message : "Logout successfully"});

    } catch (error) {
        next(error);
        // res.status(500).json({success : false, message: error.message});
    }
}

export const getProfile = async(req,res,next) =>{
    try {
        res.status(200).json({success : true, data:req.user});
    } catch (error) {
        // console.log("Calliing next");
        next(error);
        // res.status(500).json({success: false, message : error.message});
    }
}

const errorHandler = (err,req,res,next) =>{
    res.status(err.status || 500).json({
        success:false,
        message: err.message || "Internal Server Error"
    });
};

export default errorHandler;




