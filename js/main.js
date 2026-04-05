document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll reveal (IntersectionObserver)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Navbar behavior
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile menu
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        const spans = menuBtn.querySelectorAll('span');
        if (mobileMenu.classList.contains('open')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.transform = 'none';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = menuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.transform = 'none';
        });
    });

    // 4. Hero video fallback
    const heroVideo = document.getElementById('hero-video');
    const fallbackImg = document.querySelector('.hero-fallback-img');
    
    if (heroVideo) {
        heroVideo.addEventListener('error', () => {
            heroVideo.style.display = 'none';
            fallbackImg.style.display = 'block';
        });
        
        heroVideo.addEventListener('playing', () => {
            fallbackImg.style.display = 'none';
        });
    }

    // Set current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});