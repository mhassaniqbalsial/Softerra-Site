import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        projectBudget: '',
        aboutProject: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            // Replace these with your actual EmailJS credentials
            const result = await emailjs.sendForm(
                'service_pb5qrtm', // Replace with your EmailJS service ID
                'template_7fkc2rh', // Replace with your EmailJS template ID
                form.current,
                'hdi5JnHDo6gXgtKAs' // Replace with your EmailJS public key
            );

            console.log('Email sent successfully:', result.text);
            setMessage('Message sent successfully! We\'ll get back to you soon.');
            
            // Reset form
            setFormData({
                fullName: '',
                email: '',
                projectBudget: '',
                aboutProject: ''
            });
            form.current.reset();

        } catch (error) {
            console.error('Error sending email:', error);
            setMessage('Failed to send message. Please try again.');
        }

        setIsLoading(false);
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-content">
                    <h2 className="contact-title">
                        Ready to discuss your<br />
                        Project with us?
                    </h2>
                    
                    <form ref={form} onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="projectBudget">Project Budget</label>
                            <input
                                type="text"
                                id="projectBudget"
                                name="projectBudget"
                                value={formData.projectBudget}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="aboutProject">About Project</label>
                            <textarea
                                id="aboutProject"
                                name="aboutProject"
                                value={formData.aboutProject}
                                onChange={handleChange}
                                rows="4"
                                className="form-textarea"
                                required
                            ></textarea>
                        </div>
                        
                        <div className="form-footer">
                            <p className="privacy-text">
                                By sending this form, I confirm that, I have read and accept the{' '}
                                <a href="www.google.com" className="privacy-link">privacy policy</a>
                            </p>
                            
                            <button 
                                type="submit" 
                                className="submit-button"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                        
                        {message && (
                            <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
                                {message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
