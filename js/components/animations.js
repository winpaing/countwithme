class BackgroundAnimations {
    constructor() {
        this.container = document.querySelector('.background-animations');
        this.elements = ['balloon', 'star', 'diamond'];
        this.colors = ['#FF1493', '#9370DB', '#FFD700', '#FF69B4'];
        this.init();
    }

    init() {
        this.createFloatingElements();
        this.addBirthdayListener();
    }

    createFloatingElements() {
        setInterval(() => {
            const element = document.createElement('div');
            element.className = `floating-element ${this.getRandomElement()}`;
            element.style.left = `${Math.random() * 100}%`;
            element.style.animationDuration = `${15 + Math.random() * 10}s`;
            element.style.background = this.getRandomColor();
            
            this.container.appendChild(element);
            
            setTimeout(() => element.remove(), 15000);
        }, 2000);
    }

    getRandomElement() {
        return this.elements[Math.floor(Math.random() * this.elements.length)];
    }

    getRandomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    createFirework(x, y) {
        const colors = ['#FF1493', '#9370DB', '#FFD700'];
        
        for (let i = 0; i < 36; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            
            const angle = (i * 10) * Math.PI / 180;
            const velocity = 50 + Math.random() * 50;
            
            particle.style.transform = `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px)`;
            
            this.container.appendChild(particle);
            setTimeout(() => particle.remove(), 1000);
        }
    }

    addBirthdayListener() {
        document.addEventListener('birthdayMode', () => {
            this.startFireworks();
        });

        document.addEventListener('click', (e) => {
            if (document.body.classList.contains('birthday-mode')) {
                this.createFirework(e.clientX, e.clientY);
            }
        });
    }

    startFireworks() {
        setInterval(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            this.createFirework(x, y);
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BackgroundAnimations();
});