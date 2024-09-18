import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaGlobe } from 'react-icons/fa';
import './ProfilePage.css';

const schoolsInTamilNadu = [
  'Padma Seshadri Bala Bhavan (PSBB), Chennai',
  'DAV Boys Senior Secondary School, Chennai',
  'Chinmaya Vidyalaya, Chennai',
  'Don Bosco Matriculation Higher Secondary School, Chennai',
  'SBOA School and Junior College, Chennai',
  'Chettinad Vidyashram, Chennai',
  'Vidya Mandir Senior Secondary School, Chennai',
  'St. John’s International Residential School, Chennai',
  'St. Bede’s Anglo Indian Higher Secondary School, Chennai',
  'Velammal Matriculation Higher Secondary School, Chennai',
  'Kendriya Vidyalaya, IIT Madras, Chennai',
  'Lady Andal Venkatasubba Rao Matriculation Higher Secondary School, Chennai',
  'St. Patrick’s Anglo Indian Higher Secondary School, Chennai',
  'St. Michael’s Academy, Chennai',
  'Sishya School, Chennai',
  'Maharishi Vidya Mandir, Chennai',
  'Bhavan’s Rajaji Vidyashram, Chennai',
  'Sri Sankara Senior Secondary School, Chennai',
  'The Schram Academy, Chennai',
  'National Public School, Chennai',
  'Modern Senior Secondary School, Chennai',
  'La Chatelaine Junior College, Chennai',
  'The Hindu Senior Secondary School, Chennai',
  'Ramakrishna Mission Higher Secondary School, Chennai',
  'Holy Angels Anglo Indian Higher Secondary School, Chennai',
  'Bishop Cotton Girls’ School, Chennai',
  'Kendriya Vidyalaya, Coimbatore',
  'Avila Convent Matriculation Higher Secondary School, Coimbatore',
  'Delhi Public School, Coimbatore',
  'PSG Public Schools, Coimbatore',
  'The Indian Public School, Coimbatore',
  'SBOA Matriculation Higher Secondary School, Coimbatore',
  'Stanes Anglo Indian Higher Secondary School, Coimbatore',
  'Chinmaya International Residential School, Coimbatore',
  'Cambridge School, Coimbatore',
  'Kendriya Vidyalaya, Trichy',
  'Montfort School, Yercaud',
  'Rishi Valley School, Madanapalle',
  'Kendriya Vidyalaya, Madurai',
  'Fatima Matriculation Higher Secondary School, Kodambakkam',
  'Noyes Matriculation Higher Secondary School, Madurai',
  'others',
  // Add more Tamil Nadu schools here
];


const collegesInTamilNadu = [
  'Indian Institute of Technology (IIT), Madras',
  'Anna University, Chennai',
  'Loyola College, Chennai',
  'Madras Christian College, Chennai',
  'Presidency College, Chennai',
  'Ethiraj College for Women, Chennai',
  'PSG College of Technology, Coimbatore',
  'SRM Institute of Science and Technology, Kattankulathur',
  'Vellore Institute of Technology (VIT), Vellore',
  'SASTRA University, Thanjavur',
  'St. Joseph’s College of Engineering, Chennai',
  'Amrita Vishwa Vidyapeetham, Coimbatore',
  'Thiagarajar College of Engineering, Madurai',
  'National Institute of Technology (NIT), Trichy',
  'Hindustan Institute of Technology and Science, Chennai',
  'Coimbatore Institute of Technology (CIT), Coimbatore',
  'Kumaraguru College of Technology, Coimbatore',
  'Sri Sairam Engineering College, Chennai',
  'Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai',
  'Government College of Technology, Coimbatore',
  'Sri Krishna College of Engineering and Technology, Coimbatore',
  'Mepco Schlenk Engineering College, Sivakasi',
  'Shanmugha Arts, Science, Technology & Research Academy (SASTRA), Thanjavur',
  'Meenakshi Sundararajan Engineering College, Chennai',
  'Bharathiar University, Coimbatore',
  'Karunya Institute of Technology and Sciences, Coimbatore',
  'Sri Venkateswara College of Engineering, Chennai',
  'Kongu Engineering College, Erode',
  'SSN College of Engineering, Chennai',
  'Annamalai University, Chidambaram',
  'Periyar Maniammai Institute of Science & Technology, Thanjavur',
  'Alagappa University, Karaikudi',
  'Avinashilingam Institute for Home Science and Higher Education for Women, Coimbatore',
  'Dr. M.G.R. Educational and Research Institute, Chennai',
  'VIT Business School, Vellore',
  'Rajiv Gandhi College of Engineering and Technology, Puducherry',
  'Government Law College, Madurai',
  'others'
  // Add more Tamil Nadu colleges here
];



const ProfilePage = () => {
  const [description, setDescription] = useState('');
  const [sslcSchool, setSslcSchool] = useState('');
  const [hscSchool, setHscSchool] = useState('');
  const [higherEducation, setHigherEducation] = useState({
    collegeName: '',
    department: '',
    yearOfStudy: '',
    cgpa: ''
  });
  const [educationExpanded, setEducationExpanded] = useState(false);

  const toggleEducation = () => {
    setEducationExpanded(!educationExpanded);
  };

  return (
    <div className="profile-page-container">
      <div className="left-sidebar">
        <div className="profile-section">
          <Avatar name="Freelancer Name" size="100" round={true} className="profile-avatar" />
          <h2 className="profile-name">Freelancer Name</h2>
          <textarea
            className="profile-description-box"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Custom Description about the freelancer..."
          />
        </div>

        <div className="ratings-community">
          <h4>Average Rating: ★★★★☆</h4>
          <h4>Community Collaborations: 5 Projects</h4>
        </div>

        <div className="links-section">
          <h4>Connect with me:</h4>
          <div className="social-links">
            <a href="https://yourwebsite.com" target="_blank" rel="noreferrer"><FaGlobe /> Website</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /> Twitter</a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          </div>
        </div>

        <div className="education-section">
          <h4 onClick={toggleEducation} className="education-header">
            Education {educationExpanded ? '▲' : '▼'}
          </h4>
          {educationExpanded && (
            <form>
              <div className="education-field vertical-row">
                <label>SSLC School</label>
                <select value={sslcSchool} onChange={(e) => setSslcSchool(e.target.value)}>
                  <option value="">Select School</option>
                  {schoolsInTamilNadu.map((school, index) => (
                    <option key={index} value={school}>{school}</option>
                  ))}
                </select>
                <label>SSLC Percentage</label>
                <input type="number" placeholder="Enter SSLC percentage" />
                <label>SSLC Marks</label>
                <input type="number" placeholder="Enter SSLC marks" />
              </div>

              <div className="education-field vertical-row">
                <label>HSC School</label>
                <select value={hscSchool} onChange={(e) => setHscSchool(e.target.value)}>
                  <option value="">Select School</option>
                  {schoolsInTamilNadu.map((school, index) => (
                    <option key={index} value={school}>{school}</option>
                  ))}
                </select>
                <label>HSC Percentage</label>
                <input type="number" placeholder="Enter HSC percentage" />
                <label>HSC Marks</label>
                <input type="number" placeholder="Enter HSC marks" />
                <label>HSC Group</label>
                <input type="text" placeholder="Enter HSC group" />
              </div>

              <div className="education-field vertical-row">
                <label>Higher Education College</label>
                <select value={higherEducation.collegeName} onChange={(e) => setHigherEducation({...higherEducation, collegeName: e.target.value})}>
                  <option value="">Select College</option>
                  {collegesInTamilNadu.map((college, index) => (
                    <option key={index} value={college}>{college}</option>
                  ))}
                </select>
                <label>Department</label>
                <input
                  type="text"
                  placeholder="Enter department"
                  value={higherEducation.department}
                  onChange={(e) => setHigherEducation({...higherEducation, department: e.target.value})}
                />
                <label>Year of Study</label>
                <input
                  type="text"
                  placeholder="Enter year of study"
                  value={higherEducation.yearOfStudy}
                  onChange={(e) => setHigherEducation({...higherEducation, yearOfStudy: e.target.value})}
                />
                <label>CGPA</label>
                <select
                  value={higherEducation.cgpa}
                  onChange={(e) => setHigherEducation({...higherEducation, cgpa: e.target.value})}
                >
                  <option value="">Select CGPA</option>
                  {[...Array(10).keys()].map((value) => (
                    <option key={value} value={value + 1}>{(value + 1).toFixed(2)}</option>
                  ))}
                </select>
              </div>
            </form>
          )}
        </div>

       
      </div>

      <div className="main-content">
        <div className="freelancing-work">
          <h3>Freelancing Work</h3>
          <textarea placeholder="Details about freelancing projects..." />
        </div>

        <div className="progress-report">
          <h4>Ongoing Progress</h4>
          <textarea placeholder="Current ongoing projects..." />
          
          <h4>Completed Progress</h4>
          <textarea placeholder="List of completed projects..." />
        </div>

        <div className="tech-stacks">
          <h4>Known Tech Stacks</h4>
          <textarea placeholder="React, Node.js, Python, etc." />
        </div>

        <button className="create-post-btn" onClick={() => alert('Redirecting to create post...')}>
          Create Post
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
