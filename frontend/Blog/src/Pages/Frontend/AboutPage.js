import React from 'react'
import Navbar from '../../components/Frontend/Navbar'
import Instagram from '../../components/Frontend/Instagram'
import Footer from '../../components/Frontend/Footer'
import AboutMe from '../../components/Frontend/AboutMe'
import Breadcrumb from "../../components/Frontend/Breadcrumb"
import ScrollToTop from "../../components/Frontend/ScrollToTop"

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <Breadcrumb />
    <AboutMe />
    
    <Instagram />
    <Footer />
    <ScrollToTop />
    
    
    </>
  )
}
