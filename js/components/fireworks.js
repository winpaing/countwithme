class Fireworks {
    constructor() {
        this.container = null;
        this.colors = [
            '#FF1493', '#9370DB', '#FFD700', 
            '#FF69B4', '#87CEEB', '#FFA500'
        ];
        this.init();
    }

    init() {
        this.createContainer();
        this.addEventListeners();
    }

    createContainer() {
        this.container = document.createElement('div');
        this.container.className = 'fireworks-container';
        document.body.appendChild(this.container);
    }

    addEventListeners() {
        document.addEventListener('birthdayMode', () => {
            this.startShow();
        });

        document.addEventListener('click', (e) => {
            if (document.body.classList.contains('birthday-mode')) {
                this.createFirework(e.clientX, e.clientY);
            }
        });
    }

    startShow() {
        const interval = setInterval(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * (window.innerHeight / 2);
            this.createFirework(x, y);
        }, 1000);

        setTimeout(() => clearInterval(interval), 15000);
    }

    createFirework(x, y) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;

        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        
        // Create rocket effect
        const rocket = document.createElement('div');
        rocket.className = 'rocket';
        rocket.style.left = `${x}px`;
        rocket.style.bottom = '0';
        rocket.style.setProperty('--travel-height', `-${window.innerHeight - y}px`);
        this.container.appendChild(rocket);

        // Animate rocket
        rocket.style.animation = `shoot 1s ease-out forwards`;
        
        setTimeout(() => {
            rocket.remove();
            this.explode(firework, color);
        }, 1000);
    }

    explode(firework, color) {
        const particles = 36;
        const radius = 100;

        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework-particle';
            particle.style.background = color;

            const angle = (i * 360 / particles) * Math.PI / 180;
            const velocity = 1 + Math.random() * 0.5;

            particle.style.left = '0';
            particle.style.top = '0';
            particle.style.transform = `rotate(${angle}rad) translate(${radius * velocity}px)`;
            particle.style.animation = `explode ${1 + Math.random()}s ease-out forwards`;

            firework.appendChild(particle);
        }

        this.container.appendChild(firework);
        setTimeout(() => firework.remove(), 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Fireworks();
});