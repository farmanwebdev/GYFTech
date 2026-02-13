import '../Home-page/Projects.css';

const Projects = () => {
  const projects = [
    { 
      img: 'https://images.unsplash.com/photo-1659241869140-3cb7cdff42fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      title: 'Product Design', 
      category: 'IT Technology' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1760446410679-2d93cd1c2607?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      title: 'Product Engineering', 
      category: 'IT Technology' 
    },
    { 
      img: 'https://plus.unsplash.com/premium_photo-1751358174699-76b1c1c5c807?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      title: 'Analytic Solutions', 
      category: 'IT Technology' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1705234384679-119488a72a2b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      title: 'Growth Strategies', 
      category: 'IT Technology' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1693411459186-8086b97b08ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      title: 'Platform Integration', 
      category: 'IT Technology' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1763107228544-2ad5d71c21f0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      title: 'Innovative Interfaces', 
      category: 'IT Technology' 
    }
  ];

  return (
    <div className="rs-project bg5 style1">
      <div className="container">
        <div className="sec-title2 text-center mb-45">
          <span className="sub-text">Project</span>
          <h2 className="title">
            We Are Offering All Kinds of IT <br/> Solutions Services
          </h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ img, title, category }) => (
  <div className="project-item">
    <div className="project-img">
      <a href="case-studies-single.html">
        <img src={img} alt={title} />
      </a>
    </div>
    <div className="project-content">
      <h3 className="title">
        <a href="case-studies-single.html">{title}</a>
      </h3>
      <span className="category">
        <a href="case-studies-single.html">{category}</a>
      </span>
    </div>
  </div>
);

export default Projects;