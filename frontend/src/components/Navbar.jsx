import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-dark ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="home" smooth={true} className="navbar-brand logo-text">CodeReviewX</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="home" smooth={true} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="review" smooth={true} className="nav-link">Review</Link>
            </li>
            <li className="nav-item">
              <Link to="resources" smooth={true} className="nav-link">Resources</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;