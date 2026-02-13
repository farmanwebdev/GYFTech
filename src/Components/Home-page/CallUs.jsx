import '../Home-page/CallUs.css';

const CallUs = () => {
  return (
    <div className="call-us-section">
      <div className="call-us-container">
        <div className="call-us-wrapper">
          <div className="call-us-image">
            <img 
              src="https://images.unsplash.com/photo-1763107228544-2ad5d71c21f0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Contact us illustration"
            />
          </div>
          
          <div className="call-us-content">
            <div className="contact-box">
              <div className="address-icon">
                <i className="fa fa-phone"></i>
              </div>
              
              <div className="text-content">
                <span className="subtitle">CALL US 24/7</span>
                <h2 className="title">(+123) 456-9989</h2>
                <p className="description">
                  Have any idea or project in your mind? Call us or schedule an appointment. 
                  Our representative will reply you shortly.
                </p>
              </div>
              
              <div className="button-container">
                <a className="contact-button" href="contact.html">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUs;