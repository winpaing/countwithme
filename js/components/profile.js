class Profile {
    constructor() {
        this.profileData = {
            name: 'Win Paing Soe',
            birthDate: 'March 22, 1995',
            location: 'Yangon, Myanmar',
            zodiac: 'Aries',
            bio: 'Celebrating three decades of amazing memories and looking forward to new adventures!',
            social: {
                facebook: '#',
                instagram: '#',
                linkedin: '#'
            }
        };
        this.init();
    }

    init() {
        this.renderProfile();
        this.addEventListeners();
    }

    renderProfile() {
        const profileContent = document.querySelector('.profile-content');
        if (!profileContent) return;

        profileContent.innerHTML = `
            <div class="profile-image-container">
                <img src="assets/images/profile.jpg" alt="${this.profileData.name}" class="profile-image">
            </div>
            <div class="profile-info">
                <div class="info-item">
                    <span class="info-icon">📅</span>
                    <span>${this.profileData.birthDate}</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">📍</span>
                    <span>${this.profileData.location}</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">⭐</span>
                    <span>${this.profileData.zodiac}</span>
                </div>
                <p class="profile-bio">${this.profileData.bio}</p>
                <div class="social-links">
                    ${this.renderSocialLinks()}
                </div>
            </div>
        `;
    }

    renderSocialLinks() {
        return Object.entries(this.profileData.social)
            .map(([platform, link]) => `
                <a href="${link}" class="social-link" target="_blank">
                    ${this.getSocialIcon(platform)}
                </a>
            `).join('');
    }

    getSocialIcon(platform) {
        const icons = {
            facebook: 'fb',
            instagram: 'ig',
            linkedin: 'in'
        };
        return icons[platform] || '';
    }

    addEventListeners() {
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            profileImage.addEventListener('mouseover', () => {
                profileImage.style.transform = 'scale(1.05) rotate(2deg)';
            });
            
            profileImage.addEventListener('mouseout', () => {
                profileImage.style.transform = 'scale(1) rotate(0deg)';
            });
        }
    }

    addIconInteraction() {
        const icons = document.querySelectorAll('.info-icon');
        
        icons.forEach(icon => {
            icon.addEventListener('click', () => {
                this.createRippleEffect(icon);
            });
        });
    }

    createRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        
        const rect = element.getBoundingClientRect();
        ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
        
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Profile();
});