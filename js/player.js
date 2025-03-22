document.addEventListener('DOMContentLoaded', () => {
    const musicPlayer = document.getElementById('music-player');
    const birthdaySong = new Audio('assets/music/birthday.mp3');
    
    // Only play/pause button
    musicPlayer.innerHTML = `
        <button class="player-toggle">
            <i class="fas fa-play"></i>
        </button>
    `;

    const toggleButton = musicPlayer.querySelector('.player-toggle');
    let isPlaying = false;

    toggleButton.addEventListener('click', () => {
        if (isPlaying) {
            birthdaySong.pause();
            toggleButton.innerHTML = '<i class="fas fa-play"></i>';
            toggleButton.classList.remove('playing');
        } else {
            birthdaySong.play();
            toggleButton.innerHTML = '<i class="fas fa-pause"></i>';
            toggleButton.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });

    birthdaySong.loop = true;

    // Auto-play on birthday
    const today = new Date();
    if (today.getMonth() === 2 && today.getDate() === 22) {
        birthdaySong.play();
        isPlaying = true;
        toggleButton.innerHTML = '<i class="fas fa-pause"></i>';
        toggleButton.classList.add('playing');
    }
});