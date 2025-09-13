import React from 'react';
import ImageWithLoader from './ImageWithLoader';
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
    return (
        <section className="PF-team-section">
            <div className="PF-container"> 
                <div className="PF-team-wrapper"> 
                    <div className="PF-team-images-sub">
                        <h2 className="PF-team-title">Work <span className="highlight">Together</span></h2>
                        <p className="PF-team-description">Unite your team's potential with seamless collaboration tools that transform ideas into achievements, creating a workspace where creativity flows and productivity soars.</p>
                        <div className="PF-team-images">
                            <div className="PF-team-image-container">
                                <ImageWithLoader src={mHassan} alt="team-hassan" className="PF-team-image team-image-loader" />
                                <span className="name">M Hassan<br /> CEO - Founder </span>
                            </div> 

                            <div className="PF-team-image-container">
                                <ImageWithLoader src={mujeeb} alt="team-mujeeb" className="PF-team-image team-image-loader" />
                                <span className="name">Mujeeb Ur Rehman<br /> Snr. Shopify Developer</span>
                            </div>

                            <div className="PF-team-image-container">
                                <ImageWithLoader src={sammi} alt="Team-sam" className="PF-team-image team-image-loader" />
                                <span className="name">M Sammi Abid <br /> Web Developer</span>
                            </div>

                            <div className="PF-team-image-container">
                                <ImageWithLoader src={hamayun} alt="hamayun" className="PF-team-image team-image-loader" />
                                <span className="name">Hamayun Aziz <br /> Full Stack Developer </span>
                            </div>

                            <div className="PF-team-image-container">
                                <ImageWithLoader src={shahbaz} alt="team-shahbaz" className="PF-team-image team-image-loader" />
                                <span className="name">Shahbaz<br /> Jnr. Web Developer</span>
                            </div>

                            <div className="PF-team-image-container">
                                <ImageWithLoader src={hussain} alt="hussain" className="PF-team-image team-image-loader" />
                                <span className="name">Hussain Farooq<br /> Project Manager</span>
                            </div>

                            <div className="PF-team-image-container">
                                <ImageWithLoader src={aqib} alt="aqib" className="PF-team-image team-image-loader" />
                                <span className="name">Aqib Rashid<br /> Jnr. Web Developer</span>
                            </div>

                            <div className="PF-team-image-container">
                                <ImageWithLoader src={ahsan} alt="ahsan" className="PF-team-image team-image-loader" />
                                <span className="name">Ahsan<br /> Jnr. Web Developer</span>
                            </div> 

                        
                            <div className="PF-team-image-container">
                                <ImageWithLoader src={khubaib} alt="khubaib" className="PF-team-image team-image-loader" />
                                <span className="name">Khubaib<br /> Jnr. Web Developer</span>
                            </div>

                            <div className="PF-team-image-container">
                                <ImageWithLoader src={awais} alt="awais" className="PF-team-image team-image-loader" />
                                <span className="name">Awais<br /> Intern</span>
                            </div>

                        </div>
                        
                        <a href="www.google.com" className="PF-team-button">View Open Positions</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teams;
