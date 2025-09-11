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
});
