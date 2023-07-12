import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import simpleParallax from 'simple-parallax-js';
import NavBar from "./components/NavBar"
import Hero from './components/Hero';
import Story from './components/Story';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <NavBar />
        <Hero  />
        
      </div>
      <Story />
      
    </>
  )
}

export default App
