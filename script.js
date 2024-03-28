
var submiting = document.getElementById("submit");
var thanksContainer = document.querySelector(".hidden-section");
var forSpan = document.getElementById("chosen");
let rates = document.querySelectorAll(".rating")



submiting.addEventListener("click", () => {
    thanksContainer.classList.remove("active")
})


rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        chosen.innerHTML = rate.innerHTML;
        rating.style.backgroundColor = "red"
    })
})

