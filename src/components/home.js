import React from "react";
import About from './about';
import Blogs from './blogs';
import NavBar from './navbar';
import Project from './projects';
import WorkExp from './workexp';
import HeroSection from "./herosection";
import Contact from "./contact";



export default function Home() {

    return (
        <div>
            <NavBar />
            <HeroSection />
            <About />
            <Project />
            <WorkExp />
            <Blogs />
            <Contact />
        
        </div>
    );

}