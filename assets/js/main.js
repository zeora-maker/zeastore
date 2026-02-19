(function() {
    "use strict";

    //===== Preloader (Dikasih pengaman biar nggak error kalau HTML dihapus)
    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        var preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.display = 'none';
        }
    }

    /*=====================================
    Sticky Navbar
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        if (header_navbar) {
            var sticky = header_navbar.offsetTop;
            if (window.pageYOffset > sticky) {
                header_navbar.classList.add("sticky");
            } else {
                header_navbar.classList.remove("sticky");
            }
        }

        // Show or hide the back-to-top button
        var backToTo = document.querySelector(".scroll-top");
        if (backToTo) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                backToTo.style.display = "flex";
            } else {
                backToTo.style.display = "none";
            }
        }
    };

    // Smooth Scroll for menu links
    var pageLink = document.querySelectorAll('.page-scroll');
    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            var targetId = elem.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        });
    });

    // Section menu active (Highlight menu saat di-scroll)
    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(currLink => {
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            if (refElement) {
                var scrollTopMinus = scrollPos + 73;
                if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                    // Hapus class active dari semua, lalu tambah ke yang aktif
                    document.querySelectorAll('.page-scroll').forEach(link => link.classList.remove('active'));
                    currLink.classList.add('active');
                }
            }
        });
    }

    window.document.addEventListener('scroll', onScroll);

    // Close navbar-collapse when link is clicked (Mobile)
    let navbarToggler = document.querySelector(".navbar-toggler");    
    var navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggler && navbarCollapse) {
        document.querySelectorAll(".page-scroll").forEach(e =>
            e.addEventListener("click", () => {
                navbarToggler.classList.remove("active");
                navbarCollapse.classList.remove('show');
            })
        );
        
        navbarToggler.addEventListener('click', function() {
            navbarToggler.classList.toggle("active");
        });
    }

    // WOW.js Init
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

    // Counter Up Init
    var counterElement = document.querySelector('.counter'); // Cek apakah ada elemen counter
    if (counterElement && typeof counterUp !== 'undefined') {
        var cu = new counterUp({
            start: 0,
            duration: 2000,
            intvalues: true,
            interval: 100,
            append: " ",
        });
        cu.start();
    }

})();

// ====== Scroll Top JS
document.querySelector('.scroll-top').onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
