class MusicPlayer {
    constructor() {
        this.audio = new Audio('assets/music/birthday.mp3');
        this.isPlaying = false;
        this.volume = 0.5;
        this.init();
    }

    init() {
        this.createPlayer();
        this.setupAudio();
        this.addEventListeners();
    }

    createPlayer() {
        const player = document.createElement('div');
        player.className = 'music-player';
        player.innerHTML = `
            <div class="volume-control">
                <div class="volume-bar"></div>
            </div>
            <button class="music-toggle">🎵</button>
        `;
        document.body.appendChild(player);
        
        this.toggleButton = player.querySelector('.music-toggle');
        this.volumeControl = player.querySelector('.volume-control');
        this.volumeBar = player.querySelector('.volume-bar');
    }

    setupAudio() {
        this.audio.loop = true;
        this.audio.volume = this.volume;
        
        // Preload audio
        this.audio.load();
    }

    addEventListeners() {
        this.toggleButton.addEventListener('click', () => this.togglePlay());
        
        this.volumeControl.addEventListener('click', (e) => {
            const rect = this.volumeControl.getBoundingClientRect();
            const x = e.clientX - rect.left;
            this.volume = Math.max(0, Math.min(1, x / rect.width));
            this.updateVolume();
        });

        // Listen for birthday mode
        document.addEventListener('birthdayMode', () => {
            if (!this.isPlaying) {
                this.togglePlay();
            }
        });
    }

    togglePlay() {
        if (this.isPlaying) {
            this.audio.pause();
            this.toggleButton.textContent = '🎵';
            this.toggleButton.classList.remove('playing');
        } else {
            this.audio.play().catch(error => {
                console.log('Playback failed:', error);
            });
            this.toggleButton.textContent = '⏸';
            this.toggleButton.classList.add('playing');
        }
        this.isPlaying = !this.isPlaying;
    }

    updateVolume() {
        this.audio.volume = this.volume;
        this.volumeBar.style.width = `${this.volume * 100}%`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
});