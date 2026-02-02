import React, { useState, useEffect, useRef } from "react";
import {
  GraduationCap,
  FileText,
  BookOpen,
  TrendingUp,
  Users,
  CheckCircle,
  Calendar,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Clock,
  Target,
  Shield,
  Microscope,
  Search,
  Radio,
  Scale,
  Car,
  Award,
  Database,
} from "lucide-react";

import "./AdmissionRequirements.css";

const programs = [
  {
    id: 1,
    icon: <GraduationCap />,
    title: "Bachelor Degree in Police Science",
    duration: "3-4 Years",
    intake: "Annual",
    tag: "BPS",
    description: "Undergraduate degree in advanced police science and leadership",
    details: [
      "Comprehensive police science curriculum",
      "Leadership and management training",
      "Criminal justice system studies",
      "Advanced law enforcement techniques",
      "Research methodology and thesis",
      "Internship and practical training",
    ],
    color: "#1e40af",
  },
  {
    id: 2,
    icon: <Shield />,
    title: "Ordinary Diploma in Criminal Investigation",
    duration: "2-3 Years",
    intake: "Annual",
    tag: "OD-CI",
    description: "Specialized investigation techniques and forensic methodology",
    details: [
      "Criminal investigation procedures",
      "Forensic science fundamentals",
      "Evidence collection and analysis",
      "Interrogation techniques",
      "Crime scene management",
      "Court procedures and testimony",
    ],
    color: "#be123c",
  },

{
  id: 3,
  icon: <Microscope />,
  title: "Ordinary Diploma in Medical Laboratory Science",
  duration: "2-3 Years",
  intake: "Annual",
  tag: "OD-MLS",
  description: "Professional medical laboratory and forensic sciences diploma",
  details: [
    "Clinical laboratory techniques",
    "Forensic pathology basics",
    "Toxicology and drug analysis",
    "DNA profiling and analysis",
    "Laboratory safety protocols",
    "Quality control procedures",
  ],
  color: "#0f766e",
},
{
  id: 4,
  icon: <Users />,
  title: "Ordinary Diploma in Police Science",
  duration: "2-3 Years",
  intake: "Annual",
  tag: "OD-PS",
  description: "Comprehensive police science and law enforcement education",
  details: [
    "Police administration and management",
    "Criminal law and procedures",
    "Community policing strategies",
    "Traffic management and control",
    "Human rights and ethics",
    "Physical training and tactics",
  ],
  color: "#9333ea",
},
{
  id: 5,
  icon: <FileText />,
  title: "Basic Technician Certificate in Medical Laboratory Science",
  duration: "1 Year",
  intake: "Annual",
  tag: "BTC-MLS",
  description: "Foundational training in medical laboratory operations",
  details: [
    "Basic laboratory techniques",
    "Sample collection and handling",
    "Laboratory equipment operation",
    "Safety and hygiene protocols",
    "Record keeping and documentation",
    "Basic forensic procedures",
  ],
  color: "#ea580c",
},
{
  id: 6,
  icon: <Search />,
  title: "Basic Technician Certificate in Criminal Investigation",
  duration: "1 Year",
  intake: "Annual",
  tag: "BTC-CI",
  description: "Introduction to criminal investigation fundamentals",
  details: [
    "Basic investigation techniques",
    "Crime scene documentation",
    "Evidence handling procedures",
    "Interview and statement taking",
    "Report writing skills",
    "Introduction to forensics",
  ],
  color: "#7c3aed",
},
{
  id: 7,
  icon: <Radio />,
  title: "Basic Technician Certificate in Police Communication",
  duration: "1 Year",
  intake: "Annual",
  tag: "BTC-PC",
  description: "Police communication systems and operations training",
  details: [
    "Radio communication protocols",
    "Dispatch procedures",
    "Emergency response coordination",
    "Communication equipment operation",
    "Data entry and record management",
    "Crisis communication handling",
  ],
  color: "#059669",
},
{
  id: 8,
  icon: <Scale />,
  title: "Basic Technician Certificate in Law",
  duration: "1 Year",
  intake: "Annual",
  tag: "BTC-LAW",
  description: "Fundamental legal principles for law enforcement",
  details: [
    "Introduction to Tanzanian law",
    "Criminal law fundamentals",
    "Constitutional law basics",
    "Legal procedures and documentation",
    "Court system overview",
    "Legal research methods",
  ],
  color: "#dc2626",
},
{
  id: 9,
  icon: <BookOpen />,
  title: "Technician Certificate in Law",
  duration: "1-2 Years",
  intake: "Annual",
  tag: "TC-LAW",
  description: "Advanced legal training for law enforcement professionals",
  details: [
    "Advanced criminal law",
    "Evidence and procedure",
    "Human rights legislation",
    "Police powers and duties",
    "Legal drafting skills",
    "Case law analysis",
  ],
  color: "#0284c7",
},
{
  id: 10,
  icon: <Microscope />,
  title: "Technician Certificate in Medical Laboratory Science",
  duration: "1-2 Years",
  intake: "Annual",
  tag: "TC-MLS",
  description: "Advanced medical laboratory and forensic science training",
  details: [
    "Advanced laboratory analysis",
    "Forensic toxicology",
    "Serology and immunology",
    "Microbiology techniques",
    "Quality assurance practices",
    "Advanced instrumentation",
  ],
  color: "#16a34a",
},
{
  id: 11,
  icon: <Car />,
  title: "Driving Course",
  duration: "3-6 Months",
  intake: "Multiple",
  tag: "DRV",
  description: "Professional driving certification for law enforcement vehicles",
  details: [
    "Defensive driving techniques",
    "Emergency vehicle operation",
    "Vehicle maintenance basics",
    "Traffic laws and regulations",
    "Pursuit driving training",
    "Accident prevention strategies",
  ],
  color: "#6366f1",
},

];

const AdmissionRequirement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
      setIsAutoPlaying(false);
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
      setIsAutoPlaying(false);
    }
  };

  // Get visible cards (prev, current, next)
  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + programs.length) % programs.length;
    const nextIndex = (currentIndex + 1) % programs.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  return (
    <div className="admission-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Shield size={20} />
            <span>Excellence in Training</span>
          </div>
          <h1 className="hero-title">
            Admission
            <br />
            Requirements
          </h1>
          <p className="hero-subtitle">
            Begin your journey to becoming a professional law enforcement
            officer at one of East Africa's premier training institutions
          </p>
        </div>
        <div className="hero-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-grid"></div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="notice-card">
        <div className="notice-icon">
          <AlertCircle size={28} />
        </div>
        <div className="notice-content">
          <h3>Terms & Regulations</h3>
          <p>
            Admission to the academy implies full acceptance and commitment to
            uphold all institutional statutes, regulations, ethical standards,
            and codes of conduct throughout your training period.
          </p>
        </div>
      </div>

      {/* Programs Carousel Section */}
      <div className="programs-section">
        <div className="section-header">
          <Target size={32} />
          <h2>OUR PROGRAMS</h2>
          <p>Explore our comprehensive range of training programs designed to develop professional excellence</p>
        </div>

        <div 
          className="carousel-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button 
            className="carousel-nav carousel-nav-prev" 
            onClick={prevSlide}
            aria-label="Previous program"
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            className="carousel-nav carousel-nav-next" 
            onClick={nextSlide}
            aria-label="Next program"
          >
            <ChevronRight size={32} />
          </button>

          {/* Cards Container */}
          <div className="carousel-track">
            {programs.map((program, index) => {
              const visibleCards = getVisibleCards();
              const position = visibleCards.indexOf(index);
              
              let cardClass = "carousel-card";
              if (position === 0) cardClass += " carousel-card-prev";
              else if (position === 1) cardClass += " carousel-card-active";
              else if (position === 2) cardClass += " carousel-card-next";
              else cardClass += " carousel-card-hidden";

              return (
                <div
                  key={program.id}
                  className={cardClass}
                  style={{ "--card-color": program.color }}
                >
                  <div className="card-accent"></div>
                  
                  <div className="card-icon-large">
                    {program.icon}
                  </div>

                  <div className="card-tag">{program.tag}</div>

                  <h3 className="card-title">{program.title}</h3>
                  <p className="card-description">{program.description}</p>

                  <div className="card-meta-inline">
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{program.intake}</span>
                    </div>
                  </div>

                  <div className="card-actions">
                    <button 
                      className="btn-apply"
                      onClick={() => window.open('https://dpa.tpf.go.tz/apply', '_blank')}
                    >
                      APPLY NOW
                      <ChevronRight size={18} />
                    </button>
                    <button className="btn-learn">
                      <span className="info-icon">●</span>
                      LEARN MORE
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="carousel-pagination">
            {programs.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to program ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Application Timeline */}
      <div className="timeline-section">
        <div className="section-header">
          <Calendar size={32} />
          <h2>Application Timeline</h2>
        </div>
        <div className="timeline-grid">
          <div className="timeline-item">
            <div className="timeline-number">01</div>
            <div className="timeline-content">
              <h4>December</h4>
              <p>Applications Open</p>
              <span className="timeline-detail">
                Registration begins for next academic year
              </span>
            </div>
          </div>
          <div className="timeline-connector"></div>
          <div className="timeline-item">
            <div className="timeline-number">02</div>
            <div className="timeline-content">
              <h4>January - April</h4>
              <p>Application Period</p>
              <span className="timeline-detail">
                Submit documents and complete screening
              </span>
            </div>
          </div>
          <div className="timeline-connector"></div>
          <div className="timeline-item">
            <div className="timeline-number">03</div>
            <div className="timeline-content">
              <h4>May</h4>
              <p>Selection & Results</p>
              <span className="timeline-detail">
                Final selections announced
              </span>
            </div>
          </div>
          <div className="timeline-connector"></div>
          <div className="timeline-item">
            <div className="timeline-number">04</div>
            <div className="timeline-content">
              <h4>Next Academic Year</h4>
              <p>Program Begins</p>
              <span className="timeline-detail">
                Orientation and coursework start
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Take the first step towards a rewarding career in law enforcement
          </p>
          <div className="cta-buttons">
            <button 
              className="btn-primary"
              onClick={() => window.open('https://dpa.tpf.go.tz/apply', '_blank')}
            >
              Apply Now
            </button>
            <button className="btn-secondary">Download Brochure</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionRequirement;
