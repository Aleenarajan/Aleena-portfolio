import React, { useState } from 'react';
import '../App.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <nav className="navbar container">
        <a 
          href="#home" 
          className="logo" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
        >
          <span className="logo-icon">🚀</span>
          <span className="logo-text">Aleena<span className="logo-dot">.</span></span>
        </a>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          {navItems.map((item, index) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                style={{ '--index': index }}
              >
                <span className="link-text">{item.label}</span>
                <span className="link-underline"></span>
              </a>
            </li>
          ))}
        </ul>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>
      
      <style jsx>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          background: rgba(18, 18, 18, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          color: white;
        }
        
        .logo-icon {
          font-size: 1.5rem;
          animation: bounce 2s infinite;
        }
        
        .logo-text {
          background: linear-gradient(90deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .logo-dot {
          color: var(--accent);
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 40px;
        }
        
        .nav-link {
          position: relative;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
          font-size: 1.1rem;
          padding: 8px 0;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
        }
        
        .link-text {
          position: relative;
          z-index: 1;
        }
        
        .link-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          transition: width 0.3s ease;
          border-radius: 1px;
        }
        
        .nav-link:hover,
        .nav-link.active {
          color: white;
        }
        
        .nav-link:hover .link-underline,
        .nav-link.active .link-underline {
          width: 100%;
        }
        
        /* Animated dot for active link */
        .nav-link.active::before {
          content: '●';
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--accent);
          font-size: 0.8rem;
          animation: pulse 2s infinite;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }
        
        .menu-icon {
          width: 30px;
          height: 24px;
          position: relative;
          transform: rotate(0deg);
          transition: .5s ease-in-out;
        }
        
        .menu-icon span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: white;
          border-radius: 3px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
        }
        
        .menu-icon span:nth-child(1) {
          top: 0px;
        }
        
        .menu-icon span:nth-child(2) {
          top: 10px;
        }
        
        .menu-icon span:nth-child(3) {
          top: 20px;
        }
        
        .menu-icon.open span:nth-child(1) {
          top: 10px;
          transform: rotate(135deg);
        }
        
        .menu-icon.open span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }
        
        .menu-icon.open span:nth-child(3) {
          top: 10px;
          transform: rotate(-135deg);
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background: rgba(18, 18, 18, 0.95);
            backdrop-filter: blur(30px);
            flex-direction: column;
            align-items: center;
            padding: 40px 0;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .nav-links.mobile-menu-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav-link {
            font-size: 1.3rem;
            padding: 15px 0;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .logo {
            font-size: 1.5rem;
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;