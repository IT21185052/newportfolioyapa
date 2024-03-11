import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from 'framer-motion';


const Project = () => {
  const projects = [
    {
      img: project2,
      name: "Online Food Ordering App",
      description: "#Mern-stack",
      github_link: "https://github.com/IT21185052/Online-Food-Ordering-System-Mern-Stack",
    },
    {
      img: project1,
      name: "Online Bill & Event App",
      description: "#Html #Css #Php-JavaScript",
      github_link: "https://github.com/IT21185052/Spark.lk---Online-Bill-Event-Management-System-HTML-CSS-Javascript-PHP-",
    },
    {
      img: project3,
      name: "E-Ticketing & Transport App",
      description: "#React-Native-Expo",
      github_link: "https://github.com/IT21185052/Online-Ticketing-Checking-System-React-Native-Expo",
    },
    {
      img: project5,
      name: "Dayata-Saviya Mobile App",
      description: "#Kotlin",
      github_link: "https://github.com/IT21185052/Dayata_Saviya_MAD_Project",
    },
    {
      img: project6,
      name: "Flight Management App",
      description: "#Java-Servlets",
      github_link: "https://github.com/IT21185052/Flight_Management_System-Java_Servlet",
    },
    {
      img: project4,
      name: "Healthy Bowl Mobile App",
      description: "#React-Native-Expo",
      github_link:
        "https://github.com/IT21185052/Healthy_Bowl_Mobile_App-React_Native_Expo-Frontend-",
    },
    
  ];
  return (
    <section id="projects" className="py-24 text-white">
      <div className="text-center">
        <motion.h3 className="text-4xl font-semibold" initial={{y: -100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2,y:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
          My <span className="text-cyan-600">Projects</span>
        </motion.h3>
        <motion.p className="text-gray-400 mt-3 text-lg" initial={{y: -100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2,y:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>My awesome works</motion.p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative" >
        <motion.div className="lg:w-2/3 w-full"initial={{x: -100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <span className="text-green-400">{project_info.description}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div className="lg:block hidden"initial={{x: 100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
          <img src={project_person} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Project;