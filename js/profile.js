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
        summary: "System Administrator and Cloud Infrastructure Engineer with 4+ years of experience in Linux systems and cloud environments. Specialized in security, automation, and cloud architecture. Passionate about driving technological excellence and delivering robust IT solutions.",
        skills: {
            'Cloud Computing': {
                icon: 'fa-cloud',
                items: ['AWS', 'GCP', 'Azure']
            },
            'Operating Systems': {
                icon: 'fa-desktop',
                items: ['Linux', 'Mac', 'Windows']
            },
            'Container Orchestration': {
                icon: 'fa-cubes', // Updated icon for containers
                items: ['Docker', 'Podman', 'Kubernetes']
            },
            'Infrastructure as Code': {
                icon: 'fa-code',
                items: ['Ansible', 'Terraform']
            },
            'Databases': {
                icon: 'fa-database',
                items: ['Oracle Database', 'MySQL', 'PostgreSQL']
            },
            'Programming': {
                icon: 'fa-terminal',
                items: ['Python', 'Bash Shell']
            },
            'CI/CD Tools': {
                icon: 'fa-code-branch',
                items: ['GitHub Actions', 'GitLab', 'Jenkins']
            }
        },
        hobbies: [
            { name: 'Coding', icon: 'fa-code' },
            { name: 'Music', icon: 'fa-music' },
            { name: 'Gaming', icon: 'fa-gamepad' },
            { name: 'Reading', icon: 'fa-book' },
            { name: 'Traveling', icon: 'fa-plane' }
        ],
        socialLinks: {
            github: 'https://github.com/winpaing',
            linkedin: 'https://www.linkedin.com/in/win-paing-soe-b53183100/',
            facebook: 'https://web.facebook.com/winpaing99',
            twitter: 'https://x.com/WinPaing99'
        }
    };

    function renderProfile() {
        profileContent.innerHTML = `
            <div class="profile-info">
                <div class="info-card">
                    <h3 class="info-title">About Me</h3>
                    <p class="profile-summary">${profileInfo.summary}</p>
                </div>
                <div class="info-card">
                    <h3 class="info-title">Skills</h3>
                    <div class="skills-grid">
                        ${Object.entries(profileInfo.skills).map(([category, data]) => `
                            <div class="skill-category">
                                <h4 class="skill-category-title">
                                    <i class="fas ${data.icon}"></i> ${category}
                                </h4>
                                <div class="skill-items">
                                    ${data.items.map(item => `
                                        <span class="skill-item">${item}</span>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="info-card">
                    <h3 class="info-title">Hobbies</h3>
                    <p class="hobbies-list">
                        ${profileInfo.hobbies.map(hobby => 
                            `<span class="hobby-item"><i class="fas ${hobby.icon}"></i> ${hobby.name}</span>`
                        ).join(' ')}
                    </p>
                </div>
            </div>
            <div class="social-links">
                <a href="${profileInfo.socialLinks.github}" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a href="${profileInfo.socialLinks.linkedin}" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="${profileInfo.socialLinks.facebook}" target="_blank">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="${profileInfo.socialLinks.twitter}" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
        `;
    }

    renderProfile();
});