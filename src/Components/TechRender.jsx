import React from 'react';

const TechRender = ({items}) => {
  return (
    <nav className="flex flex-row flex-wrap gap-4 font-light decoration-none">
      {items.map((item, index) => (
        <li key={index} className="list-none">
          <button className='border-[1.5px]  border-cyan-600 rounded-full cursor-pointer hover:bg-cyan-600   text-cyan-600  text-[12px] font-semibold w-auto hover:bg-opacity-20 px-[16px] py-[4px]'>{item}</button>
        </li>
      ))}
    </nav>
  );
};

export default TechRender;