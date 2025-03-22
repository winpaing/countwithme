class Gallery {
    constructor() {
        this.galleryGrid = document.querySelector('.gallery-grid');
        this.images = [
            { 
                url: './images/child.jpg',
                caption: 'Childhood Memories',
                alt: 'Childhood photo memories'
            },
            { 
                url: './images/memory1.jpeg',
                caption: 'Special Moments',
                alt: 'Special celebration moments'
            },
            { 
                url: './images/memory2.jpeg',
                caption: 'Celebrations',
                alt: 'Birthday celebration'
            },
            { 
                url: './images/student_uniform.jpg',
                caption: 'Student Life',
                alt: 'Student life memories'
            },
            { 
                url: './images/uni_team.jpg',
                caption: 'University Days',
                alt: 'University team photo'
            }
        ];
        this.init();
    }

    init() {
        this.renderGallery();
        this.preloadImages();
    }

    preloadImages() {
        this.images.forEach(image => {
            const img = new Image();
            img.src = image.url;
        });
    }

    renderGallery() {
        this.galleryGrid.innerHTML = this.images.map(image => `
            <div class="gallery-item">
                <div class="gallery-image">
                    <img 
                        src="${image.url}" 
                        alt="${image.alt}"
                        loading="lazy"
                        onerror="this.src='./images/placeholder.jpg'"
                    >
                    <div class="image-overlay"></div>
                </div>
                <div class="gallery-caption">
                    <h3>${image.caption}</h3>
                </div>
            </div>
        `).join('');

        // Add click handlers after rendering
        this.addClickHandlers();
    }

    addClickHandlers() {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                const img = item.querySelector('img');
                this.openLightbox(img.src, img.alt);
            });
        });
    }

    openLightbox(src, alt) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="${alt}">
                <button class="close-lightbox">&times;</button>
            </div>
        `;

        document.body.appendChild(lightbox);
        
        // Add close handlers
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.className === 'close-lightbox') {
                lightbox.remove();
            }
        });
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});