window.carousel = (function () {
  let slide = 0;

  const scrollTo = (next) => {
    const container = document.querySelector(".carousels");
    const carousels = document.querySelectorAll(".carousels .carousel");
    const locators = document.querySelectorAll(".carousel-locator");
    const navPrev = document.querySelector(".carousel-prev");
    const navNext = document.querySelector(".carousel-next");

    const targetLocator = locators.item(next);
    const targetCarousel = carousels.item(next);

    if (!targetLocator || !targetCarousel) return;

    slide = next;

    locators.forEach((locator) => locator.classList.remove("active"));
    targetLocator.classList.add("active");

    navPrev.disabled = slide === 0;
    navNext.disabled = slide === locators.length - 1;

    container.scrollLeft = targetCarousel.offsetLeft;
  };

  return {
    scrollTo: scrollTo,
    prev: () => scrollTo(slide - 1),
    next: () => scrollTo(slide + 1),
  };
})();
