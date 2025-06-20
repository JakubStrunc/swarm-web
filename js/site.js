// When the page is scrolled
window.onscroll = function() {
    var navbar = document.getElementById('mainNav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = '#000'; // Black background after scroll
    } else {
        navbar.style.backgroundColor = 'transparent'; // Transparent background before scroll
    }
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {

            const href = this.getAttribute('href');
            if(!href || href === '#') return;

            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            e.preventDefault();

            const navbarOffset = 140; 
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 2000; // ms (pomalejší než defaultní scrollIntoView)
            let start = null;

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;

                // Easing – easeInOutCubic
                const ease = (t) =>
                    t < 0.5
                        ? 4 * t * t * t
                        : 1 - Math.pow(-2 * t + 2, 3) / 2;

                const percentage = Math.min(progress / duration, 1);
                const eased = ease(percentage);
                window.scrollTo(0, startPosition + distance * eased);

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }

            window.requestAnimationFrame(step);
        });
    });
});

window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
      loadingScreen.style.display = "none";
  }
});



document.addEventListener('DOMContentLoaded', function () {
    const offcanvasElement = document.getElementById('mobileOffcanvas');
    const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

    document.querySelectorAll('#mobileOffcanvas .nav-link').forEach(link => {
        link.addEventListener('click', () => {
        offcanvas.hide();
        });
    });
});
