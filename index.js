for (var i=0; i<document.querySelectorAll(".slider-indicator").length; i++) {
  document.querySelectorAll(".slider-indicator")[i].addEventListener("click", sliderButtonClick);
}

function sliderButtonClick() {
  document.querySelectorAll(".carousal-item")[i].classList.add("active");
}
