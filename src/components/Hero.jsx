import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [imageError, setImageError] = useState(false);

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

  const techSkills = [
    { name: 'React', icon: '⚛️', color: '#61DAFB', bg: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#68A063', bg: '#68A063' },
    { name: 'Python', icon: '🐍', color: '#3776AB', bg: '#3776AB' },
    { name: 'AI/ML', icon: '🧠', color: '#FF6B8B', bg: '#FF6B8B' },
    { name: 'TensorFlow', icon: '🤖', color: '#FF6F00', bg: '#FF6F00' },
    { name: 'Flask', icon: '⚗️', color: '#000000', bg: '#000000' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248', bg: '#47A248' },
    { name: 'JavaScript', icon: '📜', color: '#F7DF1E', bg: '#F7DF1E' },
  ];

  // Simple fixed positions for tech badges
  const orbitPositions = [
    { top: '10%', left: '50%' },    // Top
    { top: '25%', left: '75%' },    // Top right
    { top: '50%', left: '85%' },    // Right
    { top: '75%', left: '75%' },    // Bottom right
    { top: '90%', left: '50%' },    // Bottom
    { top: '75%', left: '25%' },    // Bottom left
    { top: '50%', left: '15%' },    // Left
    { top: '25%', left: '25%' },    // Top left
  ];

  return (
    <section id="home" className="hero" aria-label="Hero section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column - Text Content */}
          <div className="hero-left">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-line">Aleena</span>
                <span className="title-line name-line">
                  <span className="name-part">Mariya</span>
                  <span className="name-part">Rajan</span>
                </span>
              </h1>

              <div className="title-badges">
                <div className="title-badge">
                  <h3 className="badge-title">Full Stack</h3>
                  <p className="badge-subtitle">Developer</p>
                </div>
                <div className="title-badge">
                  <h3 className="badge-title">AI/ML</h3>
                  <p className="badge-subtitle">Engineer</p>
                </div>
              </div>

              <div className="hero-description">
                <p>
                  I create <span className="highlight">digital experiences</span> that blend 
                  cutting-edge technology with beautiful design. 
                  Passionate about building innovative solutions using 
                  <span className="highlight"> React</span>, 
                  <span className="highlight"> Python</span>, and 
                  <span className="highlight"> AI/ML</span>.
                </p>
              </div>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  <span className="btn-icon">👁️</span>
                  <span className="btn-text">View My Work</span>
                </a>
                <button 
                  className="btn btn-secondary"
                  onClick={handleDownloadResume}
                  disabled={isDownloading}
                >
                  <span className="btn-icon">📄</span>
                  <span className="btn-text">
                    {isDownloading ? 'Downloading...' : 'Download Resume'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Section */}
          <div className="hero-right">
            <div className="visual-container">
              {/* Central Photo Circle */}
              <div className="photo-circle">
                <div className="photo-wrapper">
                  <img 
                    src="/aleena-photo.jpg" 
                    alt="Aleena Mariya Rajan"
                    className="profile-photo"
                    loading="lazy"
                    onError={(e) => {
                      setImageError(true);
                      e.target.style.display = 'none';
                    }}
                  />
                  {imageError && (
                    <div className="photo-fallback">
                      <span className="fallback-text">AM</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tech Badges - Static positioned around */}
              <div className="tech-orbit">
                {techSkills.map((tech, index) => (
                  <div 
                    key={index}
                    className="tech-badge"
                    style={{
                      ...orbitPositions[index],
                      '--delay': `${index * 0.2}s`,
                      '--tech-color': tech.color,
                      '--tech-bg': tech.bg + '40',
                      borderColor: tech.bg,
                    }}
                  >
                    <span className="tech-icon">{tech.icon}</span>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
                
                {/* Orbit Circles */}
                <div className="orbit-ring ring-1"></div>
                <div className="orbit-ring ring-2"></div>
                <div className="orbit-ring ring-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 60px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Left Column - Text */
        .hero-left {
          z-index: 2;
        }

        .hero-title {
          margin-bottom: 40px;
        }

        .title-line {
          display: block;
          font-family: 'Poppins', sans-serif;
          color: white;
        }

        .title-line:first-child {
          font-size: 5rem;
          font-weight: 800;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          margin-bottom: 10px;
        }

        .name-line {
          display: flex;
          gap: 20px;
          align-items: center;
          font-size: 3.5rem;
          font-weight: 600;
          line-height: 1.2;
        }

        .name-part {
          display: inline-block;
        }

        .name-part:first-child {
          color: #a5b4fc;
          font-weight: 500;
        }

        .name-part:last-child {
          color: #06b6d4;
          font-weight: 600;
        }

        .title-badges {
          display: flex;
          gap: 30px;
          margin-bottom: 40px;
        }

        .title-badge {
          padding: 25px 35px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          min-width: 220px;
          transition: all 0.3s ease;
        }

        .title-badge:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .badge-title {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          margin: 0 0 5px 0;
          font-family: 'Poppins', sans-serif;
        }

        .badge-subtitle {
          font-size: 1.3rem;
          color: #94a3b8;
          margin: 0;
          font-weight: 500;
        }

        .hero-description {
          margin-bottom: 50px;
          max-width: 600px;
        }

        .hero-description p {
          font-size: 1.3rem;
          line-height: 1.8;
          color: #e2e8f0;
          margin: 0;
        }

        .highlight {
          color: #06b6d4;
          font-weight: 600;
          padding: 0 3px;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 18px 36px;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          min-width: 220px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-5px);
        }

        /* Right Column - Visual */
        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 100%;
          min-height: 500px;
        }

        .visual-container {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .photo-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .photo-wrapper {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(135deg, #6366f1, #06b6d4);
          box-shadow: 
            0 0 60px rgba(99, 102, 241, 0.4),
            0 0 120px rgba(6, 182, 212, 0.2),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .photo-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fallback-text {
          font-size: 4rem;
          font-weight: 800;
          color: white;
          font-family: 'Poppins', sans-serif;
        }

        /* Tech Orbit */
        .tech-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        }

        .tech-badge {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--tech-bg);
          border: 2px solid;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%);
          animation: float-badge 3s ease-in-out infinite;
          animation-delay: var(--delay);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.3),
            0 0 20px var(--tech-color) inset;
          transition: all 0.3s ease;
          z-index: 5;
        }

        .tech-badge:hover {
          transform: translate(-50%, -50%) scale(1.15);
          box-shadow: 
            0 12px 35px rgba(0, 0, 0, 0.4),
            0 0 30px var(--tech-color) inset;
          z-index: 15;
        }

        .tech-icon {
          font-size: 1.8rem;
          margin-bottom: 5px;
        }

        .tech-name {
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
        }

        /* Orbit Rings */
        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: rotate-ring linear infinite;
          pointer-events: none;
        }

        .ring-1 {
          width: 350px;
          height: 350px;
          animation-duration: 30s;
        }

        .ring-2 {
          width: 420px;
          height: 420px;
          animation-duration: 40s;
          animation-direction: reverse;
          border-color: rgba(255, 255, 255, 0.08);
        }

        .ring-3 {
          width: 480px;
          height: 480px;
          animation-duration: 50s;
          border-color: rgba(255, 255, 255, 0.05);
        }

        /* Animations */
        @keyframes float-badge {
          0%, 100% {
            transform: translate(-50%, -50%);
          }
          50% {
            transform: translate(-50%, calc(-50% - 15px));
          }
        }

        @keyframes rotate-ring {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .hero-grid {
            gap: 60px;
          }
          
          .title-line:first-child {
            font-size: 4rem;
          }
          
          .name-line {
            font-size: 3rem;
          }
          
          .visual-container {
            width: 450px;
            height: 450px;
          }
          
          .photo-wrapper {
            width: 220px;
            height: 220px;
          }
          
          .tech-badge {
            width: 70px;
            height: 70px;
          }
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          
          .hero-left {
            order: 2;
          }
          
          .hero-right {
            order: 1;
            min-height: 400px;
          }
          
          .name-line {
            justify-content: center;
          }
          
          .title-badges {
            justify-content: center;
          }
          
          .hero-description {
            margin: 0 auto 40px;
          }
          
          .hero-actions {
            justify-content: center;
          }
          
          .visual-container {
            width: 400px;
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 0 40px;
          }
          
          .title-line:first-child {
            font-size: 3.5rem;
          }
          
          .name-line {
            font-size: 2.5rem;
          }
          
          .title-badge {
            padding: 20px 30px;
            min-width: 200px;
          }
          
          .badge-title {
            font-size: 1.8rem;
          }
          
          .hero-description p {
            font-size: 1.2rem;
          }
          
          .btn {
            padding: 16px 30px;
            min-width: 200px;
          }
          
          .visual-container {
            width: 350px;
            height: 350px;
          }
          
          .photo-wrapper {
            width: 180px;
            height: 180px;
          }
          
          .tech-badge {
            width: 60px;
            height: 60px;
          }
          
          .tech-icon {
            font-size: 1.5rem;
          }
          
          .tech-name {
            font-size: 0.7rem;
          }
          
          .ring-1 {
            width: 280px;
            height: 280px;
          }
          
          .ring-2 {
            width: 330px;
            height: 330px;
          }
          
          .ring-3 {
            width: 380px;
            height: 380px;
          }
        }

        @media (max-width: 576px) {
          .title-line:first-child {
            font-size: 3rem;
          }
          
          .name-line {
            font-size: 2rem;
            flex-direction: column;
            gap: 10px;
          }
          
          .title-badges {
            flex-direction: column;
            align-items: center;
          }
          
          .title-badge {
            width: 100%;
            max-width: 250px;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .visual-container {
            width: 300px;
            height: 300px;
          }
          
          .photo-wrapper {
            width: 150px;
            height: 150px;
          }
          
          .tech-badge {
            width: 50px;
            height: 50px;
          }
          
          .tech-icon {
            font-size: 1.2rem;
          }
          
          .tech-name {
            font-size: 0.6rem;
          }
          
          .ring-1 {
            width: 220px;
            height: 220px;
          }
          
          .ring-2 {
            width: 260px;
            height: 260px;
          }
          
          .ring-3 {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .title-line:first-child {
            font-size: 2.5rem;
          }
          
          .name-line {
            font-size: 1.8rem;
          }
          
          .visual-container {
            width: 280px;
            height: 280px;
          }
          
          .photo-wrapper {
            width: 130px;
            height: 130px;
          }
          
          .fallback-text {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;