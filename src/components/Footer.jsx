
import React from 'react';
import softerraLogo from '../assets/softerra-logo.svg';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="PF-footer-main">
            <div className="PF-container">
                <div className="PF-footer-content">
                    {/* Logo and Description Section */}
                    <div className="PF-footer-brand-section">
                        <div className="PF-footer-logo-wrapper">
                            <h2 className="PF-footer-logo">
                                <img width="160" height="30" src={softerraLogo} alt="Softerra Logo" />
                            </h2>
                        </div>
                        <div className="PF-footer-description-wrapper">
                            <p className="PF-footer-description">
                                We combine innovation and digital experiences that convert. As a risk. our passion is elevating
                                brands from ordinary to extraordinary.
                            </p>
                        </div>
                        <div className="PF-footer-contact-wrapper">
                            <div className="PF-footer-phone">
                                <a href="tel:+923015337280">+92 301 533 7280</a>
                            </div>
                            <div className="PF-footer-email">
                                <a href="mailto:profituned@gmail.com">profituned@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="PF-footer-links-section">
                        <div className="PF-footer-links-header">
                            <h3>Useful Links</h3>
                        </div>
                        <div className="PF-footer-links-wrapper">
                            <ul className="PF-footer-links-list">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#price">Price</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="PF-footer-newsletter-section">
                        <div className="PF-footer-newsletter-header">
                            <h3>Join The Newsletter</h3>
                        </div>
                        <div className="PF-footer-newsletter-description">
                            <p>Subscribe to our newsletter for digital insights, tools and inspiration shared to level up join
                                our community</p>
                        </div>
                        <div className="PF-footer-form-wrapper">
                            <form className="PF-footer-form">
                                <div className="PF-footer-input-wrapper">
                                    <input type="email" placeholder="Email" className="PF-footer-input" />
                                </div>
                                <div className="PF-footer-button-wrapper">
                                    <button type="submit" className="PF-footer-button">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="PF-footer-copyright-wrapper">
                    <p className="PF-footer-copyright">© 2024 Softerra</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;