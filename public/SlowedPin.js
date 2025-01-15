import { gsap } from '/node_modules/gsap/all'

export function SlowedPin() {
  gsap.utils.toArray('.slowed-pin').forEach((slowedPin) => {
    const slowedText = slowedPin.querySelector('.slowed-text')
    const slowedTextWrapper = slowedPin.querySelector('.slowed-text-wrapper')
    const slowedImagesWrapper = slowedPin.querySelector('.slowed-images')
    const slowedImages = slowedPin.querySelectorAll('.slowed-image img')

    gsap.to(slowedText, {
      scrollTrigger: {
        trigger: slowedText,
        scrub: true,
        pin: true,
        start: 'top top',
        end: function () {
          const durationHeight =
            slowedImagesWrapper.offsetHeight - window.innerHeight
          return '+=' + durationHeight
        },
      },
      y: window.innerHeight - slowedText.offsetHeight,
    })

    gsap.from(slowedTextWrapper, {
      scrollTrigger: {
        trigger: slowedText,
        scrub: true,
        start: 'top top',
        end: function () {
          const durationHeight =
            slowedImagesWrapper.offsetHeight - window.innerHeight
          return '+=' + durationHeight
        },
      },
      y: 100,
    })

    slowedImages.forEach((sImage) => {
      gsap.to(sImage, {
        scrollTrigger: {
          trigger: sImage,
          scrub: true,
          start: 'top 100%',
        },
        scale: 1,
        y: 0,
      })
    })
  })
}
