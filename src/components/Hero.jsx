
import atv from '../assets/skiathos.avif'
import simpleParallax from 'simple-parallax-js';

function Hero() {
  return (
    <div className={`w-full h-[600px] md:h-[700px] bg-[url(${atv})] 
        bg-left bg-cover bg-fixed
        object-cover
        aspect-square overflow-hidden thumbnail`}>
        
    </div>
  )
}

export default Hero

const picture= document.getElementsByClassName('thumbnail');
console.log(picture)

new simpleParallax(picture,{
    orientation:"top",
        overflow:true,
        
});