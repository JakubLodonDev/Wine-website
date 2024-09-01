document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".proces-img, .proces-text");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.8 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
