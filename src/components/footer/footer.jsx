import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <section class="footer">
        <div class="share">
            <a href="https://www.linkedin.com/in/hyago-eurico-421654207/" target="_blank" class="fab fa-linkedin"> </a>
            <a href="https://github.com/Hyago-nsa" target="_blank" class="fab fa-github"> </a>
        </div>

        <div class="link">
            <a href="#home" class="btn">Home</a>
            <a href="#about" class="btn">About</a>
            <a href="#services" class="btn">Services</a>
            <a href="#projects" class="btn">Projects</a>
            <a href="#contact" class="btn">Contact</a>
        </div>

        <div class="credit"> Created By <span>Hyago Eurico</span> | All Rights Reserved &copy;</div>
    </section>
  )
}

export default Footer