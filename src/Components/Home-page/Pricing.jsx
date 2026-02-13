import '../Home-page/Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "SILVER",
      price: "29.99",
      icon: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
      primary: false,
    },
    {
      name: "GOLD",
      price: "39.99",
      icon: "https://cdn-icons-png.flaticon.com/512/906/906337.png",
      primary: true, // Highlight middle card
    },
    {
      name: "PLATINUM",
      price: "79.99",
      icon: "https://cdn-icons-png.flaticon.com/512/906/906340.png",
      primary: false,
    }
  ];

  return (
    <section className="pricing-section">
      <h3>PRICING</h3>
      <h2 className="pricing-title">Our Pricing Plan</h2>
      <div className="pricing-line"></div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card ${plan.primary ? "primary" : ""}`}
          >
            <span className="pricing-badge">{plan.name}</span>

            <img className="pricing-icon" src={plan.icon} alt={plan.name} />

            <h3 className="pricing-amount">
              <span>$</span>{plan.price}
            </h3>
            <h4>Monthly Package</h4>
            <p className="pricing-text features">
  <span className="feature included">
     Powerful Admin Panel<i className="fa fa-check"></i>
  </span>
  <span className="feature included">
     1 Native Android App<i className="fa fa-check"></i>
  </span>
  <span className="feature included">
    Multi-Language Support <i className="fa fa-check"></i>
  </span>
  <span className="feature not-included">
     Support via Email and Phone<i className="fa fa-close"></i>
  </span>
</p>

           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
