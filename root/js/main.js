var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3))

window.addEventListener("scroll", function() {
    var header = document.querySelector(".container");
    var logo = document.querySelector(".logo img");
    header.classList.toggle("whiteBg", window.scrollY > 0);
})