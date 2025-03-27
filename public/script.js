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
