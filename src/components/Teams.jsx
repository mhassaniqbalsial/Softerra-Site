import React from 'react';
import OptimizedImage from './OptimizedImage';
import mHassan from '../assets/m.hassan.webp';
import mujeeb from '../assets/mujeeb.webp';
import shahbaz from '../assets/shahbaz.webp';
import aqib from '../assets/aqib.webp';
import sammi from '../assets/sam.webp';
import hamayun from '../assets/hamayun.webp';
import hussain from '../assets/hussain.webp';
import ahsan from '../assets/ahsan.webp';
import khubaib from '../assets/khubaib.webp';
import awais from '../assets/awais.webp';
import '../styles/Teams.css';

const Teams = () => {
    const teamMembers = [
        { 
            image: mHassan, 
            alt: 'M Hassan - CEO & Founder', 
            name: 'M Hassan', 
            role: 'CEO - Founder',
            priority: true // First team member gets priority loading
        },
        { 
            image: mujeeb, 
            alt: 'Mujeeb Ur Rehman - Senior Shopify Developer', 
            name: 'Mujeeb Ur Rehman', 
            role: 'Snr. Shopify Developer',
            priority: true // Second team member gets priority loading
        },
        { 
            image: sammi, 
            alt: 'M Sammi Abid - Web Developer', 
            name: 'M Sammi Abid', 
            role: 'Web Developer' 
        },
        { 
            image: hamayun, 
            alt: 'Hamayun Aziz - Full Stack Developer', 
            name: 'Hamayun Aziz', 
            role: 'Full Stack Developer' 
        },
        { 
            image: shahbaz, 
            alt: 'Shahbaz - Junior Web Developer', 
            name: 'Shahbaz', 
            role: 'Jnr. Web Developer' 
        },
        { 
            image: hussain, 
            alt: 'Hussain Farooq - Project Manager', 
            name: 'Hussain Farooq', 
            role: 'Project Manager' 
        },
        { 
            image: aqib, 
            alt: 'Aqib Rashid - Junior Web Developer', 
            name: 'Aqib Rashid', 
            role: 'Jnr. Web Developer' 
        },
        { 
            image: ahsan, 
            alt: 'Ahsan - Junior Web Developer', 
            name: 'Ahsan', 
            role: 'Jnr. Web Developer' 
        },
        { 
            image: khubaib, 
            alt: 'Khubaib - Junior Web Developer', 
            name: 'Khubaib', 
            role: 'Jnr. Web Developer' 
        },
        { 
            image: awais, 
            alt: 'Awais - Intern', 
            name: 'Awais', 
            role: 'Intern' 
        }
    ];

    return (
        <section className="PF-team-section">
            {/* Preload first 2 team member images */}
            <link rel="preload" as="image" href={mHassan} />
            <link rel="preload" as="image" href={mujeeb} />
            
            <div className="PF-container"> 
                <div className="PF-team-wrapper"> 
                    <div className="PF-team-images-sub">
                        <h2 className="PF-team-title">Work <span className="highlight">Together</span></h2>
                        <p className="PF-team-description">
                            Unite your team's potential with seamless collaboration tools that transform ideas into achievements, 
                            creating a workspace where creativity flows and productivity soars.
                        </p>
                        <div className="PF-team-images">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="PF-team-image-container">
                                    <OptimizedImage
                                        src={member.image}
                                        alt={member.alt}
                                        className="PF-team-image"
                                        width={80}
                                        height={80}
                                        priority={member.priority || false}
                                        loading={member.priority ? 'eager' : 'lazy'}
                                        sizes="80px"
                                    />
                                    <span className="name">
                                        {member.name}<br /> {member.role}
                                    </span>
                                </div>
                            ))}
                        </div>
                        
                        <a href="www.google.com" className="PF-team-button">View Open Positions</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teams;
