import React from "react";
import { FaPhp,FaHtml5,FaCss3Alt,FaJava,FaPython,FaNodeJs,FaReact,FaBootstrap,FaGithub,FaGitAlt } from 'react-icons/fa';
import { RiJavascriptFill } from "react-icons/ri";
import { SiCplusplus,SiKotlin,SiPostman } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";
import { motion } from 'framer-motion';


const Skills = () => {
  const skills = [
    {
      logo: <FaHtml5 />,
      level: "Html",
      count: 0,
    },
    {
      logo: <FaCss3Alt />,
      level: "CSS",
      count: 0,
    },
    {
      logo: <RiJavascriptFill />,
      level: "JavaScript",
      count: 0,
    },
    {
      logo: <FaJava />,
      level: "Java",
      count: 0,
    },
    {
      logo: <FaPython />,
      level: "Python",
      count: 0,
    },
    {
      logo: <FaNodeJs />,
      level: "NodeJS",
      count: 0,
    },
    {
      logo: <FaReact />,
      level: "React",
      count: 0,
    },
    {
      logo: <SiCplusplus />,
      level: "C++",
      count: 0,
    },
    {
      logo: <SiKotlin />,
      level: "Kotlin",
      count: 0,
    },
    {
      logo: <FaPhp />,
      level: "Php",
      count: 0,
    },
    {
      logo: <DiMongodb />,
      level: "MongoDB",
      count: 0,
    },
    {
      logo: <TbFileTypeSql />,
      level: "SQL",
      count: 0,
    },
    {
      logo: <FaBootstrap />,
      level: "Bootstrap",
      count: 0,
    },
    {
      logo: <GrOracle />,
      level: "Oracle",
      count: 0,
    },
    {
      logo: <SiPostman />,
      level: "Postman",
      count: 0,
    },
    {
      logo: <FaGithub />,
      level: "GitHub",
      count: 0,
    },
    {
      logo: <FaGitAlt />,
      level: "Git",
      count: 0,
    },
  ];
  return (
    <section id="skills" className="py-16 bg-gray-800 relative"> {/* Adjusted padding from py-28 to py-16 */}
      <div className="mt-16 text-gray-100 text-center"> {/* Adjusted margin from mt-16 to mt-8 */}
        <motion.h3 className="text-4xl font-semibold" initial={{y: -100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2,y:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
          My <span className="text-cyan-600">Skills</span>
        </motion.h3>
        <motion.p className="text-gray-400 mt-3 text-lg" initial={{y: -100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2,y:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>My knowledge</motion.p>
        <motion.div className="flex items-center justify-center mt-8 gap-5 flex-wrap"initial={{x: -100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}> {/* Adjusted margin and reduced gap */}
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[8rem] max-w-[10rem] bg-gray-900 p-6 rounded-lg" // Adjusted width, height, and padding
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-20 h-20 flex items-center justify-center rounded-full" // Adjusted width and height
              >
                <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  
                  {skill.logo}
                </div>
              </div>
              <p className="text-lg mt-3">{skill.level}</p> {/* Adjusted font size */}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
