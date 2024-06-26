document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-grid img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex;

    images.forEach((img, index) => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalCaption.textContent = this.alt;
            currentIndex = index;
            flipCard();
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    prevBtn.onclick = function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateModalImage();
    }

    nextBtn.onclick = function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateModalImage();
    }

    function updateModalImage() {
        modalImg.src = images[currentIndex].src;
        modalCaption.textContent = images[currentIndex].alt;
        flipCard();
    }

    function flipCard() {
        const flipCardInner = document.querySelector('.flip-card-inner');
        flipCardInner.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            flipCardInner.style.transform = 'rotateY(0deg)';
        }, 800);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style
