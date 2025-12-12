import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'YESIGN, Thrissur',
      period: 'June 2025 – Present',
      location: 'Thrissur, Kerala,Remote',
      responsibilities: [
        'Developing software applications using modern web technologies',
        'Collaborating on feature implementation and code reviews',
        //'Participating in agile development lifecycle'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Congnifys Technology',
      period: 'Feb 2025 – Mar 2025',
      location: 'Remote',
      responsibilities: [
        'Implemented machine learning models for data analysis',
        'Processed datasets using Python and data science libraries',
        'Developed data visualization dashboards and reports'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item card">
              <div className="timeline-header">
                <div className="timeline-icon">
                  <FaBriefcase />
                </div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                    <div className="timeline-details">
                      <span className="detail">
                        <FaCalendarAlt /> {exp.period}
                      </span>
                      <span className="detail">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="responsibilities">
                <h4>Key Responsibilities:</h4>
                <ul>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .experience-timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }
        
        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--primary), var(--secondary));
          border-radius: 3px;
        }
        
        .timeline-item {
          margin-bottom: 40px;
          position: relative;
          margin-left: 60px;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        
        .timeline-icon {
          position: absolute;
          left: -60px;
          top: 20px;
          width: 50px;
          height: 50px;
          background: white;
          border: 3px solid var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          font-size: 1.2rem;
          z-index: 1;
          box-shadow: var(--shadow);
        }
        
        .timeline-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f1f5f9;
        }
        
        .timeline-content h3 {
          font-size: 1.4rem;
          color: var(--dark);
          margin-bottom: 5px;
        }
        
        .company-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .company {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary);
        }
        
        .timeline-details {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .detail {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--gray);
          font-size: 0.9rem;
        }
        
        .detail svg {
          color: var(--primary);
        }
        
        .responsibilities h4 {
          font-size: 1.1rem;
          color: var(--dark);
          margin-bottom: 10px;
        }
        
        .responsibilities ul {
          list-style-type: none;
          padding-left: 0;
        }
        
        .responsibilities li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
          color: var(--dark-light);
          line-height: 1.6;
        }
        
        .responsibilities li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .experience-timeline::before {
            left: 20px;
          }
          
          .timeline-item {
            margin-left: 50px;
          }
          
          .timeline-icon {
            left: -50px;
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
          
          .timeline-details {
            flex-direction: column;
            gap: 5px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;