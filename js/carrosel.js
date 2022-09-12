const controls = document.querySelectorAll(".control");
let currentItem = 0;
const itemsCarrosel = document.querySelectorAll(".item-carrosel");
const maxItems = itemsCarrosel.length;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    itemsCarrosel.forEach((item) => item.classList.remove("current-item"));
    itemsCarrosel[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });
    itemsCarrosel[currentItem].classList.add("current-item");
  });
});
