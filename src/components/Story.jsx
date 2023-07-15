
import family from '../assets/fam.avif'
import Store from './Store'
import ScrollMagic from "scrollmagic"

function Story() {
  const controller = new ScrollMagic.Controller()
  const scene =  new ScrollMagic.Scene({
    duration: 100,
    triggerElement: '.story'
  }).setClassToggle('.story', '.show').addTo(controller);
  return (
    <>
    
    <div className='flex flex-col md:flex-row  flex-1 story' id="story">
    <div className=' h-96 md:w-2/4 mx-auto my-auto'>
      <h2 className='font-semibold mx-8 mt-4 text-center  text-orange-500  text-2xl'>Our story</h2>
      <h3 className=' mx-8 mt-2 text-orange-400 md:text-[18px] lg:text-[20px]'>  Thanasis, Sarah and family, welcome you to the island of Skiathos. We have been renting, servicing, buying and selling motorbikes since 1989. Starting from a little coffee shop in the area of Acropolis and the name Acropolis has stuck with us ever since.  
      Acropolis motorbikes have the best reputation on the island to locals and tourists alike.
      We would love it if you contacted us for any information you would like to know.
      We try to explain the island to you as best we can, So you get to see the most of the island we love!!
      </h3>   
    </div>
    
    <div className="h-[500px] w-[300px] md:w-[400px] mt-9 mx-auto lg:w-2/4">
    <img src={family} className="rounded-md sm:h-[80%] shadow-md max-w-[80%] md:w-auto h-auto mx-auto"/>
    </div>
    </div>

    <Store/>
    </>
    
  )
}

export default Story