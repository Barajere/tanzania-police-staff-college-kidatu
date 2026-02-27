import './History.css';
import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { FaEye, FaBullseye, FaListUl } from "react-icons/fa";

export default function History() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("vision");
  
  useEffect(() => {
    api.get('pages/history/')
      .then(res => {
        setContent(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading History page:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="history-loading">Loading History…</div>;

  if (!content) {
    return (
      <section className="history-section">
  <h1 className="history-title">Our History</h1>

  <div className="history-card">

    <div className="history-image">
      <img src="/images/hostel.jpg" alt="Zanzibar Police College" />
    </div>

    <div className="history-content">

      <div className="history-text">
        <p>
          Tanzania Police Staff College (TPSC) is located at Kidatu - Morogoro, Tanzania.
          It was established during the British colonial domination in 1956. The Institution main purpose was to train
          Police Officers in Leadership Promotion Courses nad Profesional courses likes Investigation Courses.
        </p>

        <p>
          TPSC obtained Registration number REG/PWF/035 from NACTE on 29th October 2009
          and started offering NTA Level 5 in Police Science in 2010/2011.
        </p>
      </div>

      {/* Vision, Mission & Objectives */}
      <div className="history-tabs">

  {/* Centered Tab Buttons */}
  <div className="tab-buttons centered">

    <button
      className={activeTab === "vision" ? "active" : ""}
      onClick={() => setActiveTab("vision")}
    >
      <FaEye className="tab-icon" />
      Vision
    </button>

    <button
      className={activeTab === "mission" ? "active" : ""}
      onClick={() => setActiveTab("mission")}
    >
      <FaBullseye className="tab-icon" />
      Mission
    </button>

    <button
      className={activeTab === "objectives" ? "active" : ""}
      onClick={() => setActiveTab("objectives")}
    >
      <FaListUl className="tab-icon" />
      Objectives
    </button>

  </div>

  <div className="tab-content">
    {activeTab === "vision" && (
      <div>
        <h3>Our Vision</h3>
        <p>
          To become an outstanding training Institution for Law Enforcement Officers
          in various skills that enable an officer to deal with crime threats at
          national, regional and international levels.
        </p>
      </div>
    )}

    {activeTab === "mission" && (
      <div>
        <h3>Our Mission</h3>
        <p>
          To offer training courses on police professionalism, techniques and skills
          in crime detection, prevention, crime solving, apprehension of offenders,
          and maintenance of peace and security in the United Republic of Tanzania
          and beyond.
        </p>
      </div>
    )}

    {activeTab === "objectives" && (
      <div>
        <h3>Our Objectives</h3>
        <ul>
          <li>Develop law enforcement competencies</li>
          <li>Ensure maintenance of law and order</li>
          <li>Develop skills in policing operations</li>
          <li>Improve college facilities for training excellence</li>
        </ul>
      </div>
    )}
  </div>
</div>

    </div>
  </div>
</section>
    );
  }

  return (
    <section className="history-section">
      <h1 className="history-title">{content.title}</h1>

      <div className="history-card">
        <div
          className="history-text"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
      </div>
    </section>
  );
}
