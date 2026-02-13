// import '../Home-page/Banner.css';
import '../../styles/global.css';


function Banner() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
  }

  function AppointmentForm({ onSubmit }) {
    return (
      <div className="appointment-card">
        <div className="card-header">
          <h2 className="form-title">Schedule Your Appointment</h2>
          <p className="form-subtitle">We here to help you 24/7 with experts</p>
        </div>
        
        <form className="appointment-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="appointment_name" className="form-label">
              {/* <i className="fa fa-user"></i>
              <span>Name</span> */}
            </label>
            <input 
              type="text" 
              id="appointment_name" 
              name="appointment_name" 
              className="form-control"
              placeholder="Enter your name"
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="appointment_email" className="form-label">
              {/* <i className="fa fa-envelope"></i>
              <span>E-Mail</span> */}
            </label>
            <input 
              type="email" 
              id="appointment_email" 
              name="appointment_email" 
              className="form-control"
              placeholder="Enter your email"
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="appointment_phone" className="form-label">
              {/* <i className="fa fa-phone"></i>
              <span>Phone Number</span> */}
            </label>
            <input 
              type="tel" 
              id="appointment_phone" 
              name="appointment_phone" 
              className="form-control"
              placeholder="Enter your phone number"
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="appointment_website" className="form-label">
              {/* <i className="fa fa-globe"></i>
              <span>Your Website</span> */}
            </label>
            <input 
              type="url" 
              id="appointment_website" 
              name="appointment_website" 
              className="form-control"
              placeholder="Enter your website URL"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            <span>Submit Now</span>
            <i className="fa fa-paper-plane"></i>
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="rs-banner main-home">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-content">
            <h1 className="it-title">
              <span className="title-line">IT Consulting</span>
              <span className="title-line">Services For Your Business</span>
            </h1>
            <div className="description">
              <p className="desc">
                We are leading technology solutions providing company all over the world doing over 40 years.
              </p>
            </div>
            <div className="cta-section">
              <div className="rs-videos">
                <div className="animate-border">
                  <a 
                    className="popup-videos" 
                    href="https://www.youtube.com/watch?v=FMvA5fyZ338"
                    aria-label="Watch video"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
                <span className="video-text">Watch Video</span>
              </div>
              <a href="#services" className="explore-btn">
                Explore Our Services
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
          
          <div className="banner-form">
            <AppointmentForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;