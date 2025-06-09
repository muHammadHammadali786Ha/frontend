/* eslint-disable no-unused-vars */
// import React from 'react';
import './Sales.css';
import { data } from './data';
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
// import SwiperCore, {     Pagination } from 'swiper';

// SwiperCore.use([ Pagination]);

const Sales = () => {
   


    return (
        <div className='sales'>
            <div className='relative my-8'>
            <h2 className='text-2xl font-bold '>Sale Off</h2>
            <div className='abosulte w-[5rem] h-1 bg-[#7fad39] mt-3 mx-[2rem]'></div>
            </div>
               
            <div className="flex gap-3 overflow-hidden" >
             
                {data.map((item) => (
                    <div className='' key={item.id} >
                <Swiper spaceBetween={10}
                 autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log()}
        onSwiper={(swiper) => swiper.autoplay.start()}     
        scrollbar={false}
        // pagination={{
        //     clickable: true,
        //   }}
        //   modules={[Pagination]
        //   className="mySwiper"
          style={{ width: '350px' }}
       
      >     
                            
                            <SwiperSlide ><img src={item.img} alt=""/></SwiperSlide>  
      </Swiper>
                        </div>
                    ))}
                {/* </div> */}
                {/* </Slider> */}
            </div>
       
        ...
        </div>
    );
}

export default Sales;











// // import React from 'react'
// import './Sales.css';
// import { data } from './data';
// // import Slider from "react-slick";
// const Sales = () => {
//     // var settings = {
//     //     dots: true,
//     //     infinite: true,
//     //     speed: 500,
//     //     slidesToShow: 1,
//     //     slidesToScroll: 1,
//     //   };
//   return (
//     <div className='sales'>
//         <h2>Sale Off</h2>
//         <div className="saleData">
//         {/* <Slider {...settings}> */}
//             <div>
//             {
//                 data.map((item)=>{
//                     return(
//                     <div key={item.id}>
//                         <img src={item.img} alt="" />
//                     </div>
//                     )
//                 })
//             }
//         </div>
//         {/* </Slider> */}
//         </div>  
//     </div>
//   )
// }

// export default Sales