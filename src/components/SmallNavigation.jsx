import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SmallNavigation( {scooters} ) {
    console.log(scooters)
  return (
    <div className='w-full'>
  
            <div className='w-28'>
                <img src={scooters[0][1].img} className='w-full'/>
                <span className=''>{scooters[0][1].name}</span>
            </div>
            
          
         
           
    </div>
  )
}

export default SmallNavigation