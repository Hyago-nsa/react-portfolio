import React from 'react'
import "./contact.css"
import { useRef } from 'react';
import emailjs from "@emailjs/browser"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h4wbm9d', 'template_y0qafaa', form.current, '7CuPXS4xj2MgKMMB1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section class="contact" id="contact">
        <h1 class="heading"> contact me</h1>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="name" class="box"/>
            <input type="email" name="email" placeholder="email" class="box"/>
            <input type="number" name="phone" placeholder="phone" class="box"/>
            <textarea name="message" placeholder="message" class="box" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" class="btn"/>
        </form>
    </section>
  )
}

export default Contact