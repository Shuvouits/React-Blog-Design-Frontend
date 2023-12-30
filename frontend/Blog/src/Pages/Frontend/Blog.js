import React from 'react'
import Navbar from '../../components/Frontend/Navbar'
import Breadcrumb from '../../components/Frontend/Breadcrumb'
import Instagram from '../../components/Frontend/Instagram'
import Footer from '../../components/Frontend/Footer'
import ScrollToTop from '../../components/Frontend/ScrollToTop'
import BlogContent from '../../components/Frontend/BlogContent'

export default function Blog() {
  return (
    <>
    <Navbar />
    <Breadcrumb />
    <div className='gap'></div>
    <BlogContent />
    <div className="gap"></div>
    <Instagram />
    <Footer />
    <ScrollToTop />
  
    
    </>
  )
}
