import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would connect to a backend here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to discuss opportunities? Feel free to reach out!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card card">
              <div className="contact-header">
                <div className="contact-avatar">
                  <FaEnvelope />
                </div>
                <h3>Contact Information</h3>
              </div>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:aleenamariya0208@gmail.com">aleenamariya0208@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <a href="tel:+919061850536">+91 9061850536</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Kerala, India</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-social">
                <h4>Connect with me</h4>
                <div className="social-links">
                  <a 
                    href="https://linkedin.com/in/aleena-mariya-rajan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/Aleenarajan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://aleenasportfolio.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaGlobe />
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form card">
            <div className="form-header">
              <h3>Send a Message</h3>
              <p>I'll get back to you as soon as possible</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
        }
        
        .contact-card {
          padding: 30px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }
        
        .contact-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .contact-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          margin: 0 auto 15px;
        }
        
        .contact-header h3 {
          font-size: 1.5rem;
          color: var(--dark);
        }
        
        .contact-details {
          margin-bottom: 30px;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 25px;
        }
        
        .contact-icon {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          font-size: 1.2rem;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        
        .contact-text h4 {
          font-size: 1rem;
          color: var(--dark);
          margin-bottom: 5px;
        }
        
        .contact-text a, .contact-text p {
          color: var(--dark-light);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .contact-text a:hover {
          color: var(--primary);
        }
        
        .contact-social h4 {
          font-size: 1.1rem;
          color: var(--dark);
          margin-bottom: 15px;
          text-align: center;
        }
        
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background: white;
          border-radius: 8px;
          color: var(--dark);
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        
        .social-link:hover {
          transform: translateX(5px);
          background: var(--primary);
          color: white;
        }
        
        .social-link svg {
          font-size: 1.2rem;
        }
        
        .contact-form {
          padding: 30px;
        }
        
        .form-header {
          margin-bottom: 30px;
        }
        
        .form-header h3 {
          font-size: 1.5rem;
          color: var(--dark);
          margin-bottom: 8px;
        }
        
        .form-header p {
          color: var(--gray);
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--dark);
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s;
          background: #f8fafc;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
          background: white;
        }
        
        .submit-btn {
          width: 100%;
          padding: 15px;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        @media (max-width: 992px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 576px) {
          .contact-card,
          .contact-form {
            padding: 20px;
          }
          
          .social-link {
            padding: 10px 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;