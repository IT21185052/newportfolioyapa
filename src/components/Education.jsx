import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import logo from "../assets/images/2.png";
import logo2 from "../assets/images/1.png";
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-10 px-3 " >
      <div className="text-center">
      <br></br>
      <br></br>
        <motion.h3 className="text-4xl font-semibold" initial={{y: -100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2,y:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>
          Educa<span className="text-cyan-600">tion</span>
        </motion.h3>
        <motion.p className="text-gray-400 mt-3 text-lg" initial={{y: -100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2,y:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>My Education Background</motion.p>
      </div>
      <br></br>
      <div className="education">
        <VerticalTimeline lineColor="#fff">
          <VerticalTimelineElement className='vertical-timeline-element--education'style={{ fontWeight: 'bold' }}
           iconStyle={{background:'#000',color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'}} // Updated iconStyle
           icon={<img src={logo} alt="Logo" style={{width: '50px', height: '50px'}} />}
          date="2021-Present" >
            <motion.h2 style={{ fontWeight: 'bold' }} initial={{x: -100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>Bacheloar's Degree</motion.h2>
            <motion.small style={{ color: '#000' }} initial={{x: -100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>Sri Lanka Institute Of Information Technology(SLIIT)</motion.small>
            <div style={{ backgroundColor: '#0d6efd', color: '#fff', padding: '10px', borderRadius: '5px', margin: '10px 0' }}>
              <motion.p style={{ fontWeight: 'bold' }} initial={{x: -100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>Currently reading for my Bachelors' Degree in Software Engineering (Bsc.(Hons) Information Technology Specialization in Software Engineering) at SriLanka Institute of Information Technology (SLIIT).</motion.p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--education'
          iconStyle={{background:'#000',color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'}} // Updated iconStyle
          icon={<img src={logo2} alt="Logo2" style={{width: '50px', height: '50px'}} />} // Updated icon
          date="2019">
            <motion.h2 style={{ fontWeight: 'bold' }} initial={{x: 100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>G.C.E (Advanced Level)</motion.h2>
            <motion.small style={{ color: '#000',fontWeight: 'bold' }} initial={{x: 100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>St.Anne's College , Kururnegala</motion.small>
            <div style={{ backgroundColor: '#0d6efd', color: '#fff', padding: '10px', borderRadius: '5px', margin: '10px 0' }}>
              <motion.p style={{ fontWeight: 'bold' }} initial={{x: 100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1,}}>Passed General Certificate Advanced Level Exam in Other stream with 3 C (Combined Maths,Physics,ICT) Passes.<br></br>INDEX NO:8155070</motion.p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;