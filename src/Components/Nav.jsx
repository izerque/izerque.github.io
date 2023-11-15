import React from "react";
import { useState } from "react";

 function Nav({ items }) {
  const [hoveredItem, setHoveredItem] = useState(null);

   return (
     <nav className="px-5 flex flex-row justify-between font-light decoration-none">
       {items.map((item, index) => (
         <li key={index} className="list-none px-5">
         <a href={`/${item}`} onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)} style={{ textDecoration: hoveredItem === index ? 'underline' : 'none', transition: 'text-decoration 1s ease-in-out 0.5s' }}>{item}</a>
         </li>
       ))}
     </nav>
   );
 }

 export default Nav;