import { gsap, Linear } from '/node_modules/gsap/all'


export function MaskEffects() {
  document.querySelectorAll('.has-mask').forEach((element) => {
    const words = element.textContent.split(' ')
    const total = words.length
    element.innerHTML = ''
    for (let index = 0; index < total; index++) {
      element.appendChild(document.createElement('span')).textContent =
        words[index]
    }
  })

  // .has-mask span
  document.querySelectorAll('.has-mask span').forEach((element) => {
    const words = element.textContent.split(' ')
    const total = words.length
    element.innerHTML = ''
    for (let index = 0; index < total; index++) {
      element.appendChild(document.createElement('span')).textContent =
        words[index]
    }
  })

  // .has-mask animation
  const hasMask = gsap.utils.toArray('.has-mask')
  hasMask.forEach((hMask) => {
    const delayValue = parseInt(hMask.getAttribute('data-delay')) || 0
    const spanMask = hMask.querySelectorAll('span > span')
    gsap.to(spanMask, {
      scrollTrigger: {
        trigger: hMask,
        start: 'top 85%',
        onEnter: () => {
          hMask.classList.add('animated')
        },
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: Power2.easeOut,
      delay: delayValue / 1000,
    })
  })

  // .has-mask-fill
  document.querySelectorAll('.has-mask-fill').forEach((element) => {
    const words = element.textContent
    const total = words
    element.innerHTML = ''
    element.appendChild(document.createElement('span')).textContent = words
  })

  // .has-mask-fill.block-title
  document
    .querySelectorAll('.has-mask-fill.block-title')
    .forEach((element) => {
      const words = element.textContent.split(' ')
      const total = words.length
      element.innerHTML = ''
      for (let index = 0; index < total; index++) {
        element.appendChild(document.createElement('span')).textContent =
          words[index]
      }
    })

  // .has-mask-fill animation
  const hasMaskFill = gsap.utils.toArray('.has-mask-fill')
  hasMaskFill.forEach((hMaskFill) => {
    const spanFillMask = hMaskFill.querySelectorAll('span')
    gsap.to(spanFillMask, {
      scrollTrigger: {
        trigger: hMaskFill,
        start: 'top 85%',
        end: () => `+=${hMaskFill.offsetHeight * 2}`,
        scrub: 1,
      },
      duration: 1,
      backgroundSize: '200% 100%',
      stagger: 0.5,
      ease: Linear.easeNone,
    })
  })
}