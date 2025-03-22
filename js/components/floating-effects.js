class FloatingEffects {
    constructor() {
        this.elements = {
            balloons: ['🎈', '🎈', '🎈'],
            cakes: ['🎂', '🧁'],
            gifts: ['🎁', '🎀'],
            candles: ['🕯️'],
            sparkles: ['✨', '💫', '⭐']
        };
        this.init();
    }

    init() {
        this.createContainer();
        this.addFloatingElements();
        this.addFireworks();
        this.handleScroll();
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'floating-container';
        document.body.appendChild(container);
    }

    addFloatingElements() {
        const container = document.querySelector('.floating-container');
        
        Object.entries(this.elements).forEach(([type, items]) => {
            items.forEach(() => {
                const element = document.createElement('div');
                element.className = `floating-item ${type}`;
                element.innerHTML = items[Math.floor(Math.random() * items.length)];
                element.style.left = `${Math.random() * 100}vw`;
                element.style.animationDelay = `${Math.random() * 5}s`;
                element.style.fontSize = `${Math.random() * 2 + 1}rem`;
                container.appendChild(element);
            });
        });
    }

    addFireworks() {
        const fireworks = document.createElement('div');
        fireworks.className = 'fireworks';
        document.body.appendChild(fireworks);
        
        setInterval(() => {
            if (Math.random() > 0.7) {
                this.createFirework();
            }
        }, 2000);
    }

    createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        document.querySelector('.fireworks').appendChild(firework);
        
        setTimeout(() => firework.remove(), 1000);
    }
}