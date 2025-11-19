import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({
    src,
    alt,
    className = '',
    width,
    height,
    priority = false,
    loading = 'lazy',
    sizes = '100vw',
    placeholder = 'blur',
    blurDataURL,
    style = {},
    onClick,
    onLoad,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef(null);

    // Create optimized image sources for different sizes
    const createSrcSet = (originalSrc) => {
        if (!originalSrc || typeof originalSrc !== 'string') return '';
        
        return `
            ${originalSrc} 1x,
            ${originalSrc} 2x
        `.trim();
    };

    const handleLoad = (e) => {
        setIsLoaded(true);
        if (onLoad) onLoad(e);
    };

    const handleError = (e) => {
        setHasError(true);
        console.warn(`Failed to load image: ${src}`);
    };

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (priority || loading === 'eager') return;

        const img = imgRef.current;
        if (!img) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const lazyImg = entry.target;
                        if (lazyImg.dataset.src) {
                            lazyImg.src = lazyImg.dataset.src;
                            lazyImg.removeAttribute('data-src');
                        }
                        observer.unobserve(lazyImg);
                    }
                });
            },
            {
                rootMargin: '50px',
                threshold: 0.1
            }
        );

        observer.observe(img);

        return () => {
            if (img) observer.unobserve(img);
        };
    }, [priority, loading]);

    const imgStyle = {
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.8,
        ...style
    };

    const imgProps = {
        ref: imgRef,
        alt,
        className: `optimized-image ${className} ${isLoaded ? 'loaded' : 'loading'}`,
        style: imgStyle,
        onLoad: handleLoad,
        onError: handleError,
        onClick,
        width,
        height,
        sizes,
        ...props
    };

    if (priority || loading === 'eager') {
        imgProps.src = src;
        imgProps.srcSet = createSrcSet(src);
        imgProps.loading = 'eager';
    } else {
        imgProps['data-src'] = src;
        imgProps.loading = 'lazy';
        // Low quality placeholder
        imgProps.src = blurDataURL || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+';
    }

    if (hasError) {
        return (
            <div 
                className={`image-error ${className}`}
                style={{ 
                    ...style, 
                    backgroundColor: '#f0f0f0', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#666',
                    fontSize: '14px'
                }}
            >
                Image not available
            </div>
        );
    }

    return <img alt={alt} {...imgProps} />;
};

export default OptimizedImage;
