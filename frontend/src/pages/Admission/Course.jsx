<<<<<<< HEAD
import { useEffect, useState } from 'react';
import api from '../../utils/api';

export default function Course() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('pages/course/')
      .then(res => {
        setContent(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading Course page:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading Course info...</div>;
  if (!content) return <div>Course details not available.</div>;

  return (
    <div className="course-page">
      <h1>{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.content }} />
    </div>
  );
}
=======
import './Course.css';
import modernDormitoriesImage from '../../assets/modern-dormitories.png';

export default function Course() {
  return (
    <div className="course-page">
      <div className="course-container">
        <h1 className="course-title">Course Offered at DPA</h1>
        
        <div className="course-content-wrapper">
          {/* Left Column - Image */}
          <div className="course-image-column">
            <div className="course-image-wrapper">
              <img 
                src={modernDormitoriesImage} 
                alt="DPA Modern Dormitories" 
                className="course-image"
              />
            </div>
            <p className="course-image-caption">"Our Modern Domitories."</p>
          </div>

          {/* Right Column - Text Content */}
          <div className="course-text-column">
            {/* Academic Programmes Section */}
            <div className="course-section-card">
              <div className="card-top-bar"></div>
              <div className="course-section-content">
                <h2 className="course-section-title">Academic Programmes</h2>
                <ul className="course-list">
                  <li>Diploma in Police Science</li>
                  <li>Medical Laboratory Technology program</li>
                  <li>Certificate in Law</li>
                </ul>
              </div>
            </div>

            {/* Professional programmes Section */}
            <div className="course-section-card">
              <div className="card-top-bar"></div>
              <div className="course-section-content">
                <h2 className="course-section-title">Professional programmes</h2>
                <ul className="course-list">
                  <li>Gazetted Officers Training Programme</li>
                  <li>Assistant Inspectors Training Programme</li>
                  <li>Instructors Training Programme</li>
                  <li>Driving Training Programme</li>
                  <li>Raiders' Training Programme</li>
                  <li>Statistics Training Programme</li>
                  <li>Proficiency Training Programme</li>
                </ul>
              </div>
            </div>

            {/* NOTE Section */}
            <div className="course-note-card">
              <h3 className="course-note-title">NOTE:</h3>
              <p className="course-note-text">
                The Academy has also been appointed as a Centre for Excellence for Public order Management Programmes.
              </p>
              <p className="course-note-text">
                Candidates for long and short courses must have the required education and work experience to enable them complete and benefit from the courses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> f82bba6af5ffd5ca62025f21297dee1ee034a82d
