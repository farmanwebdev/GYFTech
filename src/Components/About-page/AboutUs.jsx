
import React, { useEffect } from 'react';
// SVG Icons for features
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#4361ee">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const AboutUsSection = () => {
  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-section" aria-label="About us">
      <div className="container">
        <div className="about-grid">
          {/* Left Column - Images with Animation */}
          <div className="about-images-col">
            <div className="image-animation-wrapper">
              <div className="main-image-container animate-on-scroll">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our team working on technology solutions" 
                  className="main-about-image"
                  loading="lazy"
                />
              </div>
              <div className="floating-image-1 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Technology effect"
                  loading="lazy"
                />
              </div>
              <div className="floating-image-2 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Digital transformation"
                  loading="lazy"
                />
              </div>
              
              {/* Animated elements */}
              <div className="animated-dots"></div>
              <div className="animated-circle"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-content-col">
            <div className="content-wrapper animate-on-scroll">
              <div className="section-badge">
                <span className="badge-text">About Us</span>
              </div>
              
              <h2 className="section-title">
                We Are Increasing Business Success With Technology
              </h2>
              
              <p className="section-intro">
                Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.
              </p>
              
              <p className="section-description">
                We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying.
              </p>

              {/* Features List */}
              <div className="features-grid">
                <div className="feature-item">
                  <CheckIcon />
                  <span>Digital Transformation</span>
                </div>
                <div className="feature-item">
                  <CheckIcon />
                  <span>Cloud Solutions</span>
                </div>
                <div className="feature-item">
                  <CheckIcon />
                  <span>Cybersecurity</span>
                </div>
                <div className="feature-item">
                  <CheckIcon />
                  <span>AI & Machine Learning</span>
                </div>
              </div>

              {/* Stats */}
              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-number" data-count="500">0</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" data-count="25">0</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" data-count="150">0</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" data-count="98">0</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>

              <div className="button-container">
                <a href="/contact" className="learn-more-btn">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;