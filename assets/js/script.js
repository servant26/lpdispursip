document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("div[id]");
    let navLinks = document.querySelectorAll(".nav-link");

    function activateNav() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop - 100; // Offset biar lebih akurat
            let sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove("active"));
                let activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }

window.addEventListener("scroll", activateNav);
    activateNav(); // Panggil langsung untuk halaman yang dimuat pertama kali
});