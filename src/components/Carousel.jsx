import React from 'react';

import { useState, useRef, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Motodesc from './Motodesc';
import SmallNavigation from './SmallNavigation';

function Carousel({ scooter}) {

    const ref = useRef(null);
    useEffect(() =>{
      console.log(ref)
    },[])

  // console.log(scooter)
  const [isHidden,setIsHidden] = useState(true)
  function changeCurrent(){
    setIsHidden(!isHidden)
  }


  return (
    <div className='bg-[rgb(127, 205, 205)] w-full relative mt-8'>
    <h2 className='text-center text-[32px] font-semibold text-orange-400 mt-5'>
      {(scooter.length > 3) ? "Motorbikes For Rent" :"Quad ATVS For rent"}
    </h2>
    
  {    (window.innerWidth > 500) ?
    <span className='w-4/6 mx-auto mt-4 shadow-2xl h-[2px] bg-orange-300 block'></span>
    : ""
  }    
    <Swiper
    className='h-[350px] w-[80%] rign-0 mt-10 lg:h-[800px]'
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
  >

    {scooter.map((scooter,index)=>
       
      <SwiperSlide className='bg-white w-[80%] '>
        { (isHidden) ?
        <div className='flex flex-col h-full w-ful items-center justify-center'>
           <img className='object-center h-4/5 w-4/5 m-auto pb-6 object-contain'  src={scooter.img}/>
            <span className='top-5 left-24 absolute bg-cyan-300 p-[4px] rounded-sm text-white'>{scooter.name}</span>
        </div>
        :<span className=' '>
          <Motodesc info = {scooter}
                    changeCurrent = {changeCurrent}
                    isHidden={isHidden}
                    
                    />
        </span>
      }
    </SwiperSlide>

  )})

    
    
  </Swiper>
  {
  (isHidden)?
  <button className='absolute left-[50%] z-10 translate-x-[-50%] 
            bottom-[50px] shadow-sm
            mx-auto bg-transparent p-2 rounded-md text-center text-md text-orange-500 ring-orange-500
            lg:w-[120px] lg:p-3 lg:text-[16px] hover:bg-orange-400 hover:text-white' onClick={()=>{setIsHidden(!isHidden)
            console.log(isHidden)}}>Show Details</button>

            : ""
  }
  {/* <div className='block'>
    <SmallNavigation  scooters={scooter}/>
  </div> */}

  </div>

  )
}

export default Carousel