'use client'
import React, {useRef, useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination,Autoplay } from 'swiper/modules';

import s1 from '../assets/images/s1.jpg'
import s2 from '../assets/images/s2.jpg'
import s3 from '../assets/images/s3.jpg'
import dot from '../assets/images/dot.svg'


const SlateCard = () => {

  return (
    <Link href="/" className='slate-card'>
        <div className="slate-grid">
            <div className="slate-img">
            <Image src={s1} alt="" />
            </div>
            <div className="slate-img">
            <Image src={s2} alt="" />
            </div>
            <div className="slate-img">
            <Image src={s3} alt="" />
            </div>
        </div>
        <div className="slate-det">
            <p>How to Transform Your Ballroom Wedding Venue Into a Beautiful, Unique Space</p>
            <div className="det">
                <span>By Lauren</span>
                <Image src={dot} alt="" />
                <span>18 Items</span>
            </div>
        </div>
    </Link>
  )
}

export default SlateCard