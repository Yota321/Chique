document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const imageInfo = document.getElementById('image-info');
    const closeButton = document.querySelector('.close-button');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    let currentIndex = 0;

    // Hamburger menu functionality
    function toggleMenu() {
        menu.classList.toggle('show');
        hamburger.textContent = menu.classList.contains('show') ? '✖' : '☰';
    }

    hamburger.addEventListener('click', toggleMenu);

    // Modal functionality
    function openModal(index) {
        currentIndex = index;
        modalImage.src = galleryItems[currentIndex].src;
        imageInfo.textContent = galleryItems[currentIndex].getAttribute('data-info');
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function showPrevImage() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
        modalImage.src = galleryItems[currentIndex].src;
        imageInfo.textContent = galleryItems[currentIndex].getAttribute('data-info');
    }

    function showNextImage() {
        currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
        modalImage.src = galleryItems[currentIndex].src;
        imageInfo.textContent = galleryItems[currentIndex].getAttribute('data-info');
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            item.classList.toggle('flipped');
            if (item.classList.contains('flipped')) {
                openModal(index);
            } else {
                closeModal();
            }
        });
    });

    closeButton.addEventListener('click', closeModal);
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});
