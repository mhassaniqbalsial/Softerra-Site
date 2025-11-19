import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Newsletter.css';

const Newsletter = () => {
    const form = useRef();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            // Send newsletter subscription email using EmailJS
            const result = await emailjs.send(
                'service_pb5qrtm', // Replace with your EmailJS service ID
                'template_j4uz7wb', // Replace with your newsletter template ID
                {
                    email: email,
                    subject: 'New Newsletter Subscription',
                    message: `New newsletter subscription from: ${email}`
                },
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );

            console.log('Newsletter subscription sent:', result.text);
            setMessage('Successfully subscribed to our newsletter!');
            setEmail('');

        } catch (error) {
            console.error('Error sending newsletter subscription:', error);
            setMessage('Failed to subscribe. Please try again.');
        }

        setIsLoading(false);
    };

    return (
        <section className="st-newsletter-section">
            <div className="container">
                <div className="st-newsletter-content">
                    <div className="st-newsletter-text">
                        <h2 className="st-newsletter-title">Subscribe Our Newsletter</h2>
                        <p className="st-newsletter-description">
                            Subscribe to our newsletter for digital insights and innovation stories. 
                            Enter your email to join our community
                        </p>
                    </div>

                    <div className="st-newsletter-form-wrapper">
                        <form ref={form} onSubmit={handleSubmit} className="st-newsletter-form">
                            <div className="st-newsletter-input-group">
                                            <input 
                                                type="email" 
                                    name="email"
                                    className="st-newsletter-input" 
                                                required 
                                                placeholder="Enter your email here"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                            />
                                <button 
                                                type="submit" 
                                    className="st-newsletter-button"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Sending...' : 'Send Now'}
                                </button>
                            </div>
                            
                            {message && (
                                <div className={`st-newsletter-message ${message.includes('Successfully') ? 'st-newsletter-success' : 'st-newsletter-error'}`}>
                                    {message}
                        </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;