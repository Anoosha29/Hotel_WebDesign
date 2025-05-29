        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Hero Animation
        gsap.from('.hero h1', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.5,
            ease: "power3.out"
        });

        gsap.from('.hero p', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 1,
            ease: "power3.out"
        });

        gsap.from('.hero-btn', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 1.5,
            ease: "power3.out"
        });

        // Typewriter Effect
        const text = "Where Luxury Meets the Ocean";
        let i = 0;
        const speed = 100;
        
        function typeWriter() {
            if (i < text.length) {
                document.querySelector('.hero p').textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        // Start typewriter after hero text animation completes
        setTimeout(typeWriter, 1500);

        // Scroll Animations
        gsap.registerPlugin(ScrollTrigger);

        // Section animations
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 1
            });
        });

        // Room cards animation
        gsap.utils.toArray('.room-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                x: i % 2 === 0 ? -100 : 100,
                opacity: 0,
                duration: 0.8
            });
        });

        // Amenity cards animation
        gsap.utils.toArray('.amenity-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1
            });
        });

        // Testimonial cards animation
        gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2
            });
        });

        // Floating booking button click
        document.querySelector('.floating-booking').addEventListener('click', () => {
            gsap.to(window, {
                duration: 1,
                scrollTo: {y: "#rooms", offsetY: 70},
                ease: "power2.inOut"
            });
        });
  