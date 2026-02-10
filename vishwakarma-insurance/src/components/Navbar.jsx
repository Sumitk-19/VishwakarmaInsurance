import { FaShieldAlt } from 'react-icons/fa'

export default function Navbar() {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="#hero" className="logo-text-only">
  Vishwakarma Insurance
</a>


        <nav className="navbar">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#partners">Partners</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
