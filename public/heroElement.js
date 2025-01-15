import {
  gsap,
  Linear,
  Power2,
  Power4,
  Flip,
  ScrollTrigger,
} from '/node_modules/gsap/all'

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

export function HeroElement() {
  const heroElement = document.getElementById('#hero')
  console.log(heroElement)

  gsap.defaults({ overwrite: 'auto' })
  gsap.registerPlugin(ScrollTrigger, Flip)
  gsap.config({ nullTargetWarn: false })

  setTimeout(function () {
    const threeapp = document.getElementById('app')
    threeapp.className += 'active'
    document.body.append(threeapp)
  }, 0)

  if (document.getElementById('#showcase-slider')) {
    setTimeout(function () {
      const threeSlider = document.getElementById('canvas-slider')
      threeSlider.className += ' active'
      document.body.append(threeSlider)
    }, 0)
  }

  if (!document.body.classList.contains('project-nav-text')) {
    if (document.getElementById('#project-nav')) {
      document.getElementById('#main-content').classList.add('solid-color')
      document
        .getElementById('#main-page-content')
        .classList.add('project-page')
    }
  }

  if (document.querySelector('.portfolio')) {
    document.getElementById('#main-content').addClass('portfolio-page')
  }

}