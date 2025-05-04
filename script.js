document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const links = document.querySelector(".links");
    const hamburgerLogin = document.querySelector(".hamburger-login");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        links.classList.toggle("active");
        hamburgerLogin.classList.toggle("active");
    });

});
