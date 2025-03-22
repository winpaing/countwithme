class BirthdayCountdown {
    constructor() {
        this.birthDate = new Date('March 22, 1995');
        this.nextBirthday = this.calculateNextBirthday();
        this.messages = {
            birthday: "🎉 Today is My Birthday! 🎂",
            birthMonth: "🎈 This is my birthday month! 🎈",
            countdown: "Time until my next birthday:"
        };
        this.init();
    }

    calculateNextBirthday() {
        const today = new Date();
        let nextBirthday = new Date(today.getFullYear(), 2, 22); // March is 2 (0-based)
        
        if (today > nextBirthday) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }
        
        return nextBirthday;
    }

    getTimeRemaining() {
        const now = new Date();
        const difference = this.nextBirthday - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    updateCountdown() {
        const timeLeft = this.getTimeRemaining();
        const today = new Date();
        let message = this.messages.countdown;

        // Check if it's birthday
        if (today.getDate() === 22 && today.getMonth() === 2) {
            message = this.messages.birthday;
            this.triggerBirthdayCelebration();
        }
        // Check if it's birthday month
        else if (today.getMonth() === 2) {
            message = this.messages.birthMonth;
        }

        document.getElementById('birthday-message').innerHTML = message;
        
        // Update time blocks
        Object.entries(timeLeft).forEach(([unit, value]) => {
            const element = document.getElementById(unit);
            if (element) {
                element.textContent = value.toString().padStart(2, '0');
            }
        });
    }

    triggerBirthdayCelebration() {
        document.body.classList.add('birthday-mode');
        // Dispatch event for other components
        document.dispatchEvent(new CustomEvent('birthdayMode'));
    }

    init() {
        // Initial update
        this.updateCountdown();
        // Update every second
        setInterval(() => this.updateCountdown(), 1000);
    }
}

// Initialize countdown when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BirthdayCountdown();
});