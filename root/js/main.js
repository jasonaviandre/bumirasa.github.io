window.addEventListener("scroll", function() {
    var header = document.querySelector(".container");
    var logo = document.querySelector(".logo img");
    header.classList.toggle("whiteBg", window.scrollY > 0);
})