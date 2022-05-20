import React from 'react'
import "./about.css"

const About = () => {
  return (
        <section class="about" id="about">
        <div class="heading-2">
            <h3>About me</h3>
        </div>

        <div class="info-container">
            <div class="info">
                <p> Hyago Eurico <span> : Name</span></p>
                <p> Front-end Developer <span> : Skill</span></p>
                <p> 22 <span> : Age</span></p>
                <p> Male <span> : Gender</span></p>
                <p> Computer Science <span> : Graduation</span></p>
                <p> Beginner <span> : Experience</span></p>
            </div>

            <div class="image">
                <img src="" alt=""/>
            </div>

            <div class="info">
                <p><span> Freelance : </span> Avaliable</p>
                <p><span> Language : </span> English, Portuguese</p>
                <p><span> Phone : </span> +22 12345689</p>
                <p><span> Email : </span> hyago.eurico.nsa@gmail.com</p>
                <p><span> Address : </span> Rio de Janeiro</p>
                <p><span> Country : </span> Brazil</p>
            </div>
        </div>

        <div class="line">
            <hr/>
        </div>

        <div class="skill">
            <div class="box">
                <h3 class="title"> Front-End </h3>
                <div class="progress progress-1">
                    <h3> HTML 5 <span>90%</span></h3>
                    <div class="bar"><span></span></div>
                </div>
                <div class="progress progress-2">
                    <h3> CSS 3 <span>80%</span></h3>
                    <div class="bar"><span></span></div>
                </div>
                <div class="progress progress-3">
                    <h3> JavaScript <span>65%</span></h3>
                    <div class="bar"><span></span></div>
                </div>
                <div class="progress progress-4">
                    <h3> TypeScript <span>40%</span></h3>
                    <div class="bar"><span></span></div>
                </div>
                <div class="progress progress-5">
                    <h3> React <span>60%</span></h3>
                    <div class="bar"><span></span></div>
                </div>
                <div class="progress progress-6">
                    <h3> Angular <span>40%</span></h3>
                    <div class="bar"><span></span></div>
                </div>
            </div>  

            <div class="box">
                    <h3 class="title"> Back-End </h3>
                <div class="progress progress-7">
                    <h3> MySQL <span>70%</span></h3>
                    <div class="bar"><span></span></div>
                </div>
                <div class="progress progress-8">
                    <h3> Node.js <span>65%</span></h3>
                    <div class="bar"><span></span></div>
                </div>
                <div class="progress progress-9">
                    <h3> Next.js <span>40%</span></h3>
                    <div class="bar"><span></span></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About