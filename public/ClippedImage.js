import { gsap, ScrollTrigger } from '/node_modules/gsap/all'

export function ClippedImage() {
  gsap.utils
    .toArray('.clipped-image-wrapper')
    .forEach((clippedImageWrapper) => {
      const clippedImagePin =
        clippedImageWrapper.querySelector('.clipped-image-pin')
      const clippedImage = clippedImageWrapper.querySelector('.clipped-image')
      const clippedImageGradient = clippedImageWrapper.querySelector(
        '.clipped-image-gradient',
      )
      const clippedImageContent = clippedImageWrapper.querySelector(
        '.clipped-image-content',
      )
 
      gsap.set(clippedImageContent, {
        paddingTop: window.innerHeight / 2 + clippedImageContent.offsetHeight,
      })

      gsap.set(clippedImageGradient, {
        backgroundColor: clippedImageGradient
          .closest('.content-row ')
          .getAttribute('data-bgcolor'),
      })

      function setClippedImageWrapperProperties() {
        gsap.set(clippedImageContent, { paddingTop: '' })
        gsap.set(clippedImageGradient, { height: window.innerHeight * 0.3 })
        gsap.set(clippedImage, { height: window.innerHeight })
        gsap.set(clippedImageContent, {
          paddingTop: window.innerHeight / 2 + clippedImageContent.offsetHeight,
        })
        gsap.set(clippedImageWrapper, {
          height: window.innerHeight + clippedImageContent.offsetHeight,
        })
      }

      imagesLoaded('body', function () {
        setClippedImageWrapperProperties()
      })

      window.addEventListener('resize', setClippedImageWrapperProperties)

      gsap.to(clippedImageGradient, {
        scrollTrigger: {
          trigger: clippedImagePin,
          start: function () {
            const startPin = 0
            return 'top +=' + startPin
          },
          end: function () {
            const endPin = clippedImageContent.offsetHeight
            return '+=' + endPin
          },
          scrub: true,
        },
        opacity: 1,
        y: 1,
      })

      const clippedImageAnimation = gsap.to(clippedImage, {
        clipPath: 'inset(0% 0% 0%)',
        scale: 1,
        duration: 1,
        ease: 'Linear.easeNone',
      })

      const clippedImageScene = ScrollTrigger.create({
        trigger: clippedImagePin,
        start: function () {
          const startPin = 0
          return 'top +=' + startPin
        },
        end: function () {
          const endPin = clippedImageContent.offsetHeight
          return '+=' + endPin
        },
        animation: clippedImageAnimation,
        scrub: 1,
        pin: true,
        pinSpacing: false,
      })
    })

  }