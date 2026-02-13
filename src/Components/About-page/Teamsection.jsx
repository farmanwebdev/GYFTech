import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import '../../styles';

// SVG Social Icons
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.87 18c-.96-.04-1.86-.49-2.57-1.21l.69-2.98c.24.46.94.86 1.69.86 2.23 0 3.65-2.17 3.65-5.3 0-4.15-2.82-5.93-5.99-5.93-3.45 0-5.29 2.47-5.29 4.79 0 1.71 1.1 3.22 2.59 3.22.74 0 1.43-.5 1.64-1.24.27-1.04.93-1.83 1.67-1.83.61 0 1.12.5 1.12 1.2 0 .66-.42 1.61-.65 2.5-.2.85-.42 1.72-.42 2.43 0 .7.31 1.32.78 1.59-.11.02-.23.03-.35.03z"/>
  </svg>
);

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Makhaia Antitni",
    position: "President & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "20+ years of experience in IT leadership and strategic planning.",
    skills: ["Strategy", "Leadership", "Business Development"]
  },
  {
    id: 2,
    name: "Corey Anderson",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Tech entrepreneur with multiple successful startup exits.",
    skills: ["Entrepreneurship", "Innovation", "Product Strategy"]
  },
  {
    id: 3,
    name: "Masud Rana",
    position: "Web Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Full-stack developer specializing in modern web technologies.",
    skills: ["React", "Node.js", "AWS", "MongoDB"]
  },
  {
    id: 4,
    name: "Najmul Huda",
    position: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Digital marketing expert with expertise in SEO and growth hacking.",
    skills: ["SEO", "SEM", "Analytics", "Content Strategy"]
  },
  {
    id: 5,
    name: "Rushali Rumi",
    position: "Design Lead",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Award-winning designer with focus on user experience and interface design.",
    skills: ["UI/UX", "Prototyping", "Design Systems", "Figma"]
  },
  {
    id: 6,
    name: "Abu Sayed",
    position: "App Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Mobile app specialist for iOS and Android with published apps.",
    skills: ["iOS", "Android", "Flutter", "React Native"]
  },
  {
    id: 7,
    name: "Sonia Akhter",
    position: "Graphic Artist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Creative graphic designer with expertise in branding and visual identity.",
    skills: ["Branding", "Illustration", "Motion Graphics", "Adobe Creative Suite"]
  },
  {
    id: 8,
    name: "Rayhan Ali",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Serial entrepreneur with focus on technology innovation and scaling businesses.",
    skills: ["Scaling", "Investment", "Technology", "Leadership"]
  },
  {
    id: 9,
    name: "Benjir Akther",
    position: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Visual communication specialist with expertise in print and digital media.",
    skills: ["Print Design", "Digital Media", "Typography", "Packaging"]
  }
];

function Teamsections() {
  return (
    <section className="team-section" aria-label="Our Team">
      <div className="container">
        {/* Section Header */}
        <div className="team-header">
          <span className="section-badge">Team</span>
          <h2 className="section-title">Expert IT Consultants</h2>
        </div>
        
        {/* Team Carousel */}
        <div className="team-carousel-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.team-next',
              prevEl: '.team-prev',
            }}
            pagination={{
              clickable: true,
              el: '.team-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="team-swiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="team-card">
                  {/* Image Section */}
                  <div className="team-image-wrapper">
                    <div className="team-image">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        loading="lazy"
                      />
                      <div className="image-overlay"></div>
                      
                      {/* Skills Tags */}
                      <div className="skills-tags">
                        {member.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="team-content">
                    <h3 className="member-name">
                      <a href={`/team/${member.id}`}>{member.name}</a>
                    </h3>
                    <span className="member-position">{member.position}</span>
                    
                    <p className="member-bio">{member.bio}</p>

                    {/* Social Links */}
                    <div className="team-social">
                      <a href="#" className="social-link" aria-label={`Follow ${member.name} on Facebook`}>
                        <FacebookIcon />
                      </a>
                      <a href="#" className="social-link" aria-label={`Follow ${member.name} on Instagram`}>
                        <InstagramIcon />
                      </a>
                      <a href="#" className="social-link" aria-label={`Follow ${member.name} on Twitter`}>
                        <TwitterIcon />
                      </a>
                      <a href="#" className="social-link" aria-label={`Follow ${member.name} on Pinterest`}>
                        <PinterestIcon />
                      </a>
                    </div>

                    {/* View Profile Button */}
                    <a href={`/team/${member.id}`} className="view-profile-btn">
                      View Profile
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                      </svg>
                    </a>
                  </div>

                  {/* Decorative Elements */}
                  <div className="card-corner"></div>
                  <div className="card-shine"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="team-navigation">
            <button className="team-prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <div className="team-pagination"></div>
            <button className="team-next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teamsections;