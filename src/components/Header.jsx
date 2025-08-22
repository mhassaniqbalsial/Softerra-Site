import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import '../styles/Header.css';

const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Apply theme to document body
        document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`ST-header header ${isDarkTheme ? 'dark' : 'light'}`}>
                <div className="container">
                    <div className="header-container">
                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-menu-btn"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                        {/* Logo */}
                        <div className="logo">
                            <div className="logo-icon">
                                <img src="/src/assets/logo.png" alt="Softerra Logo" width="60" height="60" />
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="desktop-navigation">
                            <div className="navigation">
                                <nav className="navigation">
                                    <ul>
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li>
                                            <a href="#services" className="dropdown-link">
                                                Services
                                                <span className="dropdown-arrow">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.6025 3.55019L1.39794 3.55019L6.00024 9.65039L10.6025 3.55019Z" fill="#F9F9F9" />
                                                    </svg>
                                                </span>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#services">Web Development</a></li>
                                                    <li><a href="#services">Shopify Development</a></li>
                                                    <li><a href="#services">UI/UX Design</a></li>
                                                    <li><a href="#services">SEO</a></li>
                                                </ul>
                                            </a>
                                        </li>
                                        <li><a href="#portfolio">Portfolio</a></li>
                                        <li><a href="#pricing">Pricing</a></li>
                                        <li><a href="#contact">Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>

                        </div>

                        {/* CTA Button */}
                        <div className="header-actions">
                            <div className="theme-toggle-container theme-toggle-desktop">
                                <input
                                    type="checkbox"
                                    id="theme-toggle"
                                    className="theme-toggle-input"
                                    checked={isDarkTheme}
                                    onChange={toggleTheme}
                                />
                                <label htmlFor="theme-toggle" className="theme-toggle-label">
                                    <span className="theme-toggle-slider"></span>
                                </label>
                            </div>
                            <button className="cta-button">
                                Let's Talk
                                <span className="arrow">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.73844 0.549458C1.67283 0.552383 1.60845 0.568201 1.54896 0.596009C1.48947 0.623817 1.43603 0.663071 1.39171 0.711529C1.34739 0.759987 1.31305 0.8167 1.29064 0.87843C1.26824 0.94016 1.25822 1.0057 1.26114 1.0713C1.26705 1.2038 1.32535 1.32852 1.42321 1.41803C1.47167 1.46235 1.52838 1.49669 1.59011 1.5191C1.65184 1.5415 1.71738 1.55152 1.78299 1.5486L10.1261 1.16888L0.346145 10.9489C0.252377 11.0426 0.199699 11.1698 0.199699 11.3024C0.199699 11.435 0.252377 11.5622 0.346145 11.656C0.439913 11.7498 0.56709 11.8024 0.699699 11.8024C0.832307 11.8024 0.959484 11.7498 1.05325 11.656L10.8311 1.87811L10.4514 10.217C10.4484 10.2826 10.4583 10.3482 10.4806 10.4099C10.503 10.4717 10.5372 10.5285 10.5815 10.577C10.6257 10.6255 10.6791 10.6649 10.7386 10.6928C10.798 10.7206 10.8624 10.7366 10.928 10.7396C10.9936 10.7426 11.0592 10.7327 11.1209 10.7103C11.1827 10.688 11.2395 10.6538 11.288 10.6095C11.3365 10.5652 11.3758 10.5119 11.4037 10.4524C11.4316 10.393 11.4475 10.3286 11.4505 10.263L11.8762 0.907961C11.8815 0.790661 11.8592 0.673756 11.811 0.56666C11.7629 0.459564 11.6903 0.365269 11.599 0.291364C11.4564 0.175616 11.2763 0.116236 11.0928 0.124487L1.73844 0.549458Z" fill="#F9F9F9" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
                <div className="mobile-menu-content">
                    <nav className="mobile-navigation">
                        <ul>
                            <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
                            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
                            <li>
                                <a href="#services" onClick={closeMobileMenu}>Services</a>
                                <ul className="mobile-submenu">
                                    <li><a href="#services" onClick={closeMobileMenu}>Web Development</a></li>
                                    <li><a href="#services" onClick={closeMobileMenu}>Shopify Development</a></li>
                                    <li><a href="#services" onClick={closeMobileMenu}>UI/UX Design</a></li>
                                    <li><a href="#services" onClick={closeMobileMenu}>SEO</a></li>
                                </ul>
                            </li>
                            <li><a href="#portfolio" onClick={closeMobileMenu}>Portfolio</a></li>
                            <li><a href="#pricing" onClick={closeMobileMenu}>Pricing</a></li>
                            <li><a href="#contact" onClick={closeMobileMenu}>Contact Us</a></li>
                        </ul>
                    </nav>

                    <div className="mobile-theme-toggle">
                        <div className="theme-toggle-container">
                            <input
                                type="checkbox"
                                id="mobile-theme-toggle"
                                className="theme-toggle-input"
                                checked={isDarkTheme}
                                onChange={toggleTheme}
                            />
                            <label htmlFor="mobile-theme-toggle" className="theme-toggle-label">
                                <span className="theme-toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
