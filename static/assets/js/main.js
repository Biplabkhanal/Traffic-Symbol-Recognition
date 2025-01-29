document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 100
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });

  // Counter animation
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const speed = 200;

    const updateCount = () => {
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
