export function initSliderCenter() {
  const autocenter = document.querySelector('.autocenter');
  if (autocenter) {
    autocenter.addEventListener('click', function () {
      const elementTop = this.offsetTop;
      const elementHeight = this.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollIt = elementTop - (viewportHeight - elementHeight) / 2;

      if (document.body.classList.contains('smooth-scroll')) {
        const scrollOffset =
          scrollbar.offset.y +
          (elementTop - scrollbar.getSize().container.height / 2);
        autoScroll = gsap.to(scrollbar, {
          duration: 0.8,
          scrollTop: scrollOffset + elementHeight / 2,
          ease: Power4.easeInOut,
        });
      } else {
        window.scrollTo({ top: scrollIt, behavior: 'smooth' });
      }
    });
  }
}
