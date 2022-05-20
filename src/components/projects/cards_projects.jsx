import React from 'react'

function Cards_Projects(props) {
  return (
            <div key={props.id} class="box">
                <img src={props.img} alt={props.alt}/>
                <div class="content">
                    <i class="fas fa-info"></i>
                    <h3>{props.title}</h3>
                    <p>{props.subtitle}</p>
                    <a href={props.toGithub} target="_blank"class="btn">Read More</a>
                </div>
            </div>
  )
}

export default Cards_Projects