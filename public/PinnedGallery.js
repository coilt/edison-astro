import { gsap, ScrollTrigger } from '/node_modules/gsap/all'
 
export function PinnedGallery() {
  imagesLoaded('body', function () {
    gsap.utils.toArray('.pinned-gallery').forEach((pinnedGallery) => {
      if (
        pinnedGallery &&
        pinnedGallery.classList.contains('random-img-ratation')
      ) {
        const rotatedImages = pinnedGallery.querySelectorAll(
          '.pinned-image:not(:first-child):not(:last-child)'
        )
        gsap.utils.toArray(rotatedImages).forEach((pImage, i, arr) => {
          let rotation =
            i % 2 === 0 ? gsap.utils.random(-4, 0) : gsap.utils.random(0, 4)
          gsap.set(pImage.querySelector('img'), { rotation: rotation })
        })
      }

      const pinnedImages = pinnedGallery.querySelectorAll('.pinned-image')

      pinnedImages.forEach((pImage, i, arr) => {
        if (i < arr.length - 1) {
          const durationMultiplier = arr.length - i - 1

          ScrollTrigger.create({
            trigger: pImage,
            start: function () {
              const centerPin =
                (window.innerHeight -
                  pImage.querySelector('img').offsetHeight) /
                2
              return 'top +=' + centerPin
            },
            end: function () {
              const durationHeight = pImage.offsetHeight * durationMultiplier
              return '+=' + durationHeight
            },
            pin: true,
            pinSpacing: false,
            scrub: true,
            animation: gsap.to(pImage.querySelector('img'), {
              scale: 0.95,
              opacity: 1,
              zIndex: 0,
              duration: 1,
              ease: Linear.easeNone,
            }),
          })
        }
      })
    })
  })
}
