import React from 'react';

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aleena_Mariya_Rajan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Skills data - positioned at different angles around the circle
  const skills = [
    { name: 'React', color: '#61dafb', textColor: '#000', angle: 0, distance: 200 }, // Top
    { name: 'Node.js', color: '#68a063', textColor: '#fff', angle: 45, distance: 200 }, // Top-Right
    { name: 'ENG', color: '#8b5cf6', textColor: '#fff', angle: 90, distance: 200 }, // Right
    { name: 'Python', color: '#3776ab', textColor: '#fff', angle: 135, distance: 200 }, // Bottom-Right
    { name: 'Flask', color: '#000000', textColor: '#fff', angle: 180, distance: 200 }, // Bottom
    { name: 'TensorFlow', color: '#ff6f00', textColor: '#fff', angle: 225, distance: 200 }, // Bottom-Left
    { name: 'AI/ML', color: '#ff6b6b', textColor: '#fff', angle: 270, distance: 200 }, // Left
    { name: 'JavaScript', color: '#f7df1e', textColor: '#000', angle: 315, distance: 200 }, // Top-Left
  ];

  // Function to calculate skill position
  const getSkillPosition = (angle, distance) => {
    const angleInRadians = (angle * Math.PI) / 180;
    const x = Math.cos(angleInRadians) * distance;
    const y = Math.sin(angleInRadians) * distance;
    return { x, y };
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h4 className="hero-greeting fade-in-up">Hi, I'm</h4>
            <h1 className="hero-title">
              <span className="highlight">Aleena Mariya Rajan</span>
            </h1>
            <h2 className="hero-subtitle fade-in-up">
              Full Stack Developer
            </h2>
            <p className="hero-description fade-in-up">
              Full Stack Developer crafting modern, responsive web apps with clean UI and 
              logical solutions. I build innovative applications using cutting-edge technologies.
            </p>
            
            <div className="hero-buttons fade-in-up">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <button className="btn btn-outline" onClick={handleDownloadResume}>
                📄 Download Resume
              </button>
            </div>
            
            <div className="hero-stats fade-in-up">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-container">
              {/* Photo container */}
              <div className="photo-container">
                <img 
                  src="/aleena-photo.jpg" 
                  alt="Aleena Mariya Rajan" 
                  className="profile-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%236366f1'/%3E%3Ctext x='100' y='110' font-size='50' text-anchor='middle' fill='white' font-family='Arial'%3EA%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              {/* Skills orbiting around the photo - WIDELY SPREAD */}
              <div className="tech-orbits">
                {skills.map((skill, index) => {
                  const position = getSkillPosition(skill.angle, skill.distance);
                  
                  return (
                    <div 
                      key={index}
                      className="tech-tag"
                      style={{
                        backgroundColor: skill.color,
                        color: skill.textColor,
                        '--angle': `${skill.angle}deg`,
                        '--distance': `${skill.distance}px`,
                        '--delay': `${index * 0.2}s`,
                        '--x-pos': `${position.x}px`,
                        '--y-pos': `${position.y}px`,
                        left: `calc(50% + ${position.x}px)`,
                        top: `calc(50% + ${position.y}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      {skill.name}
                    </div>
                  );
                })}
                
                {/* Orbit circles */}
                <div className="orbit-circle orbit-1"></div>
                <div className="orbit-circle orbit-2"></div>
                <div className="orbit-circle orbit-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
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
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        
        .hero-text {
          max-width: 600px;
        }
        
        .hero-greeting {
          font-size: 1.5rem;
          color: #6366f1;
          font-weight: 500;
          margin-bottom: 10px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.2s;
        }
        
        .hero-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 15px;
          color: #0f172a;
        }
        
        .hero-title .highlight {
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
        
        .hero-subtitle {
          font-size: 1.8rem;
          color: #1e293b;
          margin-bottom: 25px;
          font-weight: 600;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.4s;
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: #64748b;
          margin-bottom: 30px;
          line-height: 1.8;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.6s;
        }
        
        .hero-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 40px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.8s;
        }
        
        .btn {
          padding: 12px 28px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .btn-primary {
          background: #6366f1;
          color: white;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
          background: #4f46e5;
        }
        
        .btn-secondary {
          background: #10b981;
          color: white;
        }
        
        .btn-secondary:hover {
          background: #0da271;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        }
        
        .btn-outline {
          background: transparent;
          border: 2px solid #6366f1;
          color: #6366f1;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .btn-outline:hover {
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
        }
        
        .hero-stats {
          display: flex;
          gap: 30px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 1s;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          color: #6366f1;
          margin-bottom: 5px;
          font-family: 'Poppins', sans-serif;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }
        
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 500px;
        }
        
        .visual-container {
          position: relative;
          width: 450px;
          height: 450px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Photo Container */
        .photo-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          border: 6px solid white;
          box-shadow: 
            0 20px 40px rgba(99, 102, 241, 0.3),
            inset 0 10px 20px rgba(255, 255, 255, 0.2);
          z-index: 10;
          background: #f1f5f9;
          animation: pulse 4s ease-in-out infinite;
        }
        
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        /* Skills Orbits - WIDELY SPREAD */
        .tech-orbits {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        }
        
        .tech-tag {
          position: absolute;
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          z-index: 5;
          white-space: nowrap;
          animation: float 3s ease-in-out infinite;
          animation-delay: var(--delay);
          border: 2px solid white;
          transform: translate(-50%, -50%);
          /* Individual positioning via inline styles */
        }
        
        /* Hover effects for skills */
        .tech-tag:hover {
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
          z-index: 20;
        }
        
        /* Orbit circles - more circles for better visual */
        .orbit-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px dashed rgba(99, 102, 241, 0.2);
          animation: rotateOrbit linear infinite;
        }
        
        .orbit-1 {
          width: 350px;
          height: 350px;
          animation-duration: 30s;
        }
        
        .orbit-2 {
          width: 400px;
          height: 400px;
          animation-duration: 40s;
          animation-direction: reverse;
        }
        
        .orbit-3 {
          width: 300px;
          height: 300px;
          animation-duration: 25s;
          border-style: dotted;
          border-color: rgba(14, 165, 233, 0.2);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%);
          }
          50% {
            transform: translate(-50%, calc(-50% - 8px));
          }
        }
        
        @keyframes rotateOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        /* Responsive styles */
        @media (max-width: 1200px) {
          .hero-content {
            gap: 40px;
          }
          
          .visual-container {
            width: 400px;
            height: 400px;
          }
          
          .photo-container {
            width: 160px;
            height: 160px;
          }
          
          .orbit-1 {
            width: 320px;
            height: 320px;
          }
          
          .orbit-2 {
            width: 370px;
            height: 370px;
          }
          
          .orbit-3 {
            width: 280px;
            height: 280px;
          }
          
          .tech-tag {
            padding: 8px 16px;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-subtitle {
            font-size: 1.5rem;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .visual-container {
            width: 450px;
            height: 450px;
            margin: 0 auto;
          }
          
          .hero-visual {
            height: 500px;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 100px 0 60px;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-buttons .btn {
            width: 100%;
            max-width: 250px;
          }
          
          .hero-stats {
            gap: 20px;
          }
          
          .stat-number {
            font-size: 1.8rem;
          }
          
          .visual-container {
            width: 380px;
            height: 380px;
          }
          
          .photo-container {
            width: 150px;
            height: 150px;
          }
          
          .tech-tag {
            padding: 7px 14px;
            font-size: 0.8rem;
          }
          
          .orbit-1 {
            width: 280px;
            height: 280px;
          }
          
          .orbit-2 {
            width: 330px;
            height: 330px;
          }
          
          .orbit-3 {
            width: 250px;
            height: 250px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.3rem;
          }
          
          .hero-description {
            font-size: 1.1rem;
          }
          
          .visual-container {
            width: 320px;
            height: 320px;
          }
          
          .photo-container {
            width: 130px;
            height: 130px;
          }
          
          .orbit-1 {
            width: 240px;
            height: 240px;
          }
          
          .orbit-2 {
            width: 280px;
            height: 280px;
          }
          
          .orbit-3 {
            width: 220px;
            height: 220px;
          }
          
          .tech-tag {
            padding: 6px 12px;
            font-size: 0.75rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero {
            padding: 80px 0 40px;
          }
          
          .visual-container {
            width: 280px;
            height: 280px;
          }
          
          .hero-visual {
            height: 400px;
          }
          
          .photo-container {
            width: 110px;
            height: 110px;
            border-width: 4px;
          }
          
          .orbit-1 {
            width: 200px;
            height: 200px;
          }
          
          .orbit-2 {
            width: 240px;
            height: 240px;
          }
          
          .orbit-3 {
            width: 180px;
            height: 180px;
          }
          
          /* Reduce number of skills on very small screens */
          .tech-tag:nth-child(n+5) {
            display: none;
          }
        }
        
        @media (max-width: 360px) {
          .visual-container {
            width: 250px;
            height: 250px;
          }
          
          .photo-container {
            width: 100px;
            height: 100px;
          }
          
          .orbit-1 {
            width: 180px;
            height: 180px;
          }
          
          .orbit-2 {
            width: 220px;
            height: 220px;
          }
          
          .orbit-3 {
            width: 160px;
            height: 160px;
          }
          
          .tech-tag {
            padding: 5px 10px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;