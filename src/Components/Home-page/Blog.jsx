import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../Home-page/Blog.css';

// SVG Icons
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7zm0 4h7v2H7z"/>
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
);

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "Necessity May Give Us Your Best Virtual Court System",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...",
    category: "Software Development",
    date: "16 Nov 2020",
    author: "admin",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    link: "#"
  },
  {
    id: 2,
    title: "Tech Products That Makes Its Easier to Stay at Home",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...",
    category: "Web Development",
    date: "20 Dec 2020",
    author: "admin",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read",
    link: "#"
  },
  {
    id: 3,
    title: "Open Source Job Report Show More Openings Fewer",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...",
    category: "IT Services",
    date: "22 Dec 2020",
    author: "admin",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "6 min read",
    link: "#"
  },
  {
    id: 4,
    title: "Types of Social Proof What its Makes Them Effective",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...",
    category: "Artificial Intelligence",
    date: "26 Dec 2020",
    author: "admin",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "3 min read",
    link: "#"
  },
  {
    id: 5,
    title: "Tech Firms Support Huawei Restriction, Balk at Cost",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...",
    category: "Digital Technology",
    date: "28 Dec 2020",
    author: "admin",
    image: "https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    link: "#"
  },
  {
    id: 6,
    title: "Servo Project Joins The Linux Foundation Fold Desco",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...",
    category: "IT Services",
    date: "30 Dec 2020",
    author: "admin",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "4 min read",
    link: "#"
  }
];

const Blog = () => {
  return (
    <section className="blog-section" aria-label="Blog posts">
      <div className="container">
        {/* Section Header */}
        <div className="blog-section-header">
          <span className="section-subtitle">Blogs</span>
          <h2 className="section-title">Read Our Latest Tips & Tricks</h2>
          <div className="heading-line"></div>
        </div>

        {/* Blog Carousel */}
        <div className="blog-carousel-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.blog-swiper-button-next',
              prevEl: '.blog-swiper-button-prev',
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
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="blog-swiper"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="blog-card">
                  {/* Image with Category Badge */}
                  <div className="blog-image-wrapper">
                    <a href={post.link} className="blog-image-link">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="blog-image"
                        loading="lazy"
                      />
                      <div className="image-overlay"></div>
                    </a>
                    <div className="category-badge">
                      <span>{post.category}</span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="blog-content">
                    {/* Meta Info */}
                    <div className="blog-meta">
                      <span className="meta-item">
                        <CalendarIcon />
                        <span>{post.date}</span>
                      </span>
                      <span className="meta-item">
                        <UserIcon />
                        <span>{post.author}</span>
                      </span>
                      <span className="read-time">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="blog-title">
                      <a href={post.link}>{post.title}</a>
                    </h3>

                    {/* Excerpt */}
                    <p className="blog-excerpt">{post.excerpt}</p>

                    {/* Read More Button */}
                    <div className="blog-button">
                      <a href={post.link} className="read-more-btn">
                        Learn More
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="blog-navigation">
            <button className="blog-swiper-button-prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="blog-swiper-button-next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;