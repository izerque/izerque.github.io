import React from "react";

function Nav({ items }) {
  return (
    <nav className="px-5 flex flex-row justify-between font-light decoration-none">
      {items.map((item, index) => (
        <li key={index} className="list-none px-5">
          <a href={`/${item}`}>{item}</a>
        </li>
      ))}
    </nav>
  );
}

export default Nav;