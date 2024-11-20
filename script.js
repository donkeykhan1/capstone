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
// Select the header element
const header = document.querySelector('header');

// Timeout variable to delay the hiding action
let timeout;

// Listen for the scroll event
window.addEventListener('scroll', function () {
    // If the user is at the very top, keep the header visible
    if (window.scrollY <= 0) {
        header.classList.remove('hidden'); // Remove the hidden class if at the top
    } else {
        // If user scrolls down, wait for 1.5 seconds before hiding the header
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (window.scrollY > 50) { // Only hide if the scroll is greater than 50px
                header.classList.add('hidden');
            }
        }, 1500);
    }
});

// Listen for mousemove to show the header when the cursor comes near the top
window.addEventListener('mousemove', function (event) {
    if (event.clientY <= 50) { // Cursor near the top
        clearTimeout(timeout); // Clear the timeout to prevent premature hiding
        header.classList.remove('hidden');
    }
});


// Show header when cursor is near the top
document.addEventListener('mousemove', function(event) {
    if (event.clientY < 50) { // Cursor near top (50px from the top of the page)
        header.classList.remove('hidden');

        // Clear any previous hide timeout, ensuring it doesn't hide right away
        clearTimeout(hideTimeout);
    } else {
        // If the cursor is not near the top, set the timeout to hide the header after 1.5 seconds
        clearTimeout(hideTimeout); // Clear any previous hide timeout
        hideTimeout = setTimeout(function() {
            header.classList.add('hidden');
        }, 1500); // 1.5 seconds delay before hiding
    }
});
