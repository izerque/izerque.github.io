import React from "react";

function Nav (){

    return(
        <nav className=" px-5 flex flex-row justify-between font-light decoration-none">
        <li className="list-none px-5">
            <a href="#"className="decoration-none">
                Home
            </a>
        </li>
        <li className="list-none px-5">
            <a>
                Skills
            </a>
        </li>
        <li className="list-none px-5">
            <a>
                Blog
            </a>
        </li>
        <li className="list-none px-5">
            <a>
                Contact
            </a>
        </li>
    </nav>
    )
}

export default Nav;