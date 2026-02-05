import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Users,
  GraduationCap,
  Building,
  Newspaper,
  Phone,
  ChevronDown,
} from 'lucide-react';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMouseEnter = (name) => setOpenDropdown(name);
  const handleMouseLeave = () => setOpenDropdown(null);
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const aboutSubItems = [
    { label: 'History', path: '/about/history' },
    { label: 'Organization Structure', path: '/about/organization' },
    { label: 'Department', path: '/about/department' },
  ];

  const admissionSubItems = [
    { label: 'Course', path: '/admission/course' },
    { label: 'Admission Requirements', path: '/admission/admission-requirements' },
    { label: 'Fee Structure', path: '/admission/fee-structure' },
    { label: 'Application Process', path: '/admission/application-process' },
  ];

  const facilitiesSubItems = [
    { label: 'Sport & Gym', path: '/facilities/sport-gym' },
    { label: 'Recreation', path: '/facilities/recreation' },
    { label: 'Classes & Accommodation', path: '/facilities/classes-accommodation' },
    { label: 'Range', path: '/facilities/range' },
    { label: 'Library', path: '/facilities/library' },
    { label: 'Driving School', path: '/facilities/driving-school' },
    { label: 'Dispensary', path: '/facilities/dispensary' },
  ];

  return (
    <>
      {/* ================= STYLES ================= */}
      <style>
        {`
          /* NAVBAR BASE */
          .college-navbar {
            background: #002855;
          }

          .college-navbar a,
          .college-navbar span {
            color: #ffffff;
          }

          .college-navbar svg {
            stroke: #ffffff;
          }

          /* HAMBURGER */
          .mobile-hamburger {
            display: none;
            padding: 12px 20px;
            font-size: 28px;
            cursor: pointer;
            color: #ffffff;
          }

          /* MAIN NAV */
          .main-nav ul {
            display: flex;
            gap: 25px;
            list-style: none;
            margin: 0;
            padding: 14px 30px;
            align-items: center;
          }

          .main-nav a,
          .main-nav span {
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 500;
            cursor: pointer;
          }

          /* DROPDOWN */
          .dropdown {
            position: relative;
          }

          .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background: #0b2e63;
            min-width: 220px;
            padding: 10px 0;
            border-radius: 6px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            z-index: 1000;
          }

          .dropdown-menu a {
            color: #ffffff;
            padding: 10px 20px;
            display: block;
          }

          .dropdown-menu a:hover {
            background: #123d7a;
            color: #ffffff;
          }

          /* HOVER FIX (VERY IMPORTANT) */
          .college-navbar a:hover,
          .college-navbar span:hover {
            color: #ffffff;
          }

          .college-navbar a:hover svg,
          .college-navbar span:hover svg {
            stroke: #ffffff;
          }

          /* MOBILE */
          @media (max-width: 900px) {
            .mobile-hamburger {
              display: block;
            }

            .main-nav {
              display: none;
            }

            .main-nav.open {
              display: block;
            }

            .main-nav ul {
              flex-direction: column;
              align-items: flex-start;
            }

            .dropdown-menu {
              position: static;
              width: 100%;
              box-shadow: none;
            }
          }
        `}
      </style>

      {/* ================= NAVBAR ================= */}
      <nav className="college-navbar">
        <div className="mobile-hamburger" onClick={toggleMobileMenu}>
          ☰
        </div>

        <div className={`main-nav ${isMobileOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/"><Home size={18} /> Home</Link>
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                <Users size={18} /> About Us <ChevronDown size={14} />
              </span>
              {openDropdown === 'about' && (
                <ul className="dropdown-menu">
                  {aboutSubItems.map(item => (
                    <li key={item.path}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('admission')}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                <GraduationCap size={18} /> Admission <ChevronDown size={14} />
              </span>
              {openDropdown === 'admission' && (
                <ul className="dropdown-menu">
                  {admissionSubItems.map(item => (
                    <li key={item.path}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('facilities')}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                <Building size={18} /> Facilities <ChevronDown size={14} />
              </span>
              {openDropdown === 'facilities' && (
                <ul className="dropdown-menu">
                  {facilitiesSubItems.map(item => (
                    <li key={item.path}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/news"><Newspaper size={18} /> News</Link>
            </li>

            <li>
              <Link to="/contact"><Phone size={18} /> Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
