import React from "react";
import Nav from "./Nav";



const navItems = ['About', 'Experience', 'Work', 'Contact'];

const handleClick=()=>{
    console.log('am active')
}

function TopMenu(){
    return(
        <div className='w-full h-[90px]  flex justify-between items-center  px-8  bg-[#282c34] top-0'>
                <div className='h-full vissible md:invisible  pl-0  cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor"  color='slate' strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>


</div>

<div className='flex justify-center items-center md:hidden'> 
            {/* <div className=' w-5 bg-gray-400  rounded-full h-5 '>

            </div> */}
            <a href="#">
            <h3 className='fon-light ml-3 font-bold text-gray-500 flex justify-around'>
                Mbangire Isaac Maiso
            </h3>
            </a>
            </div>
            <div className="hidden md:block">
            <Nav items={navItems} />
</div>
<div>
    


<button onClick={handleClick()} className='bg-cyan-600 cursor-pointer rounded-full text-white font-bold h-8 w-auto px-5'>
    HIRE ME
</button>
</div>


            </div>
    );
}

export default TopMenu;