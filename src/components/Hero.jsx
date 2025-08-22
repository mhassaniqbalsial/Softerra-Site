import React from 'react';
import '../styles/style.css';
import '../styles/Hero.css';
import upworkLogo from '../assets/upwork-logo.svg';

const Hero = () => {
    return (
        <>
            {/* Critical CSS for Hero section - improves FCP */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    .ST-Hero-section-main {
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: var(--bg-primary);
                        transition: all 0.3s ease;
                    }
                    .ST-Hero-section-wrapper {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }
                    .ST-Hero-upwork-box-wrapper {
                        background: #00AEEF;
                        border: 1px solid var(--border-light);
                        border-radius: 8px;
                        padding: 10px 20px;
                        display: flex;
                        gap: 10px;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 24px;
                        width: 100%;
                        max-width: 350px;
                        box-shadow: var(--shadow-sm);
                        transition: all 0.3s ease;
                    }
                    .ST-Hero-upwork-logo-wrapper {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        max-width: 120px;
                        height: 56px;
                    }
                    .ST-Hero-upwork-logo-wrapper img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                    .ST-Hero-success-rate-text {
                        font-style: normal;
                        font-weight: 700;
                        font-size: var(--font-xl);
                        line-height: 100%;
                        color: #ffffff;
                    }
                    .ST-Hero-banner-content-wrapper {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 24px;
                    }
                    .ST-Hero-title-wrapper {
                        margin-bottom: 12px;
                    }
                    .ST-Hero-highlight-wrapper {
                        margin-bottom: 12px;
                    }
                    .ST-Hero-highlight-text {
                        font-style: normal;
                        font-weight: 700;
                        font-size: var(--font-4xl);
                        line-height: 110%;
                        color: var(--text-secondary);
                    }
                    .ST-Hero-subtitle-wrapper {
                        margin-bottom: 12px;
                    }
                    .ST-Hero-subtitle-text {
                        font-style: normal;
                        font-weight: 300;
                        font-size: var(--font-4xl);
                        line-height: 130%;
                        color: var(--text-secondary);
                    }
                    .ST-Hero-buttons-wrapper {
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                        width: 100%;
                        max-width: 400px;
                    }
                    .ST-Hero-quote-button-wrapper {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 16px 12px;
                        gap: 10px;
                        width: 100%;
                        max-width: 190px;
                        min-height: 56px;
                        background: var(--btn-primary-bg);
                        border-radius: 8px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        border: none;
                        box-shadow: var(--shadow-sm);
                    }
                    .ST-Hero-quote-button-text {
                        font-family: 'Roboto', sans-serif;
                        font-style: normal;
                        font-weight: 700;
                        font-size: var(--font-xl);
                        line-height: 100%;
                        color: var(--btn-primary-text);
                    }
                    .ST-Hero-projects-button-wrapper {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 15px 12px;
                        width: 100%;
                        max-width: 190px;
                        min-height: 56px;
                        border: 2px solid var(--btn-secondary-bg);
                        border-radius: 8px;
                        cursor: pointer;
                        background: transparent;
                        transition: all 0.3s ease;
                    }
                    .ST-Hero-projects-button-text {
                        font-family: 'Roboto', sans-serif;
                        font-style: normal;
                        font-weight: 700;
                        font-size: var(--font-xl);
                        line-height: 1.1;
                        color: var(--text-primary);
                        transition: color 0.3s ease;
                    }
                    /* Mobile-first critical styles */
                    @media (max-width: 768px) {
                        .ST-Hero-section-main {
                            padding-top: 20px;
                            padding-bottom: 20px;
                        }
                        .ST-Hero-upwork-box-wrapper {
                            flex-direction: column;
                            padding: 10px 10px;
                            margin-bottom: 30px;
                            max-width: 162px;
                        }
                        .ST-Hero-success-rate-text {
                            font-size: var(--font-sm);
                        }
                        .ST-Hero-banner-content-wrapper {
                            margin-bottom: 30px;
                        }
                        .ST-Hero-title-wrapper,
                        .ST-Hero-highlight-wrapper,
                        .ST-Hero-subtitle-wrapper {
                            margin-bottom: 10px;
                        }
                        .ST-Hero-highlight-text {
                            font-size: var(--font-2xl);
                            line-height: 1.2;
                        }
                        .ST-Hero-subtitle-text {
                            font-size: var(--font-xl);
                            line-height: 1.2;
                        }
                        .ST-Hero-buttons-wrapper {
                            justify-content: space-between;
                            align-items: center;
                            max-width: 340px;
                        }
                        .ST-Hero-quote-button-wrapper,
                        .ST-Hero-projects-button-wrapper {
                            padding: 12px 14px;
                            max-width: 154px;
                            min-height: 50px;
                        }
                        .ST-Hero-quote-button-text,
                        .ST-Hero-projects-button-text {
                            font-size: var(--font-sm);
                        }
                    }
                `
            }} />

            <section className="ST-Hero-section-main">
                <div className="container">
                    <div className="ST-Hero-section-wrapper">
                        <div className="ST-Hero-upwork-box-wrapper">
                            <div className="ST-Hero-upwork-logo-wrapper">
                                <img
                                    src={upworkLogo}
                                    alt="Upwork 5 stars"
                                    width="121"
                                    height="48"
                                    loading="eager"
                                    fetchpriority="high"
                                    decoding="async"
                                />
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
                                <div className="ST-Hero-highlight-text">Elementor Pro</div>
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
        </>
    );
};

export default Hero;
