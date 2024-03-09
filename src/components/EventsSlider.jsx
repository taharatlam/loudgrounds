'use client'
import React, {useRef, useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination,Autoplay } from 'swiper/modules';

import nextNav from '../assets/images/next.svg'
import prevNav from '../assets/images/prev.svg'
import EventCard from './EventCard';

const EventsSlider = () => {

  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className='event-slider-container'>
        <Swiper
        // pagination={{
        //     clickable: true
        // }
        // }
        modules={[Pagination]}
        // autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        // }}
        breakpoints={{
            0: {
            slidesPerView: 1.3,
            spaceBetween: 0,
            },
            640: {
            slidesPerView: 2,
            spaceBetween: 0,
            },
            768: {
            slidesPerView: 3,
            spaceBetween: 0,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            },
        }}
        className="event-slider"
        ref={sliderRef}>
            {
                [...Array(5)].map(function(){
                    return(
                        <SwiperSlide>
                            <EventCard />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        <div className="swiper-nav pt-3 swiper-navigation">
            <button className="prev-arrow" onClick={handlePrev}><Image src={prevNav} alt="" /></button>
            <button className="next-arrow" onClick={handleNext}><Image src={nextNav} alt="" /></button>
        </div> 
    </div>
  )
}

export default EventsSlider