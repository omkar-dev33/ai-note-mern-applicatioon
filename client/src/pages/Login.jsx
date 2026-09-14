import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import api from "../services/api";

const Login = () => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [error,setError] = useState();

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name,value} = e.target;
        if(name === 'email'){
            setEmail(value);
        }

        if(name === 'password'){
            setPassword(value);
        }
   
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        //check empty fields
        if(!email || !password){
            setError("Email and Password are required");
            return;
        }

        try {
            const response = await api.post('/',{
                email,
                password
            });

            console.log(response.data);

            localStorage.setItem("token", response.data.token);
            
            window.alert("User login successfully");
            navigate('/dashboard');

        } catch (error) {
            console.log(error);
            setError("Invalid email or password");
        };

        // navigate('/dashboard');

    }

    return(<>
    <div className="min-h-screen flex justify-center items-center ">
        <form onSubmit={handleSubmit} className="bg-red-300  min-w-[300px] flex flex-col justify-center items-center gap-4 border pt-9 pb-7 px-4 rounded-sm">
            <div className="bg-red-400 min-w-full">
            <label htmlFor="email">
                <p className="mb-1"> Email : </p>
                <input type="email" id="email" className="min-w-full" name="email" value={email} onChange={handleChange}/>
            </label>
            </div>

            <div className="bg-red-400 min-w-full">
            <label htmlFor="password">
                <p className="mb-1"> Password : </p>
                <input type="password" id="password"  className="min-w-full" name="password" value={password} onChange={handleChange}/>
            </label>
            </div>

            {error && (
                <p className="text-red-600">{error}</p>
            )}

            {/* <la htmlFor="" ></la> */}
            <button className="flex justify-center items-center border rounded px-10 py-[1px] cursor-pointer">Login</button>

            <div className="flex justify-center items-center gap-2">
                <p className="text-md">Don't have an account?</p>
             <p className="hover:underline cursor-pointer"  onClick={()=>{navigate('/register')}} > Create Account</p>
            </div>
        </form>
        
        </div>
    </>)

};

export default Login;
