'use client'
import React, {useRef, useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination,Autoplay } from 'swiper/modules';

import img from '../assets/images/venue.jpg'

const VenueCard = () => {

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
    
    <Link href="/" className='venue-card'>
        <div className="venue-img-slider">
            <Swiper
            pagination={{
                clickable: true
            }}
            simulateTouch = {false}
            modules={[Pagination]}
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            // }}
            className="venue-img-swiper"
            ref={sliderRef}>
                {
                    [...Array(5)].map(function(){
                        return(
                            <SwiperSlide>
                                <div className="venue-img">
                                    <Image src={img} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
        <div className="venue-det">
            <h3>Arab Expediiton</h3>
            <p>Dubai, UAE</p>
        </div>
    </Link>
  )
}

export default VenueCard