import { gsap, Linear, ScrollTrigger } from '/node_modules/gsap/all'

export function ParallaxEffects() {
  const hasParallax = gsap.utils.toArray('.has-parallax')
  hasParallax.forEach(function (hParallax) {
    const bgImage = hParallax.querySelector('img')
    const bgVideo = hParallax.querySelector('video')
    const parallax = gsap.fromTo(
      [bgImage, bgVideo],
      { y: '-20%', scale: 1.15 },
      { y: '20%', scale: 1, duration: 1, ease: Linear.easeNone }
    )
    const parallaxScene = ScrollTrigger.create({
      trigger: hParallax,
      start: 'top 100%',
      end: () => `+=${hParallax.offsetHeight + window.innerHeight}`,
      animation: parallax,
      scrub: true,
    })
  })
}
