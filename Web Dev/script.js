document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });

    gsap.from('.hero h1', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 0.8 });
    gsap.from('.cta-button', { opacity: 0, y: 50, duration: 1, delay: 1.1 });
    gsap.from('.hero-image img', { opacity: 0, scale: 0.8, duration: 1, delay: 1.4 });

    gsap.set('main', { scale: 1.1, transformOrigin: 'center top' });
    gsap.to('main', {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: 'main',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        }
    });

    const sections = gsap.utils.toArray('section:not(.hero)');
    sections.forEach((section, i) => {
        gsap.from(section, {
            opacity: 0.5,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true
            }
        });
    });

    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = 'block';
                gsap.from(testimonial, { opacity: 0, y: 20, duration: 0.5 });
            } else {
                testimonial.style.display = 'none';
            }
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    showTestimonial(currentTestimonial);
    setInterval(nextTestimonial, 5000);

    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { y: -10, duration: 0.3 });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { y: 0, duration: 0.3 });
        });
    });

    document.querySelectorAll('.portfolio-item').forEach(item => {
        const overlay = item.querySelector('.overlay');
        item.addEventListener('mouseenter', () => {
            gsap.to(overlay, { opacity: 1, duration: 0.3 });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(overlay, { opacity: 0, duration: 0.3 });
        });
    });
});
