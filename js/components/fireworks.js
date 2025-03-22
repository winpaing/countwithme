class Fireworks {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.canvas.className = 'fireworks-canvas';
        document.body.appendChild(this.canvas);
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('click', (e) => this.createFirework(e.clientX, e.clientY));
        
        // Auto fireworks on birthday
        if (this.isBirthday()) {
            this.startAutoFireworks();
        }
    }

    createFirework(x, y) {
        for (let i = 0; i < 50; i++) {
            const angle = (Math.PI * 2 * i) / 50;
            const velocity = 5;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                color: `hsl(${Math.random() * 360}, 50%, 50%)`,
                life: 100
            });
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1;
            p.life--;

            if (p.life <= 0) this.particles.splice(i, 1);

            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(p.x, p.y, 2, 2);
        });

        requestAnimationFrame(() => this.animate());
    }
}