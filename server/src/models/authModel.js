import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    first_name : {
        type:String,
        required : true
    },
    last_name: {
        type: String,
        required : true
    },
    email : {
        type:String,
        required: true,
        unique:true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    password : {
        type:String,
        required: true
    }
}, {timestamps: true})

const Auth = mongoose.model("Auth", authSchema);
export default Auth;

