class BirthdayWishes {
    constructor() {
        this.wishes = [];
        this.thankYouMessages = [
            "Thank you for your wonderful birthday wishes! 🎉",
            "Your kind words made my special day even better! 💖",
            "I'm touched by your thoughtful message! 🌟",
            "Thanks for being part of my celebration! 🎈",
            "Your wish brought joy to my heart! 😊",
            "I'm grateful for your sweet birthday message! 🙏",
            "Thank you for making my day more special! 🎂",
            "Your wishes mean the world to me! ✨",
            "Thanks for sharing in my birthday joy! 🎊",
            "Your message made me smile! 💫",
            "I'm blessed to receive such wonderful wishes! 🌈",
            "Thank you for your heartwarming message! 💝",
            "Your birthday wish made my day brighter! ⭐",
            "I appreciate your kind thoughts! 🌺",
            "Thanks for adding happiness to my celebration! 🎭",
            "Your message touched my heart! 💕",
            "Thank you for your lovely birthday greeting! 🌟",
            "I'm delighted by your sweet message! 🎪",
            "Thanks for making my birthday memorable! 🎯",
            "Your wishes made this day extra special! 🎨"
        ];
        this.init();
    }

    init() {
        this.setupForm();
        this.loadWishes();
    }

    setupForm() {
        const form = document.getElementById('wish-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleWishSubmission(e.target);
        });
    }

    handleWishSubmission(form) {
        const name = form.querySelector('#sender-name').value;
        const message = form.querySelector('#wish-message').value;

        const wish = {
            id: Date.now(),
            name,
            message,
            timestamp: new Date().toISOString()
        };

        this.wishes.push(wish);
        this.saveWishes();
        this.renderWishes();
        this.showThankYouCard(name);
        form.reset();
    }

    loadWishes() {
        const savedWishes = localStorage.getItem('birthdayWishes');
        if (savedWishes) {
            this.wishes = JSON.parse(savedWishes);
            this.renderWishes();
        }
    }

    saveWishes() {
        localStorage.setItem('birthdayWishes', JSON.stringify(this.wishes));
    }

    renderWishes() {
        const container = document.querySelector('.wishes-grid');
        if (!container) return;

        container.innerHTML = this.wishes.map(wish => `
            <div class="wish-card">
                <h3>${wish.name}</h3>
                <p>${wish.message}</p>
                <small>${new Date(wish.timestamp).toLocaleDateString()}</small>
            </div>
        `).join('');
    }

    showThankYouCard(name) {
        const message = this.getRandomThankYou();
        const card = document.createElement('div');
        card.className = 'thank-you-card';
        card.innerHTML = `
            <h3>Dear ${name}</h3>
            <p>${message}</p>
        `;

        document.body.appendChild(card);

        setTimeout(() => {
            card.style.opacity = '0';
            setTimeout(() => card.remove(), 500);
        }, 3000);
    }

    getRandomThankYou() {
        return this.thankYouMessages[
            Math.floor(Math.random() * this.thankYouMessages.length)
        ];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BirthdayWishes();
});