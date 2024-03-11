import React, { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_66kz42a', 'template_aojn81b', form.current, {
        publicKey: 'NMv6rzwG82mGfKYhH',
      })
      .then(
        () => {
          console.log('Message Sent!');
          setShowMessage(true); // Set state to show the message
          setTimeout(() => setShowMessage(false), 3000); // Hide the message after 3 seconds
          // Reset form fields
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  

  const contact_info = [
    { logo: "mail", text: "dhananjayayapa99@gmail.com" },
    { logo: "logo-whatsapp", text: "+94 713 015 251" },
    { logo: "location", text: "Colombo,Sri Lanka." },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <motion.h3 className="text-4xl font-semibold" initial={{y: -100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2,y:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
          Contact <span className="text-cyan-600">Me</span>
        </motion.h3>
        <motion.p className="text-gray-400 mt-3 text-lg" initial={{y: -100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2,y:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>Get in touch</motion.p>

        <motion.div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto" initial={{y: 100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2,y:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}
        >
          <form className="flex flex-col flex-1 gap-5" ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" />
            <input type="Email" name="user_email" placeholder="Your Email Address" />
            <textarea name="message" placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {showMessage && (
        <motion.div
          className="fixed bottom-10 right-10 bg-green-500 px-4 py-2 rounded-lg text-white"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          Message Sent!
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
