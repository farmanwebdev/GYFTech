import '../Home-page/Service.css';

function Services() {
  const services = [
    {
      icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Software Development',
      link: 'software-development.html',
      desc: 'Custom software solutions tailored to your business needs with modern technologies and agile methodologies.'
    },
    {
      icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Web Development',
      link: 'web-development.html',
      desc: 'Responsive and scalable web applications that deliver exceptional user experiences across all devices.'
    },
    {
      icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Analytic Solutions',
      link: 'case-studies-single.html',
      desc: 'Data-driven insights and analytics to help you make informed business decisions and optimize performance.'
    },
    {
      icon: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cloud & DevOps',
      link: 'cloud-and-devops.html',
      desc: 'Cloud infrastructure and DevOps practices to streamline your development and deployment processes.'
    },
    {
      icon: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Product & Design',
      link: 'product-design.html',
      desc: 'User-centered design and product development that creates engaging and intuitive digital experiences.'
    },
    {
      icon: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=865&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Data Center',
      link: 'data-center.html',
      desc: 'Secure and reliable data center solutions to manage, store, and protect your critical business data.'
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Our Services</span>
          {/* <h2 className="section-title">
            Comprehensive IT Solutions for <br /> Your Business Growth
          </h2> */}
          <h1> we are Offering All Kinds of<br /> IT Solutions Services</h1>
          <div className="section-divider"></div>
          <p className="section-description">
            We provide a wide range of IT services to help businesses thrive in the digital age. 
            Our solutions are designed to be scalable, efficient, and tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map(function(service, index) {
            return (
              <div className="service-card" key={service.title}>
                <div className="card-inner">
                  {/* Icon/Image */}
                  <div className="card-icon">
                    <img src={service.icon} alt={service.title} />
                    <div className="icon-overlay"></div>
                  </div>

                  {/* Content */}
                  <div className="card-content">
                    <h3 className="card-title">
                      <a href={service.link}>{service.title}</a>
                    </h3>
                    <p className="card-description">{service.desc}</p>
                    
                    {/* Learn More Button */}
                    <a href={service.link} className="card-link">
                      Learn More
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <p className="cta-text">Need a custom solution? Let's discuss your project requirements.</p>
          <div className="cta-buttons">
            <a href="contact.html" className="btn btn-primary">Get Started</a>
            <a href="services.html" className="btn btn-secondary">View All Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;