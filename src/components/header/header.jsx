import React from 'react'
import "./header.css"

window.onscroll = () =>{
  document.getElementById("navbar").classList.remove("active");
}
function navbarUp() {
  document.getElementById("navbar").classList.add("active");
}

const Header = () => {
  
  return (
    <>
    <header class="header">
        <a id="header" href="#home" class="logo">Hyago Eurico.</a>

            <button
            onClick={navbarUp}
            id="menu-btn" class="fas fa-bars">
            </button>
            
    </header>
  </>
  )
}

export default Header