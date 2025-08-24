const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">About</h2>
          <div className="underline"></div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-text">
              <p className="lead">CodeReviewX is an intuitive platform for developers to analyze and improve their code instantly.</p>
              <p>Paste your code, click "Get Review", and receive recommendations for better readability, performance, and best practices.</p>
              <p>Our goal is to make coding easier, help you learn faster, and improve code quality with minimal effort.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-card">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="card-content">
                    <h3>Key Features</h3>
                    <ul className="about-list">
                      <li><i className="fas fa-code"></i> Instant code analysis</li>
                      <li><i className="fas fa-lightbulb"></i> Best practice suggestions</li>
                      <li><i className="fas fa-brain"></i> Learn from your mistakes</li>
                      <li><i className="fas fa-rocket"></i> Improve coding skills</li>
                    </ul>
                  </div>
                </div>
                <div className="card-back">
                  <div className="card-content">
                    <h3><i className="fas fa-book"></i> Start Learning</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;