// @ts-nocheck

import { isMobile } from './isMobile'

import {
  gsap,
  Cubic,
  Linear,
  Power0,
  Power2,
  Power3,
  Power4,
  Flip,
  ScrollTrigger,
} from '/node_modules/gsap/all.js'
import { ContactForm, ContactMap } from '/contact.js'
gsap.config({ nullTargetWarn: false })


export function PageLoad() {
  gsap.set(document.querySelectorAll('.menu-timeline .before-span'), {
    y: 120,
    opacity: 0,
  })

  // Page Navigation Events
  document.querySelectorAll('.preloader-wrap').forEach((element) => {
    element.addEventListener('mouseenter', function () {
      gsap.to('#ball', {
        duration: 0.3,
        borderWidth: '2px',
        scale: 1.4,
        borderColor: 'rgba(255,255,255,0)',
        backgroundColor: 'rgba(255,255,255,0.1)',
      })
      gsap.to('#ball-loader', {
        duration: 0.2,
        borderWidth: '2px',
        top: 2,
        left: 2,
      })
      const ballElement = document.getElementById('ball')
      if (ballElement) {
        ballElement.insertAdjacentHTML(
          'beforeend',
          '<p class="center-first">' + this.dataset.centerline + '</p>',
        )
      }
    })
  })
  document.querySelectorAll('.preloader-wrap').forEach((element) => {
    element.addEventListener('mouseleave', function () {
      gsap.to('#ball', {
        duration: 0.2,
        borderWidth: '4px',
        scale: 0.5,
        borderColor: '#999999',
        backgroundColor: 'transparent',
      })
      gsap.to('#ball-loader', {
        duration: 0.2,
        borderWidth: '4px',
        top: 0,
        left: 0,
      })
      const ball = document.getElementById('ball')
      if (ball) {
        ball.classList.remove('with-blur')
        const ballP = ball.querySelector('p')
        if (ballP)
          ballP.forEach((_element) => _element.parentNode.removeChild(_element))
      }
    })
  })
  document.body.classList.remove('hidden', 'hidden-ball')
  gsap.to(document.getElementById('header-container'), {
    duration: 0.5,
    opacity: 1,
    delay: 0.2,
    ease: Power2.easeOut,
  })
  function initOnFirstLoad() {
    imagesLoaded('body', function () {
      gsap.to('#ball', {
        duration: 0.2,
        borderWidth: '4px',
        scale: 0.5,
        borderColor: '#999999',
        backgroundColor: 'transparent',
      })
      gsap.to('#ball-loader', {
        duration: 0.2,
        borderWidth: '4px',
        top: 0,
        left: 0,
      })
      document
        .querySelectorAll('#ball p')
        .forEach((el) => el.parentNode.removeChild(el))
      const percentageWrapper = document.querySelector('.percentage-wrapper')
      const trackbar = document.querySelector('.trackbar')
      gsap.to(percentageWrapper, {
        duration: 0.7,
        x: trackbar.offsetWidth * 0.5 - percentageWrapper.offsetWidth * 0.5,
        delay: 0.3,
        ease: Power4.easeOut,
      })
      gsap.to(document.querySelectorAll('.percentage'), {
        duration: 0.7,
        opacity: 0,
        y: -100,
        delay: 1,
        ease: Power4.easeInOut,
      })
      gsap.to(document.querySelectorAll('.percentage-intro'), {
        duration: 0.5,
        opacity: 0,
        delay: 0.6,
        ease: Power4.easeInOut,
      })
      gsap.to(document.querySelectorAll('.preloader-intro span'), {
        duration: 0.7,
        opacity: 0,
        xPercent: -101,
        delay: 0.3,
        ease: Power4.easeOut,
      })
      gsap.to(document.querySelectorAll('.preloader-wrap'), {
        duration: 0.7,
        opacity: 0,
        delay: 1.6,
        ease: Power2.easeOut,
      })
      gsap.set(document.querySelectorAll('.preloader-wrap'), {
        visibility: 'hidden',
        delay: 2,
        yPercent: -101,
      })
      setTimeout(function () {
        const ballElement = document.getElementById('ball')
        if (ballElement) {
          ballElement.classList.remove('with-blur')
        }
        gsap.to(
          document.querySelectorAll('.header-middle, #footer-container'),
          {
            duration: 1,
            opacity: 1,
            delay: 0,
            ease: Power2.easeOut,
          },
        )
        if (document.querySelectorAll('.hero-video-wrapper').length > 0) {
          document
            .getElementById('hero-image-wrapper')
            .querySelectorAll('video')
            .forEach(function (video) {
              video.play()
            })
          gsap.to(document.querySelectorAll('.hero-video-wrapper'), {
            duration: 0.2,
            opacity: 1,
            delay: 0,
            ease: Power2.easeOut,
          })
        }
        gsap.to(document.getElementById('main'), {
          duration: 0,
          opacity: 1,
          delay: 0,
          ease: Power2.easeOut,
        })
        if (document.getElementById('hero').classList.contains('has-image')) {
          gsap.set(document.getElementById('hero-bg-image'), {
            scale: 1.1,
            opacity: 0,
          })
          gsap.set(document.querySelectorAll('hero-caption .hero-title span'), {
            y: 120,
            opacity: 0,
          })
          gsap.set(
            document.querySelectorAll('hero-caption .hero-subtitle span'),
            {
              y: 30,
              opacity: 0,
            },
          )
          gsap.to(document.getElementById('#hero-bg-image'), {
            duration: 1,
            scale: 1,
            opacity: 1,
            delay: 0.2,
            ease: Power2.easeOut,
          })
          gsap.to(
            document.querySelectorAll('#hero-caption .caption-timeline span'),
            {
              duration: 0.7,
              y: 0,
              opacity: 1,
              stagger: 0.1,
              delay: 0.7,
              ease: Power3.easeOut,
              onComplete: function () {
                gsap.to(
                  document.querySelectorAll(
                    '.hero-footer-left, .hero-footer-right',
                  ),
                  {
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    delay: 0,
                    ease: Power2.easeOut,
                  },
                )
                gsap.to(
                  document.querySelectorAll('#main-page-content, #page-nav'),
                  {
                    duration: 0.4,
                    opacity: 1,
                    delay: 0,
                    ease: Power2.easeOut,
                  },
                )
              },
            },
          )
        } else {
          gsap.set(
            document.querySelectorAll('#hero-caption .hero-title span'),
            {
              y: 120,
              opacity: 0,
            },
          )
          gsap.set(
            document.querySelectorAll('#hero-caption .hero-subtitle span'),
            {
              y: 30,
              opacity: 0,
            },
          )
          gsap.to(
            document.querySelectorAll('#hero-caption .caption-timeline span'),
            {
              duration: 0.7,
              y: 0,
              opacity: 1,
              stagger: 0.1,
              delay: 0.8,
              ease: Power3.easeOut,
              onComplete: function () {
                gsap.to(document.querySelectorAll('.error-button'), {
                  duration: 0.3,
                  y: 0,
                  opacity: 1,
                  rotation: 0,
                  delay: 0,
                  ease: Power2.easeOut,
                })
              },
            },
          )
          gsap.to(document.querySelectorAll('#main-page-content, #page-nav'), {
            duration: 0.3,
            opacity: 1,
            delay: 1.4,
            ease: Power2.easeOut,
          })
          gsap.to(
            document.querySelectorAll('.hero-footer-left, .hero-footer-right'),
            {
              duration: 0.3,
              y: 0,
              opacity: 1,
              delay: 1.3,
              ease: Power2.easeOut,
              onComplete: function () {
                const heroFooter = document.querySelector(
                  '#hero-footer.has-border',
                )
                if (heroFooter) {
                  heroFooter.classList.add('visible')
                }
              },
            },
          )
        }

        // Fading In Showcase Carousel elements on Finised
        gsap.set(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .slide-inner',
          ),
          {
            opacity: 0,
          },
        )
        gsap.to(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .clapat-slide .slide-inner',
          ),
          {
            duration: 2,
            opacity: 1,
            delay: 0.75,
            ease: Power4.easeOut,
          },
        )
        gsap.set(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .clapat-slide-prev-two .slide-inner',
          ),
          {
            yPercent: 260,
          },
        )
        gsap.to(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .clapat-slide-prev-two .slide-inner',
          ),
          {
            duration: 1.8,
            yPercent: 0,
            delay: 0.6,
            ease: Power4.easeOut,
          },
        )
        gsap.set(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .clapat-slide-prev .slide-inner',
          ),
          {
            yPercent: -210,
          },
        )
        gsap.to(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .clapat-slide-prev .slide-inner',
          ),
          {
            duration: 1.8,
            yPercent: 0,
            delay: 0.65,
            ease: Power4.easeOut,
          },
        )
        gsap.set(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .clapat-slide-active .slide-inner',
          ),
          {
            yPercent: 160,
          },
        )
        gsap.to(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .clapat-slide-active .slide-inner',
          ),
          {
            duration: 1.8,
            yPercent: 0,
            delay: 0.7,
            ease: Power4.easeOut,
            onComplete: function () {
              document.body.classList.remove('disable-scroll')
            },
          },
        )
        gsap.set(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .clapat-slide-next .slide-inner',
          ),
          {
            yPercent: -210,
          },
        )
        gsap.to(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .clapat-slide-next .slide-inner',
          ),
          {
            duration: 1.8,
            yPercent: 0,
            delay: 0.65,
            ease: Power4.easeOut,
          },
        )
        gsap.set(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .clapat-slide-next-two .slide-inner',
          ),
          {
            yPercent: 260,
          },
        )
        gsap.to(
          document.querySelectorAll(
            '.showcase-carousel .clapat-slider .clapat-slide-next-two .slide-inner',
          ),
          {
            duration: 1.8,
            yPercent: 0,
            delay: 0.6,
            ease: Power4.easeOut,
          },
        )

        // Fading In Showcase Slider elements on Finised
        gsap.set(
          document.querySelectorAll(
            '.showcase-slider .clapat-slider .slide-inner',
          ),
          {
            opacity: 0,
          },
        )
        gsap.to(
          document.querySelectorAll(
            '.showcase-slider .clapat-slider .clapat-slide .slide-inner',
          ),
          {
            duration: 1.2,
            opacity: 1,
            scale: 1,
            delay: 0.7,
            ease: Power4.easeOut,
          },
        )
        gsap.set(
          document.querySelectorAll('.showcase-slider .slide-title span'),
          {
            y: 100,
            opacity: 0,
          },
        )
        gsap.to(
          document.querySelectorAll('.showcase-slider .slide-title span'),
          {
            duration: 0.7,
            y: 0,
            opacity: 1,
            delay: 0.7,
            ease: Power4.easeOut,
          },
        )

        // Fading In Showcase Portfolio elements on Finised
        gsap.set(
          document.querySelectorAll('.showcase-portfolio .img-mask.animated'),
          {
            scaleY: 1.1,
            y: 100,
            opacity: 0,
            filter: 'brightness(150%)',
          },
        )
        gsap.to(
          document.querySelectorAll('.showcase-portfolio .img-mask.animated'),
          {
            duration: 0.7,
            scaleY: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            delay: 1.4,
            filter: 'brightness(100%)',
            ease: Power2.easeOut,
          },
        )

        // Fading In Showcase Lists elements on Finised
        gsap.set(
          document.querySelectorAll('.showcase-lists .slide-title span'),
          {
            y: 100,
            opacity: 0,
          },
        )
        if (!isMobile()) {
          gsap.to(
            document.querySelectorAll('.showcase-lists .slide-title span'),
            {
              duration: 0.4,
              y: 0,
              opacity: 1,
              stagger: 0.05,
              delay: 0.5,
              ease: Power3.easeOut,
            },
          )
        } else {
          gsap.to(
            document.querySelectorAll('.showcase-lists .slide-title span'),
            {
              duration: 0.4,
              y: 0,
              opacity: 1,
              stagger: 0.01,
              delay: 0.5,
              ease: Power3.easeOut,
            },
          )
        }

        // Fading In Showcase Gallery elements on Finised
        gsap.set(
          document.querySelectorAll(
            '.showcase-gallery .slide-hero-title span, .showcase-gallery .slide-hero-subtitle span',
          ),
          {
            y: 120,
            opacity: 0,
          },
        )
        gsap.to(
          document.querySelectorAll(
            '.showcase-gallery .slider-fixed-content .caption-timeline span',
          ),
          {
            duration: 0.7,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            delay: 0.9,
            ease: Power3.easeOut,
          },
        )
        gsap.set(
          document.querySelectorAll(
            '.showcase-gallery .clapat-slider .slide-inner',
          ),
          {
            opacity: 0,
          },
        )
        gsap.to(
          document.querySelectorAll(
            '.showcase-gallery .clapat-slider .clapat-slide .slide-inner',
          ),
          {
            duration: 2,
            opacity: 1,
            delay: 0.2,
            ease: Power4.easeOut,
          },
        )
        let gallerySlideClasses = [
          '.clapat-slide-prev-two',
          '.clapat-slide-prev',
          '.clapat-slide-active',
          '.clapat-slide-next',
          '.clapat-slide-next-two',
        ]

        gallerySlideClasses.forEach(function (gallerySlideClass, index) {
          let gallerySlide = document.querySelectorAll(
            '.showcase-gallery .clapat-slider ' +
              gallerySlideClass +
              ' .slide-inner',
          )
          let delay = 0.4 + index * 0.1
          gsap.set(gallerySlide, {
            yPercent: 250,
          })
          gsap.to(gallerySlide, {
            duration: 1.5,
            yPercent: 0,
            delay: delay,
            ease: Power4.easeOut,
          })
        })

        // Fading In Showcase Footer Elements
        gsap.set(
          document.querySelectorAll(
            '#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text',
          ),
          {
            opacity: 0,
          },
        )
        gsap.to(
          document.querySelectorAll(
            '#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text',
          ),
          {
            duration: 0.4,
            opacity: 1,
            delay: 0.8,
            ease: Power3.easeOut,
          },
        )
        let bullets = document.querySelectorAll(
          '.showcase-carousel .clapat-pagination-bullet',
        )
        let initialHeights = Array.from(bullets).map(function (bullet) {
          return bullet.clientHeight + 'px'
        })
        gsap.set(bullets, {
          height: 0,
        })
        gsap.to(bullets, {
          duration: 0.3,
          delay: 1,
          height: function (index, target) {
            return initialHeights[index]
          },
          ease: Power3.easeOut,
          stagger: 0.05,
          onComplete: function () {
            gsap.set(bullets, {
              height: '',
            })
          },
        })
        document.body.classList.add('header-visible')
      }, 800)
    })
  }
  if (!document.body.classList.contains('disable-ajaxload')) {
    let width = 0,
      perfData = window.performance.timing,
      EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
      time = ((EstimatedTime / 100) % 500) * 10

    // Loadbar Animation
    const loadbar = document.querySelector('.loadbar')
    if (loadbar) {
      gsap.to(loadbar, {
        duration: time / 1000,
        // GSAP uses seconds, not milliseconds
        width: width + '%',
        ease: 'linear',
      })
    }

    // Percentage Increment Animation
    const percentElement = document.getElementById('precent')
    const start = 0
    const end = 100
    const duration = time + 0
    function animateValue(element, start, end, duration) {
      const range = end - start
      const increment = end > start ? 1 : -1
      const stepTime = Math.abs(Math.floor(duration / range))
      let current = start
      const timer = setInterval(function () {
        current += increment
        element.textContent = current
        if (current === end) {
          clearInterval(timer)
        }
      }, stepTime)
    }
    if (percentElement) {
      animateValue(percentElement, start, end, duration)
    }

    // Fading Out Loadbar on Finished
    setTimeout(function () {
      initOnFirstLoad()
    }, time)
  }
}
