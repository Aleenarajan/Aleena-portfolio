import React from 'react';
import { FaGraduationCap, FaUniversity, FaCalendar, FaStar } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Mar Baselios Institute of Technology and Science, Kothannangalam',
      period: 'Aug 2023 – May 2025',
      grade: 'CGPA: 6.95/10.0',
      highlights: [
        'Specialization in AI/ML and Web Development',
        'Published research paper on AI-powered pneumonia detection',
        'Completed multiple projects in AI and full-stack development'
      ]
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Sahyajyothi Arts and Science College, Kumily',
      period: 'Jul 2020 – May 2023',
      grade: 'CGPA: 6.3/10.0',
      highlights: [
        'Major in Computer Science',
        'Foundation in programming and algorithms',
        'Participated in technical events and workshops'
      ]
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Giss Amaravathy, Kumily',
      period: 'Jun 2018 – May 2020',
      grade: 'Percentage: 62.83%',
      highlights: [
        'Science Stream with Computer Science',
        'Developed interest in programming',
        'Participated in science exhibitions'
      ]
    },
    {
      degree: 'Secondary Education (10th)',
      institution: 'Mary Matha Public School (CBSE), Kumily',
      period: '2018',
      grade: 'Percentage: 51%',
      highlights: [
        'CBSE Curriculum',
        'Foundation in mathematics and science',
        'Active in extracurricular activities'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Privacy And Security in Social Media',
      issuer: 'NPTEL',
      year: '2024'
    }
  ];

  const languages = [
    { name: 'English', level: 'Professional Proficiency' },
    { name: 'Malayalam', level: 'Native Proficiency' },
    { name: 'Tamil', level: 'Professional Proficiency' }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-grid">
          <div className="education-timeline">
            {educationData.map((edu, index) => (
              <div key={index} className="education-card card">
                <div className="edu-header">
                  <div className="edu-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="edu-content">
                    <h3>{edu.degree}</h3>
                    <p className="institution">
                      <FaUniversity /> {edu.institution}
                    </p>
                    <div className="edu-details">
                      <span className="period">
                        <FaCalendar /> {edu.period}
                      </span>
                      <span className="grade">
                        <FaStar /> {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="edu-highlights">
                  <h4>Highlights:</h4>
                  <ul>
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="sidebar">
            <div className="certifications card">
              <h3>Certifications</h3>
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <div className="cert-badge">
                    <FaStar />
                  </div>
                  <div className="cert-content">
                    <h4>{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="languages card">
              <h3>Languages</h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="language-name">{lang.name}</span>
                    <div className="language-level">
                      <div 
                        className="level-bar"
                        style={{ 
                          width: lang.level === 'Native Proficiency' ? '100%' : 
                                 lang.level === 'Professional Proficiency' ? '85%' : '70%' 
                        }}
                      ></div>
                      <span className="level-text">{lang.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="technical-proficiencies card">
              <h3>Technical Proficiencies</h3>
              <div className="proficiency-tags">
                <span className="tag">Agile Methodology</span>
                <span className="tag">SDLC</span>
                <span className="tag">Code Review</span>
                <span className="tag">Testing</span>
                <span className="tag">Data Analysis</span>
                <span className="tag">Machine Learning</span>
                <span className="tag">Data Visualization</span>
                <span className="tag">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .education-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }
        
        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .education-card {
          padding: 25px;
        }
        
        .edu-header {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f1f5f9;
        }
        
        .edu-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .edu-content h3 {
          font-size: 1.3rem;
          color: var(--dark);
          margin-bottom: 8px;
        }
        
        .institution {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--primary);
          font-weight: 500;
          margin-bottom: 10px;
        }
        
        .edu-details {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .period, .grade {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--gray);
          font-size: 0.9rem;
        }
        
        .edu-highlights h4 {
          font-size: 1rem;
          color: var(--dark);
          margin-bottom: 10px;
        }
        
        .edu-highlights ul {
          list-style-type: none;
          padding-left: 0;
        }
        
        .edu-highlights li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          color: var(--dark-light);
          font-size: 0.95rem;
        }
        
        .edu-highlights li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .certifications, .languages, .technical-proficiencies {
          padding: 25px;
        }
        
        .certifications h3, 
        .languages h3, 
        .technical-proficiencies h3 {
          font-size: 1.3rem;
          color: var(--dark);
          margin-bottom: 20px;
          text-align: center;
        }
        
        .cert-item {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .cert-item:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        
        .cert-badge {
          width: 40px;
          height: 40px;
          background: #f0f9ff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        
        .cert-content h4 {
          font-size: 1rem;
          color: var(--dark);
          margin-bottom: 5px;
        }
        
        .cert-issuer {
          color: var(--gray);
          font-size: 0.9rem;
          margin-bottom: 5px;
        }
        
        .cert-year {
          background: #f1f5f9;
          color: var(--dark);
          padding: 2px 10px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .languages-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .language-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .language-name {
          font-weight: 600;
          color: var(--dark);
        }
        
        .language-level {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .level-bar {
          flex: 1;
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
          overflow: hidden;
        }
        
        .level-bar::after {
          content: '';
          display: block;
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 3px;
        }
        
        .level-text {
          font-size: 0.85rem;
          color: var(--gray);
          min-width: 100px;
        }
        
        .proficiency-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .tag {
          background: #f1f5f9;
          color: var(--dark);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        @media (max-width: 992px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 576px) {
          .edu-header {
            flex-direction: column;
            text-align: center;
          }
          
          .edu-icon {
            margin: 0 auto;
          }
          
          .edu-details {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;