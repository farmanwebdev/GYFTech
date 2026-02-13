import React, { useState, useEffect } from 'react';
import '../Home-page/Testimonial.css';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Mariya Khan",
    role: "CEO, Brick Consulting",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
    rating: 5
  },
  {
    id: 2,
    name: "Sonia Akhter",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote: "The team exceeded our expectations with their creativity and attention to detail. They delivered the project ahead of schedule with exceptional quality.",
    rating: 5
  },
  {
    id: 3,
    name: "Deluar Hossen",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote: "Professional service and outstanding results. They understood our vision perfectly and executed it flawlessly. Highly recommended!",
    rating: 4
  },
  {
    id: 4,
    name: "Asif Ahmed",
    role: "App Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote: "Working with this team was a pleasure. Their expertise in modern technologies and commitment to quality made all the difference.",
    rating: 5
  }
];

const TestimonialsSimple = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + visibleCards >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - visibleCards : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section-simple" aria-label="Customer testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Testimonial</span>
          <h2 className="section-title">What Our Customers Are Saying</h2>
          <div className="heading-line"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-container">
          <button className="nav-btn prev-btn" onClick={prevSlide} aria-label="Previous testimonial">
            <FaChevronLeft />
          </button>

          <div className="testimonials-grid">
            {testimonials
              .slice(currentIndex, currentIndex + visibleCards)
              .map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card-simple">
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  
                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.quote}</p>
                    
                    <div className="rating-stars">
                      {[...Array(5)].map((_, index) => (
                        <FaStar 
                          key={index} 
                          className={index < testimonial.rating ? 'star filled' : 'star'}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="author-info">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-details">
                      <h3 className="author-name">{testimonial.name}</h3>
                      <span className="author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <button className="nav-btn next-btn" onClick={nextSlide} aria-label="Next testimonial">
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="dots-indicator">
          {testimonials.slice(0, Math.ceil(testimonials.length / visibleCards)).map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index * visibleCards ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * visibleCards)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSimple;