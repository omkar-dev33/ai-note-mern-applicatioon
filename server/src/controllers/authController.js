import auth from '../models/authModel.js'

export const registerUser = async(req,res)  => {
    try {
        const {first_name, last_name} = req.body;

        const existedUser =
        res.status(200).json(`User created successfully`);

    } catch (error) {
        res.status(500).json({success : false, message: error.message});
    }
}

export const loginUser = async(req,res)  => {
    try {
        
    } catch (error) {
        res.status(500).json({success : false, message: error.message});
    }
}

export const logoutUser = async(req,res)  => {
    try {
        
    } catch (error) {
        res.status(500).json({success : false, message: error.message});
    }
}

export const getProfile = async(req,res) =>{
    try {
        
    } catch (error) {
        res.status(500).json({success: false, message : error.message});
    }
}





