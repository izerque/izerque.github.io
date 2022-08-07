import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Crad";
import Welcome from "./welcome";
import Portfolio from "./Portfolio";
import Projects from "./Projects";


function Main (){
    return(
        <div className="">
            <div className=" w-full  md:w-full flex  flex-col justify-start  md:justify-start items-start  h-screen">
            {/* card */}
            <Welcome />
            <Portfolio />
            <Projects />

            

        </div>

        </div>
    );
}

export default Main;