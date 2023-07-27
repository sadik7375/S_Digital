import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Intoduction from './Components/UI/Intoduction'
import Counter from './Components/UI/Counter'
import Services from './Components/UI/Services'
import About from './Components/UI/About'
import Team from './Components/UI/Team'
import Footer from './Components/Footer/Footer'


function App() {
  

  return (
    <>
    <div>
      <Header></Header>
   
      <Intoduction></Intoduction>

      <Counter></Counter>
      <Services></Services>
      <About></About>
     <Team></Team>
  
      
    </div>
   
      
    </>
  )
}

export default App
