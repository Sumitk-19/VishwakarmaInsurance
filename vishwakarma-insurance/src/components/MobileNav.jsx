import { FaHome, FaHandshake, FaInfoCircle } from 'react-icons/fa'
import { MdMiscellaneousServices, MdContactPhone } from 'react-icons/md'
import { useEffect, useState } from 'react'

const sections = ['hero', 'services', 'partners', 'about', 'contact']

export default function MobileNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="mobile-bottom-nav">
      <a href="#hero" className={active==='hero'?'active':''}><FaHome /></a>
      <a href="#services" className={active==='services'?'active':''}><MdMiscellaneousServices /></a>
      <a href="#partners" className={active==='partners'?'active':''}><FaHandshake /></a>
      <a href="#about" className={active==='about'?'active':''}><FaInfoCircle /></a>
      <a href="#contact" className={active==='contact'?'active':''}><MdContactPhone /></a>
    </nav>
  )
}
