import React from 'react';
import '../styles/style.css';
import '../styles/Hero.css';
import upworkLogo from '../assets/upwork-logo.svg';

const Hero = () => {
    return (

        <section className="ST-Hero-section-main">
            <div className="container">
                <div className="ST-Hero-section-wrapper">
                    <div className="ST-Hero-upwork-box-wrapper">
                        <div className="ST-Hero-upwork-logo-wrapper">
                            <img src={upworkLogo} alt="Upwork 5 stars" width="121" height="48" />
                        </div>
                        <div className="ST-Hero-success-rate-wrapper">
                            <div className="ST-Hero-success-rate-text">100% Success Rate</div>
                        </div>
                    </div>

                    <div className="ST-Hero-banner-content-wrapper">
                        <div className="ST-Hero-title-wrapper">
                            <div className="ST-Hero-subtitle-text" style={{ fontDisplay: 'swap' }}>
                                Your go-to team for advanced
                            </div>
                        </div>
                        <div className="ST-Hero-highlight-wrapper">
                            <div className="ST-Hero-highlight-text">Shopify</div>
                        </div>
                        <div className="ST-Hero-subtitle-wrapper">
                            <div className="ST-Hero-subtitle-text">Web design & Development</div>
                        </div>
                    </div>

                    <div className="ST-Hero-buttons-wrapper">
                        <div className="ST-Hero-quote-button-wrapper">
                            <div className="ST-Hero-quote-button-text">Get A Quote</div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M21 3C20.5773 8.75601 19.0773 12.9227 16.5 15.5C16.0429 15.9571 15.5424 16.3749 14.9986 16.7535L14.9986 18.9954L11.9986 21.9954L10.1679 18.7918L5.21211 13.8355L2 12L5 9L7.25373 9.00002C7.62893 8.45565 8.04435 7.95565 8.5 7.5C11.0773 4.92267 15.244 3.42267 21 3ZM8.39046 18.4551L9.80468 19.8693L7.68336 21.9906L6.26914 20.5764L8.39046 18.4551ZM6.26914 16.3337L7.68336 17.7479L4.14782 21.2835L2.73361 19.8693L6.26914 16.3337ZM4.14782 14.2124L5.56204 15.6266L3.44072 17.7479L2.0265 16.3337L4.14782 14.2124ZM13.5 9C12.6716 9 12 9.67157 12 10.5C12 11.3284 12.6716 12 13.5 12C14.3284 12 15 11.3284 15 10.5C15 9.67157 14.3284 9 13.5 9Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div className="ST-Hero-projects-button-wrapper">
                            <div className="ST-Hero-projects-button-text">PROJECTS</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
