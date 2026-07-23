import Auth from '../models/authModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const registerUser = async(req,res)  => {
    try {
        const {first_name, last_name, email, password} = req.body;

        const existedUser  = await Auth.findOne({email});

        if(existedUser){
            return res.status(400).json({
                message:`User already existed`
            });
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
            password : hashPassword,
            token
        })

    } catch (error) {
        res.status(500).json({success : false, message: error.message});
    }
}

export const loginUser = async(req,res)  => {
    try {
        const {email,password} = req.body;
        
        const user = await Auth.findOne({email});

        if(!user){
            return res.status(401).json({ message: "Invalid Credentials"});
        }

        const match = await bcrypt.compare(password,user.password);

        if(!match){
            return res.status(401).json({message :"Invalid Credentials"});
        }

        const generateToken = (id) =>{
            return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn : "7d"});
        }

        res.json({
            _id : user._id,
            first_name:user.first_name,
            last_name: user._last_name,
            email:user.email,
            token: generateToken(user._id),
        });

    } catch (error) {
        res.status(500).json({success : false, message: error.message});
    }
}

export const logoutUser = async(req,res)  => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure:true,
            sameSite:"Strict"
        });

        res.status(200).json({message : "Logout successfully"});

    } catch (error) {
        res.status(500).json({success : false, message: error.message});
    }
}

export const protect = async(req,res,next) =>{
    try {
        let token;

        if(req.headers.authorization && req.headers.authorization.startWith("Bearer")){
            token = req.headers.authorization.split(" ")[1];
        }

        if(!token) {
            return res.status(401).json({success:false, message:"Not authorized, no token"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        req.user = await user.findById(decided.id).select("-password");
        next();

    } catch (error) {
        res.status(500).json({success:false, message:"Not authorized, token failed"});
    }
}

// export const getProfile = async(req,res) =>{
//     try {
        
//     } catch (error) {
//         res.status(500).json({success: false, message : error.message});
//     }
// }





