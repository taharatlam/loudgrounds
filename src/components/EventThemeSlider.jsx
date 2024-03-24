'use client'
import React, {useRef, useCallback} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
import Link from 'next/link';

import { Pagination,Autoplay } from 'swiper/modules';

import desk from '../assets/images/desk01.jpg'
import v1 from '../assets/images/yoga.jpg'
import v2 from '../assets/images/casual.jpg'
import v4 from '../assets/images/adventure.jpg'
import v3 from '../assets/images/birthday.jpg'
import nextNav from '../assets/images/next.svg'
import prevNav from '../assets/images/prev.svg'


const EventThemeSlider = () => {

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
    <div className='banner-swiper-container'>
      <Swiper
      // pagination={{
      //   clickable: true
      // }
      // }
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
            0: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            640: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 30,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
            1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
        }}
      className="banner-swiper"
      ref={sliderRef}>
        <SwiperSlide>
          <Link href="/" className='evnt-theme-card'>
            <Image src={v1} alt="" />
            <div className="det">
                <h3>Intimate Gatherings </h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className='evnt-theme-card'>
            <Image src={v2} alt="" />
            <div className="det">
                <h3>Special Occasions</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className='evnt-theme-card'>
            <Image src={v3} alt="" />
            <div className="det">
                <h3>Live Festivals </h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className='evnt-theme-card'>
            <Image src={v1} alt="" />
            <div className="det">
                <h3>Wellness Retreats</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className='evnt-theme-card'>
            <Image src={v4} alt="" />
            <div className="det">
                <h3>Weekend Excursions </h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className='evnt-theme-card'>
            <Image src={v1} alt="" />
            <div className="det">
                <h3>Secret Suppers</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className='evnt-theme-card'>
            <Image src={v2} alt="" />
            <div className="det">
                <h3>Listening Parties</h3>
            </div>
          </Link>
        </SwiperSlide>
     
        
      </Swiper>
      <div className="swiper-nav pt-3 swiper-navigation">
        <button className="prev-arrow" onClick={handlePrev}><Image src={prevNav} alt="" /></button>
        <button className="next-arrow" onClick={handleNext}><Image src={nextNav} alt="" /></button>
      </div>
    </div>
  )
}

export default EventThemeSlider