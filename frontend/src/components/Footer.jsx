const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Review", href: "#review" },
    { name: "Resources", href: "#resources" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <h3>CodeReviewX</h3>
              <p>Your go-to platform for instant code analysis and actionable suggestions.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-links">
              <h4>Navigation</h4>
              <ul>
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer-social">
              <h4>Stay Connected</h4>
              <p>Follow CodeReviewX for the latest code review tips, updates, and resources to improve your coding skills.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            &copy; {currentYear} <strong>CodeReviewX by Mozammil</strong>. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;