'use client'
import React, {useRef, useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination,Autoplay } from 'swiper/modules';

import quote from '../assets/images/quote.svg'
import prof from '../assets/images/test-prof.png'
import s3 from '../assets/images/s3.jpg'
import dot from '../assets/images/dot.svg'


const TestimonialCard = ({data}) => {

  return (
    <div className='test-card'>
        <Image src={quote} alt="" />
        <div className="test-det">
            <p>{data.feedback}</p>
            
            <div className="det">
                <Image src={prof} alt="" />
                <span>{data.name} </span>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard