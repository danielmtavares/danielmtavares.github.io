// Random text effect similar to danperks.dev
class RandomTextEffect {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.currentIndex = 0;
        this.isAnimating = false;
        
        // Options
        this.interval = options.interval || 3000; // 3 seconds default
        this.animationDuration = options.animationDuration || 500; // 500ms default
        this.randomizeInterval = options.randomizeInterval || true;
        
        this.init();
    }
    
    init() {
        // Set initial text
        this.element.textContent = this.texts[0];
        
        // Start the rotation
        this.startRotation();
    }
    
    startRotation() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        
        const nextIndex = (this.currentIndex + 1) % this.texts.length;
        this.animateToText(this.texts[nextIndex], () => {
            this.currentIndex = nextIndex;
            this.isAnimating = false;
            
            // Schedule next change
            const delay = this.randomizeInterval 
                ? this.interval + Math.random() * 1000 // Add random 0-1 second
                : this.interval;
            
            setTimeout(() => this.startRotation(), delay);
        });
    }
    
    animateToText(newText, callback) {
        // Fade out
        this.element.style.opacity = '0';
        this.element.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            // Change text
            this.element.textContent = newText;
            
            // Fade in
            this.element.style.opacity = '1';
            this.element.style.transform = 'translateY(0)';
            
            // Call callback after animation
            setTimeout(callback, this.animationDuration);
        }, this.animationDuration / 2);
    }
}

// Professional titles and descriptions
const professionalTitles = [
    'Principal Software Engineer',
    'Game Developer',
    'Unity Expert',
    'Cross-Platform Developer',
    'Technical Leader',
    'Mobile Game Engineer',
    'VR Developer',
    'System Architect',
    'Code Craftsman',
    'Engineering Mentor'
];

// Initialize the random text effect when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const randomTextElement = document.getElementById('randomText');
    
    if (randomTextElement) {
        new RandomTextEffect(randomTextElement, professionalTitles, {
            interval: 2500,
            animationDuration: 400,
            randomizeInterval: true
        });
    }
    
    // Add smooth scroll behavior for any internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe timeline items and project cards for scroll animations
    const animatedElements = document.querySelectorAll('.timeline-item, .project-card');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
        });
    });
});
