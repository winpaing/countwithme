document.addEventListener('DOMContentLoaded', () => {
    const wishForm = document.querySelector('.wish-form');
    const thankYouMessages = [
        "Thank you for your wonderful birthday wish! 🎉",
        "Your kind words made my day special! 💖",
        "I'm touched by your thoughtful birthday message! 🎈",
        "Thanks for being part of my birthday celebration! 🎂",
        "Your wish means a lot to me! ✨"
    ];

    function createCard(wishMessage) {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        
        cardContainer.innerHTML = `
            <div class="card">
                <div class="card-front">
                    <div class="card-content">
                        <h3>Thank You!</h3>
                        <p>${getRandomMessage()}</p>
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-content">
                        <p class="wish-message">"${wishMessage}"</p>
                        <p class="signature">- Win Paing Soe</p>
                    </div>
                </div>
            </div>
        `;

        return cardContainer;
    }

    function getRandomMessage() {
        return thankYouMessages[Math.floor(Math.random() * thankYouMessages.length)];
    }

    if (wishForm) {
        wishForm.innerHTML = `
            <textarea class="wish-input" placeholder="Write your birthday wish here..." required></textarea>
            <button type="submit" class="wish-button">Send Wish</button>
        `;

        wishForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const wishInput = wishForm.querySelector('.wish-input');
            const wishMessage = wishInput.value.trim();

            if (wishMessage) {
                const card = createCard(wishMessage);
                wishForm.replaceWith(card);

                // Add click event to flip card
                card.querySelector('.card').addEventListener('click', () => {
                    card.querySelector('.card').classList.toggle('flipped');
                });

                // Trigger animations
                createCelebration();
            }
        });
    }

    function createCelebration() {
        // Create temporary celebration effects
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'floating-item star';
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDuration = `${1 + Math.random() * 2}s`;
            document.querySelector('.background-animations').appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }
    }
});