// Get Started button
document.querySelector(".primary-btn").onclick = function() {
    alert("Welcome! Let's get started.");
};

// Menu button
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".site-header nav");

menuBtn.onclick = function() {
    const isOpen = nav.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", isOpen);
};