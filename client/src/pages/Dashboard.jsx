import React from "react";
import { FaRegBell } from "react-icons/fa";
import logo from '../assets/doc-success-svgrepo-com.svg';

const Dashboard = () => {

    return(
    <>
        <div className="w-full h-auto bg-black">
            <header className="flex justify-between items-center mx-8">
                
                <div className="flex">

                    <div className="ml-6 w-13 h-13 ">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="ml-5 flex flex-col">
                        <h3 className="text-white text-[21px] font-bold">NoteAI</h3>
                        <h5 className="text-white text-[13px] -mt-1">Your intelligent note companion</h5>
                    </div>

                </div>

                <div className="h-10 text-white  text-[24px] mr-4 ">
                    <FaRegBell className="h-[40px]"/>
                </div>

            </header>

        </div>
    </>
    )

};

export default Dashboard;
