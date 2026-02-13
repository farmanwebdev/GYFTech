import React from 'react';
// import './Process.css';

function Process() {
  const processSteps = [
    {
      id: 1,
      title: "Discovery",
      description: "Understanding your business goals and requirements through in-depth consultation and analysis.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="#4361ee" strokeWidth="4" fill="white"/>
          <path d="M30 40L37 47L50 33" stroke="#4361ee" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 28C33.3726 28 28 33.3726 28 40C28 46.6274 33.3726 52 40 52C46.6274 52 52 46.6274 52 40C52 33.3726 46.6274 28 40 28Z" 
                stroke="#4361ee" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      ),
      number: "01",
      color: "#4361ee"
    },
    {
      id: 2,
      title: "Planning",
      description: "Creating detailed project plans, architecture design, and development roadmap.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect x="24" y="24" width="32" height="32" rx="8" stroke="#7209b7" strokeWidth="4" fill="white"/>
          <path d="M40 30V50" stroke="#7209b7" strokeWidth="4" strokeLinecap="round"/>
          <path d="M30 40H50" stroke="#7209b7" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="40" cy="40" r="3" fill="#7209b7"/>
        </svg>
      ),
      number: "02",
      color: "#7209b7"
    },
    {
      id: 3,
      title: "Execute",
      description: "Implementing solutions with agile methodology and continuous quality assurance.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M40 24L56 40L40 56L24 40L40 24Z" stroke="#3a0ca3" strokeWidth="4" fill="white"/>
          <path d="M35 35L45 45" stroke="#3a0ca3" strokeWidth="4" strokeLinecap="round"/>
          <path d="M45 35L35 45" stroke="#3a0ca3" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="40" cy="40" r="4" fill="#3a0ca3"/>
        </svg>
      ),
      number: "03",
      color: "#3a0ca3"
    },
    {
      id: 4,
      title: "Deliver",
      description: "Deploying final product with documentation, training, and ongoing support.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M24 32L40 24L56 32L56 48L40 56L24 48V32Z" stroke="#f72585" strokeWidth="4" fill="white"/>
          <path d="M40 24V56" stroke="#f72585" strokeWidth="4" strokeLinecap="round"/>
          <path d="M24 32L56 32" stroke="#f72585" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="40" cy="40" r="4" fill="#f72585"/>
        </svg>
      ),
      number: "04",
      color: "#f72585"
    }
  ];

  return (
    <section className="process-section">
      <div className="container">
        {/* Section Header */}
        <div className="process-header">
          <span className="section-badge">Process</span>
          <h2 className="section-title">Our Working Process</h2>
        </div>
        
        {/* Process Steps */}
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div className="process-item" key={step.id}>
              <div className="process-card">
                {/* Step Number */}
                <div className="step-number" style={{ backgroundColor: step.color }}>
                  {step.number}
                </div>
                
                {/* Icon Container */}
                <div className="icon-container">
                  <div className="icon-wrapper" style={{ borderColor: step.color }}>
                    {step.icon}
                  </div>
                  
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="connector-line">
                      <div className="line" style={{ backgroundColor: step.color }}></div>
                      <div className="arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill={step.color}>
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="process-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                
                {/* Hover Effect */}
                <div className="card-hover" style={{ backgroundColor: `${step.color}10` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;