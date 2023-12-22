import React from 'react';
import insta__logo from "../media/instagram/insta__logo.png";
import whatsapp__logo from "../media/WA/whatsapp__logo.png";

function Footer() {
  return (
    <div className="footer__container">

      <section className="social__media">
        <div className="social__media--wrap">
          <div className="footer__logo">
            <a href="/" id="footer__logo">RUSHWASH</a>
            <p className="website__rights">© RUSHWASH 2020. All rights reserved</p>
          </div>
          
          <div className="social__icons">
          <a href="https://wa.me/message/DS2QLPJGL3JQP1">
            <img
              src= {whatsapp__logo} 
              alt="WhatsApp"
              style={{ width: '40px', height: '40px', marginRight: '10px'}} // Adjust the size as needed
            />
            </a>
            <a href="https://www.instagram.com/rushwash_mobile/">
              <img
                src= {insta__logo} 
                alt="Instagram"
                style={{ width: '40px', height: '40px', marginLeft: '10px'}} // Adjust the size as needed
              />
            </a>
            <p>073 913 3667</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Footer;
