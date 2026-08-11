/* =========================================
   11-02 ENTERPRISES LTD
   Website JavaScript
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".nav nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
  });

  // Close mobile menu when a navigation link is clicked
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });
}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }

    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================
   ANIMATED STATISTICS
========================================= */

const counters = document.querySelectorAll(
  "[data-counter]"
);

const counterObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) {
        return;
      }

      const counter = entry.target;

      const target = Number(
        counter.dataset.counter
      );

      let current = 0;

      const duration = 1600;

      const increment = target / (duration / 16);

      const updateCounter = () => {

        current += increment;

        if (current >= target) {

          counter.textContent =
            target.toLocaleString();

          return;
        }

        counter.textContent =
          Math.floor(current).toLocaleString();

        requestAnimationFrame(updateCounter);
      };

      updateCounter();

      observer.unobserve(counter);
    });

  },
  {
    threshold: 0.7
  }
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});


/* =========================================
   SMOOTH SCROLLING
========================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


/* =========================================
   NAVIGATION BACKGROUND ON SCROLL
========================================= */

const header = document.querySelector(".nav");

window.addEventListener(
  "scroll",
  () => {

    if (!header) {
      return;
    }

    if (window.scrollY > 50) {

      header.style.background =
        "rgba(3, 29, 21, 0.92)";

      header.style.backdropFilter =
        "blur(12px)";

    } else {

      header.style.background =
        "transparent";

      header.style.backdropFilter =
        "none";

    }

  },
  {
    passive: true
  }
);


/* =========================================
   BUTTON INTERACTION
========================================= */

document
  .querySelectorAll(".btn")
  .forEach((button) => {

    button.addEventListener("mouseenter", () => {

      button.style.transition =
        "transform 0.25s ease";

    });

  });


/* =========================================
   CURRENT YEAR
========================================= */

const yearElements =
  document.querySelectorAll("[data-year]");

yearElements.forEach((element) => {

  element.textContent =
    new Date().getFullYear();

});


/* =========================================
   INITIALISE WEBSITE
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    console.log(
      "11-02 Enterprises website loaded successfully."
    );

  }
);