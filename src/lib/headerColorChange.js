document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  const header = document.getElementById('main-header');
  console.log('Header element:', header);

  const targetElements = document.querySelectorAll('.color-change-trigger');
  console.log('Target elements:', targetElements);

  const observer = new IntersectionObserver((entries) => {
    console.log('Intersection observed');
    entries.forEach(entry => {
      console.log('Entry:', entry);
      if (entry.isIntersecting) {
        console.log('Element is intersecting');
        header.style.color = 'black';
      } else {
        console.log('Element is not intersecting');
        header.style.color = 'white';
      }
      console.log('Current header color:', header.style.color);
    });
  }, { threshold: 0.1 });

  targetElements.forEach(element => {
    console.log('Observing element:', element);
    observer.observe(element);
  });
});