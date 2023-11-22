import React from "react";
import ProjectCard from "./ProjectCard";


































function Projects(){
    return(
        <div className="w-full flex p-4 h-screen px-20 ">
            <div className="flex flex-col gap-8 justify-center items-center w-5/12">
            <h2 className=" text-cyan-600 font-bold text-4xl">Projects</h2>
            <nav>
                <ul className="flex flex-col gap-4 text-gray-400 list-disc">
                    <li><a href="#development">Development</a></li>
                    <li><a href="#ui-ux">UI/UX</a></li>
                    <li><a href="#graphics-design">Graphics Design</a></li>
                </ul>
            </nav>
            </div>
           <div id="projects" className="h-full w-7/12 p-4">
            <div id="development" className="">
                <ProjectCard />
            </div>
            <div id="UI/UX" className="">

            </div>
            <div id="Graphics" className="">

            </div>
           </div>
        </div>
    );
}

export default Projects