import React from 'react'
import "./cursor.css"

let cursor = document.querySelector(".cursor");

window.onmousemove = (e) =>{
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
}

const Cursor = () => {
  return (<>
    </>
  )
}

export default Cursor