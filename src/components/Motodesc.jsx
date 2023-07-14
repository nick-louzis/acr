import { Transition } from "@headlessui/react"
import { useRef} from "react"



function Motodesc( { info, changeCurrent,isHidden } ) {

  const ref = useRef(null);


  return (

    <Transition
        show={!isHidden}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-550"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
              >
  
    <div  id="desc" ref={ref} className='transition  duration-300 w-full md:w-2/4 bg-orange-200 z-[1000]
    relative rounded-md m-auto drop-shadow-md text-white pb-8 shadow-lg'>
    <div className=' pt-3 text-center md:text-[20px]'>
    
      <h2 className=''>Model: {info.name}</h2>
      <h3 className=''>CC: {info.cc}</h3>
      <h3 className=''>Colors: {info.color}</h3>
      <h3 className=''>Drivers Licence: {info.licence}</h3>
      <h3 className=''>Capacity: {info.passengers}</h3> 
      <div className="w-[100%] object-cover rounded-lg 
      "><img src={info.img} className=" w-[40%] shadow-md  mt-8 rounded-lg m-auto"/></div>
     

      <button className='absolute top-0 right-2 font-bold text-lg text-blue'  onClick={changeCurrent}>X</button>     
    </div> 
      </div>
      </Transition>
  )
}

export default Motodesc