function ScrollToTopAction() {
  const backToTopButton = document.getElementById('backtotop')
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export function ScrollToTop() {
  const backToTopButton = document.getElementById('backtotop');

  if (backToTopButton) {
    backToTopButton.addEventListener('click', ScrollToTopAction)
  }
}
