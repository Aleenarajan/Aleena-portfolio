import React, { useState } from 'react'
import '../App.css'

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }, // Added Projects here
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header>
      <nav className="navbar container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home') }}>
          Portfolio<span>.</span>
        </a>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>
      
      <style jsx>{`
        header {
          background-color: var(--card-bg);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }
        
        .logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--dark-color);
          text-decoration: none;
        }
        
        .logo span {
          color: var(--primary-color);
        }
        
        .nav-links {
          display: flex;
          list-style: none;
        }
        
        .nav-links li {
          margin-left: 30px;
        }
        
        .nav-links a {
          text-decoration: none;
          color: var(--dark-color);
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        
        .nav-links a:hover,
        .nav-links a.active {
          color: var(--primary-color);
        }
        
        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--primary-color);
        }
        
        .mobile-menu-btn {
          display: none;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--dark-color);
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: var(--card-bg);
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
          
          .nav-links.mobile-menu-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav-links li {
            margin: 15px 0;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  )
}

export default Navbar