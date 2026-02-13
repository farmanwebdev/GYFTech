import React, { useState } from 'react';
// import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = document.querySelector('.error-message:first-of-type');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
      });
      
      // Show success message for 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('Sorry, there was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fa-envelope',
      label: 'Email',
      content: 'info@yourmail.com',
      link: 'mailto:info@yourmail.com',
      type: 'email'
    },
    {
      icon: 'fa-phone',
      label: 'Phone',
      content: '(123) 222-8888',
      link: 'tel:1232228888',
      type: 'phone'
    },
    {
      icon: 'fa-map-marker-alt',
      label: 'Address',
      content: 'New Jersey, 1201, USA',
      link: 'https://maps.google.com?q=New+Jersey+1201+USA',
      type: 'address'
    },
    {
      icon: 'fa-clock',
      label: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      type: 'hours'
    }
  ];

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-header">
          <span className="contact-subtitle">Get in Touch</span>
          <h1 className="contact-title" id="contact-heading">
            Contact Our Expert Team
          </h1>
          <p className="contact-description">
            Have questions or need assistance? Reach out to our team of experts who are ready to help you with your IT solutions.
          </p>
        </div>

        {isSubmitted && (
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            <div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="info-card">
              <div className="info-header">
                <span className="info-subtitle">Let's Talk</span>
                <h2 className="info-title">Speak With Expert Engineers</h2>
              </div>
              
              <div className="info-items">
                {contactInfo.map((item, index) => (
                  <div className="info-item" key={index}>
                    <div className="info-icon">
                      <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                    </div>
                    <div className="info-content">
                      <span className="info-label">{item.label}:</span>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="info-link"
                          aria-label={`${item.label}: ${item.content}`}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <span className="info-text">{item.content}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <p className="social-title">Follow Us:</p>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" aria-label="Twitter" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" aria-label="Instagram" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-pge-form-card">
              <div className="contact-pge-form-header">
                <span className="contact-pge-form-subtitle">Send Message</span>
                <h2 className="contact-pge-form-title">Fill The Form Below</h2>
                <p className="contact-pge-form-description">
                  Fill out the form and our team will get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-pge-contact-form" noValidate>
                <div className="contact-pge-form-grid">
                  <div className="contact-pge-form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`contact-pge-form-input ${errors.name ? 'error' : ''}`}
                      placeholder="Enter your full name"
                      required
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="error-message" role="alert">
                        <i className="fas fa-exclamation-circle"></i> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="contact-pge-form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`contact-pge-form-input ${errors.email ? 'error' : ''}`}
                      placeholder="Enter your email address"
                      required
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="error-message" role="alert">
                        <i className="fas fa-exclamation-circle"></i> {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="contact-pge-form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`contact-pge-form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="Enter your phone number"
                      required
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="error-message" role="alert">
                        <i className="fas fa-exclamation-circle"></i> {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="contact-pge-form-group">
                    <label htmlFor="website" className="form-label">
                      Website (Optional)
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="contact-pge-form-input"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div className="contact-pge-form-group full-width">
                    <label htmlFor="message" className="form-label">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`contact-pge-form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Tell us about your project or inquiry..."
                      rows="6"
                      required
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    {errors.message && (
                      <span id="message-error" className="error-message" role="alert">
                        <i className="fas fa-exclamation-circle"></i> {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="contact-pge-form-actions">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="contact-pge-form-note">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-header">
            <h3 className="map-title">Find Us Here</h3>
            <p className="map-description">
              Visit our headquarters or get directions using the map below.
            </p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.417373234422!2d-74.40136778461607!3d40.05832367941225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c17464c31f58d5%3A0x6c7fde40c5f83e3e!2sNew%20Jersey%2C%20USA!5e0!3m2!1sen!2s!4v1647541234567!5m2!1sen!2s"
              title="Company Location Map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="google-map"
            ></iframe>
            <div className="map-overlay">
              <div className="map-info">
                <h4><i className="fas fa-map-marker-alt"></i> Our Location</h4>
                <p>New Jersey, 1201, USA</p>
                <a 
                  href="https://maps.google.com/maps?q=New+Jersey+1201+USA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="directions-button"
                >
                  <i className="fas fa-directions"></i> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;