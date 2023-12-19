
import './App.css';

import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import About from './components/about';
// import Feature from './components/feature';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Services />
      <About />
      {/* <Feature /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;

