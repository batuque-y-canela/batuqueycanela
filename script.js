document.addEventListener('DOMContentLoaded', function () {
  /* Funcionalidad del Carrusel */
  const carouselContainer = document.querySelector('.carousel-container');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  let currentIndex = 0;
  const totalItems = carouselItems.length;
  
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }
  
  function showNext() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }
  
  function showPrev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }
  
  nextButton.addEventListener('click', showNext);
  prevButton.addEventListener('click', showPrev);
  
  setInterval(showNext, 5000);
  
  /* Toggle de expansión para cada categoría dinámica */
  document.querySelectorAll('.dynamic-categories .category').forEach((category) => {
    const header = category.querySelector('.category-header');
    header.addEventListener('click', () => {
      category.classList.toggle('expanded');
    });
  });
  
  /* Bounce Animation para Banner y Footer */
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        document.querySelector('.banner').classList.add('bounce');
        document.querySelector('footer').classList.add('bounce');
        setTimeout(() => {
          document.querySelector('.banner').classList.remove('bounce');
          document.querySelector('footer').classList.remove('bounce');
        }, 500);
        ticking = false;
      });
      ticking = true;
    }
  });
});

  
  
  /* Blog Blocks: Toggle expansion */
   const blogBlocks = document.querySelectorAll('.blog-block');
   blogBlocks.forEach(block => {
     block.addEventListener('click', () => {
       block.classList.toggle('expanded');
     });
   });