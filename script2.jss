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

window.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("tsparticles", {
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: "#f8f9ff",
    },
    particles: {
      number: {
        value: 50,
        density: { enable: true, area: 800 },
      },
      color: { value: "#b2a6f8" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 4 } },
      move: {
        enable: true,
        speed: 1,
        outModes: "bounce",
      },
      links: {
        enable: true,
        distance: 150,
        color: "#b2a6f8",
        opacity: 0.3,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
  });
});
