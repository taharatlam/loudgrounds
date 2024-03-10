'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import logo from '../assets/images/logo.svg';

import menuBtn from '../assets/images/menu.svg';
import cross from '../assets/images/cross.svg';

const Navbar = () => {
    const [menuOpen, setMenuClose] = useState(false);
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 300) {
            setSticky(true);
          } else {
            setSticky(false);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <>
        <nav className={`main-nav ${isSticky ? 'sticky-menu' : ''}`}>
            <div className="container">
                <div className="nav-inner">
                    <div className="l-part">
                        <Link href="/" className='head-logo'>
                            <Image src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="r-part">
                        <ul className="nav-list">
                            <li>
                                <Link href="/about-us">
                                Get listed
                                </Link>
                            </li>
                            <li>
                                <Link href="/career">
                                Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="/news-and-insights">
                                Browse
                                </Link>
                            </li>
                        </ul>
                        <ul className="ot-nav">
                            <li>
                                <button className="menu-btn" onClick={()=>setMenuClose(true)}>
                                    <Image src={menuBtn} alt="" />
                                </button>
                            </li>
                            {/* <li>
                                <Link href="/contact-us" className='main-btn'>
                                    <span>Contact Us</span>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        {/* mobile menu */}
        <div className={`mob-menu ${menuOpen && 'active'}`}>
            <button className="close-btn" onClick={()=>setMenuClose(false)}>
                <Image src={cross} alt="" />
            </button>
            <ul>
                <li>
                    <Link href="">
                    What We Do
                    </Link>
                </li>
                <li>
                    <Link href="">
                    Our Team
                    </Link>
                </li>
                <li>
                    <Link href="">
                    Careers
                    </Link>
                </li>
                <li>
                    <Link href="">
                    News & Insights
                    </Link>
                </li>
            </ul>
            
        </div>
    </>
  )
}

export default Navbar