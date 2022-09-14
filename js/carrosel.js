const slides = document.querySelectorAll(".item-carrosel")
const nextButton = document.querySelector(".arrow-right")
const prevButton = document.querySelector(".arrow-left")

let currentSlideImage = 0

function trocaCurrentItem(currentSlideImage) {
  slides.forEach(slide => {
    slide.classList.remove("current-item");
  })

  slides[currentSlideImage].classList.add("current-item")
}

nextButton.addEventListener("click", () => {
  if (currentSlideImage === slides.length - 1) {
    currentSlideImage = 0
  } else {
    currentSlideImage++
  } 

  trocaCurrentItem(currentSlideImage)
})

prevButton.addEventListener("click", () => {
  if (currentSlideImage === 0) {
    currentSlideImage = slides.length - 1
  } else {
    currentSlideImage--
  }

  trocaCurrentItem(currentSlideImage)
})