import React from 'react'
import "./services.css"

function Cards_Service(props) {
  return (
      <article key={props.id}>
        <div class="box">
            <img src={props.img} alt={props.alt}/>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            <a href={props.toGithub} class="btn">Read More</a>
        </div>
    </article>
  )
}

export default Cards_Service