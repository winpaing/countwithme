document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    const galleryItems = [
        { src: 'assets/images/profile.jpg', caption: 'Profile Picture' },
        { src: 'assets/images/child.jpg', caption: 'Childhood Memory' },
        { src: 'assets/images/student_uniform.jpg', caption: 'Student Life' },
        { src: 'assets/images/uni_team.jpg', caption: 'University Team' },
        { src: 'assets/images/memory1.jpeg', caption: 'Special Memory 1' },
        { src: 'assets/images/memory2.jpeg', caption: 'Special Memory 2' },
        { src: 'assets/images/flower.jpg', caption: 'Beautiful Flowers' },
        { src: 'assets/images/view.jpg', caption: 'Scenic View' },
        { src: 'assets/images/water.jpg', caption: 'Water Scene' },
        { src: 'assets/images/yangonnight.jpg', caption: 'Yangon Night' }
    ];

    // Create gallery items
    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.caption}" loading="lazy">
            <div class="gallery-caption">
                <p>${item.caption}</p>
            </div>
        `;
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });

    // Create lightbox if it doesn't exist
    if (!document.querySelector('.lightbox')) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <button class="lightbox-nav prev">&lt;</button>
                <button class="lightbox-nav next">&gt;</button>
                <img src="" alt="" class="lightbox-image">
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    let currentImageIndex = 0;

    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function updateLightboxImage() {
        const item = galleryItems[currentImageIndex];
        lightboxImage.src = item.src;
        lightboxImage.alt = item.caption;
        lightboxCaption.textContent = item.caption;
    }

    // Event listeners for lightbox controls
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    });

    lightbox.querySelector('.prev').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxImage();
    });

    lightbox.querySelector('.next').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        updateLightboxImage();
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
                updateLightboxImage();
                break;
            case 'ArrowRight':
                currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
                updateLightboxImage();
                break;
            case 'Escape':
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
                break;
        }
    });
});