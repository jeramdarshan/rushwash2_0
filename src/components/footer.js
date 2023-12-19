import React from 'react';

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__links">
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>About Us</h2>
            <a href="/sign--up">How it works</a>
            <a href="/sign--up">Pricelist</a>
            <a href="/sign--up">Terms of Service</a>
          </div>
          <div className="footer__link--items">
            <h2>Contact Us</h2>
            <a href="/sign--up">0739133667</a>
          </div>
        </div>
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Media</h2>
            <a href="/sign--up">Pictures</a>
            <a href="/sign--up">Videos</a>
          </div>
          <div className="footer__link--items">
            <h2>Social Media</h2>
            <a href="/sign--up">Instagram</a>
            <a href="/sign--up">Whatsapp</a>
            <a href="/sign--up">FaceBook</a>
            <a href="/sign--up">TikTok</a>
          </div>
        </div>
      </div>
      <section className="social__media">
        <div className="social__media--wrap">
          <div className="footer__logo">
            <a href="/" id="footer__logo">RUSHWASH</a>
          </div>
          <p className="website__rights">© RUSHWASH 2022. All rights reserved</p>
          <div className="social__icons">
            <a href="/" className="social__icon--link" target="_blank"><i className="fab fa-facebook"></i></a>
            <a href="/" className="social__icon--link" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="/" className="social__icon--link" target="_blank"><i className="fab fa-youtube"></i></a>
            <a href="/" className="social__icon--link" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="/" className="social__icon--link" target="_blank"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
