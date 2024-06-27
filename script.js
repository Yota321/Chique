document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const closeButton = document.querySelector('.close-button');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const images = document.querySelectorAll('.article img');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const backToTopButton = document.getElementById('back-to-top');
    let currentImageIndex = 0;

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = img.src;
            currentImageIndex = index;
        });
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        modalImage.src = images[currentImageIndex].src;
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        modalImage.src = images[currentImageIndex].src;
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
