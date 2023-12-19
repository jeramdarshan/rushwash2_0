import React from 'react';
import logoimg from '../media/logo.jpeg'

function About() {
  return (
    <div className="main" id="about">
      <div className="main__container">
        <div className="main__img--container">
          <img className="about__img" src={logoimg} alt="logo" />
        </div>
        <div className="main__content">
          <h1>About</h1>
          <h2>Read our Story...</h2>
          <p>RUSH WASH was started in 1988 by a young man named Rushil Makan...</p>
        </div>
      </div>
    </div>
  );
}

export default About;
