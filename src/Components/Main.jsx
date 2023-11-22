import React from "react";
import Welcome from "./welcome";
import About from './About'
import Projects from "./Projects";


const Main = () => {
    return(
        <section className="">
            <div className="w-full md:w-full flex flex-col justify-center md:justify-start md:items-start">
            {/* card */}
            <Welcome />
            <About />
            <Projects />

            

        </div>

        </section>
    );
}

export default Main;