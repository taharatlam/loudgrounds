'use client'
import React, {useRef, useCallback} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
import Link from 'next/link';

import { Pagination,Autoplay } from 'swiper/modules';

import desk from '../assets/images/desk01.jpg'
import nextNav from '../assets/images/next.svg'
import prevNav from '../assets/images/prev.svg'
import gal1 from '../assets/images/gal1.jpg'


const GallerySlider = () => {

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
    <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div style={{'position':'relative'}}>
                        <h3 className="sec-head big text-center">
                            loudgrounds <br className='d-sm-block d-none' />
                            made it
                        </h3>
                        <div className="swiper-nav gallery-nav pt-3 swiper-navigation">
                            <button className="prev-arrow" onClick={handlePrev}><Image src={prevNav} alt="" /></button>
                            <button className="next-arrow" onClick={handleNext}><Image src={nextNav} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='gallery-swiper-container'>
        <Swiper
        // pagination={{
        //     clickable: true
        // }
        // }
        modules={[Pagination, Autoplay]}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop = {true}
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
                slidesPerView: 4,
                spaceBetween: 30,
                },
                1024: {
                slidesPerView: 3.5,
                spaceBetween: 30,
                },
            }}
        className="banner-swiper"
        ref={sliderRef}>
            <SwiperSlide>
                <div className='gal-item'>
                    <Image src={gal1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='gal-item'>
                    <Image src={gal1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='gal-item'>
                    <Image src={gal1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='gal-item'>
                    <Image src={gal1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='gal-item'>
                    <Image src={gal1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='gal-item'>
                    <Image src={gal1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='gal-item'>
                    <Image src={gal1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='gal-item'>
                    <Image src={gal1} alt="" />
                </div>
            </SwiperSlide>

        </Swiper>
        
        </div>
        <div className="container">
            <div className="row justify-content-end mt-5">
                <div className="col-lg-5 col-12">
                    <p className="para text-right">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
                    </p>
                    <a href="" className="main-btn right no-arrow white-btn">
                        <span>Discover the Possibilities</span>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default GallerySlider