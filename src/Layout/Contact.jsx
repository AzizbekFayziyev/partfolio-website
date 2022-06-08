import React, { useRef, useState } from 'react'
import Footer from './Footer'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setName(prev => prev = "");
    setEmail(prev => prev = "");
    setTextarea(prev => prev = "");

    emailjs.sendForm('service_p161bss', 'template_z89r7tr', form.current, 'XeNRpW_galsNCpvzG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    alert("Message Sended")
  };

  const getName = (e) => {
    setName(e.target.value);
  }

  const getEmail = (e) => {
    setEmail(e.target.value);
  }

  const getTextarea = (e) => {
    setTextarea(e.target.value);
  }

  return (
    <>
      <section className="contact container">
        <h1 data-aos="zoom-in-up" className='info'>Contact Me</h1>

        <form ref={form} onSubmit={sendEmail}>

          <input
            name="user_name"
            data-aos="slide-left"
            className='mx-auto form-control'
            type="text"
            placeholder='Your Name'
            value={name}
            onChange={getName}
            required
          />

          <input
            name="user_email"
            data-aos="slide-right"
            className='my-3 mx-auto form-control'
            type="email"
            placeholder='Your E-Address'
            value={email}
            onChange={getEmail}
            required
          />

          <textarea
            name="message"
            data-aos="slide-up"
            className='mx-auto form-control'
            placeholder='Your Massage'
            cols="30" rows="10"
            value={textarea}
            onChange={getTextarea}
            required
          >

          </textarea>

          <button data-aos="fade-up" className='mx-auto d-block mt-3' type='submit'>Send Massage</button>

        </form>

      </section>

      <Footer />
    </>
  )
}
