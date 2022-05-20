import React from 'react'
import data from "./data_projects"
import "./projects.css"
import Cards_Projects from './cards_projects'

const Projects = () => {
  return (
    <section class="projects" id="projects">
        <h1 class="heading-2"> my projects</h1>

        <div class="box-container">
            {
                data.map( obj => {
                    return(
                        <Cards_Projects
                        id={obj.id}
                        img={obj.img}
                        alt={obj.alt}
                        title={obj.title}
                        subtitle={obj.subtitle}
                        toGithub={obj.toGithub}
                        />

                    )
                })
            }            
        </div>
    </section>
  )
}

export default Projects