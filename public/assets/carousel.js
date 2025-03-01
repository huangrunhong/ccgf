var slide = 0;

function goToSlide(next) {
  const locators = document.querySelectorAll(".carousel-locator");
  const container = document.querySelector(".carousels-container");
  const navPrev = document.querySelector(".carousel-prev");
  const navNext = document.querySelector(".carousel-next");

  const targetLocator = locators.item(next);

  if (!targetLocator) return;

  slide = next;

  locators.forEach((locator) => locator.classList.remove("active"));
  targetLocator.classList.add("active");

  navPrev.disabled = slide === 0;
  navNext.disabled = slide === locators.length - 1;

  container.style.left = "calc(" + slide * -100 + "% - 2rem)";
}

function goToPreviousSlide() {
  goToSlide(slide - 1);
}

function goToNextSlide() {
  goToSlide(slide + 1);
}
