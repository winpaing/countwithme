class QuotesCarousel {
    constructor() {
        this.quotes = [
            "Every year on your birthday, you get a chance to start new.",
            "Count your life by smiles, not tears. Count your age by friends, not years.",
            "Life is a journey, and every birthday is a milestone.",
            "Today is the oldest you have been, and the youngest you will ever be again."
        ];
        this.init();
    }

    init() {
        this.createCarousel();
        this.startRotation();
    }

    createCarousel() {
        const carousel = document.createElement('div');
        carousel.className = 'quotes-carousel glass-effect';
        carousel.innerHTML = `
            <div class="quote-container">
                <p class="quote">${this.quotes[0]}</p>
            </div>
            <div class="quote-dots">
                ${this.quotes.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
            </div>
        `;
        document.querySelector('#profile').appendChild(carousel);
    }
}