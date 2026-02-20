import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 👈 use Link instead of <a>
import '../Home-page/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const menuRef = useRef(null);

  // Scroll detection for sticky header
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Show header always for now (optional: can hide on scroll)
      setShowHeader(true);
      setLastScrollY(currentScrollY);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setOpenDropdowns([]);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setOpenDropdowns([]);
  }

  function toggleDropdown(dropdownId) {
    setOpenDropdowns(prev =>
      prev.includes(dropdownId)
        ? prev.filter(id => id !== dropdownId)
        : [...prev, dropdownId]
    );
  }

  function isDropdownOpen(dropdownId) {
    return openDropdowns.includes(dropdownId);
  }

  // Close menu on link click (mobile)
  function handleLinkClick() {
    if (window.innerWidth <= 992) {
      setIsMenuOpen(false);
      setOpenDropdowns([]);
    }
  }

  const headerClasses = [
    'full-width-header',
    isScrolled ? 'scrolled' : '',
    showHeader ? 'show' : 'hide'
  ].filter(Boolean).join(' ');

  return (
    <div className={headerClasses} ref={menuRef}>
      <header id="rs-header" className="rs-header">
        {/* Topbar */}
        <div className="topbar-area">
          <div className="container">
            <div className="topbar-content">
              <div className="logo-part">
                <span>GYFTech</span>
              </div>
              <div className="contact-info-wrapper">
                <ul className="rs-contact-info">
                  <li className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="contact-details">
                      <span className="contact-label">Address</span>
                      <span className="contact-value">Gilgit. Pakistan</span>
                    </div>
                  </li>
                  <li className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div className="contact-details">
                      <span className="contact-label">E-mail</span>
                      <Link to="mailto:info@GYFTechgmail.com" className="contact-value">
                        info@GYFTechgmail.com
                      </Link>
                    </div>
                  </li>
                  <li className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div className="contact-details">
                      <span className="contact-label">Phone</span>
                      <span className="contact-value">+019988772</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="menu-area">
          <div className="container">
            <div className="menu-wrapper">
              <div className="site-logo">
                <Link to="/">
                  <img
                    src="https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Tech Solutions"
                  />
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>

              {/* Navigation Menu */}
              <nav className={`main-navigation ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav-menu">
                  {/* Home Dropdown */}
                  <li className={`nav-item has-dropdown ${isDropdownOpen('home') ? 'open' : ''}`}>
                    <button
                      className="nav-link dropdown-toggle"
                      onClick={() => toggleDropdown('home')}
                    >
                      Home
                      <span className="dropdown-arrow">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </button>
                    <div className="dropdown-menu mega-dropdown">
                      <div className="dropdown-grid">
                        <div className="dropdown-column">
                          <h4 className="dropdown-title">Multipage Demos</h4>
                          <ul className="dropdown-list">
                            <li>
                              <Link to="/" onClick={handleLinkClick}>
                                Main Demo
                              </Link>
                            </li>
                            <li>
                              <Link to="/digital-agency-01" onClick={handleLinkClick}>
                                Digital Agency 01
                              </Link>
                            </li>
                            <li>
                              <Link to="/it-solution-01" onClick={handleLinkClick}>
                                IT Solution 01
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="dropdown-column">
                          <h4 className="dropdown-title">Onepage Demos</h4>
                          <ul className="dropdown-list">
                            <li>
                              <Link to="/onepage1" onClick={handleLinkClick}>
                                Main Demo
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* About */}
                  <li className="nav-item">
                    <Link to="/about" className="nav-link" onClick={handleLinkClick}>
                      About
                    </Link>
                  </li>

                  {/* Services */}
                  <li className={`nav-item has-dropdown ${isDropdownOpen('services') ? 'open' : ''}`}>
                    <button
                      className="nav-link dropdown-toggle"
                      onClick={() => toggleDropdown('services')}
                    >
                      Services
                      <span className="dropdown-arrow">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <ul className="dropdown-list">
                        <li>
                          <Link to="/software-development" onClick={handleLinkClick}>
                            Software Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/web-development" onClick={handleLinkClick}>
                            Web Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Contact */}
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;