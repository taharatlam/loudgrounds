'use client'
import Image from 'next/image'
import styles from './page.module.css'



import BannerSlider from '@/components/BannerSlider'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Link from 'next/link';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SmoothScrollProvider } from '@/contexts/SmoothScroll.context';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import EventThemeSlider from '@/components/EventThemeSlider';

import pt from '../assets/images/btm-pt.svg'
import ylpt from '../assets/images/yel-pt.svg'
import diagArrow from '../assets/images/black-diag-arrow.svg'
import providerImg from '../assets/images/decorator.png'
import evImg from '../assets/images/ev-img.jpg'
import GallerySlider from '@/components/GallerySlider';
import VenueSlider from '@/components/VenueSlider';
import EventsSlider from '@/components/EventsSlider';
import SlateCard from '@/components/SlateCard';
import TestimonialsSlider from '@/components/TestimonialsSlider';

import FormModal from '@/components/FormModal';

import { FormProvider } from '@/contexts/FormContext';
import Head from 'next/head';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  

  const handleFormSubmit = () => {
    // You can perform any actions after the form is successfully submitted
    setSubmitted(true);
    closeModal();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const providers = [
    'Decorator',
    'MC',
    'Comedian',
    'Singer / Band',
    'Chef',
    'Bartender',
    'DJ',
    'Videographer',
    'Caterers',
    'Photographer',
    'Dancer'
  ]

  useLayoutEffect(() => {
      let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.line-sec',
          start: "+250px 80%",
          end: "bottom center",
          markers: false,
          scrub: true
        },
        // delay: 0.5
      });

      timeline.to('.line span', {
        scaleY: '10%'
      })
      timeline.to('.tb-list >*:nth-child(2) > span span', {
        scale: 1
      })
      timeline.to('.line span', {
        scaleY: '40%'
      })
      timeline.to('.tb-list >*:nth-child(3) > span span', {
        scale: 1
      })
      timeline.to('.line span', {
        scaleY: '60%'
      })
      timeline.to('.tb-list >*:nth-child(4) > span span', {
        scale: 1
      })
      timeline.to('.line span', {
        scaleY: '100%'
      })
      timeline.to('.tb-list >*:nth-child(5) > span span', {
        scale: 1
      })

    });

    return () => ctx.revert();
  });
  

  return (
    <>
      <Head>
         {/* Google tag (gtag.js) */}
         {/* <script src="hello-src" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-QQYXKV5LVS`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-QQYXKV5LVS');
                `,
          }}
        /> */}
      </Head>
      <main className='home-page'>
        <FormProvider>
          <FormModal show={showModal} onHide={closeModal} onSubmit={handleFormSubmit} />
        </FormProvider>
        
        <section className="hm-banner-sec">
            <BannerSlider  openModal={openModal} />
        </section>
        {/* <button onClick={openModal}>
          Open Modal
        </button> */}
        <section className="sec light-sec banner-btm-sec">
          <Image src={pt} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-12">
                <h3 className="sec-head">
                  Build your dream <br className='d-sm-block d-none' />
                  event with ease
                </h3>
              </div>
              <div className="col-lg-5 offset-lg-2 col-12">
                <p className="para">
                Host an event like never before. Find the best venue, choose from trusted providers, and enjoy an experience remembered always
                </p>
                <a href="" className="main-btn link-only">
                  <span>Browse all themes</span>
                </a>
              </div>
            </div>
            <div className="row mt-5">
                <EventThemeSlider />
            </div>
          </div>
        </section>
        <section className="gal-sec sec">
          <GallerySlider />
        </section>
        <section className="pro-sec full-curve-sec light-sec">
          <Image src={pt} alt="" />
          <Image src={pt} className="flip-pt" alt="" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <h3 className="sec-head">
                  spice up <br className='d-sm-block d-none' />
                  your event <br className='d-sm-block d-none' />
                  with providers
                </h3>
                <div className="provider-container mb-5 mt-5">
                  {
                    providers.map((item,index)=>{
                      return(
                        <Link href="" className='provider-tag' key={index}>
                          <Image src={providerImg} alt="" />
                          <span>{item}</span>
                        </Link>
                      )
                    })
                  }
                </div>
                <Link href="" className='main-btn yellow-btn link-only'>
                  <span>view +50 more providers</span>
                </Link>
              </div>
              <div className="col-lg-5 col-12 offset-lg-1">
                <div className="ev-img-container">
                  <div className="ev-img">
                    <Image src={evImg} alt="" />
                  </div>
                  {/* <div className="info-det">
                    <div>
                      <span>2023</span>
                      <span>Alice Birthday Party</span>
                    </div>
                    <div>
                      <span>Planner</span>
                      <span>Joe Williams</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec loc-sec">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <h3 className="sec-head">
                  choose your dream <br className='d-sm-block d-none' />
                  location
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="cc-tabs"
                >
                  <Tab eventKey="profile" title="Hotels">
                    <VenueSlider />
                  </Tab>
                  <Tab eventKey="tab2" title="FarmStays">
                    Tab content for Profile
                  </Tab>
                  <Tab eventKey="tab3" title="Restaurant">
                    Tab content for Contact
                  </Tab>
                  <Tab eventKey="tab4" title="Park">
                    Tab content for Contact
                  </Tab>
                  <Tab eventKey="tab5" title="Dessert">
                    Tab content for Contact
                  </Tab>
                  <Tab eventKey="tab6" title="Resorts">
                    Tab content for Contact
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        <section className="sec loc-sec">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <h3 className="sec-head">
                Upcoming events
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <EventsSlider />
              </div>
            </div>
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
        </section>

        <section className="sec slate-sec">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="sec-head text-center">Featured Idea Slates</h3>
                </div>
              </div>
              <div className="row row-gap-25 mt-5">
                {
                  [...Array(3)].map((item, index)=>{
                    return(
                      <div className="col-lg-4 col-md-6 col-12" key={index}>
                        <SlateCard />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="container">
                <div className="row justify-content-end mt-5">
                    <div className="col-lg-5 col-12">
                        <a href="" className="main-btn right no-arrow white-btn">
                            <span>All Featured Idea Slate</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="light-sec test-sec sec">
          <Image src={pt} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="sec-head text-center">
                What clients <br className='d-sm-block d-none' />
                are saying
                </h3>
              </div>
            </div>
              <div className="row">
                <TestimonialsSlider />
              </div>
          </div>
        </section>
        <section className="cta-sec sec">
          <Image src={ylpt} alt="" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-12">
                <Link href="" className="cta-wrap">
                  <h3 className="sec-head">
                  get your <br className='d-sm-block d-none' />
                  event ready by us
                  </h3>
                  <Image src={diagArrow} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
    
  )
}
