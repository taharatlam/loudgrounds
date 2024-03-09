'use client'
import React, {useRef, useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination,Autoplay } from 'swiper/modules';

import VenueCard from './VenueCard';

import nextNav from '../assets/images/next.svg'
import prevNav from '../assets/images/prev.svg'

const VenueSlider = () => {

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
    <div className='venue-slider-container'>
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
            slidesPerView: 1,
            spaceBetween: 20,
            },
            640: {
            slidesPerView: 3,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
            1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
        }}
        className="venue-swiper"
        ref={sliderRef}>
            {
                [...Array(5)].map(function(item,index){
                    return(
                        <SwiperSlide key={index}>
                            <VenueCard />
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

export default VenueSlider