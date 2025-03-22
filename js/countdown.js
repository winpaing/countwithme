document.addEventListener('DOMContentLoaded', () => {
    const countdownTimer = document.getElementById('countdown-timer');
    const countdownStatus = document.getElementById('countdown-status');
    const birthdayDate = new Date('March 22, 1995').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const currentYear = new Date().getFullYear();
        let nextBirthday = new Date(`March 22, ${currentYear}`).getTime();

        if (now > nextBirthday) {
            nextBirthday = new Date(`March 22, ${currentYear + 1}`).getTime();
        }

        const distance = nextBirthday - now;
        const currentMonth = new Date().getMonth();
        const currentDay = new Date().getDate();

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownTimer.innerHTML = `
            <div class="countdown-box">
                <div class="countdown-number">${days}</div>
                <div class="countdown-label">Days</div>
            </div>
            <div class="countdown-box">
                <div class="countdown-number">${hours}</div>
                <div class="countdown-label">Hours</div>
            </div>
            <div class="countdown-box">
                <div class="countdown-number">${minutes}</div>
                <div class="countdown-label">Minutes</div>
            </div>
            <div class="countdown-box">
                <div class="countdown-number">${seconds}</div>
                <div class="countdown-label">Seconds</div>
            </div>
        `;

        if (currentMonth === 2 && currentDay === 22) {
            countdownStatus.textContent = "🎉 Today is My Birthday! 🎉";
            document.body.classList.add('birthday-mode');
        } else if (currentMonth === 2) {
            countdownStatus.textContent = "This month is my birthday month! 🎈";
        } else {
            countdownStatus.textContent = "Counting down to my next birthday...";
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Calculate age
    function calculateAge() {
        const now = new Date();
        const birth = new Date('March 22, 1995');
        let age = now.getFullYear() - birth.getFullYear();
        const monthDiff = now.getMonth() - birth.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
            age--;
        }
        
        return age;
    }

    // Add age to profile if exists
    const ageElement = document.querySelector('.age');
    if (ageElement) {
        ageElement.textContent = calculateAge();
    }
});