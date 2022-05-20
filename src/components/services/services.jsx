import React from 'react'
import "./services.css"
import data from "./data_services.js"
import Cards_Service from './cards_service'

const Services = () => {
  return (
    <section class="services" id="services">
        <h1 class="heading">my services</h1>

        <div class="box-container">

        {
                data.map( obj => {
                    return(
                        <Cards_Service
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

export default Services