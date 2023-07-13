import { useRef } from 'react'
import StoreView from '../assets/Store-View.avif'
import simpleParallax from 'simple-parallax-js';

function Store() {
  const parallax = useRef(null)

  console.log(parallax);
  

  return (
    <div className={`w-full h-[500px] md:h-[800px] md:mt-28 mt-10 bg-[url(${StoreView})]
    bg-cover bg-no-repeat  bg-center `} ref={parallax}>
    </div>
  )
}



export default Store

