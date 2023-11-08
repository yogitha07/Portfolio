import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return(
    <header className="flex justify-between px-5 py-6 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Yogitha Muthappa
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Work Experience</a>
          </li>
          <li>
            <a href="#blogs">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1cAehCNrlU1ClplgrhIyMbQBpVjcrnYTD/view?usp=sharing" target="_blank" without rel="noreferrer">
              Cover Letter
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Work Experience</a>
          </li>
          <li>
            <a href="#blogs">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1cAehCNrlU1ClplgrhIyMbQBpVjcrnYTD/view?usp=sharing" target="_blank" without rel="noreferrer">
              Cover Letter
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
    );

}
