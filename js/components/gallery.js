class Gallery {
    constructor() {
        this.images = [
            { src: 'assets/images/profile.jpg', caption: 'Birthday Boy' },
            { src: 'assets/images/child.jpg', caption: 'Childhood Memories' },
            { src: 'assets/images/student_uniform.jpg', caption: 'School Days' },
            { src: 'assets/images/uni_team.jpg', caption: 'University Team' },
            { src: 'assets/images/memory1.jpeg', caption: 'Special Moments' },
            { src: 'assets/images/memory2.jpeg', caption: 'Precious Times' },
            { src: 'assets/images/flower.jpg', caption: 'Birthday Flowers' },
            { src: 'assets/images/water.jpg', caption: 'Water Festival' },
            { src: 'assets/images/view.jpg', caption: 'Scenic Views' },
            { src: 'assets/images/yangonnight.jpg', caption: 'Yangon Nights' }
        ];
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.renderGallery();
        this.createModal();
        this.addEventListeners();
    }

    renderGallery() {
        const gallery = document.querySelector('.gallery-grid');
        if (!gallery) return;

        gallery.innerHTML = this.images.map((image, index) => `
            <div class="gallery-item" data-index="${index}">
                <img src="${image.src}" alt="${image.caption}" class="gallery-image">
                <div class="gallery-caption">
                    <h3>${image.caption}</h3>
                </div>
            </div>
        `).join('');
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'gallery-modal';
        modal.innerHTML = `
            <span class="modal-close">&times;</span>
            <div class="modal-content">
                <img src="" alt="Gallery Image">
            </div>
        `;
        document.body.appendChild(modal);
        this.modal = modal;
    }

    addEventListeners() {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                this.currentIndex = parseInt(item.dataset.index);
                this.openModal();
            });
        });

        this.modal.querySelector('.modal-close').addEventListener('click', () => {
            this.closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (!this.modal.classList.contains('active')) return;
            
            if (e.key === 'Escape') this.closeModal();
            if (e.key === 'ArrowLeft') this.prevImage();
            if (e.key === 'ArrowRight') this.nextImage();
        });
    }

    openModal() {
        const modalImg = this.modal.querySelector('img');
        modalImg.src = this.images[this.currentIndex].src;
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateModalImage();
    }

    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateModalImage();
    }

    updateModalImage() {
        const modalImg = this.modal.querySelector('img');
        modalImg.src = this.images[this.currentIndex].src;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});