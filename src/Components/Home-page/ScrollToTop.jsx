import React, { useState, useEffect } from 'react';
import '../Home-page/ScrollToTop.css';

// SVG Arrow Icon
const ArrowUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
  </svg>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    
    // Show button after scrolling 300px
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Check if user is near bottom of page
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
    const bottomPosition = windowHeight + window.pageYOffset;
    
    if (bodyHeight - bottomPosition < 100) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Keyboard navigation support
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <button
        className={`scroll-top-btn ${isVisible ? 'visible' : ''} ${isAtBottom ? 'at-bottom' : ''}`}
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
        aria-label="Scroll to top"
        title="Scroll to top"
        tabIndex={isVisible ? 0 : -1}
      >
        <ArrowUpIcon />
        <span className="progress-circle">
          <svg className="progress-ring" width="60" height="60">
            <circle className="progress-ring-circle" cx="30" cy="30" r="27" strokeWidth="3" />
          </svg>
        </span>
      </button>
    </>
  );
};

export default ScrollToTop;