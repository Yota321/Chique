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

    function toggleMenu() {
        menu.classList.toggle('show');
        hamburger.textContent = menu.class
