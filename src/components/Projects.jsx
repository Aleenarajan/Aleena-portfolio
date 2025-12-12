import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: 'Face Mask Detection System',
      description: 'Real-time detection system using Convolutional Neural Networks with 80% accuracy',
      tech: 'Python • TensorFlow • Flask • CNN',
      features: [
        'Real-time face mask detection',
        '80% accuracy in identification',
        'Flask-based web interface'
      ],
      color: '#4f46e5',
      github: 'https://github.com/Aleenarajan/Face_Mask_Detection',
      date: 'Mar 2024',
      status: 'Completed',
      category: 'ai-ml'
    },
    {
      title: 'AI Image Colorization System',
      description: 'AI model for automatic image colorization using GAN architecture with 85% accuracy',
      tech: 'Python • TensorFlow • GAN • CNN',
      features: [
        'Black-white to colored image conversion',
        'GAN-based architecture',
        '85% colorization accuracy'
      ],
      color: '#10b981',
      github: 'https://github.com/Aleenarajan/Image_Colorization',
      date: 'Feb 2024',
      status: 'Completed',
      category: 'ai-ml'
    },
    {
      title: 'Oriens Ecommerce Platform',
      description: 'Full-stack ecommerce platform with product catalog, search, and shopping cart',
      tech: 'React.js • Node.js • JavaScript • MongoDB',
      features: [
        'Product catalog with search & filtering',
        'User authentication system',
        'WhatsApp API integration'
      ],
      color: '#f59e0b',
      github: 'https://github.com/aleenamariya/oriens-ecommerce',
      date: 'Apr 2024',
      status: 'Completed',
      category: 'web-dev'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Responsive single-page application with modern UI and contact functionality',
      tech: 'React.js • JavaScript • Tailwind CSS',
      features: [
        'Responsive React SPA',
        'Modern UI with Tailwind CSS',
        'Email contact form integration'
      ],
      color: '#ef4444',
      github: 'https://github.com/aleenamariya/aleenamariya-portfolio',
      date: 'Jan 2024',
      status: 'Live',
      category: 'web-dev'
    }
  ];

  const techFilters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI/ML Projects' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'python', label: 'Python' },
    { id: 'react', label: 'React.js' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category === activeFilter || 
        project.tech.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and research</p>
        </motion.div>

        {/* Tech Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="tech-filter"
        >
          {techFilters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              aria-label={`Filter projects by ${filter.label}`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-header">
                <div className="project-header-top">
                  <div 
                    className="project-icon"
                    style={{ backgroundColor: `${project.color}15`, color: project.color }}
                    aria-label={`Project ${index + 1}`}
                  >
                    {index + 1}
                  </div>
                  <div className="project-meta">
                    <span className="project-date">{project.date}</span>
                    <span className="project-status" style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              {/* Tech Stack Section - Simplified */}
              <div className="tech-stack-section">
                <div className="tech-stack-label">TECH STACK:</div>
                <div className="tech-stack-text" style={{ color: project.color, borderColor: `${project.color}30` }}>
                  {project.tech}
                </div>
              </div>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-separator" style={{ borderColor: `${project.color}30` }}></div>

              {/* Project Links - Only GitHub */}
              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    aria-label={`View ${project.title} source code on GitHub`}
                    style={{ backgroundColor: project.color }}
                  >
                    <span className="link-icon" aria-hidden="true">📁</span>
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publication Section */}
        <motion.div 
          className="publication-section card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="publication-header">
            <h3>📚 Research Publication</h3>
            <span className="publication-badge">Published</span>
          </div>
          
          <div className="publication-content">
            <h4>AI-Powered Pneumonia Detection from Chest X-Rays – Web-Based CNN Application</h4>
            <p className="publication-journal">
              <strong>Journal:</strong> International Journal of Advanced Computer Science and Applications
            </p>
            <p className="publication-authors">
              <strong>Authors:</strong> Aleena Mariya Rajan, Binoj B Chandran, Nissam S, Manasi S
            </p>
            
            
            <div className="publication-highlights">
              <div className="highlight-card">
                <span className="highlight-value">90%</span>
                <span className="highlight-label">Diagnostic Accuracy</span>
              </div>
              <div className="highlight-card">
                <span className="highlight-value">CNN</span>
                <span className="highlight-label">Model Architecture</span>
              </div>
              <div className="highlight-card">
                <span className="highlight-value">Flask</span>
                <span className="highlight-label">Web Framework</span>
              </div>
              <div className="highlight-card">
                <span className="highlight-value">3000+</span>
                <span className="highlight-label">X-Ray Images</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .section {
          padding: 80px 0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .section-title {
          font-size: 2.5rem;
          color: #1e293b;
          margin-bottom: 10px;
          font-family: 'Poppins', sans-serif;
        }
        
        .section-subtitle {
          color: #64748b;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .tech-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
          padding: 20px 0;
        }
        
        .filter-btn {
          padding: 8px 20px;
          border: 2px solid #e2e8f0;
          background: white;
          color: #64748b;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
        }
        
        .filter-btn:hover {
          border-color: #4f46e5;
          color: #4f46e5;
          transform: translateY(-2px);
        }
        
        .filter-btn.active {
          background: #4f46e5;
          color: white;
          border-color: #4f46e5;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .project-card {
          padding: 30px;
          border: 2px solid #e2e8f0;
          border-radius: 15px;
          background: linear-gradient(135deg, #ffffff 0%, #fafbff 100%);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #c7d2fe;
        }
        
        .project-header {
          margin-bottom: 20px;
        }
        
        .project-header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .project-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          font-weight: 700;
          transition: transform 0.3s ease;
        }
        
        .project-card:hover .project-icon {
          transform: scale(1.1);
        }
        
        .project-meta {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        
        .project-date {
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 500;
        }
        
        .project-status {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .project-header h3 {
          font-size: 1.5rem;
          color: #1e293b;
          margin: 0;
          font-family: 'Poppins', sans-serif;
          line-height: 1.3;
        }
        
        .project-description {
          color: #64748b;
          margin-bottom: 25px;
          line-height: 1.6;
          font-size: 1rem;
          flex-grow: 1;
        }
        
        .tech-stack-section {
          margin-bottom: 25px;
        }
        
        .tech-stack-label {
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 700;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .tech-stack-text {
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid;
          line-height: 1.5;
        }
        
        .project-features h4 {
          font-size: 1.15rem;
          color: #1e293b;
          margin-bottom: 15px;
          font-family: 'Poppins', sans-serif;
        }
        
        .project-features ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 25px;
        }
        
        .project-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
          color: #334155;
        }
        
        .feature-check {
          color: #10b981;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 2px;
          font-size: 1.1rem;
        }
        
        .feature-text {
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        .project-separator {
          height: 1px;
          width: 100%;
          margin: 20px 0;
          border: none;
          border-top: 2px dashed;
          opacity: 0.3;
        }
        
        .project-links {
          margin-top: auto;
        }
        
        .project-link {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          filter: brightness(1.1);
        }
        
        .link-icon {
          font-size: 1.1rem;
        }
        
        .publication-section {
          padding: 35px;
          border: 2px solid #e2e8f0;
          border-radius: 15px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          transition: transform 0.3s ease;
        }
        
        .publication-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .publication-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .publication-header h3 {
          font-size: 1.6rem;
          color: #1e293b;
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }
        
        .publication-badge {
          background: #10b981;
          color: white;
          padding: 8px 18px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .publication-content h4 {
          font-size: 1.35rem;
          color: #1e293b;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        
        .publication-journal {
          color: #7c3aed;
          font-weight: 500;
          margin-bottom: 12px;
          font-size: 1.05rem;
        }
        
        .publication-authors {
          color: #64748b;
          margin-bottom: 12px;
          font-size: 1rem;
        }
        
        .publication-doi {
          color: #64748b;
          margin-bottom: 30px;
          font-size: 1rem;
        }
        
        .publication-doi a {
          color: #4f46e5;
          text-decoration: none;
          margin-left: 5px;
          font-weight: 500;
        }
        
        .publication-doi a:hover {
          text-decoration: underline;
        }
        
        .publication-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }
        
        .highlight-card {
          padding: 25px 15px;
          background: white;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          border-color: #c7d2fe;
        }
        
        .highlight-value {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #7c3aed;
          margin-bottom: 8px;
        }
        
        .highlight-label {
          display: block;
          color: #64748b;
          font-size: 0.95rem;
          font-weight: 500;
        }
        
        .card {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }
        
        @media (max-width: 768px) {
          .section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .project-card {
            padding: 25px;
          }
          
          .tech-filter {
            gap: 8px;
          }
          
          .filter-btn {
            padding: 6px 16px;
            font-size: 0.9rem;
          }
          
          .publication-section {
            padding: 25px;
          }
          
          .publication-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .publication-highlights {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }
          
          .section-title {
            font-size: 1.75rem;
          }
          
          .project-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          
          .project-header-top {
            width: 100%;
          }
          
          .tech-stack-text {
            font-size: 0.9rem;
            padding: 10px 14px;
          }
          
          .project-features li {
            font-size: 0.9rem;
          }
          
          .publication-highlights {
            grid-template-columns: 1fr;
          }
          
          .highlight-card {
            padding: 20px 15px;
          }
          
          .publication-content h4 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;