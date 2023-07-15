import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import simpleParallax from 'simple-parallax-js';
import NavBar from "./components/NavBar"
import Hero from './components/Hero';
import Story from './components/Story';
import Carousel from './components/Carousel';
import Location from './components/Location';
import scooter from './components/scooter';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='' >
        <NavBar />
        <Hero  />
        <Story />
        <Carousel scooter={scooter[0]}/>
        <span className='block h-24'></span>
        <Carousel scooter={scooter[1]}/>
        <Location />
        <Footer />
      </div>
      
      
    </>
  )
}

export default App
