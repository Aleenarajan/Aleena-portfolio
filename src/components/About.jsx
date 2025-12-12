import React from 'react';

const About = () => {
  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aleena_Mariya_Rajan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Software Engineer specializing in Full Stack Development 
              and Artificial Intelligence. With a Master's in Computer Applications, 
              I combine technical expertise with creative problem-solving to build 
              innovative solutions.
            </p>
            <p>
              My journey in technology began with a curiosity about how things work, 
              which evolved into a passion for creating applications that make a difference. 
              I thrive on challenges and enjoy working on projects that involve cutting-edge 
              technologies like AI/ML and modern web development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or writing technical articles. 
              I believe in continuous learning and staying updated with the latest 
              industry trends.
            </p>
            
            <button className="btn resume-about-btn" onClick={handleDownloadResume}>
              📄 Download My Resume
            </button>
          </div>
          
          <div className="about-info card">
            <h3>Professional Summary</h3>
            <p>
              Master of Computer Applications graduate with expertise in React.js, Node.js, 
              Python, AI/ML, Deep Learning, TensorFlow, and web development. 
              Proven experience in software engineering, data science, and building 
              AI-powered applications.
            </p>
            <p>
              My skill set spans both frontend and backend development, with a strong focus on clean 
              code, smooth user experiences, and modern UI frameworks like React. I'm passionate about 
              solving real-world problems with practical, efficient, and user-centered solutions.
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .about-text p {
          margin-bottom: 20px;
          color: #334155;
          line-height: 1.8;
          font-size: 1.1rem;
        }
        
        .resume-about-btn {
          margin-top: 20px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);
        }
        
        .resume-about-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
        }
        
        .about-info {
          padding: 25px;
          border: 2px solid #e2e8f0;
          background: linear-gradient(135deg, #ffffff 0%, #fafbff 100%);
        }
        
        .about-info h3 {
          font-size: 1.4rem;
          color: #1e293b;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f1f5f9;
          font-family: 'Poppins', sans-serif;
        }
        
        .about-info p {
          color: #64748b;
          line-height: 1.7;
          font-size: 1rem;
          margin-bottom: 15px;
        }
        
        @media (max-width: 992px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
        
        @media (max-width: 576px) {
          .about-info {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;