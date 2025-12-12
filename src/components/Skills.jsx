import React from 'react';
import { FaReact, FaPython, FaDatabase, FaToolbox, FaBrain, FaServer, FaUsers, FaComment, FaLightbulb, FaHandshake, FaChartLine, FaClock, FaGitAlt, FaCode } from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    {
      title: 'Programming Languages',
      icon: <FaPython />,
      skills: [
        { name: 'Python', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'SQL', level: 70 },
        { name: 'HTML/CSS', level: 80 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaReact />,
      skills: [
        { name: 'React.js', level: 70 },
        { name: 'Node.js', level: 70 },
        { name: 'TensorFlow', level: 82 },
        { name: 'Flask', level: 80 }
      ]
    },
    {
      title: 'AI/ML',
      icon: <FaBrain />,
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'Deep Learning', level: 80 },
        { name: 'Computer Vision', level: 60 },
        { name: 'CNN/GAN', level: 70 }
      ]
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: [
        { name: 'MySQL', level: 65 },
        { name: 'MongoDB', level: 55 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaToolbox />,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'REST APIs', level: 50 },
        { name: 'Agile/Scrum', level: 75 }
      ]
    },
    {
      title: 'Web Development',
      icon: <FaServer />,
      skills: [
        { name: 'Frontend Development', level: 60 },
        { name: 'Backend Development', level: 65 },
        { name: 'Responsive Design', level: 70 },
        { name: 'Deployment ', level: 70 }
      ]
    }
  ];

  const softSkills = [
    {
      title: 'Communication',
      icon: <FaComment />,
      description: 'Effective verbal and written communication for team collaboration and client interaction'
    },
    {
      title: 'Teamwork',
      icon: <FaUsers />,
      description: 'Collaborative approach to problem-solving and project development'
    },
    {
      title: 'Problem Solving',
      icon: <FaLightbulb />,
      description: 'Analytical thinking and creative solutions for complex technical challenges'
    },
    {
      title: 'Leadership',
      icon: <FaChartLine />,
      description: 'Ability to guide projects and mentor team members towards success'
    },
    {
      title: 'Time Management',
      icon: <FaClock />,
      description: 'Efficient task prioritization and deadline management in fast-paced environments'
    },
    {
      title: 'Adaptability',
      icon: <FaHandshake />,
      description: 'Quick learning and flexibility with new technologies and methodologies'
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        {/* Technical Skills Section */}
        <div className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills-grid">
            {technicalSkills.map((category, index) => (
              <div key={index} className="skill-category card">
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="skills-section">
          <h2 className="section-title">Soft Skills</h2>
          
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-card card">
                <div className="soft-skill-icon">
                  {skill.icon}
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .skills-section {
          margin-bottom: 80px;
        }
        
        .skills-section:last-child {
          margin-bottom: 0;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }
        
        .soft-skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }
        
        .skill-category, .soft-skill-card {
          padding: 25px;
        }
        
        .soft-skill-card {
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .soft-skill-card:hover {
          transform: translateY(-5px);
        }
        
        .soft-skill-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.8rem;
        }
        
        .soft-skill-card h3 {
          font-size: 1.3rem;
          color: var(--dark);
          margin-bottom: 15px;
        }
        
        .soft-skill-card p {
          color: var(--dark-light);
          line-height: 1.6;
          font-size: 0.95rem;
        }
        
        .category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f1f5f9;
        }
        
        .category-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }
        
        .category-header h3 {
          font-size: 1.3rem;
          color: var(--dark);
          margin: 0;
        }
        
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .skill-item {
          width: 100%;
        }
        
        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        
        .skill-name {
          font-weight: 600;
          color: var(--dark);
        }
        
        .skill-percent {
          font-weight: 700;
          color: var(--primary);
        }
        
        .skill-bar {
          height: 8px;
          background-color: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 4px;
          transition: width 1.5s ease;
        }
        
        @media (max-width: 768px) {
          .skills-grid,
          .soft-skills-grid {
            grid-template-columns: 1fr;
          }
          
          .skill-category,
          .soft-skill-card {
            padding: 20px;
          }
          
          .skills-section {
            margin-bottom: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;