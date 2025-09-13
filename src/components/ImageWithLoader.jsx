import React, { useState } from 'react';
import '../styles/ImageWithLoader.css';

const ImageWithLoader = ({ 
    src, 
    alt, 
    className = '', 
    width, 
    height, 
    fetchPriority,
    style,
    ...props 
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true); // Stop showing loader even on error
    };

    return (
        <div className={`image-loader-container ${className}`} style={style}>
            {/* Loading skeleton/spinner */}
            {!isLoaded && (
                <div className="image-loader-skeleton">
                    <div className="image-loader-spinner">
                        <div className="spinner"></div>
                    </div>
                </div>
            )}
            
            {/* Actual image */}
            <img
                src={src}
                alt={alt}
                className={`image-loader-img ${isLoaded ? 'loaded' : 'loading'} ${hasError ? 'error' : ''}`}
                width={width}
                height={height}
                fetchPriority={fetchPriority}
                onLoad={handleLoad}
                onError={handleError}
                style={{
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                }}
                {...props}
            />
        </div>
    );
};

export default ImageWithLoader;
