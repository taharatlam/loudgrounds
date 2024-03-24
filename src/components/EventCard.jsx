'use client'
import React, {useRef, useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination,Autoplay } from 'swiper/modules';

import img from '../assets/images/event-img.jpg'
import clock from '../assets/images/clock.svg'
import loc from '../assets/images/loc.svg'
import cal from '../assets/images/calender.svg'
import diagArrow from '../assets/images/diag-arrow.svg'

const EventCard = () => {

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
    
    <div href="/" className='event-card'>
        <div>
            <div className="event-img">
                <Image src={img} alt="" />
            </div>
            <div className="event-det">
                <h3>LOVEMAKERS</h3>
                <p>Live Festival</p>
                <ul className="ott-list">
                    <li>
                        <Image src={cal} alt="" />
                        <span>TBA</span>
                    </li>
                    <li>
                        <Image src={clock} alt="" />
                        <span>6:00PM - 1:00AM</span>
                    </li>
                    <li>
                        <Image src={loc} alt="" />
                        <span>Dubai, UAE </span>
                    </li>
                </ul>
            </div>
        </div>
        <Link href="" className="kn-wrap">
            <span>Know More</span>
            <Image src={diagArrow} alt="" />
        </Link>
    </div>
  )
}

export default EventCard