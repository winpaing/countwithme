document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    
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

    // Create gallery grid
    function createGallery() {
        const galleryGrid = document.createElement('div');
        galleryGrid.className = 'gallery-grid';

        galleryItems.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.caption}" loading="lazy">
            `;
            
            galleryItem.addEventListener('click', () => openLightbox(index));
            galleryGrid.appendChild(galleryItem);
        });

        galleryContainer.appendChild(galleryGrid);
    }

    // Lightbox functionality
    function createLightbox() {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img class="lightbox-image" src="" alt="">
                <div class="lightbox-nav">
                    <span class="nav-button prev">&lt;</span>
                    <span class="nav-button next">&gt;</span>
                </div>
            </div>
        `;
        document.body.appendChild(lightbox);

        return lightbox;
    }

    const lightbox = createLightbox();
    let currentImageIndex = 0;

    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
    }

    function updateLightboxImage() {
        const lightboxImage = lightbox.querySelector('.lightbox-image');
        lightboxImage.src = galleryItems[currentImageIndex].src;
        lightboxImage.alt = galleryItems[currentImageIndex].caption;
    }

    // Event listeners for lightbox
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.querySelector('.prev').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxImage();
    });

    lightbox.querySelector('.next').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        updateLightboxImage();
    });

    createGallery();
});