'use client'
import React, {useRef, useCallback} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
import Link from 'next/link';

import { Pagination,Autoplay } from 'swiper/modules';

import desk from '../assets/images/desk01.jpg'
import mob from '../assets/images/banner-mobile.jpg'


const BannerSlider = ({openModal, setShowModal}) => {

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
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="banner-swiper"
      ref={sliderRef}>
        <SwiperSlide>
          <div className="banner-slide">
            {/* <picture>
              <source srcSet={mob} media="(max-width:600px)" />
              <Image src={desk} alt="" />
            </picture> */}
            <div className="d-sm-block d-none">
              <Image src={desk} alt="" />
            </div>
            <div className="d-md-none">
              <Image src={mob} alt="" />
            </div>
            <div className="container">
              <div className="banner-con">
                <h1>
                  Make your <br  className='d-sm-block d-none' />
                  Occasion Memorable
                </h1>
                <p className="para">
                  Host an event like never before. Find the best venue, choose from trusted providers, and enjoy an experience remembered always
                </p>
                <div className='mt-3'>
                  <button className="main-btn" onClick={openModal}>
                    <span>Start planning</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
      {/* <div className="banner-nav pt-3 swiper-navigation">
        <button className="prev-arrow" onClick={handlePrev}><Image src={prevNav} alt="" /></button>
        <button className="next-arrow" onClick={handleNext}><Image src={nextNav} alt="" /></button>
      </div> */}
    </div>
  )
}

export default BannerSlider