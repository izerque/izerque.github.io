import React from "react";
import isaac from '../images/isaac.jpg';




const techItems = ['ReactJS', 'NextJS', 'Tailwind CSS', 'Typescript','Git' ,'Github', 'GraphQL'];

function TechRender({items}){
    return(
        <nav className="flex flex-row flex-wrap gap-4 font-light decoration-none">
        
        {items.map((item, index) => (
          <li key={index} className="list-none">
          <button className='border-[1.5px]  border-cyan-600 rounded-full cursor-pointer hover:bg-cyan-600   text-cyan-600  text-[12px] font-semibold w-auto hover:bg-opacity-20 px-[16px] py-[4px]'>{item}</button>
          </li>
        ))}
      </nav>
    );
}


function About(){
    return(
        <div className="w-fulls flex justify-center items-center relative h-screen ">
             
            <div className=" mx-20 w-9/12 flex rounded-[20px] bg-gray-500 border-[1.5px] relative border-gray-600 bg-opacity-20 p-10"  >
               <div className="w-1/2"> 
                <div className=" border flex flex-col justify-between h-7/12">
                         <h1 className="font-bold text-cyan-600   text-4xl p-4  leading-lose py-5">
              About Me
            </h1>
            <p className= " text-gray-300 px-5 mt-0">
            Hello! My name is Isaac and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p> <p className= " text-gray-300 px-5 mt-0">
            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a global company. I am currently looking for my next chance to exercise my skills as a frontend , Backend or Mobile engineer. And am currenlty part timing at Microverse Reviewing student Codes.
            </p>
            
           
</div>
<div className=" w-1/2 px-4 my-6 flex flex-col gap-4">
    <p className=" text-cyan-600  font-medium">Technologies:</p>

    <div className="">
    <TechRender items={techItems} />
    </div>

    
</div>
</div>
<div className="photo-holder bg-no-repeat border-2 w-1/2 border-red-600" style={{ backgroundImage: `url(${isaac})` }}>

</div>


</div>

<h1 className="absolute right-0 font-extrabold pt-8 top-0 text-right text-gray-100 text-7xl  align-top" style={{ opacity: '10%' }}>
                story
                </h1>
        </div>
    );
}
export default About;