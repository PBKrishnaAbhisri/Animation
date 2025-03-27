document.addEventListener("DOMContentLoaded", () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Animation
    const navbar = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'transparent';
        }
    });

    // Hero Section Animations
    gsap.from('.hero-content', {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out"
    });

    // Service Cards Animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.2
        });
    });

    // Feature Cards Animation
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%"
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            delay: i * 0.2
        });
    });

    // Gallery Items Animation
    gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%"
            },
            opacity: 0,
            scale: 0.8,
            duration: 1,
            delay: i * 0.2
        });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Text Animation
    gsap.to(".animated-text", { opacity: 1, y: -20, duration: 1.5, ease: "power3.out" });
    
    // Scrolling Text Animation
    gsap.from(".scroll-text", { opacity: 0, y: 50, duration: 1.5, scrollTrigger: { trigger: ".scroll-text", start: "top 80%" } });
    
    // Interactive Button Animation
    document.querySelector(".glow-button").addEventListener("click", () => {
        gsap.to(".glow-button", { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1, ease: "power2.out" });
    });
    
    // Parallax Effect
    window.addEventListener("scroll", () => {
        let offset = window.scrollY;
        document.querySelector(".parallax").style.backgroundPositionY = offset * 0.5 + "px";
    });

    // New Content Animations
    gsap.to(".fade-in-text", { opacity: 1, duration: 1.5, delay: 0.5, ease: "power2.out" });
    gsap.to(".slide-in-text", { opacity: 1, x: 0, duration: 1.5, delay: 1, ease: "power2.out" });

    // Image Gallery Animations
    gsap.to(".gallery-item", { opacity: 1, scale: 1, duration: 1, stagger: 0.3, scrollTrigger: { trigger: ".gallery", start: "top 80%" } });
});

document.addEventListener("DOMContentLoaded", () => {
    const animatedText = document.querySelector(".animated-text");
    const scrollText = document.querySelector(".scroll-text");

    // Text Fade-in Animation
    if (animatedText) {
        gsap.fromTo(animatedText, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 2, ease: "power2.out" });
    }

    // Scroll Animation
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 100 && scrollText) {
            gsap.to(scrollText, { opacity: 1, duration: 1, ease: "power2.inOut" });
        }
    });

    // Moving Background Animation
    gsap.to("body", {
        backgroundPositionX: "200px",
        repeat: -1,
        duration: 10,
        ease: "linear"
    });
});

// Add particle effect
function createParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5}px;
            height: ${Math.random() * 5}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5});
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            border-radius: 50%;
        `;
        particlesContainer.appendChild(particle);
        
        gsap.to(particle, {
            x: `random(-100, 100)`,
            y: `random(-100, 100)`,
            opacity: 0,
            duration: `random(2, 4)`,
            repeat: -1,
            ease: "power1.inOut"
        });
    }
}

// Enhanced scroll animations
function initScrollAnimations() {
    gsap.utils.toArray('.card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            rotation: 15,
            duration: 1,
            delay: i * 0.2
        });
    });
}

// Mouse move parallax effect
function initParallaxEffect() {
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to('.floating-box', {
            x: xPos,
            y: yPos,
            duration: 1,
            ease: "power2.out"
        });
    });
}

// Initialize all animations
document.addEventListener("DOMContentLoaded", () => {
    createParticles();
    initScrollAnimations();
    initParallaxEffect();
    
    // Hover effects for geometric shapes
    document.querySelectorAll('.geometric > div').forEach(shape => {
        shape.addEventListener('mouseenter', () => {
            gsap.to(shape, {
                scale: 1.2,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        shape.addEventListener('mouseleave', () => {
            gsap.to(shape, {
                scale: 1,
                duration: 0.3,
                ease: "power2.in"
            });
        });
    });
});
