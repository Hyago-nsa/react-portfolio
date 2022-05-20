import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav id="navbar" class="navbar">
    <a href="#home" >home</a>
    <a href="#about" class="about">about</a>
    <a href="#services" class="services">services</a>
    <a href="#projects" class="projects">projects</a>
    <a href="#contact" class="contact">contact</a>
</nav>
  )
}

export default Navbar