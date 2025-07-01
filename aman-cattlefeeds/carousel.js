document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.carousel').forEach(function(carousel) {
    const wrappers = carousel.querySelectorAll('.carousel-img-wrapper');
    const images = carousel.querySelectorAll('.carousel-img');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dots = carousel.querySelectorAll('.dot');
    let current = 0;
    let interval;

    function showSlide(idx) {
      images.forEach((img, i) => img.classList.toggle('active', i === idx));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
      wrappers.forEach((wrap, i) => {
        const caption = wrap.querySelector('.carousel-caption');
        if (caption) caption.style.display = (i === idx) ? 'block' : 'none';
      });
      current = idx;
    }

    function nextSlide() {
      showSlide((current + 1) % images.length);
    }

    function prevSlide() {
      showSlide((current - 1 + images.length) % images.length);
    }

    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        showSlide(i);
        resetInterval();
      });
    });

    function startInterval() {
      interval = setInterval(nextSlide, 4000);
    }
    function resetInterval() {
      clearInterval(interval);
      startInterval();
    }
    showSlide(0);
    startInterval();
  });
}); 