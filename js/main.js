document.addEventListener('DOMContentLoaded', () => {
    // Check if it's birthday
    function isBirthday() {
        const today = new Date();
        return today.getMonth() === 2 && today.getDate() === 22;
    }

    // Initialize birthday mode if applicable
    if (isBirthday()) {
        document.body.classList.add('birthday-mode');
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle loading state
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');

        // Create navigation menu
        const nav = document.createElement('nav');
        nav.className = 'main-nav';
        nav.innerHTML = `
            <ul>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#countdown">Countdown</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#wish">Send Wish</a></li>
            </ul>
        `;
        document.body.insertBefore(nav, document.querySelector('main'));

        // Add scroll-based animations
        const sections = document.querySelectorAll('.section');
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    const navLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                    if (navLink) {
                        document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
                        navLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        // Add loading animation
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.innerHTML = '<div class="spinner"></div>';
        document.body.appendChild(loader);

        // Add scroll to top button
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.className = 'scroll-top';
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(scrollTopBtn);

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
    });

    // Handle visibility change for performance
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.body.classList.add('page-hidden');
        } else {
            document.body.classList.remove('page-hidden');
        }
    });
});