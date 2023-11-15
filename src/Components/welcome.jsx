// import React from "react";
import Stack from "./stack";

function Welcome(){
    return(
        <div className="w-full relative  box-border h-screen">
             <h1 className=" absolute right-0 font-extrabold pt-8  text-right text-gray-100 text-7xl  align-top" style={{ opacity: '10%' }}>
                    WELCOME
                </h1>
            <div className="flex flex-col justify-center items-center  h-full">
               
            <h1 className="text-center  text-[60px] font-extrabold">
           <span className="text-[24px] text-gray-400 font-light"> Helo, my name is  </span> <br></br> <span className="text-cyan-600">Izerque</span> Mbangire <span className="font-extrabold text-gray-400 text-[50px]"><br/>I create exceptional web experiences</span>
            </h1>
            <p className="font-mono text-gray-500 px-5 w-[45%] text-center">
            I craft immersive online experiences that marry code and creativity. Let's turn your vision into a visually stunning, user-friendly reality.<br></br><span className="text-cyan-600 font-medium">Explore my portfolio and let's bring your project to life!</span> 
            </p>
            <div className="my-8 flex justify-center items-center">
                <Stack />
            </div>
            <button className='border-[1px] h-12 m-8 border-gray-400 rounded-xl cursor-pointer  text-gray-300 font-medium py-1 w-[300px] p-4'>
                
                <a href="https://docs.google.com/document/d/1p40diRxI5lk-rYWAHgB_NWP0XOONGYPJEfwaWgMDrGY" target="_blank">
   Checkout my Resume !
    </a>
</button>
</div>

        </div>
    );
}
export default Welcome;









