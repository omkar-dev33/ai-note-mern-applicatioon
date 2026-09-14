import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import api from '../services/api';


const Register = () => {

    const [formData,setFormData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        confirmPassword:""

    });

    const [loading,setLoading] = useState(false);
    const [Error,setError] = useState("");

    const navigate = useNavigate();

    const handleChange = async(e) =>{
        // e.preventDefault();
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async(e) =>{
        e.preventDefault();
        
        setError("");

        if(formData.password !== formData.confirmPassword){
            window.alert("Password do not match, Must be 6 character");
            setError("Password do not match");
            return;
        };

        setLoading(true);

        try {

            await api.post("/register", {
                first_name:  formData.first_name,
                last_name:  formData.last_name,
                email: formData.email,
                password: formData.password,
            });

            window.alert("Account Created Successfully");
            navigate("/");

        } catch (error) {
            setError("Somthing went wrong");         
        }finally{
            setLoading(false);
        }

    };


    return (
        <div className="min-h-screen flex justify-center items-center">
            <form className="bg-red-300 py-8 min-w-[400px] flex flex-col justify-center items-center gap-3 px-5 rounded"
                onSubmit={handleRegister}
            >

            {/* {Error && <p className="text-red-700 text-sm">{Error}</p>} */}

                <div className="min-w-full pb-1">
                    <label htmlFor="first_name">First Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="first_name"
                        value={formData.first_name}
                        className="min-w-full bg-white"
                        onChange={handleChange}
                    />
                </div>

                 <div className="min-w-full pb-1">
                    <label htmlFor="last_name">Last Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="last_name"
                        value={formData.last_name}
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
                        value={formData.email}
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
                        value={formData.password}
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
                        value={formData.confirmPassword}
                        className="min-w-full bg-white"
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="border px-2 py-1 rounded-md mt-3 cursor-pointer"
                    disabled={loading}
                >
                    {loading ? "Creating" : "Create Account"}
                    {/* Create Account */}
                </button>

            </form>
        </div>
    );
};

export default Register;


