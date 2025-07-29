new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    this.appendChild(circle);

    const diameter = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;

    const rect = this.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;

    // Remove the ripple after animation
    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  });
});
