import React from 'react';
import Project1  from "../assets/FL.jpeg";
import Project2  from "../assets/Project2.jpeg";
import Project3  from "../assets/Project3.jpeg";




export default function Project() {

    const projects = [
        {
          title: 'Using Federated Learning in anomaly detection and Analytics on real-time streaming Data of Healthcare', 
          skills: 'Federated Learning, Machine Learning, Data Science, Python',
          description: 'The main aim of this project work is to solve the problem of clinical detoriration that is caused due to medical errors. In this project we have used the Flower Framework to simulate the process of Federated Learning. This project is developed using Python.',
          image: Project1,
        },
        {
            title: 'A Portfolio Website using  React and Tailwind CSS', 
            skills: 'HTML5, CSS3, JavaScript, React.js.',
            description: 'This project is developed using React frontend library and Tailwind CSS. The main objective of this project is to learn the fundamental concepts of React and Frontend Development.',
            image: Project2,
          },
        {
            title: 'A Realtime Chat Application using Node.js', 
            skills: 'JavaScript, Node.js, Socket.io, Express',
            description: 'The main goal of this work is to learn the core concepts of Node.js essentials. The real time chat functionality is implemented using socket.io .',
            image: Project3,
        },
        
      ];
      return (
        <section className="projects text-white px-5 py-32" id="projects">
                <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-maroon-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className=" container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative projectitem" key={i}>
              <img src={project.image} alt={project.title} />
              <h4 className="text-4xl px-4 py-4 font-bold mb-5 pb-4">{project.title}</h4>
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  projectdescription opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
      );
    
}

