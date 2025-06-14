document.addEventListener("DOMContentLoaded", function () {
    const elems = document.querySelectorAll(".carousel");
    const instance = M.Carousel.init(elems[0], {
      padding: 50,
      dist: -100,
      center: true
    });
  
    const items = document.querySelectorAll(".carousel .carousel-item");
    let currentIndex = 0;
    let isPaused = false;
  
    // swipe zůstává aktivní díky Materialize, netřeba nastavovat ručně
  
    // funkce pro aktualizaci třídy
    function markActive(index) {
      items.forEach((item, i) => {
        item.classList.toggle("active-carousel", i === index);
      });
    }
  
    // spuštění autoplay
    function autoplay() {
      if (!isPaused) {
        currentIndex = (currentIndex + 1) % items.length;
        instance.set(currentIndex); // přepne na další slide
        markActive(currentIndex);
      }
      setTimeout(autoplay, 4500);
    }
  
    // první označení
    markActive(currentIndex);
    autoplay();
  
    //pozastavit autoplay při hoveru
    const carouselEl = document.querySelector(".carousel");
    carouselEl.addEventListener("mouseenter", () => isPaused = true);
    carouselEl.addEventListener("mouseleave", () => isPaused = false);
  });
  
  