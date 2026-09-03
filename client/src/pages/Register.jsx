import React, { useState } from "react";
import useNavigate from 'react-router-dom';

const Register = () => {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""

    });

    const [loading,setLoading] = useState(false);
    const [Error,setError] = useState("");

    const navigate = useNavigate();

    const handleChange = async(e) =>{
        e.preventDefault();

        setFormData({...formData, [e.target.name]: e.target.value })
    };

    const handleRegister = async(e) =>{
        e.preventDefault();

        if(formData.password !== formData.confirmPassword){
            setError("Password do not match");
            return;
        };

        

    };




        


    return (
        <div className="min-h-screen flex justify-center items-center">
            <form className="bg-red-300 py-8 min-w-[400px] flex flex-col justify-center items-center gap-3 px-5 rounded"
            onSubmit={handleRegister}


            >

                <div className="min-w-full pb-1">
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="min-w-full bg-white"
                        onChange={handleChange}
                    />
                </div>

                <div className="min-w-full pb-1">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="min-w-full bg-white"
                        onChange={handleChange}
                    />
                </div>

                <div className="min-w-full pb-1">
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        id="pass"
                        name="password"
                        className="min-w-full bg-white"
                        onChange={handleChange}
                    />
                </div>

                <div className="min-w-full pb-1">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="min-w-full bg-white"
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="border px-2 py-1 rounded-md mt-3 cursor-pointer"
                >
                    Create Account
                </button>

            </form>
        </div>
    );
};

export default Register;


