document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    // Function to add a 'scrolled' class to the header after scrolling
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});