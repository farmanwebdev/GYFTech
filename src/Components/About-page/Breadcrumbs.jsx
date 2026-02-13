import React from 'react';
import { Link } from 'react-router-dom';
// import './Breadcrumbs.css';

const Breadcrumbs = ({ title = "About", breadcrumbs = [] }) => {
  // Default breadcrumbs if none provided
  const defaultBreadcrumbs = [
    { label: "Home", url: "/", active: true, title: "Braintech - IT Solutions and Technology Startup HTML Template" },
    { label: "About", url: null, active: false }
  ];

  const breadcrumbItems = breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbs;

  return (
    <div className="breadcrumbs-wrapper">
      <div className="breadcrumbs-inner text-center">
        <h1 className="page-title">{title}</h1>
        <nav aria-label="Breadcrumb">
          <ul className="breadcrumb-list">
            {breadcrumbItems.map((item, index) => (
              <li 
                key={index} 
                className={item.active ? 'active' : ''}
                title={item.title || item.label}
              >
                {item.url ? (
                  <Link to={item.url} className="breadcrumb-link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="breadcrumb-text">{item.label}</span>
                )}
                {index < breadcrumbItems.length - 1 && (
                  <span className="breadcrumb-separator">
                    <i className="fas fa-chevron-right"></i>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Alternative version with props for simpler usage
const SimpleBreadcrumbs = ({ title = "About", homeUrl = "/", homeLabel = "Home" }) => {
  return (
    <div className="breadcrumbs-wrapper">
      <div className="breadcrumbs-inner text-center">
        <h1 className="page-title">{title}</h1>
        <nav aria-label="Breadcrumb">
          <ul className="breadcrumb-list">
            <li title="Braintech - IT Solutions and Technology Startup HTML Template">
              <Link to={homeUrl} className="breadcrumb-link active">
                {homeLabel}
              </Link>
              <span className="breadcrumb-separator">
                <i className="fas fa-chevron-right"></i>
              </span>
            </li>
            <li>{title}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { SimpleBreadcrumbs };
export default Breadcrumbs;