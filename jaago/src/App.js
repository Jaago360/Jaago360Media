import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveNewsStrip from './components/LiveNewsStrip';
import AboutChannel from './components/AboutChannel';
import FeaturedNewsGrid from './components/FeaturedNewsGrid';
import WhyJaago360 from './components/WhyJaago360';
import LiveStream from './components/LiveStream';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import LaunchAnimation from './components/LaunchAnimation';
import './App.css';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="App">
      <LaunchAnimation onComplete={() => setShowMainContent(true)} />
      {showMainContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <LiveNewsStrip />
          <AboutChannel />
          <FeaturedNewsGrid />
          <WhyJaago360 />
          <LiveStream />
          <SocialMedia />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
