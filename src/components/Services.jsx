import React from 'react';
import '../styles/Services.css';
import shopifyIcon from '../assets/shopify-icon.svg';
import goHighLevelIcon from '../assets/go-high-level-icon.svg';
import clickFunnelIcon from '../assets/click-funnel-icon.svg';
import emailMarketingIcon from '../assets/email-marketing-icon.svg';
import framerIcon from '../assets/framer-icon.svg';
import wordpressIcon from '../assets/wordpress-icon.svg';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: shopifyIcon,
      title: "Shopify Development",
      description: "Shopify Development Transform your e-commerce vision into reality with our expert Shopify development services. From stunning custom themes to powerful apps and integrations, we craft seamless shopping experiences that drive conversions and grow your brand."
    },
    {
      id: 2,
      icon: goHighLevelIcon,
      title: "Go High Level",
      description: "Go High Level Revolutionize your marketing and sales automation with our Go High Level expertise. We implement all-in-one solutions that streamline your business operations, capture leads, and nurture customer relationships through sophisticated automation workflows."
    },
    {
      id: 3,
      icon: clickFunnelIcon,
      title: "Click Funnel",
      description: "ClickFunnel Convert visitors into customers with our strategic ClickFunnel solutions. We design and optimize high-converting sales funnels that guide your prospects through a seamless journey, maximizing your revenue potential at every step."
    },
    {
      id: 4,
      icon: emailMarketingIcon,
      title: "Shopify Email Marketing",
      description: "Shopify Email Marketing Boost your e-commerce success with our targeted Shopify email marketing services. We create and manage compelling email campaigns that engage customers, recover abandoned carts, and drive repeat purchases through personalized communication strategies."
    },
    {
      id: 5,
      icon: framerIcon,
      title: "Framer",
      description: "Framer Bring your web designs to life with our Framer development services. We create captivating, interactive websites that combine stunning aesthetics with powerful functionality. Our Framer expertise ensures your site stands out with smooth animations and responsive designs."
    },
    {
      id: 6,
      icon: wordpressIcon,
      title: "WordPress",
      description: "Framer Bring your web designs to life with our Framer development services. We create captivating, interactive websites that combine stunning aesthetics with powerful functionality. Our Framer expertise ensures your site stands out with smooth animations and responsive designs."
    }
  ];

  return (
    <section className="ST-services-main">
        <div className="container">
      <div className="ST-services-header">
          <div className="ST-services-header-title-wrapper">
            <h2 className="ST-services-header-title">These Are The Services We Provide</h2>
            </div>
          <div className="ST-services-header-description-wrapper">
            <p className="ST-services-header-description">
              Our comprehensive solutions are crafted through years of
                    industry expertise, backed by cutting-edge technology and unwavering commitment to excellence.
                </p>
            </div>
        </div>
    </div>

      <div className="ST-services-cards-wrapper-main">
        <div className="page-width">
          <div className="ST-services-cards-wrapper">
            {servicesData.map((service) => (
              <div key={service.id} className="ST-services-card">
                <div className="ST-services-card-image-wrapper">
                  <img src={service.icon} alt={service.title} className="ST-services-card-icon" />
                </div>
                <div className="ST-services-card-title-wrapper">
                  <h3 className="ST-services-card-title">{service.title}</h3>
                </div>
                <div className="ST-services-card-description-wrapper">
                  <p className="ST-services-card-description">{service.description}</p>
                </div>
              </div>
            ))}
            </div>
        </div>
    </div>
</section>
  );
};

export default Services;