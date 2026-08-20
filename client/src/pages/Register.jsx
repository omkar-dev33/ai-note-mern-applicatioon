import React from "react";
import { useState } from "react";

const Register = () => {
    const [login ,setLogin] = useState();
    
    return(<>
        <form>
            <label htmlFor="">
                First Name : 
                <input type="text" />
            </label>
        </form>
    </>)

};

export default Register;
