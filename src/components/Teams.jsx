import React from 'react';
import mHassan from '../assets/m.hassan.svg';
import mujeeb from '../assets/mujeeb.svg';
import shahbaz from '../assets/shahbaz.svg';
import aqib from '../assets/aqib.png';
import sammi from '../assets/sam.svg';
import hamayun from '../assets/hamayun.svg';
import hussain from '../assets/hussain.png';
import ahsan from '../assets/ahsan.png';
import khubaib from '../assets/khubaib.png';
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
                                <img src={mHassan} alt="team-hassan" className="PF-team-image" />
                                <span className="name">M Hassan<br /> CEO - Founder </span>
                            </div> 

                            <div className="PF-team-image-container">
                                <img src={mujeeb} alt="team-mujeeb" className="PF-team-image" />
                                <span className="name">Mujeeb Ur Rehman<br /> Snr. Shopify Developer</span>
                            </div>

                            <div className="PF-team-image-container">
                                <img src={sammi} alt="Team-sam" className="PF-team-image" />
                                <span className="name">M Sammi Abid <br /> Web Developer</span>
                            </div>

                            <div className="PF-team-image-container">
                                <img src={hamayun} alt="hamayun" className="PF-team-image" />
                                <span className="name">Hamayun Aziz <br /> Full Stack Developer </span>
                            </div>

                            <div className="PF-team-image-container">
                                <img src={shahbaz} alt="team-shahbaz" className="PF-team-image" />
                                <span className="name">Shahbaz<br /> Jnr. Web Developer</span>
                            </div>

                            <div className="PF-team-image-container">
                                <img src={hussain} alt="hussain" className="PF-team-image" />
                                <span className="name">Hussain Farooq<br /> Project Manager</span>
                            </div>

                            <div className="PF-team-image-container">
                                <img src={ahsan} alt="ahsan" className="PF-team-image" />
                                <span className="name">Ahsan<br /> UI/UX Designer</span>
                            </div> 

                            <div className="PF-team-image-container">
                                <img src={aqib} alt="aqib" className="PF-team-image" />
                                <span className="name">Aqib Rashid<br /> Jnr. Web Developer</span>
                            </div>

                            <div className="PF-team-image-container">
                                <img src={khubaib} alt="khubaib" className="PF-team-image" />
                                <span className="name">Khubaib<br /> Internee</span>
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
