class CardGenerator {
    constructor() {
        this.colors = ['#FF69B4', '#9370DB', '#FF1493', '#8A2BE2'];
        this.templates = [
            { bg: 'cake', icon: '🎂' },
            { bg: 'balloons', icon: '🎈' },
            { bg: 'gift', icon: '🎁' },
            { bg: 'stars', icon: '✨' }
        ];
        this.init();
    }

    init() {
        this.addCardButton();
        this.setupEventListeners();
    }

    addCardButton() {
        const button = document.createElement('button');
        button.className = 'generate-card-btn';
        button.innerHTML = '🎨 Generate Birthday Card';
        document.querySelector('.wishes-card').appendChild(button);
    }

    generateCard(name, message) {
        const template = this.templates[Math.floor(Math.random() * this.templates.length)];
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        
        return `
            <div class="birthday-card" style="--card-color: ${color}">
                <div class="card-front">
                    <span class="card-icon">${template.icon}</span>
                    <h2>Happy Birthday!</h2>
                </div>
                <div class="card-inside">
                    <p>Dear Win Paing Soe,</p>
                    <p class="message">${message}</p>
                    <p class="signature">From: ${name}</p>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        document.querySelector('.generate-card-btn').addEventListener('click', () => {
            this.showCardGenerator();
        });
    }

    showCardGenerator() {
        // Card generation logic
    }
}