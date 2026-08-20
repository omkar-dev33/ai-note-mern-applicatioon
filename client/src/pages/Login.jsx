import React from "react";
import { useState } from "react";

const Login = () => {
    const [login ,setLogin] = useState();
    
    return(<>
        <form>
            <label htmlFor="email">
                Email : 
                <input type="email" id="email"/>
            </label>
            <label htmlFor="password">
                Password : 
                <input type="password" id="password"/>
            </label>
        </form>
    </>)

};

export default Login;
