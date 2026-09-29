// Get Started button
document.querySelector(".primary-btn").onclick = function() {
    alert("Welcome! Let's get started.");
};


// Menu button
document.getElementById("menuBtn").onclick = function() {
    document.querySelector(".site-header nav").classList.toggle("menu-open");
};