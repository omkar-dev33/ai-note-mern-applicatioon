import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Register = () => {
    const [register ,setRegister] = useState();
    const navigate = useNavigate();
    
    return(<>
        <form >
            <label htmlFor="name">
                Full Name : 
                <input type="text" id="name"/>
            </label>
            <label htmlFor="email">
                Email : 
                <input type="email" id="email"/>
            </label>
            <label htmlFor="password">
                Password : 
                <input type="password" id="password" />
            </label>
            <label htmlFor="password">
                Confirm Password : 
                <input type="password" id="password" />
            </label>
            <button type="submit" onClick={()=>{navigate('/')}}>
                Create Account
            </button>
        </form>
    </>)
};

export default Register;
