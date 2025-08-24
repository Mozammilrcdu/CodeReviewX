const Resources = () => {
  const resourceItems = [
    {
      icon: "fas fa-code",
      title: "Code Style Guides",
      description: "Learn best practices for writing clean, maintainable code.",
      link: "https://google.github.io/styleguide/" // Google Style Guides
    },
    {
      icon: "fas fa-video",
      title: "Video Tutorials",
      description: "Watch tutorials on code review techniques and best practices.",
      link: "https://www.youtube.com/@takeUforward"
    },
    {
      icon: "fas fa-tools",
      title: "Development Tools",
      description: "Discover tools that can help automate code reviews.",
      link: "https://sonarqube.org/" // SonarQube
    }
  ];

  return (
    <section id="resources" className="section-padding">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Resources</h2>
          <div className="underline"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="resources-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <h3>Helpful Resources</h3>
              </div>
              <p className="card-intro">
                Explore coding tutorials, guides, and tools to improve your code quality.
              </p>
              <div className="resource-items">
                {resourceItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-item"
                  >
                    <i className={item.icon}></i>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
