import { gsap, ScrollTrigger } from '/node_modules/gsap/all'


function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

export function listRotator() {
  gsap.utils.toArray('.list-rotator-wrapper').forEach((listRotatorWrapper) => {
    const listRotatorTitle = listRotatorWrapper.querySelector(
      '.list-rotator-title',
    )
    const listRotatorHeight = listRotatorWrapper.querySelector(
      '.list-rotator-height',
    )
    const listRotatorPin = listRotatorWrapper.querySelector('.list-rotator-pin')
    const listRotator = listRotatorWrapper.querySelector('.list-rotator')
    const listItems = listRotatorWrapper.querySelectorAll('li')
    const totalItems = listItems.length - 1
    const angleIncrement = 180 / totalItems

    if (!isMobile()) {
      listItems.forEach(function (item, index) {
        const rotationAngle = index * angleIncrement
        const fontSize = gsap.getProperty(item, 'fontSize')
        const lineHeight = gsap.getProperty(item, 'lineHeight')
        const translateZ = (parseFloat(fontSize) + parseFloat(lineHeight)) * 1.8

        gsap.set(item, {
          rotationX: -rotationAngle,
          transformOrigin: `center center 0`,
          transform: `rotateX(${-rotationAngle}deg) translateZ(${translateZ}px)`,
          zIndex: totalItems - index,
        })
      })

      function setlistRotatorProperties() {
        gsap.set(listRotatorWrapper, { height: window.innerHeight * 3 })
        gsap.set(listRotatorHeight, { height: window.innerHeight * 4 })
        gsap.set(listRotator, { height: window.innerHeight })
        ScrollTrigger.refresh()
      }

      gsap.set(listRotator, { rotationX: -90 })

      setlistRotatorProperties()

      window.addEventListener('resize', setlistRotatorProperties)

      gsap.to(listRotatorTitle, {
        scrollTrigger: {
          trigger: listRotatorTitle,
          start: function () {
            const startPin = 0
            return 'top +=' + startPin
          },
          end: function () {
            const endPin = window.innerHeight * 2.5
            return '+=' + endPin
          },
          pin: true,
          scrub: true,
          pinSpacing: false,
        },
      })

      gsap.to(listRotatorPin, {
        scrollTrigger: {
          trigger: listRotatorPin,
          start: function () {
            const startPin = 0
            return 'top +=' + startPin
          },
          end: function () {
            const endPin = window.innerHeight * 6
            return '+=' + endPin
          },
          pin: true,
          scrub: true,
          pinSpacing: false,
        },
      })

      gsap.to(listRotator, {
        scrollTrigger: {
          trigger: listRotatorWrapper,
          start: function () {
            const startPin = window.innerHeight * 0.8
            return 'top +=' + startPin
          },
          end: function () {
            const endPin = window.innerHeight * 5.5
            return '+=' + endPin
          },
          scrub: true,
        },
        rotationX: 285,
      })
    }
  })
}
