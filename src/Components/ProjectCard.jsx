import React from "react";

function ProjectCard(){
    return(
        <div className="w-36 m-1 h-36 flex hover:bg-cyan-100 justify-center items-center bg-gray-300 box-border ">
            <div className="w-10/12 p-5 h-auto   hover:bg-cyan-100 flex justify-center items-center rounded-full">
                <p>
                    View <br></br> Project
                </p>
            </div>
         
        </div>
    );
}

export default ProjectCard;