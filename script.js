// JavaScript for smooth scroll effect
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {  // Ensure the target exists before scrolling
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
