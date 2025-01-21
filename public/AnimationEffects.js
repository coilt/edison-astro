import { gsap, Power2 } from '/node_modules/gsap/all'

export function AnimationEffects() {
  const hasAnimation = gsap.utils.toArray('.has-animation')
  hasAnimation.forEach(function (hAnimation) {
    const delayValue = parseInt(hAnimation.getAttribute('data-delay')) || 0
    gsap.to(hAnimation, {
      scrollTrigger: {
        trigger: hAnimation,
        start: 'top 85%',
        onEnter: function () {
          hAnimation.classList.add('animated')
        },
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: Power2.easeOut,
      delay: delayValue / 1000,
    })
  })
}