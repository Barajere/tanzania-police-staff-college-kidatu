import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SportGymBest() {
  const heroImages = [
    "/images/sports.jpg",
    "/images/gym1.jpg",
    "/images/gym2.jpg",
    "/images/sports2.jpg",
  ];

  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const data = {
    sports: [
      { title: "Football", tag: "Tactical Unity", description: "Building strategy, endurance and unbreakable team discipline on professional pitches.", photo: "/images/sports.jpg" },
      { title: "Basketball", tag: "Agility & Precision", description: "Multi-level courts for explosive drills, teamwork and competitive edge.", photo: "/images/sports.jpg" },
      { title: "Volleyball", tag: "Coordination & Reflex", description: "Dedicated facilities sharpening focus, leaps and rapid tactical response.", photo: "/images/sports.jpg" },
    ],
    gym: [
      { title: "Cardio Zone", icon: "🏃‍♂️", description: "Advanced machines for building superior stamina and cardiovascular resilience.", photo: "/images/gym1.jpg" },
      { title: "Strength Zone", icon: "💪", description: "Comprehensive equipment for power development, control and peak performance.", photo: "/images/gym2.jpg" },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    arrows: false,
    fade: true,
    pauseOnHover: true,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Anton&display=swap');

        :root {
          --bg: #0a0f1e;
          --surface: #111827;
          --accent: #00d1ff;
          --accent-dark: #0099cc;
          --text: #f1f5f9;
          --text-dim: #cbd5e1;
          --border: rgba(0,209,255,0.15);
          --glow: rgba(0,209,255,0.25);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .sg-best {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* HERO */
        .sg-hero {
          position: relative;
          height: 95vh;
          min-height: 720px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .sg-hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 2s ease;
        }

        .sg-hero-slide.active { opacity: 1; }

        .sg-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10,15,30,0.75) 0%, rgba(10,15,30,0.88) 100%);
          z-index: 1;
        }

        .sg-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          padding: 0 2rem;
        }

        .sg-hero-badge {
          font-size: 1.2rem;
          font-weight: 700;
          margin-top:50px;
          letter-spacing: 3px;
          color: var(--accent);
          margin-bottom: 1.5rem;
          display: inline-block;
        }

        .sg-hero h1 {
          font-family: 'Anton', sans-serif;
          font-size: clamp(5.5rem, 14vw, 11rem);
          line-height: 0.9;
          margin-bottom: 1.5rem;
          color: white;
          text-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }

        .sg-hero p {
          font-size: clamp(1.3rem, 3.5vw, 1.6rem);
          max-width: 780px;
          margin: 0 auto 3rem;
          color: var(--text-dim);
        }

        .sg-hero-cta {
          background: var(--accent);
          color: #000;
          font-size: 1.4rem;
          font-weight: 700;
          padding: 1.2rem 3.5rem;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 0 30px var(--glow);
        }

        .sg-hero-cta:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 60px var(--glow);
        }

        /* BODY */
        .sg-body {
          max-width: 1300px;
          margin: 0 auto;
          padding: clamp(6rem, 10vw, 10rem) 2rem;
        }

        .sg-section-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(4rem, 10vw, 7rem);
          text-align: center;
          margin-bottom: 4rem;
          color: rgba(255,255,255,0.15);
          position: relative;
        }

        .sg-section-title span {
          position: relative;
          color: white;
        }

        /* Carousel Sports */
        .sg-sport-card {
          height: 560px;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface);
          border: 1px solid var(--border);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          transition: all 0.5s ease;
        }

        .sg-sport-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(0,209,255,0.3);
        }

        .sg-sport-card img {
          width: 100%;
          height: 65%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .sg-sport-card:hover img { transform: scale(1.08); }

        .sg-sport-content {
          padding: 2rem;
        }

        .sg-sport-tag {
          background: var(--accent);
          color: #000;
          font-weight: 700;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.95rem;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .sg-sport-content h3 {
          font-family: 'Anton', sans-serif;
          font-size: 3.2rem;
          margin-bottom: 0.8rem;
        }

        .sg-sport-content p {
          color: var(--text-dim);
          font-size: 1.15rem;
        }

        /* Gym Grid */
        .sg-gym-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 768px) { .sg-gym-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .sg-gym-grid { grid-template-columns: repeat(3, 1fr); } }

        .sg-gym-card {
          background: var(--surface);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: all 0.4s ease;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        .sg-gym-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 16px 50px rgba(0,209,255,0.25);
        }

        .sg-gym-img {
          height: 320px;
          position: relative;
        }

        .sg-gym-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sg-gym-icon {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          font-size: 6rem;
          color: rgba(0,209,255,0.3);
          transition: all 0.4s ease;
        }

        .sg-gym-card:hover .sg-gym-icon {
          color: var(--accent);
          transform: scale(1.15);
        }

        .sg-gym-info {
          padding: 2rem;
        }

        .sg-gym-info h3 {
          font-family: 'Anton', sans-serif;
          font-size: 2.6rem;
          color: var(--accent);
          margin-bottom: 1rem;
        }

        .sg-gym-info p {
          color: var(--text-dim);
        }
      `}</style>

      <div className="sg-best">

        <div className="sg-hero">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`sg-hero-slide ${i === currentHero ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="sg-hero-overlay" />

          <div className="sg-hero-content">
            <div className="sg-hero-badge">TANZANIA POLICE STAFF COLLEGE</div>
            <h1>SPORTS & FITNESS EXCELLENCE</h1>
            <p>Shaping disciplined, resilient and high-performing officers through world-class training and teamwork.</p>
            <button className="sg-hero-cta">Explore The Programme</button>
          </div>
        </div>

        <div className="sg-body">

          <section style={{ marginBottom: "10rem" }}>
            <h2 className="sg-section-title"><span>Competitive Sports</span></h2>
            <Slider {...settings}>
              {data.sports.map((sport, i) => (
                <div key={i}>
                  <div className="sg-sport-card">
                    <img src={sport.photo} alt={sport.title} />
                    <div className="sg-sport-content">
                      <div className="sg-sport-tag">{sport.tag}</div>
                      <h3>{sport.title}</h3>
                      <p>{sport.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </section>

          <section>
            <h2 className="sg-section-title"><span>Gym & Conditioning</span></h2>
            <div className="sg-gym-grid">
              {data.gym.map((item, i) => (
                <div className="sg-gym-card" key={i}>
                  <div className="sg-gym-img">
                    <img src={item.photo} alt={item.title} />
                    <span className="sg-gym-icon">{item.icon}</span>
                  </div>
                  <div className="sg-gym-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}