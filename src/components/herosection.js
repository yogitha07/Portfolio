import React from 'react';
import Typewriter from "typewriter-effect";
import backgroundImage from '../assets/newbg1.jpg';


function HeroSection() {
  
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      };

  return (
    <section className="w-screen h-screen px-5 text-white py-32 " style={sectionStyle} id = 'hero'>
        <div className="container mx-auto grid md:grid-cols-1 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0" >
            <h1 className="text-4xl lg:text-6xl">
                Hi, <br />I am <span className="text-accent">Y</span>ogitha, <br />
            </h1>
            <div className="App leading-loose py-5">
            <Typewriter
            options={{
                strings: ['A passionate developer with Masters in Computer Science', 'Discover my work and experience as a developer.'],
                autoStart: true,
                loop: true, 
            }}
            onInit={(typewriter) => {
                    typewriter.start();
                    }}
         />
         <div>
        <a
          href="https://www.linkedin.com/in/yogitha-m/"
          class="pr-4 inline-block hover:text-white text-white items-center justify-center"
        >
        <svg
          class="w-10 h-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
        <path d="M465.33 32H44.67C20.03 32 0 52.03 0 76.67v358.66C0 459.97 20.03 480 44.67 480h420.66C489.97 480 510 459.97 510 435.33V76.67C510 52.03 489.97 32 465.33 32zM151.56 416H76V209h75.56v207zm-37.78-242c-25.84 0-46.78-20.94-46.78-46.78S87.94 76.44 113.78 76.44c25.83 0 46.77 20.94 46.77 46.78s-20.95 46.78-46.77 46.78zm337.22 242H375V305.15c0-45.47-19.28-72.81-53.55-72.81-33.13 0-52.94 24.39-61.56 47.81-3.15 7.67-3.96 18.56-3.96 29.14V416h-75.56c.95-202.51 0-223.34 0-242h75.56v34.43c10.01-15.4 28.02-37.45 68.23-37.45 49.7 0 87.05 32.62 87.05 102.71V416z" />
        </svg>
      </a>

        </div>
        </div>
        
          
        </div>

        </div>
    </section>
  );
}

export default HeroSection;
