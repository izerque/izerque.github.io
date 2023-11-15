import React from "react";
import ProjectCard from "./ProjectCard";

function Projects(){
    return(
        <div className="w-full flex  justify-center align-middle box-border">
            <div className="flex flex-wrap justify-start p-5 ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />


            </div>
           
             
            {/* <div className="bg-white pt-10">
               
            <h1 className="font-regular text-cyan-600 text-4xl p-4 m-0 leading-lose py-5">
               My Portfolio
            </h1>
            <p className= " text-gray-500 px-5 mt-0">
            A small gallery of recent projects chosen by me. I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list.

Marketing.
            </p>
            <button className='border-2 mt-6 border-cyan-600 ml-5 rounded-xl cursor-pointer  text-gray-700 font-light py-1 w-89 px-4'>
    See More !
</button>
</div> */}


{/* <h1 className="font-bold  opacity-40 text-right text-gray-200 text-8xl align-top">
                    Projects
                </h1> */}
        </div>
    );
}

export default Projects;