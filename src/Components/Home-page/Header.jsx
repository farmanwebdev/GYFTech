import { useState, useRef, useEffect } from 'react';
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
      
      // Detect if scrolled
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide/show header on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(true); // Hide on scroll down
      } else {
        setShowHeader(true); // Show on scroll up
      }
      
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

  // Determine header classes based on scroll state
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
                {/* <img src="" alt="Logo" /> */}
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
                      <a href="mailto:info@yourmail.com" className="contact-value">info@GYFTechgmail.com</a>
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
              {/* Logo */}
              <div className="site-logo">
                <a href="/">
                  <img src="https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tech Solutions" />
                </a>
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
                            <li><a href="index.html" onClick={handleLinkClick}>Main Demo</a></li>
                            <li><a href="index2.html" onClick={handleLinkClick}>Digital Agency 01</a></li>
                            <li><a href="index3.html" onClick={handleLinkClick}>IT Solution 01</a></li>
                            <li><a href="index4.html" onClick={handleLinkClick}>Digital Agency 02</a></li>
                            <li><a href="index5.html" onClick={handleLinkClick}>Software Solution</a></li>
                            <li><a href="index6.html" onClick={handleLinkClick}>Data Analysis</a></li>
                            <li><a href="index7.html" onClick={handleLinkClick}>IT Solution 02</a></li>
                          </ul>
                        </div>
                        <div className="dropdown-column">
                          <h4 className="dropdown-title">Onepage Demos</h4>
                          <ul className="dropdown-list">
                            <li><a href="onepage1.html" onClick={handleLinkClick}>Main Demo</a></li>
                            <li><a href="onepage2.html" onClick={handleLinkClick}>Digital Agency 01</a></li>
                            <li><a href="onepage3.html" onClick={handleLinkClick}>IT Solution 01</a></li>
                            <li><a href="onepage4.html" onClick={handleLinkClick}>Digital Agency 02</a></li>
                            <li><a href="onepage5.html" onClick={handleLinkClick}>Software Solution</a></li>
                            <li><a href="onepage6.html" onClick={handleLinkClick}>Data Analysis</a></li>
                            <li><a href="onepage7.html" onClick={handleLinkClick}>IT Solution 02</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* About */}
                  <li className="nav-item">
                    <a href="about.html" className="nav-link" onClick={handleLinkClick}>
                      About
                    </a>
                  </li>

                  {/* Services Dropdown */}
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
                        <li><a href="software-development.html" onClick={handleLinkClick}>Software Development</a></li>
                        <li><a href="web-development.html" onClick={handleLinkClick}>Web Development</a></li>
                        <li><a href="analytic-solutions.html" onClick={handleLinkClick}>Analytic Solutions</a></li>
                        <li><a href="cloud-and-devops.html" onClick={handleLinkClick}>Cloud & DevOps</a></li>
                        <li><a href="product-design.html" onClick={handleLinkClick}>Product Design</a></li>
                        <li><a href="data-center.html" onClick={handleLinkClick}>Data Center</a></li>
                      </ul>
                    </div>
                  </li>

                  {/* Pages Dropdown */}
                  <li className={`nav-item has-dropdown ${isDropdownOpen('pages') ? 'open' : ''}`}>
                    <button 
                      className="nav-link dropdown-toggle"
                      onClick={() => toggleDropdown('pages')}
                    >
                      Pages
                      <span className="dropdown-arrow">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </button>
                    <div className="dropdown-menu wide-dropdown">
                      <div className="dropdown-grid">
                        <div className="dropdown-column">
                          <h4 className="dropdown-title">Services Pages</h4>
                          <ul className="dropdown-list">
                            <li><a href="services1.html" onClick={handleLinkClick}>Services Style 1</a></li>
                            <li><a href="services2.html" onClick={handleLinkClick}>Services Style 2</a></li>
                            <li><a href="services3.html" onClick={handleLinkClick}>Services Style 3</a></li>
                          </ul>
                        </div>
                        <div className="dropdown-column">
                          <h4 className="dropdown-title">Team</h4>
                          <ul className="dropdown-list">
                            <li><a href="our-team.html" onClick={handleLinkClick}>Our Team</a></li>
                            <li><a href="single-team.html" onClick={handleLinkClick}>Single Team</a></li>
                          </ul>
                        </div>
                        <div className="dropdown-column">
                          <h4 className="dropdown-title">Case Studies</h4>
                          <ul className="dropdown-list">
                            {[1,2,3,4,5,6,7].map(num => (
                              <li key={num}>
                                <a href={`case-studies-style${num}.html`} onClick={handleLinkClick}>
                                  Style {num}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="dropdown-column">
                          <h4 className="dropdown-title">Shop</h4>
                          <ul className="dropdown-list">
                            <li><a href="shop.html" onClick={handleLinkClick}>Shop</a></li>
                            <li><a href="shop-single.html" onClick={handleLinkClick}>Shop Single</a></li>
                            <li><a href="cart.html" onClick={handleLinkClick}>Cart</a></li>
                            <li><a href="checkout.html" onClick={handleLinkClick}>Checkout</a></li>
                            <li><a href="my-account.html" onClick={handleLinkClick}>My Account</a></li>
                          </ul>
                        </div>
                        <div className="dropdown-column">
                          <h4 className="dropdown-title">Other Pages</h4>
                          <ul className="dropdown-list">
                            <li><a href="pricing.html" onClick={handleLinkClick}>Pricing</a></li>
                            <li><a href="faq.html" onClick={handleLinkClick}>FAQ</a></li>
                            <li><a href="error.html" onClick={handleLinkClick}>404 Error</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Blog Dropdown */}
                  <li className={`nav-item has-dropdown ${isDropdownOpen('blog') ? 'open' : ''}`}>
                    <button 
                      className="nav-link dropdown-toggle"
                      onClick={() => toggleDropdown('blog')}
                    >
                      Blog
                      <span className="dropdown-arrow">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <ul className="dropdown-list">
                        <li><a href="blog.html" onClick={handleLinkClick}>Blog Grid</a></li>
                        <li><a href="blog-details.html" onClick={handleLinkClick}>Blog Details</a></li>
                      </ul>
                    </div>
                  </li>

                  {/* Contact */}
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link" onClick={handleLinkClick}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Action Buttons */}
              <div className="nav-actions">
                <button className="search-btn" aria-label="Search">
                  <i className="fas fa-search"></i>
                </button>
                <div className="social-links">
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
                  <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;