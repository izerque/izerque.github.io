import React from "react";

function Welcome(){
    return(
        <div className="w-full  box-border md:h-screen ">
             <h1 className="font-bold  opacity-40 text-right text-gray-200 text-8xl align-top">
                    WELCOME
                </h1>
            <div className="bg-white -mt-6 pt-10">
               
            <h1 className="font-bold text-6xl  p-4 m-0 leading-lose py-5">
                Hi,<br/> Am <span className="text-cyan-600">Izerque</span>, <span className="font-light"><br/>Web Developer</span>
            </h1>
            <p className="font-mono text-gray-500 px-5 mt-0">
            Frontend Design/Development  Graphics Design  Digital
Marketing.
            </p>
            <button className='border-2 mt-6 border-cyan-600 ml-5 rounded-xl cursor-pointer  text-gray-700 font-light py-1 w-89 px-4'>
    View CV & Portfolio
</button>
</div>
        </div>
    );
}

export default Welcome;