import React from 'react';
import scooter from './scooter';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Motodesc from './Motodesc';

function Carousel() {
  // console.log(scooter)
  const [isHidden,setIsHidden] = useState(true)
  function setCurrent(){
    setIsHidden(!isHidden)
  }


  return (
    <div className='bg-[rgb(127, 205, 205)] w-full relative'>
    <h2 className='text-center text-[32px] font-semibold text-orange-400 mt-5'>Scooters For Rent</h2>
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

    {scooter[0].map((scooter,index)=>
       
      <SwiperSlide className='bg-white w-[80%] '>
        { (isHidden) ?
        <div className='flex flex-col h-full w-ful items-center justify-center'>
           <img className='object-center h-4/5 w-4/5 m-auto pb-6 object-contain'  src={scooter.img}/>
            
        </div>
        :<span className=' '>
          <Motodesc info = {scooter}
                    setCurrent = {setCurrent}
                    />
        </span>
      }
    </SwiperSlide>

  )})

    
    
  </Swiper>
  <button className='absolute left-[50%] z-50 translate-x-[-50%] 
            bottom-[50px] font-semibold shadow-md
            mx-auto bg-transparent p-1 rounded-md text-center text-sm text-blue-400 ring-1
            ' onClick={()=>{setIsHidden(!isHidden)
            console.log(isHidden)}}>Show more</button>
  </div>

  )
}

export default Carousel