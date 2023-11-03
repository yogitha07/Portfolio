import React from "react";
import AboutImg from "../assets/aboutme.jpeg";

export default function About() {

    return (
    <section className="bg-secondary about px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info pr-4">
        <h2 className="text-4xl font-bold mb-5 pb-4">
            About Me
        </h2>
        <p className="pb-3">
            Welcome to my portfolio! I am a recent graduate with a Master's in Computer Science, specializing in cloud computing from PES University Bangalore, India. 
            My passion lies in full-stack engineering, where I bring together a blend of skills and experiences to build robust and efficient web applications.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Skills and Expertise</h3>
          <ul className="list-disc pl-6">
          <li>Programming Languages: C, Python, JavaScript, TypeScript, OOP.</li>
          <li>Web Design: HTML5, CSS3.</li>
          <li>Frontend: Angular, React.</li>
          <li>Backend: Node, SQL, NoSQL.</li>
          <li>Frameworks and Libraries:Flower, Pandas, NumPy, PySpark.</li>
          <li>Other Tools: Git, Jira, BitBucket, SourceTree, VS Code, Google BigQuery, Chrome Dev Tools.</li>
        </ul>
          <p className="pb-5 pt-4 pr-4">
          I'm committed to delivering innovative solutions and creating seamless user experiences.
           As a dedicated developer, I'm eager to take on new challenges, expand my skillset, and contribute to exciting projects.
          </p>

        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
    );

}
