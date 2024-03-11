import React,{useRef} from "react";
import aboutImg from "../assets/images/about.png";
import { motion } from 'framer-motion';

const About = () => {
  
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <motion.h3 className="text-4xl font-semibold"initial={{y: -100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2,y:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
          About <span className="text-cyan-600">Me</span>
        </motion.h3>
        <motion.p className="text-gray-400 my-3 text-lg"initial={{y: -100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2,y:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>My introduction</motion.p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <motion.div className="text-gray-300 my-3" >
              <motion.p className="text-justify leading-7 w-11/12 mx-auto" initial={{x: -100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
              Welcome to my portfolio website! I'm a passionate BSc (Hons) Software Engineering student at the Sri Lanka Institute of Information Technology, equipped with a robust skill set in Java, JavaScript, and React. I thrive on leveraging frameworks like the MERN stack to craft seamless software solutions. With expertise in CSS frameworks, including Bootstrap5, and proficiency in SQL databases, I'm adept at delivering integrated software products that captivate users.

I'm excited about the opportunity to translate my academic knowledge into real-world impact and contribute effectively to your team's success.
             </motion.p>
             
              <br />
              <br />
            </motion.div>
          </div>
          <motion.div className="flex-1 md:mt-0 mt-6 flex justify-center items-center" initial={{x: 100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;