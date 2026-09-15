import React from "react";
import { FaRegBell } from "react-icons/fa";

const Dashboard = () => {

    return(
    <>
        <div className="">
            <header className="">

                <div className="">Logo</div>
                
                <div className="">
                    <h3 className="">NoteAI</h3>
                    <h5 className="">Your intelligent note companion</h5>
                </div>

                <div className="h-10 bg-red-500">
                    <FaRegBell className="h-[40px]"/>
                </div>

            </header>

        </div>
    </>
    )

};

export default Dashboard;
