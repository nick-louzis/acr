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
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide className='bg-white w-[80%] '>
        { (isHidden) ?
        <div className='flex flex-col h-full w-ful items-center justify-center'>
           <img className='object-center h-4/5 w-4/5 m-auto object-contain'  src={scooter[0][0].img}/>
            
        </div>
        :<span className=' w-16 h-16 bg-slate-500 absolute '>
          <Motodesc info = {scooter[0]}/>
        </span>
      }
    </SwiperSlide>
    <SwiperSlide className=' '><img className='object-center h-full w-full sm:object-scale-down object-contain'  src={scooter[0][1].img}/></SwiperSlide>
    <SwiperSlide className=' '><img className='object-center h-full w-full sm:object-scale-down object-contain'  src={scooter[0][2].img}/></SwiperSlide>
    <SwiperSlide className=' '><img className='object-center h-full w-full sm:object-scale-down object-contain'  src={scooter[0][3].img}/></SwiperSlide>
    
  </Swiper>
  <button className='absolute left-[50%] z-50 translate-x-[-50%] bottom-[50px] 
            mx-auto bg-blue-400 p-1 rounded-xl text-center text-sm text-white
            ' onClick={()=>{setIsHidden(!isHidden)
            console.log(isHidden)}}>Show more</button>
  </div>

  )
}

export default Carousel