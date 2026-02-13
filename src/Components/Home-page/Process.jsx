import '../Home-page/Process.css';

const Process = () => {
  const processes = [
    { number: 1, title: 'Discovery', desc: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.' },
    { number: 2, title: 'Planning', desc: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.' },
    { number: 3, title: 'Execute', desc: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.' },
    { number: 4, title: 'Deliver', desc: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.' }
  ];

  return (
    <div className="rs-process">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 md-mb-40">
            <div className="process-wrap bg3">
              <div className="sec-title mb-30">
                <div className="sub-text new">Working Process</div>
                <h2 className="title white-color">
                  Our Working Process - How We Work For Our Customers
                </h2>
              </div>
              <div className="btn-part mt-40">
                <a className="readon learn-more contact-us" href="contact.html">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 pl-30 md-pl-15">
            <div className="row">
              {processes.map((process) => (
                <div className="col-md-6 mb-40" key={process.number}>
                  <ProcessItem {...process} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessItem = ({ number, title, desc }) => (
  <div className="rs-addon-number">
    <div className="number-text">
      <div className="number-area">{number}.</div>
      <div className="number-title">
        <h3 className="title">{title}</h3>
      </div>
      <p className="number-txt">{desc}</p>
    </div>
  </div>
);

export default Process;