import React from 'react';

function About() {
  return (
    <div className="main" id="about">
      <div className="main__container">
        <div className="main__img--container">
          <div className="main__img--card"><i className="fas fa-layer-group"></i></div>
        </div>
        <div className="main__content">
          <h1>About</h1>
          <h2>Read our Story...</h2>
          <p>RUSH WASH was started in 1988 by a young man named Rushil Makan...</p>
          <button className="main__btn"><a href="#">Contact</a></button>
        </div>
      </div>
    </div>
  );
}

export default About;
