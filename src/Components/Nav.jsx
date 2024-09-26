import React, { useEffect, useState } from 'react'

const Nav = () => {
   const [open,setopen]= useState(false)
   const [width,setwidth]=useState(0)

   const handleScroll = () => {
    const scroll = window.scrollY; 
    const h = document.documentElement.scrollHeight - window.innerHeight; 
    const res = (scroll / h) * 100; 
    setwidth(res); 
  };

   useEffect(() => {
    document.addEventListener('scroll', handleScroll); 
    return () => {
      document.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
<>
<div className='nav'>
        <h1>Dharani S</h1>
        <div className='serve'><ul>
            <li onClick={()=>{
              const se=document.querySelector(".home")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
            }}>Home</li>
            <li onClick={()=>{
              const se=document.querySelector(".about")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
            }}>About Me</li>
            <li onClick={()=>{
              const se=document.querySelector(".services")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
            }}>Services</li>
            <li onClick={()=>{
              const se=document.querySelector(".project")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
            }}>Portfolio</li>
            <li onClick={()=>{
              const se=document.querySelector(".touch")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
            }}>Contact</li>
        </ul></div>
       <div className='but'> <button className='button' onClick={()=>{
              const se=document.querySelector(".touch")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
            }}>Connect with me</button></div>
       <div className={`line ${open ? "show" : ""}`} onClick={() => setopen(!open)} style={{ cursor: "pointer", flexDirection: "column", gap: "5px" }}>
    <div className="line1"></div>
    <div className="line2"></div>
</div>


    </div>
    <div className={`opentab ${open?"show":""}`}>
        <div>
        <h5 onClick={()=>{
              const se=document.querySelector(".home")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
              setopen(false)
            }}>Home</h5>
        <h5 onClick={()=>{
              const se=document.querySelector(".about")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
              setopen(false)
            }}>About me</h5>
        <h5 onClick={()=>{
              const se=document.querySelector(".services")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
              setopen(false)
            }}>Services</h5>
        <h5 onClick={()=>{
              const se=document.querySelector(".project")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
              setopen(false)
            }}>Portfolio</h5>
        <h5 onClick={()=>{
              const se=document.querySelector(".touch")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
              setopen(false)
            }}>Contact</h5>
        </div>
    </div>
    <div className='progress' style={{width:`${width}vw`}}></div>
</>
  )
}

export default Nav