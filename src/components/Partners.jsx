import React, { useState } from 'react';
import '../styles/Partners.css';
import priyaShah from '../assets/priya-shah.svg';

const Partners = () => {
    const [itemsToShow, setItemsToShow] = useState(5);

    const testimonialsData = [
        {
            id: 1,
            name: "Mr. John",
            position: "CEO & Owner - Gary Web Solution",
            date: "Feb 11, 2022, John was a happy Client",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
            content: "I was a little unsure at first, but this exceeded my expectations! The quality is amazing, shipping was fast, and the product looks exactly like the photos. I'll definitely be ordering again!"
        },
        {
            id: 2,
            name: "Daniel Mejia",
            position: "Founder, CraftBloom Studio",
            date: "Feb 11, 2022, John was a happy Client",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face",
            content: "As a small business owner, I needed a website that looked good but also worked well without costing a fortune. Softerra delivered both. I appreciated how they kept me in the loop at every stage. Special thanks to Haseeb from their UX team—he really helped bring my vision to life."
        },
        {
            id: 3,
            name: "James Holbrook",
            position: "CEO, LoopForge",
            date: "Feb 11, 2022, John was a happy Client",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&fit=crop&crop=face",
            content: "Softerra helped us with a full-stack rebuild of our SaaS dashboard. There were a few hiccups with timelines early on, but they were transparent and worked hard to catch up. In the end, we got exactly what we needed, and the performance improvements were noticeable right away."
        },
        {
            id: 4,
            name: "Mr. John",
            position: "Webology World | IoT Plus",
            date: "Feb 11, 2022, John was a happy Client",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
            content: "We started working with Softerra after a frustrating experience with a previous agency that overpromised and underdelivered. From the first discovery call, I could tell this team was different. They asked smart questions, challenged some of our assumptions (in a good way), and really took time to understand our users and business goals. The project was a complete redesign and rebuild of our B2B platform—something we'd been putting off for over a year due to how complex it was. Softerra broke everything down into clear phases, provided weekly updates, and kept us as a working prototype early in the process so we could see progress and give feedback."
        },
        {
            id: 5,
            name: "Priya Shah",
            position: "Product Manager, Vistaar Health",
            date: "Feb 11, 2022, John was a happy Client",
            avatar: priyaShah,
            content: "Softerra helped us rebuild our client dashboard from scratch, and I can honestly say the experience was one of the best I've had working with an external dev team. We were initially skeptical about outsourcing this project, since we'd received sensitive data, API integrations, and some complex logic for our industry (construction and logistics). But Softerra came highly recommended, and they lived up to the hype. Their team was technically solid—strong on React and Node, and they even helped us rethink parts of our architecture to make the system more modular. They were also very open to working with our in-house developers, which made the handoff process a lot smoother than I expected."
        },
        {
            id: 6,
            name: "Sarah Chen",
            position: "Marketing Director, TechFlow",
            date: "Mar 15, 2022, Sarah was a satisfied Client",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&fit=crop&crop=face",
            content: "Working with Softerra was a game-changer for our marketing campaigns. They developed a custom landing page system that increased our conversion rates by 40%. Their attention to detail and understanding of user experience principles really showed in the final product. The team was always available for questions and made revisions quickly."
        },
        {
            id: 7,
            name: "Michael Rodriguez",
            position: "CTO, InnovateLab",
            date: "Apr 8, 2022, Michael was impressed",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
            content: "Softerra's technical expertise is outstanding. They helped us migrate our legacy system to a modern tech stack without any downtime. Their project management was excellent, and they delivered everything on schedule. I particularly appreciated their proactive communication and problem-solving approach throughout the project."
        },
        {
            id: 8,
            name: "Emily Watson",
            position: "Operations Manager, GreenTech Solutions",
            date: "May 22, 2022, Emily was delighted",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face",
            content: "The e-commerce platform Softerra built for us exceeded our expectations. Not only did they deliver a beautiful, user-friendly interface, but they also integrated complex inventory management features that streamlined our operations. Sales increased by 60% within the first three months of launch. Highly recommended!"
        }
    ];

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 4);
    };

    const handleShowLess = () => {
        setItemsToShow(5);
        // Scroll back to testimonials section
        setTimeout(() => {
            document.querySelector('.ST-partners-testimonials-grid-wrapper')?.scrollIntoView({
                behavior: 'smooth'
            });
        }, 100);
    };

    const visibleTestimonials = testimonialsData.slice(0, itemsToShow);
    const showLoadMore = itemsToShow < testimonialsData.length;
    const showShowLess = itemsToShow > 5;

    return (
        <section className="ST-partners-main">
            <div className="container">
                <div className="ST-partners-header-wrapper">
                    <div className="ST-partners-header-title-wrapper">
                        <h2 className="ST-partners-header-title">Feedback From Our Partners</h2>
                    </div>
                </div>

                <div className="ST-partners-testimonials-grid-wrapper">
                    <div className="ST-partners-testimonials-grid">
                        {visibleTestimonials.map((testimonial) => (
                            <div key={testimonial.id} className="ST-partners-testimonial-item show" data-index={testimonial.id}>
                                <div className="ST-partners-testimonial-header-wrapper">
                                    <div className="ST-partners-testimonial-header">
                                        <div className="ST-partners-testimonial-avatar-wrapper">
                                            <img 
                                                src={testimonial.avatar}
                                                alt={testimonial.name} 
                                                className="ST-partners-testimonial-avatar"
                                            />
                                        </div>
                                        <div className="ST-partners-testimonial-info-wrapper">
                                            <div className="ST-partners-testimonial-name">{testimonial.name}</div>
                                            <div className="ST-partners-testimonial-position">{testimonial.position}</div>
                                            <div className="ST-partners-testimonial-date">{testimonial.date}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ST-partners-testimonial-content-wrapper">
                                    <div className="ST-partners-testimonial-content">
                                        {testimonial.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Load More / Show Less Buttons */}
                {showLoadMore && (
                    <div className="ST-partners-load-more-wrapper">
                        <div className="ST-partners-load-more-button" onClick={handleLoadMore}>
                            <div className="ST-partners-load-more-text">Load More</div>
                        </div>
                    </div>
                )}
                
                {showShowLess && (
                    <div className="ST-partners-load-more-wrapper">
                        <div className="ST-partners-show-less-button" onClick={handleShowLess}>
                            <div className="ST-partners-show-less-text">Show Less</div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Partners;