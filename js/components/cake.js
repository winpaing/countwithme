class BirthdayCake {
    constructor() {
        this.candleCount = new Date().getFullYear() - 1995;
        this.blownCandles = 0;
        this.init();
    }

    init() {
        this.createCake();
        this.addEventListeners();
    }

    createCake() {
        const container = document.querySelector('.cake-container');
        if (!container) return;

        container.innerHTML = `
            <div class="cake">
                <div class="cake-base"></div>
                <div class="cake-layer layer-1"></div>
                <div class="cake-layer layer-2"></div>
                <div class="cake-layer layer-3"></div>
                ${this.createCandles()}
            </div>
        `;
    }

    createCandles() {
        let candles = '';
        for (let i = 0; i < this.candleCount; i++) {
            const angle = (360 / this.candleCount) * i;
            const radius = 60;
            const x = Math.cos(angle * Math.PI / 180) * radius + 150;
            const z = Math.sin(angle * Math.PI / 180) * radius;
            
            candles += `
                <div class="candle" style="transform: translate3d(${x}px, -220px, ${z}px)">
                    <div class="flame"></div>
                </div>
            `;
        }
        return candles;
    }

    addEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.candle')) {
                this.blowCandle(e.target.closest('.candle'));
            }
        });
    }

    blowCandle(candle) {
        const flame = candle.querySelector('.flame');
        if (flame) {
            flame.remove();
            this.blownCandles++;

            if (this.blownCandles === this.candleCount) {
                this.celebrate();
            }
        }
    }

    celebrate() {
        document.dispatchEvent(new CustomEvent('birthdayMode'));
        
        // Create celebration effects
        const confetti = document.createElement('div');
        confetti.className = 'celebration-effects';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BirthdayCake();
});