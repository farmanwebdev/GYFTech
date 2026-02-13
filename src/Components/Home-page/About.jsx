import '../Home-page/About.css';

function About() {
  const skills = [
    { title: 'Software Development', percent: 92 },
    { title: 'Cyber Security', percent: 80 },
    { title: 'Artificial Intelligence', percent: 95 },
    { title: 'Web Development', percent: 78 }
  ];

  function SkillBar({ title, percent }) {
    return (
      <div className="skill-item">
        <span className="skillbar-title">{title}</span>
        <div className="skillbar">
          <div className="skillbar-bar" style={{ width: `${percent}%` }}></div>
          <span className="skill-bar-percent">{percent}%</span>
        </div>
      </div>
    );
  }

  return (
    <div id="rs-about" className="rs-about">
      <div className="container">
        
        {/* GRID LAYOUT WRAPPER */}
        <div className="about-grid">

          {/* LEFT IMAGES */}
          <div className="image-stack">
            <img
              className="image-1"
              src="https://images.unsplash.com/photo-1551911729-1fa3899ea9cf?q=80&w=2069&auto=format&fit=crop"
              alt="About"
            />

            <img
              className="image-2"
              src="https://plus.unsplash.com/premium_photo-1675730351118-93a3fd35ed64?q=80&w=2070&auto=format&fit=crop"
              alt="About"
            />

            <img
              className="image-3"
              src="https://plus.unsplash.com/premium_photo-1675730351118-93a3fd35ed64?q=80&w=2070&auto=format&fit=crop"
              alt="About"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">

            <div className="sec-title">
              <div className="sub-text">ABOUT US</div>

              <h2 className="title">
                We Are Increasing Business Success With Technology
              </h2>

              <p className="desc">
                Over 25 years working in IT services developing software applications 
                and mobile apps for clients all over the world.
              </p>
            </div>

            <div className="skills-wrapper">
              {skills.map((skill) => (
                <SkillBar key={skill.title} title={skill.title} percent={skill.percent} />
              ))}
            </div>

            <a className="readon learn-more" href="contact.html">
              Learn More
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
