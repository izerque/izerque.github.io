import React from "react";
import TechRender from "./TechRender";






// development projects component
const developmentProjects = [
    {
        name: "RentSafe",
        description: "Description of Project 1",
        type: "Development",
        items:["RectJS", "Tailwind Css", "Typescript" ],
        thumbnail:"jhjg"
    },
    {
        name: "Gift Me",
        description: "Description of Project 2",
        type:"Development",
        items: ["nextjs", "tailwind css", "graphql"],
        thumbnail:"jhjg"
    },
   
    
    {
        name: "Profolio",
        description: "Description of Project 5",
        type: "Development",
        items: ["NextJs", "Tailwind CSS", "GraphQL"], 
        thumbnail:"jhjg"
    }
];

const designProjects =[
    {
        name: "SafiServe",
        description: "Description of Project 4",
        type: "Design",
        items: ["Figma", "Illustrator"],
        thumbnail:"jhjg"
    },
    {
        name: "Epic Inc",
        description: "Description of Project 3",
        type: "Design",
        items: ["Figma", "Illustrator"], 
        thumbnail:"jhjg"
    }, 
]



// project card

// Reusable project card component
function ProjectCard(props) {
  const { name, description, items, thumbnail } = props;
  
  return (
    <div className="h-[200px] flex justify-center items-center border border-gray-700 rounded-lg">
      <div className="px-1 justify-center flex gap-4 items-center">
        {/* project thumbnail */}
        <div className="w-4/12 h-[190px] bg-gray-500 rounded-lg">
          <div className="image-div w-[250px] h-[250px] bg-no-repeat bg-cover text-white rounded" style={{ backgroundImage: `url('${thumbnail}')` }}></div>
        </div>
        <div className="w-8/12 flex flex-col gap-3">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="text-gray-400 text-sm">{description}</p>
          <div className="">
            <TechRender items={items} />
            
    </div>
                </div>
            </div>
        </div>
    );
}


console.log(typeof item);





// development projects component
const DevelopmentProjects =(props)=>{
    return(
        <div className="">
           <ul className=" flex  bg-no-repeat gap-5">
          {developmentProjects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              techItems={project.techitems}
              thumbnail={project.thumbnail}
            />
          ))}
        </ul> 
         
        </div>
    )
}


// design projects
const DesignProjects =(props)=>{
    return(
        <div className="">
           <ul className=" flex  bg-no-repeat gap-5">
          {DesignProjects.map((project) => (
            <ProjectCard
            key={project.name}
              name={project.name}
              description={project.description}
              techItems={project.techitems}
              thumbnail={project.thumbnail} 
             />
          ))}
        </ul> 
        </div>
    )
}















export default ProjectCard;

