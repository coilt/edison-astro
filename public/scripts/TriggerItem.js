import { gsap, Power4 } from '/node_modules/gsap/all'

export function TriggerItem() {
  // Check if the element with class "trigger-item" exists on the page
  const triggerItem = document.querySelector('.trigger-item')
  if (triggerItem) {
    // If the element is found, add the event listener and perform the animation
    triggerItem.addEventListener('click', function () {
      document.body.classList.add('load-project-thumb')
      document
        .querySelectorAll('.carousel-shortcode-thumbs .trigger-item')
        .forEach((item) => {
          if (!item.classList.contains('above')) {
            gsap.to(item, {
              duration: 0.5,
              delay: 0,
              opacity: 0,
              ease: Power4.easeInOut,
            })
          } else {
            gsap.to(item.parentElement, {
              duration: 0.3,
              opacity: 1,
              ease: Power4.easeInOut,
            })
            gsap.to(item, {
              duration: 0.5,
              delay: 0.4,
              opacity: 0,
              ease: Power4.easeInOut,
            })
          }
        })
      setTimeout(() => {
        document.body.classList.add('show-loader')
      }, 300)
      gsap.to('footer, .carousel-nav-wrapper, .showcase-portfolio.list-grid', {
        duration: 0.5,
        opacity: 0,
        ease: Power4.easeInOut,
      })
    })
  } else {
    // If the element is not found, return early from the function
    // console.log('Element with class "trigger-item" not found on page')
    return
  }
}
