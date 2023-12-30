
import Carousel from "../../components/Frontend/Carousel"
import Navbar from "../../components/Frontend/Navbar"
import About from "../../components/Frontend/About"
import Content from "../../components/Frontend/Content"
import Instagram from "../../components/Frontend/Instagram"
import Footer from "../../components/Frontend/Footer"
import ScrollToTop from "../../components/Frontend/ScrollToTop"

export default function Home() {
  return (
    <>
    <Navbar />
    <Carousel />
    <div className="gap"></div>
    <About />
    <div className="gap"></div>
    <Content />
    <div className="gap"></div>
    <Instagram />
    <Footer />
    <ScrollToTop />
    
    </>
  )
}
