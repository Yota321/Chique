document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');

    function toggleMenu() {
        menu.classList.toggle('show');
        hamburger.textContent = menu.classList.contains('show') ? '✕' : '☰';
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = menu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInside && menu.classList.contains('show')) {
            toggleMenu();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            menu.classList.remove('show');
            hamburger.textContent = '☰';
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
