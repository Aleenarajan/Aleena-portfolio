import React, { useState } from 'react';

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true);
      const resumeUrl = '/resume.pdf';
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Aleena_Mariya_Rajan_Resume.pdf';
      link.setAttribute('aria-label', 'Download resume PDF file');
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download resume. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const stats = [
    { label: 'Projects', value: '3+', color: 'var(--primary)' },
    { label: 'Experience', value: 'Fresher', color: 'var(--accent)' },
  ];

  const interests = [
    { name: 'AI/ML Research', icon: '🧠', color: '#FF6B8B' },
    { name: 'Web Development', icon: '🌐', color: '#7C4DFF' },
    { name: 'UI/UX Design', icon: '🎨', color: '#00E5FF' },
    { name: 'Open Source', icon: '💻', color: '#06D6A0' },
  ];

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-main">
            <div className="about-intro card">
              <div className="intro-header">
                <div className="intro-icon">👩‍💻</div>
                <h3>Software Engineer & AI Developer</h3>
              </div>
              
              <div className="intro-content">
                <p>
                  I'm a passionate <span className="highlight">Software Engineer</span> specializing in 
                  <span className="highlight"> Full Stack Development</span> and 
                  <span className="highlight"> Artificial Intelligence</span>. With a Master's in Computer Applications, 
                  I combine technical expertise with creative problem-solving to build innovative solutions.
                </p>
                
                <p>
                  My journey in technology began with a curiosity about how things work, 
                  which evolved into a passion for creating applications that make a difference. 
                  I thrive on challenges and enjoy working on projects that involve cutting-edge 
                  technologies.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or writing technical articles. 
                  I believe in continuous learning and staying updated with the latest 
                  industry trends.
                </p>
              </div>
              
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <div 
                    key={index} 
                    className="interest-item"
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    <div 
                      className="interest-icon"
                      style={{ backgroundColor: `${interest.color}20`, color: interest.color }}
                    >
                      {interest.icon}
                    </div>
                    <span className="interest-name">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="btn download-btn"
              onClick={handleDownloadResume}
              disabled={isDownloading}
            >
              <span className="btn-icon">📄</span>
              <span className="btn-text">
                {isDownloading ? 'Downloading...' : 'Download My Resume'}
              </span>
              <span className="btn-decoration">✨</span>
            </button>
          </div>
          
          <div className="about-sidebar">
            <div className="stats-grid card">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-item"
                  style={{ borderColor: stat.color }}
                >
                  <div className="stat-value" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="summary-card card">
              <div className="summary-header">
                <div className="summary-icon">🚀</div>
                <h3>Professional Summary</h3>
              </div>
              
              <div className="summary-content">
                <p>
                  Master of Computer Applications graduate with expertise in 
                  <span className="highlight"> React.js</span>, 
                  <span className="highlight"> Node.js</span>, 
                  <span className="highlight"> Python</span>, 
                  <span className="highlight"> AI/ML</span>, 
                  <span className="highlight"> Deep Learning</span>, and 
                  <span className="highlight"> TensorFlow</span>.
                </p>
                
                <p>
                  Proven experience in software engineering, data science, and building 
                  AI-powered applications with a focus on clean code and user-centered solutions.
                </p>
                
                <div className="tech-tags">
                  <span className="tech-tag" style={{ background: '#FF6B8B20', color: '#FF6B8B' }}>React.js</span>
                  <span className="tech-tag" style={{ background: '#7C4DFF20', color: '#7C4DFF' }}>Node.js</span>
                  <span className="tech-tag" style={{ background: '#00E5FF20', color: '#00E5FF' }}>Python</span>
                  <span className="tech-tag" style={{ background: '#06D6A020', color: '#06D6A0' }}>TensorFlow</span>
                  <span className="tech-tag" style={{ background: '#FFD16620', color: '#FFD166' }}>AI/ML</span>
                  <span className="tech-tag" style={{ background: '#FF9EAA20', color: '#FF9EAA' }}>Flask</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }
        
        .about-intro {
          position: relative;
          overflow: hidden;
        }
        
        .about-intro::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(124, 77, 255, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }
        
        .intro-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }
        
        .intro-icon {
          font-size: 3rem;
          animation: bounce 2s infinite;
        }
        
        .intro-header h3 {
          font-size: 1.8rem;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 700;
        }
        
        .intro-content {
          position: relative;
          z-index: 1;
        }
        
        .intro-content p {
          margin-bottom: 20px;
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .highlight {
          background: linear-gradient(90deg, var(--primary-light), var(--accent-light));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 600;
          padding: 0 5px;
        }
        
        .interests-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 30px;
          position: relative;
          z-index: 1;
        }
        
        .interest-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out;
          animation-delay: var(--delay);
          animation-fill-mode: both;
        }
        
        .interest-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .interest-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          transition: all 0.3s ease;
        }
        
        .interest-item:hover .interest-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .interest-name {
          font-weight: 500;
          color: white;
        }
        
        .download-btn {
          margin-top: 30px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .download-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.5s;
        }
        
        .download-btn:hover::before {
          left: 100%;
        }
        
        .btn-decoration {
          position: absolute;
          right: 20px;
          animation: sparkle 2s infinite;
        }
        
        /* Sidebar */
        .about-sidebar {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          padding: 30px;
        }
        
        .stat-item {
          text-align: center;
          padding: 25px 15px;
          border-radius: 15px;
          border: 2px solid;
          background: rgba(255, 255, 255, 0.03);
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
        }
        
        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 10px;
          font-family: 'Poppins', sans-serif;
        }
        
        .stat-label {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }
        
        .summary-card {
          padding: 30px;
        }
        
        .summary-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }
        
        .summary-icon {
          font-size: 2rem;
        }
        
        .summary-header h3 {
          font-size: 1.5rem;
          color: white;
          font-weight: 700;
        }
        
        .summary-content p {
          margin-bottom: 20px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        
        .tech-tag {
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Animations */
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
        
        /* Responsive */
        @media (max-width: 992px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .interests-grid {
            grid-template-columns: 1fr;
          }
          
          .intro-header {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
          
          .intro-icon {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .stat-value {
            font-size: 2rem;
          }
          
          .tech-tags {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default About;