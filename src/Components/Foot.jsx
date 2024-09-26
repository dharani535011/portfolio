import React from 'react'
const date=new Date
const Foot = () => {
  return (
    <div className='foot'>
        <div className='fh1'>
            <h1>Dharani S</h1>
            <p style={{width:"50%"}}>I'm Dharani, fullstack Web developer.
            I am a passionate web developer, eager to start my career in the tech industry. </p>
        </div>
        <hr />
        <div className='flast' onClick={()=>{
              const se=document.querySelector(".touch")
              se.scrollIntoView({
                behavior:"smooth",
                block:"start"
              })
            }}>
            <span style={{cursor:"pointer"}}>
            Connect with me
            </span>
            <span>© {date.getFullYear()} Dharani S. All rights reserved.</span>
        </div>
    </div>
  )
}

export default Foot