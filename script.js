

  // JavaScript to detect scroll and change the nav style
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
      const navDiv = document.querySelector('body');
      const logoImg = document.getElementById('logo-img');
      const currentScroll = window.scrollY;

      if (currentScroll > 50) {
          navDiv.classList.add('scrolled');

          if (currentScroll < lastScrollTop) {
              // Scroll up
              navDiv.classList.add('scrolled-up');
          } else {
              // Scroll down
              navDiv.classList.remove('scrolled-up');
          }
      } else {
          navDiv.classList.remove('scrolled');
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
  });


// 
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

