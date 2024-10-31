document.getElementById("loadImages").addEventListener("click", function () {
  const images = document.querySelectorAll(".lazy-load");
  
  const options = {
    threshold: 0.1,
  };

  const loadImage = (image) => {
    const src = image.getAttribute("data-src");
    image.src = src;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  images.forEach((image) => {
    observer.observe(image);
  });
});
