import React from "react";
import { FaRegBell } from "react-icons/fa";
import logo from '../assets/doc-success-svgrepo-com.svg';

const Dashboard = () => {

    return(
    <>
        <div className="min-w-full min-h-screen bg-black">

            {/* Header */}

            <header className="flex justify-between items-center mx-8 pt-4">
                
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

            {/* Card section */}

            <section className="min-w-full h-auto px-[200px] py-14 flex justify-between ">

                <div className="h-[190px] w-[220px] bg-gray-600 border rounded-xl flex flex-col px-4">
                    <div className="flex justify-between items-center mt-4">
                        <img src={logo} alt="logo" className="w-10 " />
                        <button className="text-green-500 bg-gray-700 rounded-md px-2  text-sm">+12%</button>
                    </div>

                    <p className="text-gray-400 text-[20px] font-bold">Notes</p>

                    <div className="mt-3">
                            <h1 className="text-white font-bold text-[36px]">248</h1>
                            <p className="text-gray-400 font-bold">Total saved notes</p>
                    </div>                              
                </div>

                <div className="h-[190px] w-[220px] bg-gray-600 border rounded-xl flex flex-col px-4">
                    <div className="flex justify-between items-center mt-4">
                        <img src={logo} alt="logo" className="w-10 " />
                        <button className="text-green-500 bg-gray-700 rounded-md px-2  text-sm">+12%</button>
                    </div>

                    <p className="text-gray-400 text-[20px] font-bold">Notes</p>

                    <div className="mt-3">
                            <h1 className="text-white font-bold text-[36px]">248</h1>
                            <p className="text-gray-400 font-bold">Total saved notes</p>
                    </div>                    
                </div>


            </section>

            <section></section>
            <section>

                <div className="">Quick Actions</div>
                <div className="">Jump into your most used tools</div>

                <div className="">
                    <div className="">
                        <span className="">+</span>
                        New Note
                    </div>
                    
                    <div className="">Ask AI</div>
                    <div className="">Search</div>
                    
                </div>

            </section>

        </div>
    </>
    )

};

export default Dashboard;
