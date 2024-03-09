'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../assets/images/logo.svg';
import phone from '../assets/images/phone.svg';
import mail from '../assets/images/mail.svg';
import whatsapp from '../assets/images/whatsapp.svg';

import insta from '../assets/images/sc-insta.svg';
import face from '../assets/images/sc-face.svg';
import you from '../assets/images/sc-you.svg';
import tik from '../assets/images/sc-tik.svg';
import twi from '../assets/images/sc-twi.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <footer className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-12">
                    <Link href="" className='ft-logo'>
                        <Image src={logo} alt="" />
                    </Link>
                </div>
                <div className="col-lg-2 offset-lg-1 col-6">
                    <div className="ft-col">
                        <h3 className="ft-head">Browse By</h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="">
                                Themes
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Venues
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Providers
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2  col-6">
                    <div className="ft-col">
                        <h3 className="ft-head">The Company</h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="">
                                About us
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                How it works
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                FAQ’s
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Press
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="ft-col">
                        <h3 className="ft-head">Reach us</h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="">
                                Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Partner with us
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-12">
                    <div className="ft-col">
                        <h3 className="ft-head">Drop Us A Line</h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="mailto:info@loudgrounds.com" className='con-loc'>
                                        <Image src={mail} alt="" />
                                    <span>info@loudgrounds.com</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="tel:+1 2356 25689" className='con-loc'>
                                    <Image src={phone} alt="" />
                                    <span>+1 2356 25689</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="" className='con-loc'>
                                <Image src={whatsapp} alt="" />
                                    <span>+1 5326 89694</span>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="ft-btm">
                        <div className="l-part">
                            <p>Copyright 2024 loudgrounds</p>
                            <ul className='ott-list'>
                                <li>
                                    <Link href="">
                                    Disclaimer
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                    Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="r-part">
                            <ul className="soc-list">
                                <li>
                                    <Link href="">
                                        <Image src={insta} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <Image src={face} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <Image src={you} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <Image src={tik} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <Image src={twi} alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer