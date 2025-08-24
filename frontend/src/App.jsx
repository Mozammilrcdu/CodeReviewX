import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Review from './components/Review';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import './App.css';
import "./index.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Cursor />
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      <div className="bg-noise"></div>
      <div className="floating-shapes">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="shape"></div>
        ))}
      </div>
      
      <Navbar scrolled={scrolled} />
      <div id="tsparticles"></div>

      <main>
        <Home />
        <About />
        <Review />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;