import React from "react";


function Copyright(){
    return(
        <div className="w-full bg-gray-300 h-12 flex items-center justify-center  bottom-0 left-0">
          
        <a className="font-extrabold text-gray-500 hoover:text-red-300"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer" 
        >
           &copy; MIMO
          <span className="font-light text-black ">
            .MadeIt
          </span>
        </a>
      </div>
    );
}
export default Copyright;