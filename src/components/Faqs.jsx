import React, { useState } from 'react';
import '../styles/Faqs.css';

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is the difference between a landing page and a website?",
            answer: "A landing page is a single, focused web page designed for a specific marketing campaign or goal, while a website is a collection of interconnected pages. Landing pages are optimized for conversions with minimal distractions, whereas websites provide comprehensive information about your business, products, and services across multiple pages."
        },
        {
            question: "What are the main benefits of using a landing page?",
            answer: "Landing pages offer higher conversion rates due to their focused design, better tracking and analytics for specific campaigns, improved ad relevance and quality scores, reduced bounce rates, and the ability to tailor messaging to specific audience segments. They eliminate distractions and guide visitors toward a single desired action."
        },
        {
            question: "My homepage is great, why do I need a landing page?",
            answer: "While your homepage serves multiple purposes and audiences, a landing page is laser-focused on a single campaign goal. Homepages typically have navigation menus, multiple calls-to-action, and various content sections that can distract visitors. Landing pages eliminate these distractions and match the specific message from your ads or campaigns, resulting in significantly higher conversion rates."
        },
        {
            question: "Do I need a landing page for each product/service I offer?",
            answer: "It's not always necessary, but it's highly recommended for optimal results. Each product or service may appeal to different audiences with unique pain points and motivations. Dedicated landing pages allow you to tailor messaging, imagery, and offers specifically to each audience segment, leading to better conversion rates and more effective marketing campaigns."
        },
        {
            question: "Can you make landing page for e-commerce Websites?",
            answer: "Absolutely! E-commerce landing pages are extremely effective for promoting specific products, seasonal sales, new collections, or special offers. They can showcase product benefits, customer reviews, and compelling visuals while directing visitors to make a purchase. We specialize in creating high-converting e-commerce landing pages that integrate seamlessly with your online store."
        },
        {
            question: "How much does it cost?",
            answer: "Our landing page costs vary depending on complexity, features, and customization requirements. We offer packages starting from basic single-page designs to comprehensive solutions with advanced integrations. Contact us for a personalized quote based on your specific needs, goals, and budget. We always provide transparent pricing with no hidden fees."
        },
        {
            question: "How does it takes?",
            answer: "Typical landing page development takes 5-10 business days, depending on the complexity and scope of the project. This includes initial consultation, design mockups, development, content integration, testing, and revisions. Rush projects can be accommodated for an additional fee. We'll provide you with a detailed timeline during our initial consultation based on your specific requirements."
        }
    ];

    return (
        <section className="ST-landing-faq-main">
            <div className="container">
                <div className="ST-landing-faq-wrapper-main">
                    <div className="ST-landing-faq-header-wrapper">
                        <div className="ST-landing-faq-badge-wrapper">
                            <span className="ST-landing-faq-badge">FAQs</span>
                        </div>
                        <div className="ST-landing-faq-title-wrapper">
                            <h2 className="ST-landing-faq-title">Questions?</h2>
                        </div>
                        <div className="ST-landing-faq-description-wrapper">
                            <p className="ST-landing-faq-description">We (Probably) have the answers you need.</p>
                        </div>
                    </div>

                    <div className="ST-landing-faq-content-wrapper">
                        {faqData.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`ST-landing-faq-item ${activeIndex === index ? 'active' : ''}`}
                            >
                                <div 
                                    className="ST-landing-faq-question-wrapper"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="ST-landing-faq-question">{faq.question}</div>
                                    <div className="ST-landing-faq-icon-wrapper">
                                        <svg className="ST-landing-faq-icon" viewBox="0 0 24 24">
                                            <polyline points="6,9 12,15 18,9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ST-landing-faq-answer-wrapper">
                                    <div className="ST-landing-faq-answer-content">
                                        <div className="ST-landing-faq-answer">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;