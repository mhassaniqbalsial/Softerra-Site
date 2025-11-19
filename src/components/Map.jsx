import React from 'react';
import '../styles/Map.css';
import mapImage from '../assets/map-image.webp';

const Map = () => {
  return (
    <section className="ST-map-main">
      <div className="ST-map-header-wrapper">
        <div className="container">
          <div className="ST-map-header-title-wrapper">
            <h2 className="ST-map-header-title">Pioneering Digital Innovation Across 30+ Countries</h2> 
          </div>
          <div className="ST-map-header-description-wrapper">
            <p className="ST-map-header-description">
              We're proud to deliver cutting-edge, expert solutions that
              transform business and driven innovation. Our expertise knows no boundaries, enabling us to
              partner with clients around the world to achieve extraordinary results.
            </p>
          </div>
        </div>
      </div>

      <div className="ST-map-image-wrapper">
        <div className="ST-map-image-container">
          <img 
            className="ST-map-image" 
            src={mapImage}
            alt="World Map showing our global presence across 30+ countries" 
          />
        </div>
      </div>
    </section>
  );
};

export default Map;