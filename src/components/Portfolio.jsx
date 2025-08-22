import { useState, useEffect } from 'react';
import '../styles/Portfolio.css';

// Import your images at the top
import project1 from '../assets/project-1.webp';
import project2 from '../assets/project-2.webp';
import project3 from '../assets/project-3.webp';
import project4 from '../assets/project-4.webp';
import project5 from '../assets/project-5.webp';
import project6 from '../assets/project-6.webp';
// import project7 from '../assets/project-7.webp';
// import project8 from '../assets/project-8.webp';
// import project9 from '../assets/project-9.webp';
// import project10 from '../assets/project-10.webp';
// import project11 from '../assets/project-11.webp';
// import project12 from '../assets/project-12.webp';

const Portfolio = () => {
    const [currentFilter, setCurrentFilter] = useState('all');
    const [itemsToShow, setItemsToShow] = useState(6);

    // Portfolio projects data with imported images
    const projects = [
        { id: 1, category: ['all', 'business'], image: project1, alt: 'Project 1' },
        { id: 2, category: ['all', 'ecommerce'], image: project2, alt: 'Project 2' },
        { id: 3, category: ['all', 'business'], image: project3, alt: 'Project 3' },
        { id: 4, category: ['all', 'custom'], image: project4, alt: 'Project 4' },
        { id: 5, category: ['all', 'landing'], image: project5, alt: 'Project 5' },
        { id: 6, category: ['all', 'ecommerce'], image: project6, alt: 'Project 6' },
        // { id: 7, category: ['all', 'business'], image: project7, alt: 'Project 7' },
        // { id: 8, category: ['all', 'custom'], image: project8, alt: 'Project 8' },
        // { id: 9, category: ['all', 'landing'], image: project9, alt: 'Project 9' },
        // { id: 10, category: ['all', 'ecommerce'], image: project10, alt: 'Project 10' },
        // { id: 11, category: ['all', 'business'], image: project11, alt: 'Project 11' },
        // { id: 12, category: ['all', 'custom'], image: project12, alt: 'Project 12' }
    ];

    const tabs = [
        { filter: 'all', label: 'All' },
        { filter: 'ecommerce', label: 'E-commerce' },
        { filter: 'business', label: 'Business Website' },
        { filter: 'custom', label: 'Custom Themes' },
        { filter: 'landing', label: 'Landing Pages' }
    ];

    // Initialize Splide
    useEffect(() => {
        let currentSplideInstance = null;

        const initSplide = async () => {
            // Dynamically import Splide
            const { Splide } = await import('@splidejs/splide');

            const splide = new Splide('#portfolio-tabs-slider', {
                perPage: 6,
                perMove: 1,
                gap: 16,
                pagination: false,
                arrows: false,
                breakpoints: {
                    991: {
                        perPage: 4,
                    },
                    767: {
                        perPage: 3,
                        pagination: true,
                    },
                    480: {
                        perPage: 2,
                    }
                }
            });

            splide.mount();
            currentSplideInstance = splide;
        };

        // Load Splide CSS and JS
        const loadSplide = () => {
            // Load CSS
            if (!document.querySelector('link[href*="splide"]')) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
                document.head.appendChild(link);
            }

            initSplide();
        };

        loadSplide();

        return () => {
            if (currentSplideInstance) {
                currentSplideInstance.destroy();
            }
        };
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

                    {/* Portfolio Tabs */}
                    <div className="ST-portfolio-tabs-wrapper">
                        <div className="splide" id="portfolio-tabs-slider">
                            <div className="splide__track">
                                <div className="splide__list">
                                    {tabs.map((tab) => (
                                        <li key={tab.filter} className="splide__slide ST-portfolio-tabs-slide">
                                            <div
                                                className={`ST-portfolio-tab-button ${currentFilter === tab.filter ? 'active' : ''}`}
                                                onClick={() => handleTabClick(tab.filter)}
                                            >
                                                <div className="ST-portfolio-tab-text">{tab.label}</div>
                                            </div>
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Projects Grid */}
                    <div className="ST-portfolio-projects-grid-wrapper">
                        <div className="ST-portfolio-projects-grid">
                            {visibleProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="ST-portfolio-project-item active show"
                                    data-index={project.id}
                                >
                                    <div className="ST-portfolio-project-image-wrapper">
                                        <img
                                            src={project.image}
                                            alt={project.alt}
                                            className="ST-portfolio-project-image"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Load More / Show Less Buttons */}
                    {hasMoreItems && (
                        <div className="ST-portfolio-load-more-wrapper">
                            <div
                                className="ST-portfolio-load-more-button"
                                onClick={handleLoadMore}
                            >
                                <div className="ST-portfolio-load-more-text">Load More</div>
                            </div>
                        </div>
                    )}

                    {showShowLess && (
                        <div className="ST-portfolio-load-more-wrapper">
                            <div
                                className="ST-portfolio-show-less-button"
                                style={{ display: 'flex' }}
                                onClick={handleShowLess}
                            >
                                <div className="ST-portfolio-show-less-text">Show Less</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
