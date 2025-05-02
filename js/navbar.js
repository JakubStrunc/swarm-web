// When the page is scrolled
window.onscroll = function() {
    var navbar = document.getElementById('mainNav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = '#000'; // Black background after scroll
    } else {
        navbar.style.backgroundColor = 'transparent'; // Transparent background before scroll
    }
};