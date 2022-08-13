import React from "react";

function TopMenu(){
    return(
        <div className='w-full h-12  left-0 flex justify-between items-center'>
                <div className='h-full visible md:invisible  pl-0  cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor"  color='slate' strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>


</div>

<div className='top-profile flex justify-center items-center md:invisible'> 
            {/* <div className=' w-5 bg-gray-400  rounded-full h-5 '>

            </div> */}
            <a href="#">
            <h3 className='fon-light ml-3 font-bold text-gray-500 flex justify-around'>
                Mbangire Isaac Maiso
            </h3>
            </a>
            </div>
            <div className="invisible md:visible">
    <nav className="flex flex-row decoration-none">
        <li className="">
            <a className="decoration-none">
                Home
            </a>
        </li>
        <li>
            <a>
                Skills
            </a>
        </li>
        <li>
            <a>
                Blog
            </a>
        </li>
        <li>
            <a>
                Contact
            </a>
        </li>
    </nav>
</div>


<button className='bg-cyan-600 cursor-pointer rounded-full text-white font-bold h-8 w-auto px-5'>
    HIRE ME
</button>

            </div>
    );
}

export default TopMenu;