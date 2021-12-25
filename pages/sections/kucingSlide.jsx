import React from 'react'
import { Swiper, SwiperSlide ,Navigation} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '@/components/base/card';

const KucingSlide = ()=>{
    return (
        <div className='container mx-auto'>
            <Swiper
            spaceBetween={15}
            breakpoints={{
                360: {
                    slidesPerView: 1.4,
                    centeredSlides: true,
                    spaceBetween:5
                  },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween:10
                },
                1024: {
                  slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                }
              }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default KucingSlide