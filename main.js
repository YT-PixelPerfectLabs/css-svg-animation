var btnDraw = document.querySelectorAll(".btn-draw");
var btnErase = document.querySelectorAll(".btn-erase");

// We are only adding and removing the 'active' class,
// the entire animation is defined in the CSS code
function draw(btn) {
  btn.parentElement.parentElement.classList.add("active");
  btn.parentElement.parentElement.querySelector("svg").classList.add("active");
}

function erase(btn) {
  btn.parentElement.parentElement.classList.remove("active");
  btn.parentElement.parentElement
    .querySelector("svg")
    .classList.remove("active");
}

// Add handlers to our buttons
btnDraw.forEach((btn) => {
  btn.addEventListener("click", () => draw(btn), false);
});

btnErase.forEach((btn) => {
  btn.addEventListener("click", () => erase(btn), false);
});
