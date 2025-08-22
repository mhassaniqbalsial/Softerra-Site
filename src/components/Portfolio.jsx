import { useState, useEffect, useRef } from 'react';
import '../styles/Portfolio.css';

// Import your images at the top
import project1 from '../assets/project-1.webp';
import project2 from '../assets/project-2.webp';
import project3 from '../assets/project-3.webp';
import project4 from '../assets/project-4.webp';
import project5 from '../assets/project-5.webp';
import project6 from '../assets/project-6.webp';

const Portfolio = () => {
    const [currentFilter, setCurrentFilter] = useState('all');
    const [itemsToShow, setItemsToShow] = useState(6);
    const tabsRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Portfolio projects data with imported images
    const projects = [
        { id: 1, category: ['all', 'business'], image: project1, alt: 'Project 1' },
        { id: 2, category: ['all', 'ecommerce'], image: project2, alt: 'Project 2' },
        { id: 3, category: ['all', 'business'], image: project3, alt: 'Project 3' },
        { id: 4, category: ['all', 'custom'], image: project4, alt: 'Project 4' },
        { id: 5, category: ['all', 'landing'], image: project5, alt: 'Project 5' },
        { id: 6, category: ['all', 'ecommerce'], image: project6, alt: 'Project 6' },
    ];

    const tabs = [
        { filter: 'all', label: 'All' },
        { filter: 'ecommerce', label: 'E-commerce' },
        { filter: 'business', label: 'Business Website' },
        { filter: 'custom', label: 'Custom Themes' },
        { filter: 'landing', label: 'Landing Pages' }
    ];

    // Simple horizontal scroll for tabs (replaces Splide)
    const scrollTabs = (direction) => {
        const container = tabsRef.current;
        if (container) {
            const scrollAmount = 200;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Check scroll position
    const checkScrollPosition = () => {
        const container = tabsRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 10
            );
        }
    };

    useEffect(() => {
        const container = tabsRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            // Check initial state
            checkScrollPosition();

            return () => container.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    // Get filtered projects
    const getFilteredProjects = () => {
        if (currentFilter === 'all') {
            return projects;
        }
        return projects.filter(project => project.category.includes(currentFilter));
    };

    // Handle tab click
    const handleTabClick = (filter) => {
        setCurrentFilter(filter);
        setItemsToShow(6);
    };

    // Handle load more
    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 6);
    };

    // Handle show less
    const handleShowLess = () => {
        setItemsToShow(6);
        // Scroll back to projects section
        document.querySelector('.ST-portfolio-projects-grid-wrapper')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const filteredProjects = getFilteredProjects();
    const visibleProjects = filteredProjects.slice(0, itemsToShow);
    const hasMoreItems = filteredProjects.length > itemsToShow;
    const showShowLess = itemsToShow > 6;

    return (
        <section className="ST-portfolio-section-main">
            <div className="container">
                <div className="ST-portfolio-section-wrapper">
                    {/* Portfolio Title */}
                    <div className="ST-portfolio-title-wrapper">
                        <h2 className="ST-portfolio-title-text">PORTFOLIO</h2>
                    </div>

                    {/* Portfolio Tabs - Simplified without Splide */}
                    <div className="ST-portfolio-tabs-wrapper">
                        <div className="portfolio-tabs-container">
                            {canScrollLeft && (
                                <button
                                    className="tab-scroll-btn tab-scroll-left"
                                    onClick={() => scrollTabs('left')}
                                    aria-label="Scroll tabs left"
                                >
                                    ←
                                </button>
                            )}

                            <div
                                className="portfolio-tabs-scroll"
                                ref={tabsRef}
                            >
                                <div className="portfolio-tabs-list">
                                    {tabs.map((tab) => (
                                        <div
                                            key={tab.filter}
                                            className={`ST-portfolio-tab-button ${currentFilter === tab.filter ? 'active' : ''}`}
                                            onClick={() => handleTabClick(tab.filter)}
                                        >
                                            <div className="ST-portfolio-tab-text">{tab.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {canScrollRight && (
                                <button
                                    className="tab-scroll-btn tab-scroll-right"
                                    onClick={() => scrollTabs('right')}
                                    aria-label="Scroll tabs right"
                                >
                                    →
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Portfolio Projects Grid */}
                    <div className="ST-portfolio-projects-grid-wrapper">
                        <div className="ST-portfolio-projects-grid">
                            {visibleProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="ST-portfolio-project-item active show"
                                    data-index={project.id}
                                >
                                    <div className="ST-portfolio-project-image-wrapper">
                                        {/* Use picture element for better optimization */}
                                        <picture>
                                            <img
                                                src={project.image}
                                                alt={project.alt}
                                                className="ST-portfolio-project-image"
                                                width="600"
                                                height="450"
                                                loading={index < 3 ? "eager" : "lazy"}
                                                decoding={index < 3 ? "sync" : "async"}
                                                fetchpriority={index === 0 ? "high" : "auto"}
                                            />
                                        </picture>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Load More / Show Less Buttons */}
                    {hasMoreItems && (
                        <div className="ST-portfolio-load-more-wrapper">
                            <button
                                className="ST-portfolio-load-more-button"
                                onClick={handleLoadMore}
                            >
                                <div className="ST-portfolio-load-more-text">Load More</div>
                            </button>
                        </div>
                    )}

                    {showShowLess && (
                        <div className="ST-portfolio-load-more-wrapper">
                            <button
                                className="ST-portfolio-show-less-button"
                                style={{ display: 'flex' }}
                                onClick={handleShowLess}
                            >
                                <div className="ST-portfolio-show-less-text">Show Less</div>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;