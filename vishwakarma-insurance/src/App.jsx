import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import Services from './components/Services'
import Partners from './components/Partners'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Partners />
      <About />
      <Contact />
      <Footer />
      <MobileNav />
      <WhatsAppButton />
    </>
  )
}
