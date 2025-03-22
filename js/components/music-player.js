class MusicPlayer {
    constructor() {
        this.audio = new Audio('music/birthday.mp3');
        this.toggle = document.querySelector('.player-toggle');
        this.isPlaying = false;
        this.init();
    }

    init() {
        this.setupAudioSettings();
        this.addEventListeners();
    }

    setupAudioSettings() {
        this.audio.loop = true;
        this.audio.volume = 0.7;
    }

    addEventListeners() {
        this.toggle.addEventListener('click', () => this.toggleMusic());
        document.addEventListener('birthdayMode', () => {
            if (!this.isPlaying) {
                this.playMusic();
            }
        });
    }

    toggleMusic() {
        if (this.isPlaying) {
            this.pauseMusic();
        } else {
            this.playMusic();
        }
    }

    playMusic() {
        this.audio.play()
            .then(() => {
                this.isPlaying = true;
                this.toggle.classList.add('playing');
                this.toggle.innerHTML = '<span class="material-icons-round">volume_up</span>';
            })
            .catch(error => {
                console.log('Playback failed:', error);
            });
    }

    pauseMusic() {
        this.audio.pause();
        this.isPlaying = false;
        this.toggle.classList.remove('playing');
        this.toggle.innerHTML = '<span class="material-icons-round">music_note</span>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
});