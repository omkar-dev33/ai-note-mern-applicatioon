import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const navigate = useNavigate();

    // const handleChange = () =>{
    //     setEmail();
    //     setPassword();
    // }

    const handleSubmit = (e) =>{
        e.preventDefault();

        navigate('/dashboard');

    }

    return(<>
    <div className="min-h-screen flex justify-center items-center ">
        <form onSubmit={handleSubmit} className="bg-red-300  min-w-[300px] flex flex-col justify-center items-center gap-4 border pt-9 pb-7 px-4 rounded-sm">
            <div className="bg-red-400 min-w-full">
            <label htmlFor="email">
                <p className="mb-1"> Email : </p>
                <input type="email" id="email" className="min-w-full" value={email} onChange={(e) =>{setEmail(e.target.value)} }/>
            </label>
            </div>

            <div className="bg-red-400 min-w-full">
            <label htmlFor="password">
                <p className="mb-1"> Password : </p>
                <input type="password" id="password"  className="min-w-full" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            </div>

            {/* <la htmlFor="" ></la> */}
            <button className="flex justify-center items-center border rounded px-10 py-[1px] ">Login</button>

            <div className="flex justify-center items-center gap-2">
                <p className="text-md">Don't have an account?</p>
             <p className=""  onClick={()=>{navigate('/register')}} > Create Account</p>
            </div>
        </form>
        
        </div>
    </>)

};

export default Login;
