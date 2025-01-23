import { gsap, Linear } from '/node_modules/gsap/all'

export function OpacityEffects() {
  // .has-opacity
  document.querySelectorAll('.has-opacity').forEach((element) => {
    const words = element.textContent.split(' ')
    const total = words.length
    element.innerHTML = ''
    for (let index = 0; index < total; index++) {
      element.appendChild(document.createElement('span')).textContent =
        words[index] + ' '
    }
  })

  // .has-opacity animation
  const hasOpacity = gsap.utils.toArray('.has-opacity')
  hasOpacity.forEach((hOpacity) => {
    const spanOpacity = hOpacity.querySelectorAll('span')
    gsap.to(spanOpacity, {
      scrollTrigger: {
        trigger: hOpacity,
        start: 'top 85%',
        end: () => `+=${hOpacity.offsetHeight}`,
        scrub: 1,
      },
      duration: 1,
      opacity: 1,
      stagger: 0.5,
      ease: Linear.easeNone,
    })
  })
}