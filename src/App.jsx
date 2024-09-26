import React from 'react'
import "./App.css"
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Project from './Components/Project'
import Touch from './Components/Touch'
import Foot from './Components/Foot'
const App = () => {
  return (
    <div > 
      <Nav/>
      <Home/>
      <About/>
      <Services/>
      <Project/>
      <Touch/>
      <Foot/>
       </div>
  ) 
}

export default App