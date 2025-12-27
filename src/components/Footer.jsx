import React from 'react';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home" className="logo">Aleena<span>.</span></a>
            <p className="footer-tagline">
              Software Engineer — AI/ML Developer — Full Stack Developer
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Resources</h4>
              <ul>
                <li><a href="https://github.com/Aleenarajan" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/aleena-mariya-rajan" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://aleenamariya-portfolio.netlify.app" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
                <li><a href="#contact">Resume</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Contact Info</h4>
              <ul>
                <li>Email: aleenamariya0208@gmail.com</li>
                <li>Phone: +91 9061850536</li>
                <li>Location: Kerala, India</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {} Aleena Mariya Rajan. All rights reserved.
            
          </p>
        </div>
      </div>
      
      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
      
      <style jsx>{`
        .footer {
          background: var(--dark);
          color: white;
          padding: 60px 0 30px;
          position: relative;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          margin-bottom: 50px;
        }
        
        .footer-logo .logo {
          font-family: 'Poppins', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 15px;
        }
        
        .footer-logo .logo span {
          color: var(--primary);
        }
        
        .footer-tagline {
          color: #94a3b8;
          line-height: 1.6;
          font-size: 1.1rem;
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        
        .link-group h4 {
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: white;
          position: relative;
          padding-bottom: 10px;
        }
        
        .link-group h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--primary);
        }
        
        .link-group ul {
          list-style: none;
          padding: 0;
        }
        
        .link-group li {
          margin-bottom: 12px;
          color: #94a3b8;
          line-height: 1.6;
        }
        
        .link-group a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .link-group a:hover {
          color: var(--primary);
        }
        
        .footer-bottom {
          padding-top: 30px;
          border-top: 1px solid #334155;
          text-align: center;
        }
        
        .footer-bottom p {
          color: #94a3b8;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        
        .made-with {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .heart-icon {
          color: #ef4444;
          animation: heartbeat 1.5s infinite;
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .scroll-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          z-index: 100;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
        }
        
        .scroll-top:hover {
          background: var(--primary-dark);
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
        }
        
        @media (max-width: 992px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 576px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
          
          .scroll-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;