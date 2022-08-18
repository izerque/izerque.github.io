import React from "react";

function Welcome(){
    return(
        <div className="w-full  box-border md:h-screen bg-white ">
             <h1 className=" font-extrabold opacity-40 text-right text-gray-200 text-7xl  align-top">
                    WELCOME
                </h1>
            <div className="bg-white mt-6 pt-10">
               
            <h1 className="font-bold text-6xl lg:text-8xl  p-4 mt-32 leading-lose py-5">
                Hi,<br/> I'm <span className="text-cyan-600">Izerque</span>, <span className="font-light text-5xl"><br/>Web Developer</span>
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