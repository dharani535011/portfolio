import React from 'react'
import img from "../../public/me2.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className='a1'>
        <h1>About me</h1>
        <div className='a2'>
            <div className='ai'><img src={img} alt="img" /></div>
            <div className='ab'>
                <p>I am an aspiring fullstack web Developer eager to kickstart my career in the field. Although I may not have extensive professional experience yet, I have a strong foundation in web development principles and a passion for creating engaging user experiences. I am excited to contribute my skills and enthusiasm to a dynamic team, learning and growing within a collaborative environment.</p>
                <p> I gained hands-on experience in both frontend technologies like HTML, CSS, and JavaScript, along with popular frameworks like React, and backend technologies including Node.js , Express ,mongo db ,my sql. My goal is to create robust, user-friendly web applications that enhance user experience and performance.</p>
                <div className='sh'>
                    <span><h4>HTML & CSS</h4><span style={{width:"50%"}}></span></span>
                    <span><h4>javaScript</h4><span style={{width:"54%"}}></span></span>
                    <span><h4>React JS</h4><span style={{width:"45%"}}></span></span>
                    <span><h4>React Native</h4><span style={{width:"30%"}}></span></span>
                    <span><h4>bootStrap</h4><span style={{width:"35%"}}></span></span>
                    <span><h4>My Sql</h4><span style={{width:"40%"}}></span></span>
                    <span><h4>Node JS</h4><span style={{width:"50%"}}></span></span>
                    <span><h4>Mongo DB</h4><span style={{width:"50%"}}></span></span>
                </div>
            </div>
        </div>
        <div>
            <div className='al'><h1>3+</h1><h4>PROJECTS COMPLETED</h4></div>
        </div>
        </div>
    </div>
  )
}

export default About