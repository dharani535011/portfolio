import React from 'react'
import img from "../../public/me.jpg"

const Home = () => {
  return (
    <div className='home'>
           <div className='home1'>
           <div className='me'>
            <img className='mi' src={img} alt="img" />
           </div>
        <div className='name'>
            <h1><span>I'm Dharani,</span> fullstack Web developer.</h1>
        </div>
        <div className='jus'><p>I am a passionate web developer, eager to start my career in the tech industry. I have recently completed my studies in web development.</p></div>
        <div className='bb'> 
            <button className='button' style={{height:"52px"}} onClick={()=>{
              const se=document.querySelector(".touch")
              se.scrollIntoView({
                behavior:"smooth",
                block:"center"
              })
              setopen(false)
            }}>Connect with me</button>
            <a href="https://drive.google.com/file/d/10z8L0Qsuu3ulElYO9zrng7fj1v-3zfvv/view?usp=drive_link"><button className='bu' style={{height:"52px"}}>My resume</button></a>
        </div>
           </div>
        </div>
  )
}

export default Home