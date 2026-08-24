import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const navigate = useNavigate();

    const handleChange = () =>{
        setEmail();
        setPassword();
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        navigate('/dashboard');

    }

    return(<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email : 
                <input type="email" id="email" value={email} onChange={(e) =>{setEmail(e.target.value)} }/>
            </label>
            <label htmlFor="password">
                Password : 
                <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            {/* <la htmlFor="" ></la> */}
            <button className="">Login</button>
 
        </form>
        <div className="" onClick={()=>{navigate('/register')}}>
            Create Account
        </div>
    </>)

};

export default Login;
