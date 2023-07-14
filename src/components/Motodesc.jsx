import { useState } from "react"


function Motodesc( { info, setCurrent, current } ) {
  console.log(info)
  return (
    <div className='transition duration-300 w-full md:w-2/4 bg-slate-400 h-[250px] 
    relative rounded-md m-auto drop-shadow-md text-white'>
    <div className=' pt-3 text-center md:text-[20px]'>
    
      <h2 className=''>Model: {info.name}</h2>
      <h3 className=''>CC: {info.cc}</h3>
      <h3 className=''>Colors: {info.color}</h3>
      <h3 className=''>Drivers Licence: {info.licence}</h3>
      <h3 className=''>Capacity: {info.passengers}</h3> 
      <button className='absolute top-0 right-0'  onClick={setCurrent('false')}>❌</button>     
    </div> 
      </div>
  )
}

export default Motodesc