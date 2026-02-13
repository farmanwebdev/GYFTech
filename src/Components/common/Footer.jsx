import { useState } from 'react';
import '../Home-page/Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  function handleSubmit(e) {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  }

  return (
    <footer id="rs-footer" className="rs-footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            
            {/* Company Info */}
            <div className="footer-widget company-info">
              <div className="footer-logo">
                <a href="/">
                <span>GYFTech</span>
                  {/* <img src="https://images.unsplash.com/photo-1567446537710-0d8d8e8b8c0c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tech Solutions Logo" /> */}
                </a>
              </div>
              <p className="company-description">
                We provide comprehensive IT solutions to help businesses thrive in the digital age. 
                Our expertise spans across software development, cloud solutions, and digital transformation.
              </p>
              
              <div className="social-links">
                <a href="#" aria-label="Facebook" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="Instagram" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="YouTube" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-widget quick-links">
              <h3 className="widget-title">Quick Links</h3>
              <ul className="footer-menu">
                <li><a href="/">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="team.html">Our Team</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-widget services">
              <h3 className="widget-title">Our Services</h3>
              <ul className="footer-menu">
                <li><a href="software-development.html">Software Development</a></li>
                <li><a href="web-development.html">Web Development</a></li>
                <li><a href="mobile-development.html">Mobile App Development</a></li>
                <li><a href="cloud-solutions.html">Cloud Solutions</a></li>
                <li><a href="cyber-security.html">Cyber Security</a></li>
                <li><a href="it-consulting.html">IT Consulting</a></li>
              </ul>
            </div>

            {/* Contact Info & Newsletter */}
            <div className="footer-widget contact-newsletter">
              {/* Contact Info */}
              <div className="contact-info">
                <h3 className="widget-title">Contact Us</h3>
                <ul className="contact-details">
                  <li className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>GYFTech Gilgit, 15100, Pakistan</span>
                  </li>
                  <li className="contact-item">
                    <i className="fas fa-phone"></i>
                    <a href="tel:+11234567890">+1 (123) 456-7890</a>
                  </li>
                  <li className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:info@techsolutions.com">info@GYFtechsolutions.com</a>
                  </li>
                  <li className="contact-item">
                    <i className="fas fa-clock"></i>
                    <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="newsletter">
                <h3 className="widget-title">Newsletter</h3>
                <p className="newsletter-description">
                  Subscribe to our newsletter to receive updates on new technologies and offers.
                </p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="subscribe-btn">
                      <i className="fas fa-paper-plane"></i>
                      <span>Subscribe</span>
                    </button>
                  </div>
                  <p className="newsletter-note">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            {/* Copyright */}
            <div className="copyright">
              <p>
                © {currentYear} GYFTech Solutions. All Rights Reserved. 
                <a href="/privacy"> Privacy Policy</a> | 
                <a href="/terms"> Terms of Service</a>
              </p>
            </div>

            {/* Bottom Menu */}
            <div className="bottom-menu">
              <ul className="footer-links">
                <li><a href="/sitemap">Sitemap</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div className="payment-methods">
              <span className="payment-label">We accept:</span>
              <div className="payment-icons">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-amex"></i>
                <i className="fab fa-cc-paypal"></i>
                <i className="fab fa-cc-apple-pay"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
}

export default Footer;