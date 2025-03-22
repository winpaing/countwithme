class ConfettiEffect {
    constructor() {
        this.colors = ['#FF1493', '#9370DB', '#FFD700', '#FF69B4', '#87CEEB'];
        this.shapes = ['square', 'circle', 'triangle'];
        this.container = null;
        this.init();
    }

    init() {
        this.createContainer();
        this.listenForCelebration();
    }

    createContainer() {
        this.container = document.createElement('div');
        this.container.className = 'confetti-container';
        document.body.appendChild(this.container);
    }

    listenForCelebration() {
        document.addEventListener('birthdayMode', () => {
            this.startCelebration();
        });
    }

    startCelebration() {
        this.createConfetti(200); // Create 200 confetti pieces
        
        // Continue celebration with intervals
        const interval = setInterval(() => {
            this.createConfetti(50);
        }, 3000);

        // Stop after 15 seconds
        setTimeout(() => {
            clearInterval(interval);
        }, 15000);
    }

    createConfetti(count) {
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            const shape = this.shapes[Math.floor(Math.random() * this.shapes.length)];
            
            confetti.className = `confetti confetti-${shape}`;
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];
            confetti.style.animation = `confettiFall ${2 + Math.random() * 3}s linear forwards`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;

            this.container.appendChild(confetti);

            // Remove confetti after animation
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }

    createRandomConfetti(x, y) {
        const confetti = document.createElement('div');
        const shape = this.shapes[Math.floor(Math.random() * this.shapes.length)];
        
        confetti.className = `confetti confetti-${shape}`;
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        confetti.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        
        const angle = Math.random() * 360;
        const velocity = 50 + Math.random() * 50;
        const duration = 1 + Math.random();
        
        confetti.style.transform = `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) rotate(${Math.random() * 360}deg)`;
        confetti.style.transition = `transform ${duration}s ease-out`;
        
        this.container.appendChild(confetti);
        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ConfettiEffect();
});