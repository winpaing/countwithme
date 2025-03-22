document.addEventListener('DOMContentLoaded', () => {
    const wishForm = document.getElementById('wishForm');
    const thankYouCard = document.getElementById('thank-you-card');
    
    if (!wishForm || !thankYouCard) {
        console.error('Required elements not found');
        return;
    }

    const thankYouMessages = [
        "Thank you for your wonderful birthday wish! 🎉",
        "Your kind words made my special day even better! 💖",
        "I'm touched by your thoughtful message! 🌟",
        "Thanks for being part of my celebration! 🎈",
        "Your wish means the world to me! ✨",
        "Your message brought a huge smile to my face! 😊",
        "So grateful for your sweet birthday wish! 🙏",
        "Your thoughtfulness made my day extra special! 🌈",
        "Thank you for making my birthday memorable! 🎊",
        "Your warm wishes touched my heart! ❤️",
        "What a lovely message to receive on my birthday! 🌺",
        "Your words made my celebration even more joyful! 🎵",
        "Feeling blessed by your kind birthday wish! ✨",
        "Thank you for sharing in my birthday joy! 🎀",
        "Your message made my special day shine brighter! ⭐"
    ];

    const cardThemes = {
        classic: {
            background: 'linear-gradient(45deg, #f3d6d6, #ffe6e6)',
            font: 'Serif'
        },
        modern: {
            background: 'linear-gradient(45deg, #2193b0, #6dd5ed)',
            font: 'Sans-serif'
        },
        cute: {
            background: 'linear-gradient(45deg, #ffafbd, #ffc3a0)',
            font: 'Comic Sans MS'
        }
    };

    wishForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const senderName = document.getElementById('sender-name').value.trim();
        const wishMessage = document.getElementById('wish-message').value.trim();
        const theme = document.getElementById('card-theme').value;
        const emoji = document.getElementById('emoji-style').value;

        if (!senderName || !wishMessage) {
            alert('Please fill in all fields');
            return;
        }

        generateThankYouCard(senderName, wishMessage, theme, emoji);
        wishForm.style.display = 'none';
        thankYouCard.style.display = 'block';
    });

    function generateThankYouCard(sender, message, theme, emoji) {
        const randomThankYou = thankYouMessages[Math.floor(Math.random() * thankYouMessages.length)];
        const themeStyle = cardThemes[theme];

        thankYouCard.innerHTML = `
            <div class="card" style="background: ${themeStyle.background}; font-family: ${themeStyle.font}">
                <div class="card-front">
                    <div class="card-content">
                        <h3>${emoji} Thank You ${emoji}</h3>
                        <p class="thank-you-message">${randomThankYou}</p>
                        <p class="sender">- From Win Paing Soe</p>
                        <small>Click to flip</small>
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-content">
                        <p class="wish-message">"${message}"</p>
                        <p class="sender">- ${sender}</p>
                        <button class="new-wish-btn" onclick="location.reload()">Send Another Wish</button>
                    </div>
                </div>
            </div>
        `;

        const card = thankYouCard.querySelector('.card');
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        createCelebrationEffects();
    }

    function createCelebrationEffects() {
        const animationContainer = document.querySelector('.background-animations');
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'floating-item star';
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDuration = `${1 + Math.random() * 2}s`;
            animationContainer.appendChild(confetti);

            setTimeout(() => confetti.remove(), 2000);
        }
    }
});