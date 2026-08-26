import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Register = () => {
    const [register ,setRegister] = useState();
    const navigate = useNavigate();
    
    return(
    <div className="min-h-screen flex justify-center items-center">
        <form className="bg-red-300 py-8 min-w-[400px] flex flex-col justify-center items-center gap-3 px-5 rounded">
            <div className="min-w-full pb-1">
            <label htmlFor="name">
                Full Name : 
            </label>
            <input type="text" id="name" className="min-w-full bg-white"/>
            </div>

            <div className="min-w-full pb-1">
            <label htmlFor="email">
                Email : 
                <input type="email" id="email"  className="min-w-full"/>
            </label>
            </div>

            <div className="min-w-full pb-1">
            <label htmlFor="pass">
                Password : 
                <input type="password" id="pass"  className="min-w-full"/>
            </label>
            </div>

            <div className="min-w-full pb-1">
            <label htmlFor="password">
                Confirm Password : 
                <input type="password" id="password" className="min-w-full  bg-white"/>
            </label>
            </div>

            <button type="submit" onClick={()=>{navigate('/')}} className="border px-2 py-1 rounded-md mt-3 cursor-pointer">
                Create Account
            </button>
        </form>
    </div>
    )
};

export default Register;
