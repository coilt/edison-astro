import { gsap, Power4 } from '/node_modules/gsap/all'

export function CarouselPin() {
  console.log('CarouselPin loaded')
  gsap.utils
    .toArray('.carousel-shortcode-pin')
    .forEach((carouselShortcodePin) => {
      console.log('Carousel Shortcodes executed')
      const carouselShortcodeThumbs = carouselShortcodePin.querySelector(
        '.carousel-shortcode-thumbs'
      )
      const carouselShortcodeCaption = carouselShortcodePin.querySelector(
        '.carousel-shortcode-caption'
      )
      const carouselShortcodeWrapper = carouselShortcodePin.closest(
        '.carousel-shortcode-wrapper'
      )
      const carouselShortcodeTitleHide = carouselShortcodePin.querySelectorAll(
        '.carousel-shortcode-title-hide span'
      )
      const carouselShortcodeTitleShow = carouselShortcodePin.querySelectorAll(
        '.carousel-shortcode-title-show span'
      )
      const carouselShortcodeCTA = carouselShortcodePin.querySelector(
        '.carousel-shortcode-cta'
      )

      carouselShortcodeTitleHide.forEach((element) => {
        const div = document.createElement('div')
        element.parentNode.insertBefore(div, element)
        div.appendChild(element)
      })

      carouselShortcodeTitleShow.forEach((element) => {
        const div = document.createElement('div')
        element.parentNode.insertBefore(div, element)
        div.appendChild(element)
      })

      const clapatItems = carouselShortcodePin.querySelectorAll(
        '.carousel-shortcode-thumbs .clapat-item'
      )

      gsap.set(clapatItems, {
        yPercent: (index) => {
          return index % 2 === 0 ? -150 : 150
        },
        opacity: 0,
      })

      function setCarouselShortcodeWrapperProperties() {
        gsap.set(carouselShortcodeThumbs, { height: window.innerHeight })
        gsap.set(carouselShortcodeCaption, { height: window.innerHeight })
      }

      setCarouselShortcodeWrapperProperties()
      window.addEventListener('resize', setCarouselShortcodeWrapperProperties)

      const showHideItems = gsap
        .timeline({
          scrollTrigger: {
            trigger: carouselShortcodePin,
            start: 'top top',
            end: '+=700%',
            scrub: 1,
          },
        })
        .to(clapatItems, {
          opacity: 1,
          yPercent: 0,
          stagger: 0.02,
          onUpdate: function () {
            carouselShortcodeThumbs.classList.remove('is_active')
          },
          onComplete: function () {
            carouselShortcodeThumbs.classList.add('is_active')
          },
        })
        .add('clapatItemsPause', '+=0.5')
        .to(
          clapatItems,
          {
            opacity: 0.1,
            yPercent: (index) => {
              return index % 2 === 0 ? -180 : 180
            },
            stagger: 0.02,
            onStart: function () {
              carouselShortcodeThumbs.classList.remove('is_active')
            },
            onReverseComplete: function () {
              carouselShortcodeThumbs.classList.add('is_active')
            },
          },
          'clapatItemsPause'
        )

      const showHideTitle = gsap
        .timeline({
          scrollTrigger: {
            trigger: carouselShortcodePin,
            start: 'top',
            end: '+=600%',
            scrub: 1,
          },
        })
        .to(carouselShortcodeTitleHide, {
          opacity: 0,
          y: -200,
          stagger: 0.04,
        })
        .to(
          carouselShortcodeTitleShow,
          {
            opacity: 1,
            y: 0,
            stagger: -0.02,
          },
          '+=4'
        )
        .to(
          carouselShortcodeCTA,
          {
            opacity: 1,
            scale: 1,
            y: 0,
          },
          '<+=50%'
        )

      gsap.to(carouselShortcodePin, {
        scrollTrigger: {
          trigger: carouselShortcodePin,
          start: function () {
            const startPin = 0
            return 'top +=' + startPin
          },
          end: '+=600%',
          pin: true,
          scrub: true,
        },
      })

      document.querySelector('.trigger-item').on('click', function () {
        document.body.classList.add('load-project-thumb')

        document
          .querySelectorAll('.carousel-shortcode-thumbs .trigger-item')
          .forEach(function (item) {
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

        gsap.to(
          'footer, .carousel-nav-wrapper, .showcase-portfolio.list-grid',
          { duration: 0.5, opacity: 0, ease: Power4.easeInOut }
        )
      })
    })
}
