import React from 'react';
import insta__logo from "../media/instagram/insta__logo.png";
import whatsapp__logo from "../media/WA/whatsapp__logo.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <h1 className="hero__heading">Mobile car <span>wash & detailer</span></h1>
        <p className="hero__description">We bring the car wash to you</p>
        <p className="hero__description">at the comfort of your home or workplace.</p>
        
        {/* <h2 className="hero__contact">Contact us on: 073 913 3667</h2> */}

        <div className='hero__icons'>
          <a href="https://wa.me/message/DS2QLPJGL3JQP1">
            <img
              src= {whatsapp__logo} 
              alt="WhatsApp"
              style={{ width: '40px', height: '40px', marginRight: '5px'}} // Adjust the size as needed
            />
          </a>
          <a href="https://www.instagram.com/rushwash_mobile/">
            <img
              src= {insta__logo} 
              alt="Instagram"
              style={{ width: '40px', height: '40px', marginLeft: '5px'}} // Adjust the size as needed
            />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
