document.addEventListener('DOMContentLoaded', () => {
    // Update profile image path
    const profileImage = document.createElement('img');
    profileImage.src = 'assets/images/profile.jpg';
    profileImage.alt = 'Win Paing Soe';
    profileImage.className = 'profile-image';
    
    const imageContainer = document.querySelector('.profile-container');
    imageContainer.insertBefore(profileImage, imageContainer.firstChild);

    const profileContent = document.querySelector('.profile-content');
    
    // Profile information
    const profileInfo = {
        name: 'Win Paing Soe',
        birthDate: 'March 22, 1995',
        location: 'Myanmar',
        hobbies: ['Coding', 'Music', 'Photography'],
        socialLinks: {
            github: 'https://github.com/winpaingsoe',
            linkedin: 'https://linkedin.com/in/winpaingsoe',
            twitter: 'https://twitter.com/winpaingsoe'
        }
    };

    // Render profile content
    function renderProfile() {
        profileContent.innerHTML = `
            <div class="profile-info">
                <div class="info-card">
                    <h3 class="info-title">About Me</h3>
                    <p>Birthday: ${profileInfo.birthDate}</p>
                    <p>Location: ${profileInfo.location}</p>
                </div>
                <div class="info-card">
                    <h3 class="info-title">Hobbies</h3>
                    <p>${profileInfo.hobbies.join(', ')}</p>
                </div>
            </div>
            <div class="social-links">
                <a href="${profileInfo.socialLinks.github}" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a href="${profileInfo.socialLinks.linkedin}" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="${profileInfo.socialLinks.twitter}" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
        `;
    }

    renderProfile();
});