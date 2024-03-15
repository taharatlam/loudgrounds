import './globals.css'
import '../assets/css/main.scss';
import '../assets/css/res.scss';
import { Inter, Montserrat } from 'next/font/google'

import { GoogleAnalytics } from '@next/third-parties/google'

import Navbar from '@/components/Navbar';

import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Loudgrounds',
  description: '',
}

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
       
      </Head>
      <body className={montserrat.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-QQYXKV5LVS" />
    </html>
  )
}
