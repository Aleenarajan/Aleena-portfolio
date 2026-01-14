import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'Face Mask Detection System',
      description: 'Real-time detection system using Convolutional Neural Networks with 80% accuracy',
      tech: 'Python • TensorFlow • Flask • CNN',
      features: [
        'Real-time face mask detection',
        '80% accuracy in identification',
        'Flask-based web interface',
        'CNN architecture implementation',
        'Real-time video processing'
      ],
      color: '#FF6B8B',
      lightColor: '#FF6B8B30',
      github: 'https://github.com/Aleenarajan/Face_Mask_Detection',
      status: 'Completed',
      category: 'ai-ml',
      details: 'A computer vision application that detects whether a person is wearing a face mask in real-time using a custom CNN model trained on facial images.'
    },
    {
      id: 2,
      title: 'AI Image Colorization System',
      description: 'AI model for automatic image colorization using GAN architecture with 85% accuracy',
      tech: 'Python • TensorFlow • GAN • CNN',
      features: [
        'Black-white to colored image conversion',
        'GAN-based architecture',
        '85% colorization accuracy',
        'Batch processing capability',
        'Web-based user interface'
      ],
      color: '#7C4DFF',
      lightColor: '#7C4DFF30',
      github: 'https://github.com/Aleenarajan/Image_Colorization',
      status: 'Completed',
      category: 'ai-ml',
      details: 'Deep learning model that automatically colorizes grayscale images using Generative Adversarial Networks (GANs), preserving realistic color distribution.'
    },
    {
      id: 3,
      title: 'Oriens Ecommerce Platform',
      description: 'Full-stack ecommerce platform with product catalog, search, and shopping cart',
      tech: 'React.js • Node.js • JavaScript • MongoDB',
      features: [
        'Product catalog with search & filtering',
        'User authentication system',
        'WhatsApp API integration',
        'Shopping cart functionality',
        'Admin dashboard'
      ],
      color: '#00E5FF',
      lightColor: '#00E5FF30',
      github: 'https://github.com/aleenamariya/oriens-ecommerce',
      status: 'Completed',
      category: 'web-dev',
      details: 'Complete e-commerce solution with React frontend, Node.js backend, and MongoDB database featuring user authentication, product management, and order processing.'
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      description: 'Responsive single-page application with modern UI and contact functionality',
      tech: 'React.js • JavaScript • Tailwind CSS',
      features: [
        'Responsive React SPA',
        'Modern UI with Tailwind CSS',
        'Email contact form integration',
        'Dark/light theme toggle',
        'Performance optimized'
      ],
      color: '#FFD166',
      lightColor: '#FFD16630',
      github: 'https://github.com/aleenamariya/aleenamariya-portfolio',
      status: 'Live',
      category: 'web-dev',
      details: 'A responsive portfolio website built with React and Tailwind CSS, featuring animated sections, contact form integration, and mobile-first design.'
    }
  ];

  const techFilters = [
    { id: 'all', label: 'All Projects', color: '#7C4DFF' },
    { id: 'ai-ml', label: 'AI/ML Projects', color: '#FF6B8B' },
    { id: 'web-dev', label: 'Web Development', color: '#00E5FF' },
    { id: 'python', label: 'Python', color: '#3776AB' },
    { id: 'react', label: 'React.js', color: '#61DAFB' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category === activeFilter || 
        project.tech.toLowerCase().includes(activeFilter.toLowerCase())
      );

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and research</p>
        </div>

        {/* Tech Filter */}
        <div className="tech-filter">
          {techFilters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter(filter.id);
                setExpandedProject(null);
              }}
              style={{ '--filter-color': filter.color }}
            >
              {filter.label}
              {activeFilter === filter.id && (
                <span className="filter-indicator"></span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
              onClick={() => toggleProject(project.id)}
              style={{
                '--project-color': project.color,
                '--project-light-color': project.lightColor,
                borderColor: expandedProject === project.id ? project.color : 'transparent',
              }}
            >
              <div className="project-header">
                <div className="project-header-top">
                  <div 
                    className="project-icon"
                    style={{ 
                      backgroundColor: project.lightColor,
                      color: project.color,
                    }}
                  >
                    {project.id}
                  </div>
                  <div className="project-meta">
                    <span className="project-date">{project.date}</span>
                    <span 
                      className="project-status"
                      style={{ 
                        backgroundColor: project.lightColor,
                        color: project.color,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              
              <div className="tech-stack-section">
                <div className="tech-stack-label">TECH STACK</div>
                <div 
                  className="tech-stack-text"
                  style={{ 
                    color: project.color,
                    borderColor: project.lightColor,
                    backgroundColor: project.lightColor,
                  }}
                >
                  {project.tech}
                </div>
              </div>
              
              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>
                      <span className="feature-check" style={{ color: project.color }}>✓</span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    className="project-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="details-content">
                      <h5>Project Details</h5>
                      <p className="details-text">{project.details}</p>
                      
                      <div className="all-features">
                        <h6>All Features:</h6>
                        <ul>
                          {project.features.map((feature, idx) => (
                            <li key={idx}>
                              <span className="feature-dot" style={{ backgroundColor: project.color }}></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-links">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link"
                            style={{ backgroundColor: project.color }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="link-icon" aria-hidden="true">📁</span>
                            <span>View Code on GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="project-footer">
                <button 
                  className="expand-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleProject(project.id);
                  }}
                >
                  <span className="expand-text">
                    {expandedProject === project.id ? 'Show Less' : 'View Details'}
                  </span>
                  <span 
                    className="expand-icon"
                    style={{ transform: expandedProject === project.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    ↓
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Publication Section */}
        <div className="publication-section">
          <div className="publication-header">
            <h3>📚 Research Publication</h3>
            <span className="publication-badge">Published</span>
          </div>
          
          <div className="publication-content">
            <h4>AI-Powered Pneumonia Detection from Chest X-Rays – Web-Based CNN Application</h4>
            <div className="publication-meta">
              <p className="publication-journal">
                <strong>Journal:</strong> International Journal of Advanced Computer Science and Applications
              </p>
              <p className="publication-authors">
                <strong>Authors:</strong> Aleena Mariya Rajan, Binoj B Chandran, Nissam S, Manasi S
              </p>
            </div>
            
            <div className="publication-highlights">
              <div className="highlight-card" style={{ '--highlight-color': '#FF6B8B' }}>
                <span className="highlight-value">90%</span>
                <span className="highlight-label">Diagnostic Accuracy</span>
              </div>
              <div className="highlight-card" style={{ '--highlight-color': '#7C4DFF' }}>
                <span className="highlight-value">CNN</span>
                <span className="highlight-label">Model Architecture</span>
              </div>
              <div className="highlight-card" style={{ '--highlight-color': '#00E5FF' }}>
                <span className="highlight-value">Flask</span>
                <span className="highlight-label">Web Framework</span>
              </div>
              <div className="highlight-card" style={{ '--highlight-color': '#FFD166' }}>
                <span className="highlight-value">3000+</span>
                <span className="highlight-label">X-Ray Images</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .projects {
          padding: 100px 0;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 3rem;
          color: white;
          margin-bottom: 15px;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(90deg, #FF6B8B, #7C4DFF, #00E5FF);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .section-subtitle {
          color: #94a3b8;
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .tech-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 50px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .filter-btn {
          padding: 12px 24px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          border-radius: 30px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          font-family: 'Inter', sans-serif;
          backdrop-filter: blur(10px);
        }

        .filter-btn:hover {
          border-color: var(--filter-color);
          color: var(--filter-color);
          transform: translateY(-3px);
        }

        .filter-btn.active {
          background: var(--filter-color);
          color: white;
          border-color: var(--filter-color);
          box-shadow: 0 5px 20px color-mix(in srgb, var(--filter-color) 30%, transparent);
        }

        .filter-indicator {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px;
          cursor: pointer;
          transition: all 0.4s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--project-color), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--project-light-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card.expanded {
          border-color: var(--project-color);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .project-card.expanded::before {
          opacity: 1;
        }

        .project-header {
          margin-bottom: 25px;
        }

        .project-header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .project-icon {
          width: 50px;
          height: 50px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .project-meta {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .project-date {
          font-size: 0.9rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .project-status {
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .project-header h3 {
          font-size: 1.6rem;
          color: white;
          margin: 0 0 15px 0;
          font-family: 'Poppins', sans-serif;
          line-height: 1.3;
        }

        .project-description {
          color: #cbd5e1;
          margin: 0;
          line-height: 1.6;
          font-size: 1rem;
        }

        .tech-stack-section {
          margin-bottom: 25px;
        }

        .tech-stack-label {
          font-size: 0.85rem;
          color: #94a3b8;
          font-weight: 700;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .tech-stack-text {
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.5;
          border: 2px solid;
          transition: all 0.3s ease;
        }

        .project-card:hover .tech-stack-text {
          transform: translateY(-3px);
        }

        .project-features {
          margin-bottom: 25px;
        }

        .project-features h4 {
          font-size: 1.1rem;
          color: white;
          margin-bottom: 15px;
          font-family: 'Poppins', sans-serif;
        }

        .project-features ul {
          list-style-type: none;
          padding-left: 0;
          margin: 0;
        }

        .project-features li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          color: #cbd5e1;
        }

        .feature-check {
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 2px;
          font-weight: bold;
        }

        .feature-text {
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Project Details Expandable Section */
        .project-details {
          margin: 25px 0;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .details-content {
          padding: 25px;
        }

        .details-content h5 {
          font-size: 1.2rem;
          color: white;
          margin-bottom: 15px;
          font-family: 'Poppins', sans-serif;
        }

        .details-text {
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 20px;
          font-size: 1rem;
        }

        .all-features h6 {
          font-size: 1.1rem;
          color: white;
          margin-bottom: 15px;
          font-family: 'Inter', sans-serif;
        }

        .all-features ul {
          list-style-type: none;
          padding-left: 0;
          margin: 0;
        }

        .all-features li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .feature-dot {
          position: absolute;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .project-links {
          margin-top: 25px;
        }

        .project-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 25px;
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          border: none;
          width: 100%;
          cursor: pointer;
        }

        .project-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          filter: brightness(1.1);
        }

        /* Footer with Expand Button */
        .project-footer {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .expand-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .expand-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .expand-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        /* Publication Section */
        .publication-section {
          padding: 40px;
          background: linear-gradient(135deg, rgba(124, 77, 255, 0.1), rgba(255, 107, 139, 0.1));
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          margin-top: 50px;
        }

        .publication-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        }

        .publication-header h3 {
          font-size: 1.8rem;
          color: white;
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .publication-badge {
          background: linear-gradient(135deg, #FF6B8B, #7C4DFF);
          color: white;
          padding: 10px 25px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .publication-content h4 {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 25px;
          line-height: 1.4;
          font-family: 'Poppins', sans-serif;
        }

        .publication-meta {
          margin-bottom: 30px;
        }

        .publication-journal {
          color: #00E5FF;
          font-weight: 500;
          margin-bottom: 10px;
          font-size: 1.05rem;
        }

        .publication-authors {
          color: #cbd5e1;
          margin-bottom: 0;
          font-size: 1rem;
        }

        .publication-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .highlight-card {
          padding: 25px 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          border: 2px solid var(--highlight-color);
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .highlight-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--highlight-color) 0%, transparent 100%);
          opacity: 0.1;
          z-index: 0;
        }

        .highlight-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .highlight-value {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--highlight-color);
          margin-bottom: 8px;
          position: relative;
          z-index: 1;
        }

        .highlight-label {
          display: block;
          color: #cbd5e1;
          font-size: 1rem;
          font-weight: 500;
          position: relative;
          z-index: 1;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .projects {
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .tech-filter {
            gap: 10px;
          }
          
          .filter-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
          
          .publication-section {
            padding: 30px;
          }
          
          .publication-highlights {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 2rem;
          }
          
          .project-card {
            padding: 25px;
          }
          
          .project-header h3 {
            font-size: 1.4rem;
          }
          
          .tech-stack-text {
            font-size: 0.9rem;
            padding: 10px 16px;
          }
          
          .publication-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .publication-highlights {
            grid-template-columns: 1fr;
          }
          
          .highlight-card {
            padding: 20px;
          }
          
          .publication-content h4 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
