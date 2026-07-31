import User from '../models/authModel.js';
import jwt from 'jsonwebtoken';

export const protect = async(req,res,next) =>{
    try {
        let token;
        
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1];
        }
        // console.log("Header received:", req.headers.authorization);

        if(!token) {
            return res.status(401).json({success:false, message:"Not authorized, no token"});
        }
        // console.log("Protect middleware hit"); 

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        // console.log("secrete", process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select("-password");
        next();

    } catch (error) {
        // console.log(error);
        res.status(500).json({success:false, message:"Not authorized, token failed"});
    }
}
