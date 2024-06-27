import React from "react";
import hero from "../assets/images/heroyapa.png";
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren:0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 10,
    },
  },
};

const Hero = () => {
  const social_media = [
    "logo-linkedin",
    "logo-github",
    "logo-instagram",
    "logo-twitter",
  ];

  const getSocialMediaUrl = (icon) => {
    switch (icon) {
      case "logo-linkedin":
        return "https://www.linkedin.com/in/dhananjaya-yapa-16b14221a/";
      case "logo-github":
        return "https://github.com/IT21185052";
      case "logo-instagram":
        return "https://www.instagram.com/mr_yapa/";
      case "logo-twitter":
        return "https://twitter.com/YapaD99";
      default:
        return "#"; // Default to "#" if the icon doesn't match any known social media platform
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <motion.div className="flex-1 flex items-center justify-center h-full"  initial={{x: -100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
        <motion.img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </motion.div>
      <motion.div className="flex-1" variants={textVariants} initial="initial" animate="animate">
        <motion.div className="md:text-left text-center" initial={{x: 100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
          <motion.h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold" initial={{x: 100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!...It's Me!
              <br />
            </span>
            I'm <span>Dhananjaya Yapa</span>
          </motion.h1>
          <motion.h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600" initial={{x: 100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}} style={{ textShadow: '0 0 1px white' }}>
          <Typewriter
          words={['Full-Stack Developer | Undergraduate']}
          loop
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          />
        </motion.h4>

          
          <a href="Software Engineering Intern-Resume.pdf" download="Dhananjaya Yapa Software Engineering Intern Resume.pdf">
                <motion.button className="btn-primary "initial={{x: 100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>Download CV</motion.button>
              </a>
          
          <motion.div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5" variants={textVariants}>
            {social_media?.map((icon) => (
              <a key={icon} href={getSocialMediaUrl(icon)} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white cursor-pointer">
                <motion.div>
                  <ion-icon name={icon}></ion-icon>
                </motion.div>
              </a>
            ))}
          </motion.div>

          <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" style={{ position: 'absolute', fontSize: '20vh', bottom: '480px', whiteSpace: 'nowrap', color: '#ffffff09', width: '50%',fontWeight: 'bold' }}>
            Full Stack Developer
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
