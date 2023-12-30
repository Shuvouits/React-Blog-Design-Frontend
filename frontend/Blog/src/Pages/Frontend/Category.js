import React from 'react'
import Navbar from '../../components/Frontend/Navbar'
import Breadcrumb from '../../components/Frontend/Breadcrumb'
import BlogContent from '../../components/Frontend/BlogContent'
import Instagram from '../../components/Frontend/Instagram'
import Footer from '../../components/Frontend/Footer'
import ScrollToTop from '../../components/Frontend/ScrollToTop'
import CategoryContent from '../../components/Frontend/CategoryContent'

export default function Category() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <div className="gap"></div>
      <CategoryContent />
      <div className="gap"></div>
      <Instagram />
      <Footer />
      <ScrollToTop />

    </>
  )
}

