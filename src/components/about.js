import React from 'react';
import logoimg from '../media/bakkie1.jpg'

function About() {
  return (
    <div className="main" id="about">
      <div className="main__container">
        <div className="main__img--container">
          <img className="about__img" src={logoimg} alt="logo" />
        </div>
        
        <div className="main__content">
          <h1>About</h1>
          <p>RUSH WASH MOBILE was started in 2020 by Rushil Makan.</p>
        </div>

      </div>
    </div>
  );
}

export default About;
