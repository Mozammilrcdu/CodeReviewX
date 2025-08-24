import { useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "Analyze your code instantly",
        "Get actionable suggestions",
        "Improve code quality",
        "Learn best coding practices"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-elements">
        <div className="hero-lines">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="hero-line"></div>
          ))}
        </div>
        <div className="hero-dots">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="hero-dot" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="hero-content">
        <div className="glitch-wrapper">
          <h1 className="hero-title glitch">CodeReviewX</h1>
        </div>
        <div className="typing-container">
          <p className="hero-subtitle"><span className="typing"></span></p>
        </div>
        <div className="hero-cta">
          <a href="#review" className="btn btn-primary btn-glow">Get Review</a>
          <a href="#about" className="btn btn-outline-light btn-glow">Learn More</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="scroll-arrow">
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;