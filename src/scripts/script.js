// Main JavaScript file for additional functionality

// Utility functions
export const utils = {
    // Smooth scrolling for navigation links
    smoothScroll: (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },



    // Form validation helper
    validateEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Loading state handler
    showLoading: (element) => {
        element.innerHTML = 'Loading...';
        element.disabled = true;
    },

    hideLoading: (element, originalText) => {
        element.innerHTML = originalText;
        element.disabled = false;
    }
};

// Initialize app functionality
export const initApp = () => {
    // Add smooth scrolling to navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            utils.smoothScroll(target);
        });
    });

    // Add any other initialization logic here
    console.log('Softerra app initialized');
};

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
