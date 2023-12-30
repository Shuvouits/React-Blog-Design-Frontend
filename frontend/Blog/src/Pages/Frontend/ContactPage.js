import React from 'react'
import Navbar from '../../components/Frontend/Navbar'
import Breadcrumb from '../../components/Frontend/Breadcrumb'
import Instagram from '../../components/Frontend/Instagram'
import Footer from '../../components/Frontend/Footer'
import Contact from '../../components/Frontend/Contact'
import ScrollToTop from '../../components/Frontend/ScrollToTop'

export default function ContactPage() {
  return (
    <div>
        <Navbar />
        <Breadcrumb />
        <div className='gap'></div>
         <Contact />
        <div className='gap'></div>
        <Instagram />
        <Footer />
        <ScrollToTop />
    </div>
  )
}
