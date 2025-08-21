// Header-specific JavaScript functionality

// Header utility functions
export const headerUtils = {
    // Toggle mobile menu
    toggleMobileMenu: () => {
        const nav = document.querySelector('.navigation');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

        if (nav) {
            nav.classList.toggle('mobile-open');
        }

        if (mobileMenuBtn) {
            mobileMenuBtn.classList.toggle('active');
        }
    },

    // Close mobile menu when clicking outside
    closeMobileMenuOnOutsideClick: (event) => {
        const nav = document.querySelector('.navigation');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

        if (nav && !nav.contains(event.target) && !mobileMenuBtn?.contains(event.target)) {
            nav.classList.remove('mobile-open');
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('active');
            }
        }
    },

    // Smooth scrolling for navigation links
    smoothScrollToSection: (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },

    // Handle theme toggle
    toggleTheme: () => {
        const body = document.body;
        const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // Remove current theme class
        body.classList.remove('dark-theme', 'light-theme');

        // Add new theme class
        body.classList.add(`${newTheme}-theme`);

        // Save theme preference to localStorage
        localStorage.setItem('theme', newTheme);

        return newTheme;
    },

    // Handle header scroll behavior (hide/show on scroll)
    handleHeaderScroll: () => {
        let lastScrollTop = 0;
        const header = document.querySelector('.ST-header');

        if (!header) return;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down - hide header
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up - show header
                header.style.transform = 'translateY(0)';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    },

    // Handle dropdown menu keyboard navigation
    handleDropdownKeyboard: () => {
        const dropdownLinks = document.querySelectorAll('.ST-header .dropdown-link');

        dropdownLinks.forEach(link => {
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const dropdown = link.nextElementSibling;
                    if (dropdown && dropdown.classList.contains('dropdown-menu')) {
                        dropdown.style.opacity = dropdown.style.opacity === '1' ? '0' : '1';
                        dropdown.style.visibility = dropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
                    }
                }
            });
        });
    }
};

// Initialize header functionality
export const initHeader = () => {
    // Load saved theme on page load
    headerUtils.loadSavedTheme();

    // Add smooth scrolling to navigation links
    document.querySelectorAll('.ST-header a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            headerUtils.smoothScrollToSection(target);
        });
    });

    // Add theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle-input');
    if (themeToggle) {
        themeToggle.addEventListener('change', headerUtils.toggleTheme);
    }

    // Add mobile menu toggle functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', headerUtils.toggleMobileMenu);
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', headerUtils.closeMobileMenuOnOutsideClick);

    // Handle dropdown keyboard navigation
    headerUtils.handleDropdownKeyboard();

    // Optional: Enable header scroll behavior (uncomment if needed)
    // headerUtils.handleHeaderScroll();

    console.log('Header functionality initialized');
};

// Auto-initialize when DOM is loaded
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeader);
    } else {
        initHeader();
    }
}
