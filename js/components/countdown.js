class BirthdayCountdown {
    constructor() {
        this.birthDate = new Date('March 22, 1995');
        this.nextBirthday = this.getNextBirthday();
        this.countdownDisplay = document.getElementById('countdown-display');
        this.messageDisplay = document.getElementById('birthday-message');
        this.init();
    }

    init() {
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 1000);
        this.checkBirthdayMonth();
    }

    getNextBirthday() {
        const today = new Date();
        let nextBirthday = new Date(today.getFullYear(), 2, 22); // March is 2 (0-based)
        
        if (today > nextBirthday) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }
        
        return nextBirthday;
    }

    updateCountdown() {
        const now = new Date();
        const distance = this.nextBirthday - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.countdownDisplay.innerHTML = `
            <div class="countdown-item">
                <span class="number">${days}</span>
                <span class="label">Days</span>
            </div>
            <div class="countdown-item">
                <span class="number">${hours}</span>
                <span class="label">Hours</span>
            </div>
            <div class="countdown-item">
                <span class="number">${minutes}</span>
                <span class="label">Minutes</span>
            </div>
            <div class="countdown-item">
                <span class="number">${seconds}</span>
                <span class="label">Seconds</span>
            </div>
        `;

        if (distance < 0) {
            this.showBirthdayMessage();
        }
    }

    checkBirthdayMonth() {
        const today = new Date();
        if (today.getMonth() === 2) { // March
            document.body.classList.add('birthday-month');
            this.messageDisplay.textContent = "🎉 This is my birthday month! 🎉";
        }
        
        if (today.getMonth() === 2 && today.getDate() === 22) {
            document.body.classList.add('birthday-today');
            this.showBirthdayMessage();
        }
    }

    showBirthdayMessage() {
        this.countdownDisplay.innerHTML = `
            <div class="birthday-celebration">
                <h1>🎉 Today is My Birthday! 🎉</h1>
                <p>Celebrating ${new Date().getFullYear() - this.birthDate.getFullYear()} years of amazing memories!</p>
            </div>
        `;
        document.dispatchEvent(new Event('birthdayMode'));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BirthdayCountdown();
});