class WishesManager {
    constructor() {
        this.form = document.getElementById('wish-form');
        this.thankYouMessages = [
            "Thank you for your wonderful wish! 🎉",
            "Your kind words mean a lot to me! 💖",
            "Thanks for making my day special! ✨",
            "Grateful for your lovely birthday wish! 🎈"
        ];
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleWishSubmit(e));
    }

    handleWishSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('sender-name').value;
        const message = document.getElementById('wish-message').value;
        
        this.showThankYouCard(name);
        this.form.reset();
    }

    showThankYouCard(name) {
        const card = document.createElement('div');
        card.className = 'thank-you-card';
        
        const randomMessage = this.thankYouMessages[
            Math.floor(Math.random() * this.thankYouMessages.length)
        ];

        card.innerHTML = `
            <div class="card-content">
                <h3>Dear ${name}</h3>
                <p>${randomMessage}</p>
                <div class="card-decoration">🎂</div>
            </div>
            <button class="close-card">×</button>
        `;

        document.body.appendChild(card);
        setTimeout(() => card.classList.add('show'), 100);

        card.querySelector('.close-card').addEventListener('click', () => {
            card.classList.remove('show');
            setTimeout(() => card.remove(), 300);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WishesManager();
});