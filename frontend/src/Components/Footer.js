// Footer.js
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} text-lg-start`}>
      {/* Section: Social media */}
      <section className={`${styles.socialMedia} d-flex justify-content-center justify-content-lg-between p-4`}>
       
        <div className={`${styles.socialIcons} d-flex`}>
          <a href="/" className={`${styles.socialIcon} me-4 text-reset`}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className={`${styles.socialIcon} me-4 text-reset`}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className={`${styles.socialIcon} me-4 text-reset`}>
            <i className="fab fa-google"></i>
          </a>
          <a href="/" className={`${styles.socialIcon} me-4 text-reset`}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className={`${styles.socialIcon} me-4 text-reset`}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" className={`${styles.socialIcon} me-4 text-reset`}>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      {/* Section: Links */}
      <section className={`${styles.footerContent} py-5`}>
        <div className={`${styles.footerContainer} d-flex flex-wrap justify-content-between`}>
          {/* Company Info */}
          <div className={`${styles.footerColumn} mb-4`}>
            <h6 className={`${styles.footerTitle} text-uppercase fw-bold mb-4`}>
              <i className="fas fa-gem me-3"></i>CookNClean
            </h6>
            <p className={styles.footerText}>
              Use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* Products */}
          <div className={`${styles.footerColumn} mb-4`}>
            <h6 className={`${styles.footerTitle} text-uppercase fw-bold mb-4`}>
              Products
            </h6>
            <p><a href="#!" className={styles.footerLink}>Angular</a></p>
            <p><a href="#!" className={styles.footerLink}>React</a></p>
            <p><a href="#!" className={styles.footerLink}>Vue</a></p>
            <p><a href="#!" className={styles.footerLink}>Laravel</a></p>
          </div>

          {/* Useful Links */}
          <div className={`${styles.footerColumn} mb-4`}>
            <h6 className={`${styles.footerTitle} text-uppercase fw-bold mb-4`}>
              Useful Links
            </h6>
            <p><a href="#!" className={styles.footerLink}>Pricing</a></p>
            <p><a href="#!" className={styles.footerLink}>Settings</a></p>
            <p><a href="#!" className={styles.footerLink}>Orders</a></p>
            <p><a href="#!" className={styles.footerLink}>Help</a></p>
          </div>

          {/* Contact */}
          
        </div>
      </section>

      {/* Copyright */}
      <div className={`${styles.copyright} text-center p-4`}>
        © 2024 Copyright:
        <a className={`${styles.footerLink} fw-bold`} href="https://CookNClean.com/"> CookNClean.com</a>
      </div>
    </footer>
  );
};

export default Footer;
