import React from 'react';
function Sidebar() {
    return(
        <div className=" h-screen border-r-2 border-gray-300 invisible  lg:visible flex flex-col sm:w-1/4 bg-white mb-4 py-5 w-1/4 ">
            <div className='top-profile flex justify-evenly '> 
            <div className=' w-20 bg-gray-400  rounded-full h-20 '>

            </div>
            <h3 className='font-bold flex flex-col justify-around'>
                Mbangire Isaac Maiso
                <h4 className='font-light bottom-5'>
                Proffession
            </h4>

            </h3>
            </div>
            
            {/* Section for socials */}
            <div className='w-full top-profile flex justify-evenly items-center my-5 bg-slate-500'>
            <div className=' w-6 bg-slate-100 flex  my-8 rounded-full h-6 '>
</div>

{/* 2 */}
<div className=' w-6 bg-slate-100 flex  my-8 rounded-full h-6 '>

</div>
{/* 3 */}
<div className=' w-6 bg-slate-100 flex  my-8 rounded-full h-6 '>

</div>
{/* 4 */}
<div className=' w-6 bg-slate-100 flex  my-8 rounded-full h-6 '>

</div>

            </div>
            

            {/* Brief about self */}
            <div className='px-5'>
                <h1 className='font-bold text-blue-400 pb-2'> Brief about self</h1>
            I am a highly motivated and progress-foccussed Junnior web Developer with a long standing background in the industry. I completed my bachelors Degree in information Tecnology at Ndejje University. I have devised strategic initiative which i believe will prove valuable to my progress in my Web Development Career.

            </div>
            
            {/* Section for skils */}
            <div className='px-5 py-5'>
                <h1 className='font-bold text-blue-400 underline pb-2'>
                    Skills 
                </h1>
            {/* butons */}
            <div className='flex justify-between overflow-scroll '>
                <button className=' bg-slate-500 rounded-sm font-light text-white px-3 '>
                    REACT
                </button>
                <button className=' bg-slate-500 rounded-sm font-light text-white px-3'>
                    HTML
                </button>
                <button className=' bg-slate-500 rounded-sm font-light text-white px-3'>
                    CSS
                </button>
                <button className=' bg-slate-500 rounded-sm text-white px-3'>
                    TAILWIND
                </button>
                {/* <button className=' bg-slate-500 rounded-sm text-white px-3'>
                    FIREBASE
                </button>
                <button className=' bg-slate-500 rounded-sm text-white px-3'>
                    PHOTOSHOP
                </button> */}

                
            </div>
            </div>


            {/* section for Languages */}
            <div className='px-5 py-5'>
                <h1 className='font-bold text-blue-400 pb-2'>
                    Languages
                </h1>
            </div>
            {/* projects */}
            <div className='px-5 py-5'>
                <h1 className='font-bold text-blue-400 pb-2'>
                    Projects
                </h1>
                <div className='flex justify-between overflow-scroll '>
                <button className='w-auto  bg-white border-solid border-2 rounded-full border-1 font-light text-black px-3 '>
                    Project 1
                </button>
                <button className=' bg-white rounded-full border-solid border-2 font-light text-black px-3'>
                    Project 2
                </button>
                <button className=' bg-white rounded-full  border-solid border-2 font-light text-black px-3'>
                    Project 3
                </button>
                <button className=' bg-white  rounded-full border-solid border-2 text-blacks px-3'>
                    Project 4
                </button>
                {/* <button className=' bg-slate-500 rounded-sm text-white px-3'>
                    FIREBASE
                </button>
                <button className=' bg-slate-500 rounded-sm text-white px-3'>
                    PHOTOSHOP
                </button> */}

                
            </div>
            </div>

            
        </div>



    );
}

export default Sidebar;