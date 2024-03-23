import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="services">
            <Services />
          </div>

          <div id="reviews">
            <Reviews />
          </div>

          <div id="contact-us">
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
