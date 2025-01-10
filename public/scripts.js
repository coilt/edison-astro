// @ts-nocheck

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
} from '/node_modules/gsap/all'

gsap.registerPlugin(ScrollTrigger)

// import { ScrollEffects } from '/scrollEffects.js'
import { Sliders } from '/sliders.js'
import { FirstLoad } from './firstLoad.js'
import { Shortcodes } from './shortcodes.js'
import { JustifiedGrid } from './justifiedGrid.js'
import { Lightbox } from './lightbox.js'
import { PlayVideo } from './playVideo.js'

import { FitThumbScreenWEBGL } from './fitThumbScreenWEBGL.js'
import '/plugins.js'
import { ContactForm } from '/contact.js'
import { ContactMap } from '/contact.js'
import { FitThumbScreenGSAP } from './FitThumbScreenGSAP.js'
import { Core } from './core.js'

gsap.config({ nullTargetWarn: false })
// import 'https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js'

// Dummy ImagesLoaded
import { ImagesLoaded } from './imagesLoaded.js'

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

function initializeApp() {
  'use strict'

  PageLoad()
  ScrollEffects()
  Sliders()
  FirstLoad()
  PageLoadActions()
  FitThumbScreenGSAP()
  ShowcaseCarousel()
  ShowcaseSlider()
  ShowcasePortfolio()
  ShowcaseLists()
  ShowcaseGallery()
  FitThumbScreenWEBGL()
  Shortcodes()
  Core()
  JustifiedGrid()
  Lightbox()
  ContactForm()
  PlayVideo()
  ContactMap()
  CustomFunction()
}

/*--------------------------------------------------
Function CustomFunction
---------------------------------------------------*/

function CustomFunction() {
  //Add here your custom js code
} // End CustomFunction

/*--------------------------------------------------
	Function Cleanup Before Ajax
---------------------------------------------------*/

function CleanupBeforeAjax() {
  // reset all scroll triggers
  let triggers = ScrollTrigger.getAll()
  triggers.forEach((trigger) => {
    trigger.kill()
  })

  ClapatSlider.instances.forEach((slider) => slider.off())
  ClapatSlider.instances = []
}

/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

function PageLoad() {
  gsap.set(document.querySelectorAll('.menu-timeline .before-span'), {
    y: 120,
    opacity: 0,
  })

  // Page Navigation Events
  document.querySelectorAll('.preloader-wrap').forEach((element) => {
    element.addEventListener('mouseenter', function () {})
  })

  // Remove preloader immediately
  document
    .querySelectorAll('.preloader-wrap')
    .forEach((el) => (el.style.display = 'none'))

  gsap.to(document.getElementById('header-container'), {
    duration: 0.5,
    opacity: 1,
    delay: 0.2,
    ease: Power2.easeOut,
  })

  function initOnFirstLoad() {
    imagesLoaded('body', function () {
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

      gsap.to(document.querySelectorAll('.header-middle, #footer-container'), {
        duration: 1,
        opacity: 1,
        delay: 0,
        ease: Power2.easeOut,
      })

      if (document.querySelectorAll('.hero-video-wrapper').length > 0) {
        const heroImageWrapper = document.getElementById('hero-image-wrapper')
        if (heroImageWrapper) {
          heroImageWrapper.querySelectorAll('video').forEach(function (video) {
            video.play()
          })
        }

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
          { y: 30, opacity: 0 },
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
                { duration: 0.4, opacity: 1, delay: 0, ease: Power2.easeOut },
              )
            },
          },
        )
      } else {
        gsap.set(document.querySelectorAll('#hero-caption .hero-title span'), {
          y: 120,
          opacity: 0,
        })
        gsap.set(
          document.querySelectorAll('#hero-caption .hero-subtitle span'),
          { y: 30, opacity: 0 },
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
        { opacity: 0 },
      )
      gsap.to(
        document.querySelectorAll(
          '.showcase-carousel .clapat-slider .clapat-slide .slide-inner',
        ),
        { duration: 2, opacity: 1, delay: 0.75, ease: Power4.easeOut },
      )

      gsap.set(
        document.querySelectorAll(
          '.showcase-carousel .clapat-slider .clapat-slide-prev-two .slide-inner',
        ),
        { yPercent: 260 },
      )
      gsap.to(
        document.querySelectorAll(
          '.showcase-carousel .clapat-slider .clapat-slide-prev-two .slide-inner',
        ),
        { duration: 1.8, yPercent: 0, delay: 0.6, ease: Power4.easeOut },
      )

      gsap.set(
        document.querySelectorAll(
          '.showcase-carousel .clapat-slider .clapat-slide-prev .slide-inner',
        ),
        { yPercent: -210 },
      )
      gsap.to(
        document.querySelectorAll(
          '.showcase-carousel .clapat-slider .clapat-slide-prev .slide-inner',
        ),
        { duration: 1.8, yPercent: 0, delay: 0.65, ease: Power4.easeOut },
      )

      gsap.set(
        document.querySelectorAll(
          '.showcase-carousel .clapat-slider .clapat-slide-active .slide-inner',
        ),
        { yPercent: 160 },
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
        { yPercent: -210 },
      )
      gsap.to(
        document.querySelectorAll(
          '.showcase-carousel .clapat-slider .clapat-slide-next .slide-inner',
        ),
        { duration: 1.8, yPercent: 0, delay: 0.65, ease: Power4.easeOut },
      )

      gsap.set(
        document.querySelectorAll(
          '.showcase-carousel .clapat-slider .clapat-slide-next-two .slide-inner',
        ),
        { yPercent: 260 },
      )
      gsap.to(
        document.querySelectorAll(
          '.showcase-carousel .clapat-slider .clapat-slide-next-two .slide-inner',
        ),
        { duration: 1.8, yPercent: 0, delay: 0.6, ease: Power4.easeOut },
      )

      // Fading In Showcase Slider elements on Finised
      gsap.set(
        document.querySelectorAll(
          '.showcase-slider .clapat-slider .slide-inner',
        ),
        { opacity: 0 },
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
        { y: 100, opacity: 0 },
      )
      gsap.to(document.querySelectorAll('.showcase-slider .slide-title span'), {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 0.7,
        ease: Power4.easeOut,
      })

      // Fading In Showcase Portfolio elements on Finised
      gsap.set(
        document.querySelectorAll('.showcase-portfolio .img-mask.animated'),
        { scaleY: 1.1, y: 100, opacity: 0, filter: 'brightness(150%)' },
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
      gsap.set(document.querySelectorAll('.showcase-lists .slide-title span'), {
        y: 100,
        opacity: 0,
      })

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
        { y: 120, opacity: 0 },
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
        { opacity: 0 },
      )
      gsap.to(
        document.querySelectorAll(
          '.showcase-gallery .clapat-slider .clapat-slide .slide-inner',
        ),
        { duration: 2, opacity: 1, delay: 0.2, ease: Power4.easeOut },
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
        { opacity: 0 },
      )
      gsap.to(
        document.querySelectorAll(
          '#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text',
        ),
        { duration: 0.4, opacity: 1, delay: 0.8, ease: Power3.easeOut },
      )

      let bullets = document.querySelectorAll(
        '.showcase-carousel .clapat-pagination-bullet',
      )
      let initialHeights = Array.from(bullets).map(function (bullet) {
        return bullet.clientHeight + 'px'
      })

      gsap.set(bullets, { height: 0 })
      gsap.to(bullets, {
        duration: 0.3,
        delay: 1,
        height: function (index, target) {
          return initialHeights[index]
        },
        ease: Power3.easeOut,
        stagger: 0.05,
        onComplete: function () {
          gsap.set(bullets, { height: '' })
        },
      })

      document.body.classList.add('header-visible')
    })
  }

  if (!document.body.classList.contains('disable-ajaxload')) {
    let width = 0,
      perfData = window.performance.timing,
      EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
      time = 0
  }

  initOnFirstLoad()
} // End Page Load

/*--------------------------------------------------
Page Load Actions
---------------------------------------------------*/

export function PageLoadActions() {
  // Default Page Navigation Load Events

  if (!isMobile()) {
    document.querySelectorAll('#page-nav .page-title').forEach((element) => {
      element.addEventListener('mouseenter', function () {
        const currentElement = element
      })
    })
    document.querySelectorAll('#page-nav .page-title').forEach((element) => {
      element.addEventListener('mouseleave', function () {})
    })
  }

  if (!document.body.classList.contains('disable-ajaxload')) {
    document.querySelectorAll('#page-nav .page-title').forEach((element) =>
      element.addEventListener('click', function () {
        document.body.classList.add('show-loader')
        document.querySelector('header').classList.remove('white-header')
        document
          .querySelectorAll('#app')
          .forEach((_element5) => _element5.parentNode.removeChild(_element5))
        document
          .querySelectorAll('.big-title-caption')
          .forEach((_element6) => _element6.parentNode.removeChild(_element6))

        gsap.to('.hero-arrow i', {
          duration: 0.3,
          y: -40,
          opacity: 0,
          delay: 0,
          ease: Power2.easeInOut,
        })
        gsap.to('.page-nav-caption .caption-timeline span', {
          duration: 0.3,
          y: -100,
          opacity: 0,
          delay: 0,
          stagger: 0.05,
          ease: Power2.easeInOut,
        })
        gsap.to(
          document.querySelectorAll('#main-page-content, #hero, footer'),
          {
            duration: 0.3,
            opacity: 0,
          },
        )
      }),
    )
  } else if (
    document.querySelectorAll('body').classList.contains('disable-ajaxload')
  ) {
    document.querySelectorAll('#page-nav .page-title').forEach((_element10) =>
      _element10.addEventListener('click', function () {
        document
          .querySelectorAll('body')
          .forEach((_element11) => _element11.classList.add('load-next-page'))
        document
          .querySelectorAll('body')
          .forEach((_element12) => _element12.classList.add('show-loader'))
        document
          .querySelectorAll('header')
          .forEach((_element13) => _element13.classList.remove('white-header'))
        document
          .querySelectorAll('#app')
          .forEach((_element14) =>
            _element14.parentNode.removeChild(_element14),
          )
        document
          .querySelectorAll('.big-title-caption')
          .forEach((_element15) =>
            _element15.parentNode.removeChild(_element15),
          )

        gsap.to(
          document.querySelectorAll('#main-page-content, #hero, #page-nav'),
          {
            duration: 0.3,
            opacity: 0,
          },
        )
        gsap.to(document.querySelectorAll('footer'), {
          duration: 0.3,
          opacity: 0,
          delay: 0,
          ease: Power2.easeInOut,
        })
      }),
    )
  }

  if (!isMobile()) {
    document
      .querySelectorAll('#project-nav .next-ajax-link-project')
      .forEach((element) => {
        element.addEventListener('mouseenter', function (e) {
          const currentElement = element
        })
      })
  }

  if (!document.body.classList.contains('disable-ajaxload')) {
    const nextAjaxLinkProject = document.querySelector(
      '.next-ajax-link-project',
    )

    if (
      nextAjaxLinkProject &&
      nextAjaxLinkProject.classList.contains('auto-trigger')
    ) {
      if (Array.isArray(window.ReachBottomArr)) {
        window.ReachBottomArr.forEach((element) => {
          element.kill()
        })
      }
    }

    {
      if (
        !(
          typeof window.ReachBottomArr === 'undefined' ||
          window.ReachBottomArr === null
        ) &&
        Array.isArray(window.ReachBottomArr)
      ) {
        window.ReachBottomArr.forEach((element) => {
          element.kill()
        })
      }
      window.ReachBottomArr = new Array()
    }

    const heroImageWrapper = document.querySelector('#hero-image-wrapper')

    if (
      heroImageWrapper &&
      heroImageWrapper.classList.contains('change-header-color')
    ) {
      document
        .querySelectorAll('#hero-footer')
        .forEach((_element27) => _element27.classList.add('white-header'))
    }
    document.querySelectorAll('.next-ajax-link-project').forEach((_element28) =>
      _element28.addEventListener('click', function () {
        document
          .querySelectorAll('body')
          .forEach((_element29) =>
            _element29.classList.add('load-project-thumb'),
          )
        document
          .querySelectorAll('header')
          .forEach((_element30) => _element30.classList.remove('white-header'))
        document
          .querySelectorAll('#app')
          .forEach((_element31) =>
            _element31.parentNode.removeChild(_element31),
          )
        const _start = document.querySelectorAll('.next-project-image-wrapper')
        _start.forEach((_element38) => _element38.classList.add('temporary'))
        const _chain3 = document
          .querySelectorAll(_start)
          .appendTo('body')
          .toArray()
        if (
          !document
            .querySelectorAll('.next-ajax-link-project')
            .classList.contains('auto-trigger')
        ) {
          document
            .querySelectorAll('body')
            .forEach((_element33) => _element33.classList.add('show-loader'))
        }
        gsap.to(document.querySelectorAll('.next-hero-counter span'), {
          duration: 0.3,
          y: -20,
          opacity: 0,
          delay: 0,
          ease: Power2.easeInOut,
        })
        gsap.to(document.querySelectorAll('.next-hero-title span'), {
          duration: 0.3,
          y: -80,
          opacity: 0,
          stagger: 0.05,
          delay: 0,
          ease: Power2.easeInOut,
        })
        gsap.to(document.querySelectorAll('.next-hero-subtitle span'), {
          duration: 0.3,
          y: -40,
          opacity: 0,
          stagger: 0.05,
          delay: 0.1,
          ease: Power2.easeInOut,
        })
        gsap.set(
          document.querySelectorAll(
            '#project-nav.change-header, .next-hero-progress',
          ),
          {
            backgroundColor: 'transparent',
          },
        )
        gsap.to(document.querySelectorAll('.next-hero-progress span'), {
          duration: 0.4,
          width: '100%',
          ease: Power2.easeInOut,
          onComplete: function () {
            gsap.to(document.querySelectorAll('.next-hero-progress'), {
              duration: 0.4,
              width: '0%',
              ease: Power2.easeInOut,
            })
          },
        })

        gsap.to(
          document.querySelectorAll(
            '#main-page-content, #hero, #hero-image-wrapper',
          ),
          {
            duration: 0.3,
            opacity: 0,
          },
        )
        gsap.to(document.querySelectorAll('.next-project-image'), {
          duration: 0.6,
          scale: 1.02,
          clipPath: 'inset(0 0%)',
          opacity: 1,
          ease: Power2.easeInOut,
          onComplete: function () {
            document
              .querySelectorAll('.temporary .next-project-image')
              .forEach((_element37) => _element37.classList.add('visible'))
          },
        })
        gsap.to(document.querySelectorAll('footer, .all-works'), {
          duration: 0.3,
          opacity: 0,
          ease: Power2.easeInOut,
        })
      }),
    )
  } else if (
    document.querySelectorAll('body').classList.contains('disable-ajaxload')
  ) {
    document.querySelectorAll('.next-ajax-link-project').forEach((_element39) =>
      _element39.addEventListener('click', function () {
        const _start2 = document.querySelectorAll('body')
        _start2.forEach((_element46) =>
          _element46.classList.add('load-project-thumb-with-title'),
        )
        _start2.forEach((_element47) => _element47.classList.add('show-loader'))
        document
          .querySelectorAll('header')
          .forEach((_element41) => _element41.classList.remove('white-header'))
        document
          .querySelectorAll('#app')
          .forEach((_element42) =>
            _element42.parentNode.removeChild(_element42),
          )

        gsap.to(
          document.querySelectorAll(
            '#main-page-content, #hero, #hero-image-wrapper, #project-nav',
          ),
          {
            duration: 0.3,
            opacity: 0,
          },
        )
        gsap.to(document.querySelectorAll('.next-project-image'), {
          duration: 0.6,
          scale: 1,
          opacity: 0,
          ease: Power2.easeOut,
        })
        gsap.to(document.querySelectorAll('footer, .all-works'), {
          duration: 0.3,
          opacity: 0,
          ease: Power2.easeInOut,
        })
      }),
    )
  }
} // Page Load Actions

/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

export function LazyLoad() {
  imagesLoaded('body', function () {
    document
      .querySelectorAll('body')
      .forEach((_element) =>
        _element.classList.remove(
          'loading',
          'hidden',
          'scale-up',
          'scale-none',
        ),
      )
    gsap.to(document.querySelectorAll('#header-container, .header-middle'), {
      duration: 1,
      opacity: 1,
      ease: Power2.easeOut,
    })
  })
  gsap.to(document.querySelectorAll('#main'), {
    duration: 0.3,
    opacity: 1,
    delay: 0,
    ease: Power2.easeOut,
  })
  gsap.to(document.querySelectorAll('#footer-container'), {
    duration: 1,
    opacity: 1,
    delay: 0.2,
    ease: Power2.easeOut,
  })
  if (document.querySelectorAll('#hero').classList.contains('has-image')) {
    if (
      document.querySelectorAll('body').classList.contains('load-project-thumb')
    ) {
      gsap.set(document.querySelectorAll('#hero-caption .hero-title span'), {
        y: 120,
        opacity: 0,
      })
      gsap.set(document.querySelectorAll('#hero-caption .hero-subtitle span'), {
        y: 100,
        opacity: 0,
      })
      gsap.to(document.querySelectorAll('#hero-bg-image'), {
        duration: 0,
        scale: 1.02,
        opacity: 1,
        delay: 0,
        ease: Power2.easeOut,
      })
      gsap.to(
        document.querySelectorAll('#hero-caption .caption-timeline span'),
        {
          duration: 0.7,
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.6,
          ease: Power3.easeOut,
          onComplete: function () {
            gsap.to(
              document.querySelectorAll(
                '.hero-footer-left, .hero-footer-right',
              ),
              {
                duration: 0.3,
                y: 0,
                opacity: 1,
                delay: 0,
                ease: Power2.easeOut,
              },
            )
            gsap.to(document.querySelectorAll('#main-page-content'), {
              duration: 0.3,
              opacity: 1,
              delay: 0,
              ease: Power2.easeOut,
            })
          },
        },
      )
    } else if (
      document
        .querySelectorAll('body')
        .classList.contains('load-project-thumb-with-title')
    ) {
      gsap.set(document.querySelectorAll('#hero-caption .hero-title span'), {
        y: 0,
        opacity: 1,
      })
      gsap.set(document.querySelectorAll('#hero-caption .hero-subtitle span'), {
        y: 30,
        opacity: 0,
      })
      gsap.to(document.querySelectorAll('#hero-bg-image'), {
        duration: 0,
        scale: 1.02,
        opacity: 1,
        delay: 0,
        ease: Power2.easeOut,
      })
      gsap.to(
        document.querySelectorAll('#hero-caption .caption-timeline span'),
        {
          duration: 0.7,
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.3,
          ease: Power3.easeOut,
          onComplete: function () {
            gsap.to(
              document.querySelectorAll(
                '.hero-footer-left, .hero-footer-right',
              ),
              {
                duration: 0.3,
                y: 0,
                opacity: 1,
                delay: 0,
                ease: Power2.easeOut,
              },
            )
            gsap.to(document.querySelectorAll('#main-page-content'), {
              duration: 0.3,
              opacity: 1,
              delay: 0,
              ease: Power2.easeOut,
            })
          },
        },
      )
    } else {
      gsap.set(document.querySelectorAll('#hero-bg-image'), {
        scale: 1.1,
        opacity: 0,
      })
      gsap.set(document.querySelectorAll('#hero-caption .hero-title span'), {
        y: 120,
        opacity: 0,
      })
      gsap.set(document.querySelectorAll('#hero-caption .hero-subtitle span'), {
        y: 30,
        opacity: 0,
      })
      imagesLoaded('#hero-bg-image', function () {
        gsap.to(document.querySelectorAll('#hero-bg-image'), {
          duration: 0.7,
          scale: 1,
          opacity: 1,
          delay: 0,
          ease: Power2.easeOut,
        })
      })
      gsap.to(
        document.querySelectorAll('#hero-caption .caption-timeline span'),
        {
          duration: 0.7,
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.3,
          ease: Power3.easeOut,
          onComplete: function () {
            gsap.to(
              document.querySelectorAll(
                '.hero-footer-left, .hero-footer-right',
              ),
              {
                duration: 0.3,
                y: 0,
                opacity: 1,
                delay: 0,
                ease: Power2.easeOut,
              },
            )
            gsap.to(
              document.querySelectorAll('#main-page-content, #page-nav'),
              {
                duration: 0.3,
                opacity: 1,
                delay: 0,
                ease: Power2.easeOut,
              },
            )
          },
        },
      )
    }
  } else {
    gsap.set(document.querySelectorAll('#hero-caption .hero-title span'), {
      y: 120,
      opacity: 0,
    })
    gsap.set(document.querySelectorAll('#hero-caption .hero-subtitle span'), {
      y: 30,
      opacity: 0,
    })
    gsap.to(document.querySelectorAll('#hero-caption .caption-timeline span'), {
      duration: 0.7,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      delay: 0.3,
      ease: Power3.easeOut,
      onComplete: function () {
        gsap.to(document.querySelectorAll('.post-article-wrap'), {
          duration: 0.3,
          y: 0,
          opacity: 1,
          ease: Power2.easeOut,
        })
        gsap.to(document.querySelectorAll('.error-button'), {
          duration: 0.3,
          y: 0,
          opacity: 1,
          rotation: 0,
          delay: 0,
          ease: Power2.easeOut,
        })
      },
    })
    gsap.to(
      document.querySelectorAll('.hero-footer-left, .hero-footer-right'),
      {
        duration: 0.3,
        y: 0,
        opacity: 1,
        delay: 0.7,
        ease: Power2.easeOut,
        onComplete: function () {
          document
            .querySelectorAll('#hero-footer.has-border')
            .forEach((_element2) => _element2.classList.add('visible'))
        },
      },
    )
    gsap.to(document.querySelectorAll('#main-page-content, #page-nav'), {
      duration: 0.3,
      opacity: 1,
      delay: 0.8,
      ease: Power2.easeOut,
    })
  }

  // Fading In Showcase Lists elements on Finised
  gsap.set(document.querySelectorAll('.showcase-lists .slide-title span'), {
    y: 100,
    opacity: 0,
  })
  if (!isMobile()) {
    gsap.to(document.querySelectorAll('.showcase-lists .slide-title span'), {
      duration: 0.4,
      y: 0,
      opacity: 1,
      stagger: 0.05,
      delay: 0.1,
      ease: Power3.easeOut,
    })
  } else {
    gsap.to(document.querySelectorAll('.showcase-lists .slide-title span'), {
      duration: 0.4,
      y: 0,
      opacity: 1,
      stagger: 0.01,
      delay: 0.1,
      ease: Power3.easeOut,
    })
  }
  if (document.querySelectorAll('.load-project-thumb').length > 0) {
    imagesLoaded('#hero-image-wrapper', function () {
      if (isMobile()) {
        const _start = document.querySelectorAll('#hero-image-wrapper')
        const _chain = [].concat(
          ..._start.map((_element4) => _element4.querySelectorAll('video')),
        )
        const _chain2 = document
          .querySelectorAll(_chain)
          .each(function () {
            const _start2 = document.querySelectorAll(this)
            const _chain3 = document.querySelectorAll(_start2).get(0).toArray()
            const _chain4 = document.querySelectorAll(_chain3).play().toArray()
          })
          .toArray()
      }
      setTimeout(function () {
        document
          .querySelectorAll('#app.active')
          .forEach((_element5) => _element5.parentNode.removeChild(_element5))
        document
          .querySelectorAll('.big-title-caption')
          .forEach((_element6) => _element6.parentNode.removeChild(_element6))
        document
          .querySelectorAll('.thumb-wrapper')
          .forEach((_element7) => _element7.parentNode.removeChild(_element7))
        gsap.to(
          document.querySelectorAll('.next-project-image-wrapper.temporary'),
          {
            duration: 0.1,
            opacity: 0,
            ease: Power2.easeOut,
            onComplete: function () {
              document
                .querySelectorAll('.next-project-image-wrapper.temporary')
                .forEach((_element8) =>
                  _element8.parentNode.removeChild(_element8),
                )
              document
                .querySelectorAll('.temporary-hero')
                .forEach((_element9) =>
                  _element9.parentNode.removeChild(_element9),
                )
            },
          },
        )
        if (!isMobile()) {
          const _start3 = document.querySelectorAll('#hero-image-wrapper')
          const _chain5 = [].concat(
            ..._start3.map((_element11) =>
              _element11.querySelectorAll('video'),
            ),
          )
          const _chain6 = document
            .querySelectorAll(_chain5)
            .each(function () {
              const _start4 = document.querySelectorAll(this)
              const _chain7 = document
                .querySelectorAll(_start4)
                .get(0)
                .toArray()
              const _chain8 = document
                .querySelectorAll(_chain7)
                .play()
                .toArray()
            })
            .toArray()
          gsap.to(document.querySelectorAll('.hero-video-wrapper'), {
            duration: 0.2,
            opacity: 1,
            delay: 0.1,
            ease: Power2.easeOut,
          })
        } else if (isMobile()) {
          gsap.to(document.querySelectorAll('.hero-video-wrapper'), {
            duration: 0.2,
            opacity: 1,
            delay: 0.5,
            ease: Power2.easeOut,
          })
        }
      }, 450)
    })
  } else if (
    document.querySelectorAll('.load-project-thumb-with-title').length > 0
  ) {
    imagesLoaded('#hero-image-wrapper', function () {
      if (isMobile()) {
        const _start5 = document.querySelectorAll('#hero-image-wrapper')
        const _chain9 = [].concat(
          ..._start5.map((_element13) => _element13.querySelectorAll('video')),
        )
        const _chain10 = document
          .querySelectorAll(_chain9)
          .each(function () {
            const _start6 = document.querySelectorAll(this)
            const _chain11 = document.querySelectorAll(_start6).get(0).toArray()
            const _chain12 = document
              .querySelectorAll(_chain11)
              .play()
              .toArray()
          })
          .toArray()
      }
      setTimeout(function () {
        document
          .querySelectorAll('#app.active')
          .forEach((_element14) =>
            _element14.parentNode.removeChild(_element14),
          )
        document
          .querySelectorAll('.thumb-wrapper')
          .forEach((_element15) =>
            _element15.parentNode.removeChild(_element15),
          )
        document
          .querySelectorAll('#canvas-slider.active')
          .forEach((_element16) =>
            _element16.parentNode.removeChild(_element16),
          )
        gsap.to(
          document.querySelectorAll('.next-project-image-wrapper.temporary'),
          {
            duration: 0.1,
            opacity: 0,
            ease: Power2.easeOut,
            onComplete: function () {
              document
                .querySelectorAll('.next-project-image-wrapper.temporary')
                .forEach((_element17) =>
                  _element17.parentNode.removeChild(_element17),
                )
              document
                .querySelectorAll('.temporary-hero')
                .forEach((_element18) =>
                  _element18.parentNode.removeChild(_element18),
                )
            },
          },
        )
        if (!isMobile()) {
          const _start7 = document.querySelectorAll('#hero-image-wrapper')
          const _chain13 = [].concat(
            ..._start7.map((_element20) =>
              _element20.querySelectorAll('video'),
            ),
          )
          const _chain14 = document
            .querySelectorAll(_chain13)
            .each(function () {
              const _start8 = document.querySelectorAll(this)
              const _chain15 = document
                .querySelectorAll(_start8)
                .get(0)
                .toArray()
              const _chain16 = document
                .querySelectorAll(_chain15)
                .play()
                .toArray()
            })
            .toArray()
          gsap.to(document.querySelectorAll('.hero-video-wrapper'), {
            duration: 0.2,
            opacity: 1,
            delay: 0.1,
            ease: Power2.easeOut,
          })
        } else if (isMobile()) {
          gsap.to(document.querySelectorAll('.hero-video-wrapper'), {
            duration: 0.2,
            opacity: 1,
            delay: 0.5,
            ease: Power2.easeOut,
          })
        }
        const _start9 = document.querySelectorAll('body')
        _start9.forEach((_element22) =>
          _element22.classList.remove('load-project-thumb-with-title'),
        )
        _start9.forEach((_element23) =>
          _element23.classList.remove('show-loader'),
        )
      }, 200)
    })
  } else {
    imagesLoaded('#hero-image-wrapper', function () {
      const _start10 = document.querySelectorAll('#hero-image-wrapper')
      const _chain17 = [].concat(
        ..._start10.map((_element29) => _element29.querySelectorAll('video')),
      )
      const _chain18 = document
        .querySelectorAll(_chain17)
        .each(function () {
          const _start11 = document.querySelectorAll(this)
          const _chain19 = document.querySelectorAll(_start11).get(0).toArray()
          const _chain20 = document.querySelectorAll(_chain19).play().toArray()
        })
        .toArray()
      setTimeout(function () {
        document
          .querySelectorAll('#app.active')
          .forEach((_element25) =>
            _element25.parentNode.removeChild(_element25),
          )
        document
          .querySelectorAll('#canvas-slider.active')
          .forEach((_element26) =>
            _element26.parentNode.removeChild(_element26),
          )
        gsap.to(
          document.querySelectorAll('.next-project-image-wrapper.temporary'),
          {
            duration: 0.1,
            opacity: 0,
            ease: Power2.easeOut,
            onComplete: function () {
              document
                .querySelectorAll('.next-project-image-wrapper.temporary')
                .forEach((_element27) =>
                  _element27.parentNode.removeChild(_element27),
                )
              document
                .querySelectorAll('.temporary-hero')
                .forEach((_element28) =>
                  _element28.parentNode.removeChild(_element28),
                )
            },
          },
        )
      }, 500)
    })
  }
  setTimeout(function () {
    document
      .querySelectorAll('header')
      .forEach((_element30) => _element30.classList.remove('white-header'))
    document
      .querySelectorAll('body')
      .forEach((_element31) =>
        _element31.classList.remove(
          'load-project-thumb',
          'load-project-thumb-with-title',
          'load-next-page',
          'grid-open',
        ),
      )
    setTimeout(function () {
      imagesLoaded('body', function () {
        document
          .querySelectorAll('body')
          .forEach((_element32) =>
            _element32.classList.remove('show-loader', 'disable-scroll'),
          )
      })
    }, 300)
  }, 800)
} // End Lazy Load

/*--------------------------------------------------
Function Showcase Carousel
---------------------------------------------------*/

export function ShowcaseCarousel() {
  if (document.querySelectorAll('.showcase-carousel').length > 0) {
    document
      .querySelectorAll('body')
      .forEach((_element) => _element.classList.add('disable-scroll'))
    document
      .querySelectorAll('footer')
      .forEach((_element2) => _element2.classList.add('showcase-footer'))
    gsap.set(
      document.querySelectorAll(
        '.showcase-carousel .clapat-slider .slide-inner',
      ),
      {
        opacity: 0,
      },
    )
    gsap.set(
      document.querySelectorAll(
        '#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text',
      ),
      {
        opacity: 0,
      },
    )
    slider = new ClapatSlider('.showcase-carousel', {
      direction: 'horizontal',
      snap: false,
      navigation: {
        nextEl: '.cp-button-next',
        prevEl: '.cp-button-prev',
      },
      parallax: [
        {
          element: '.section-image',
          margin: -20,
        },
      ],
      on: {
        init: function () {
          if (
            document.querySelectorAll('body').classList.contains('show-loader')
          ) {
            imagesLoaded('body', function () {
              gsap.to(
                document.querySelectorAll(
                  '.showcase-carousel .clapat-slider .clapat-slide .slide-inner',
                ),
                {
                  duration: 1.2,
                  opacity: 1,
                  delay: 0.2,
                  ease: Power4.easeOut,
                },
              )
              gsap.set(
                document.querySelectorAll(
                  '.showcase-carousel .clapat-slider .clapat-slide-prev-two .slide-inner',
                ),
                {
                  yPercent: 70,
                },
              )
              gsap.to(
                document.querySelectorAll(
                  '.showcase-carousel .clapat-slider .clapat-slide-prev-two .slide-inner',
                ),
                {
                  duration: 1.2,
                  yPercent: 0,
                  delay: 0.1,
                  ease: Power4.easeOut,
                },
              )
              gsap.set(
                document.querySelectorAll(
                  '.showcase-carousel .clapat-slider .clapat-slide-prev .slide-inner',
                ),
                {
                  yPercent: -70,
                },
              )
              gsap.to(
                document.querySelectorAll(
                  '.showcase-carousel .clapat-slider .clapat-slide-prev .slide-inner',
                ),
                {
                  duration: 1.2,
                  yPercent: 0,
                  delay: 0.15,
                  ease: Power4.easeOut,
                },
              )
              gsap.set(
                document.querySelectorAll(
                  '.showcase-carousel .clapat-slider .clapat-slide-active .slide-inner',
                ),
                {
                  yPercent: 70,
                },
              )
              gsap.to(
                document.querySelectorAll(
                  '.showcase-carousel .clapat-slider .clapat-slide-active .slide-inner',
                ),
                {
                  duration: 1.2,
                  yPercent: 0,
                  delay: 0.2,
                  ease: Power4.easeOut,
                  onComplete: function () {
                    document
                      .querySelectorAll('body')
                      .forEach((_element3) =>
                        _element3.classList.remove('', 'disable-scroll'),
                      )
                  },
                },
              )
              gsap.set(
                document.querySelectorAll(
                  '.showcase-carousel .clapat-slider .clapat-slide-next .slide-inner',
                ),
                {
                  yPercent: -70,
                },
              )
              gsap.to(
                document.querySelectorAll(
                  '.showcase-carousel .clapat-slider .clapat-slide-next .slide-inner',
                ),
                {
                  duration: 1.2,
                  yPercent: 0,
                  delay: 0.15,
                  ease: Power4.easeOut,
                },
              )
              gsap.set(
                document.querySelectorAll(
                  '.showcase-carousel .clapat-slider .clapat-slide-next-two .slide-inner',
                ),
                {
                  yPercent: 70,
                },
              )
              gsap.to(
                document.querySelectorAll(
                  '.showcase-carousel .clapat-slider .clapat-slide-next-two .slide-inner',
                ),
                {
                  duration: 1.2,
                  yPercent: 0,
                  delay: 0.1,
                  ease: Power4.easeOut,
                },
              )
              gsap.to(
                document.querySelectorAll(
                  '#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text',
                ),
                {
                  duration: 0.5,
                  opacity: 1,
                  delay: 0.4,
                  ease: Power3.easeOut,
                },
              )
              var bullets = document.querySelectorAll(
                '.showcase-carousel .clapat-pagination-bullet',
              )
              var initialHeights = Array.from(bullets).map(function (bullet) {
                return bullet.clientHeight + 'px'
              })
              gsap.set(bullets, {
                height: 0,
              })
              gsap.to(bullets, {
                duration: 0.3,
                delay: 0.3,
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
            })
          }
        },
      },
    })
    slider.tl
      .fromTo(
        '.progress-info-fill',
        {
          backgroundSize: '0% 100%',
        },
        {
          backgroundSize: '100% 100%',
        },
        0,
      )
      .fromTo(
        '.progress-info-fill-2',
        {
          backgroundSize: '100% 100%',
        },
        {
          backgroundSize: '0% 100%',
          duration: 0.3,
          ease: 'power3',
        },
        0,
      )
    document.querySelectorAll('.carousel-prev').forEach((_element4) =>
      _element4.addEventListener('click', function () {
        if (window.rotateElement && window.rotateElement.isActive()) {
          return
        } else {
          window.rotateElement = gsap.to(
            [].concat(
              ...document
                .querySelectorAll(this)
                .map((_element5) => _element5.querySelectorAll('i')),
            ),
            {
              duration: 0.3,
              rotate: '-= 180',
            },
          )
        }
      }),
    )
    document.querySelectorAll('.carousel-next').forEach((_element6) =>
      _element6.addEventListener('click', function () {
        if (window.rotateElement && window.rotateElement.isActive()) {
          return
        } else {
          window.rotateElement = gsap.to(
            [].concat(
              ...document
                .querySelectorAll(this)
                .map((_element7) => _element7.querySelectorAll('i')),
            ),
            {
              duration: 0.3,
              rotate: '+= 90',
            },
          )
        }
      }),
    )
    class Item {
      constructor(DOM_el) {
        // DOM elements
        this.DOM = {
          // main element (.item)
          el: null,
          // imageWrap (.item__image-wrap)
          imageWrap: null,
          // imageCaption
          imageCaption: null,
          // image (.item__image)
          image: null,
          // imageInner (.item__image > .item__image-inner)
          imageInner: null,
        }
        this.DOM.el = DOM_el
        this.DOM.imageWrap = this.DOM.el.querySelector('.slide-moving')
        if (this.DOM.imageWrap != null) {
          this.DOM.imageCaption =
            this.DOM.imageWrap.querySelector('.slide-caption')
        }
        this.DOM.image = this.DOM.el.querySelector('.trigger-item')
        if (this.DOM.image != null) {
          this.DOM.imageInner = this.DOM.image.querySelector('.section-image')
        }
      }
    }

    // Placeholder for the grid items (.item__image). We'll use the gsap FLIP plugin to move the "".item .item__image" inside the grid element
    const grid = document.querySelector('.carousel-thumbs-wrapper')
    const triggeredImage = document.querySelector('.carousel-zoom-wrapper')
    let animateTitle = gsap.timeline()
    const showGrid = () => {
      document.body.classList.add('grid-open', 'disable-scroll')
      gsap.to(
        document.querySelectorAll(
          'footer .link-text, .clapat-pagination, .progress-info',
        ),
        {
          duration: 0.3,
          opacity: 0,
          y: 30,
          stagger: -0.05,
          ease: Power2.easeInOut,
        },
      )

      // get the DOM elements that we'll work with
      const DOM = getDOMElements()
      const allImages = DOM.grid.map((element) => {
        element.item.DOM.image.setAttribute(
          'data-slide-index',
          element.item_index,
        )
        return element.item.DOM.image
      })
      const allImagesInner = DOM.grid.map(
        (element) => element.item.DOM.imageInner,
      )
      const currentImage = DOM.currentItem.DOM.image
      const currentImageInner = DOM.currentItem.DOM.imageInner
      const currentImageCaption = DOM.currentItem.DOM.imageCaption

      // Use gsap flip for the animation
      // save the current state of the images
      const flipstate = Flip.getState([allImages])
      const flipstate1 = Flip.getState([currentImage])
      gsap.set(currentImage.closest('.clapat-slide'), {
        zIndex: 0,
      })

      // put them inside the .grid element
      grid.append(...allImages)
      triggeredImage.append(currentImage)
      triggeredImage.append(currentImageCaption)

      // Flip it
      const _chain = document
        .querySelectorAll(Flip)
        .from(flipstate, {
          duration: 0.7,
          stagger: 0.05,
          ease: 'power3.inOut',
          absolute: true,
        })
        .toArray()
      const _chain2 = document
        .querySelectorAll(_chain)
        .to(
          currentImageInner,
          {
            duration: 0.7,
            ease: 'power3.inOut',
            x: 0,
            onComplete: () => {
              gsap.set(currentImageInner, {
                clearProps: 'rotation, x, y',
              })
              document.body.classList.add('enable-trigger')
            },
          },
          0,
        )
        .toArray()
      Flip.from(flipstate1, {
        duration: 0.7,
        ease: 'power3.inOut',
        absolute: true,
      })
      animateTitle.set('.showcase-carousel .slide-caption span', {
        y: 120,
        opacity: 0,
      })
      animateTitle.to(
        '.showcase-carousel .carousel-zoom-wrapper .slide-caption span',
        {
          duration: 0.5,
          y: 0,
          opacity: 1,
          delay: 0.4,
          stagger: 0.03,
          ease: Power2.easeOut,
        },
      )
    }
    const hideGrid = () => {
      gsap.to(
        document.querySelectorAll(
          '.showcase-carousel .carousel-zoom-wrapper .slide-caption',
        ),
        {
          duration: 0.5,
          opacity: 0,
          delay: 0.1,
          ease: Power2.easeOut,
        },
      )
      animateTitle.to(
        '.showcase-carousel .carousel-zoom-wrapper .slide-caption span',
        {
          duration: 0.5,
          y: -100,
          opacity: 0,
          ease: Power2.easeInOut,
        },
      )
      document.body.classList.remove('grid-open')

      // get the DOM elements that we'll work with
      const DOM = getDOMElements()
      const allImages = document.querySelectorAll(
        '.carousel-thumbs-wrapper .trigger-item',
      )
      //const allImagesInner = document.querySelectorAll('.carousel-thumbs-wrapper .trigger-item .section-image');
      const currentImage = document.querySelector(
        '.carousel-zoom-wrapper .trigger-item',
      )
      const currentImageCaption = document.querySelector(
        '.carousel-zoom-wrapper .slide-caption',
      )
      const currentImageInner = document.querySelector(
        '.carousel-zoom-wrapper .trigger-item .section-image',
      )
      const flipstate = Flip.getState([
        allImages /*allImagesInner*/,
        ,
        currentImage /*currentImageInner*/,
      ])
      allImages.forEach((image) => {
        let index = image.getAttribute('data-slide-index')
        let element = DOM.items[index]
        image.removeAttribute('data-slide-index')
        element.DOM.imageWrap.appendChild(image)
      })
      currentImageInner.classList.add('ease-transform')
      DOM.currentItem.DOM.imageWrap.appendChild(currentImage)

      // Remove all the elements from the grid and current triggered image divs
      const liveGrid = document.querySelector('.carousel-thumbs-wrapper')
      const liveTriggeredImage = document.querySelector(
        '.carousel-zoom-wrapper',
      )
      while (liveGrid.firstChild) {
        liveGrid.removeChild(liveGrid.firstChild)
      }
      Flip.from(flipstate, {
        duration: 0.7,
        stagger: 0.02,
        ease: 'power3.inOut',
        onComplete: function () {
          document.body.classList.remove('disable-scroll', 'enable-trigger')
          const triggeredItem = document.querySelector(
            '.clapat-slide.triggered-item',
          )
          if (triggeredItem != null) {
            triggeredItem.classList.remove('triggered-item')
          }
          const clapatSlides = document.querySelectorAll('.clapat-slide')
          clapatSlides.forEach((slide) => {
            slide.style.zIndex = ''
          })
          currentImageInner.classList.remove('ease-transform')
          DOM.currentItem.DOM.imageWrap.appendChild(currentImageCaption)
          gsap.set(
            document.querySelectorAll('.showcase-carousel .slide-caption'),
            {
              clearProps: 'opacity',
            },
          )
        },
      })
      gsap.to(
        document.querySelectorAll(
          'footer .link-text, .clapat-pagination, .progress-info',
        ),
        {
          duration: 0.3,
          opacity: 1,
          y: 0,
          stagger: 0.05,
          delay: 0.4,
          ease: Power2.easeInOut,
        },
      )
    }

    // Returns some DOM elements that are needed for showing/hiding the grid
    const getDOMElements = () => {
      // Item instances (slides)
      const items = []
      ;[...document.querySelectorAll('.clapat-slide')].forEach((item) => {
        items.push(new Item(item))
      })

      // Cloned items
      const itemsCloned = []
      ;[...document.querySelectorAll('.clapat-slide-clone')].forEach((item) => {
        itemsCloned.push(new Item(item))
      })
      let firstVisibleIndex = -1
      let direction = slider.opts.direction
      for (let i = 0; i < items.length; i++) {
        let item = items[i]
        let bounding = item.DOM.el.getBoundingClientRect()
        if (direction == 'vertical') {
          start = bounding.top
          end = bounding.bottom
        } else {
          start = bounding.left
          end = bounding.right
        }
        if (start <= 0 && end > 0) {
          firstVisibleIndex = i
          break
        }
      }
      const gridItems = []
      let currentIndex = -1
      if (direction == 'vertical') {
        let selectedItems = 0
        // in case of the vertical direction cloned items are reverted, last one becomes first
        if (firstVisibleIndex >= itemsCloned.length) {
          // the first visible index is a clone, therefore iterate back to the first clone
          for (
            index = firstVisibleIndex;
            index >= itemsCloned.length;
            index--
          ) {
            let item = items[index]
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item,
              })
            } else {
              currentIndex = index
            }
            selectedItems++
          }
          // and then from the beginning the rest of the clones
          for (index = 0; selectedItems < itemsCloned.length; index++) {
            let item = items[index]
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item,
              })
            } else {
              currentIndex = index
            }
            selectedItems++
          }
        } else {
          // the first visible index is not a clone, therefore iterate from the beginning of the items
          for (index = firstVisibleIndex; index < itemsCloned.length; index++) {
            let item = items[index]
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item,
              })
            } else {
              currentIndex = index
            }
            selectedItems++
          }
          // and then from the end of the clones
          for (
            index = items.length - 1;
            selectedItems < itemsCloned.length;
            index--
          ) {
            let item = items[index]
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item,
              })
            } else {
              currentIndex = index
            }
            selectedItems++
          }
        }
      } else {
        let iterator = 0
        while (iterator < itemsCloned.length) {
          let index = gsap.utils.wrap(
            0,
            items.length,
            firstVisibleIndex + iterator,
          )
          let item = items[index]
          if (!item.DOM.el.classList.contains('triggered-item')) {
            gridItems.push({
              item_index: index,
              item: item,
            })
          } else {
            currentIndex = index
          }
          iterator++
        }
      }
      return {
        items: items,
        grid: gridItems,
        currentItem: new Item(
          document.querySelector('.clapat-slide.triggered-item'),
        ),
        currentIndex: currentIndex,
      }
    }
    let bGridSwiped = false
    // Initialize the events
    const initEvents = () => {
      const items = document.querySelectorAll('.slide-inner')
      items.forEach((triggerItem) => {
        triggerItem.addEventListener('click', (event) => {
          if (document.querySelectorAll('.showcase-carousel').length > 0) {
            event.currentTarget
              .closest('.clapat-slide')
              .classList.add('triggered-item')
            showGrid()
          }
        })
      })
      window.addEventListener('wheel', (event) => {
        if (
          document.body.classList.contains('grid-open') &&
          document.querySelectorAll('.showcase-carousel').length > 0
        ) {
          hideGrid()
        }
      })
      window.addEventListener('touchmove', (event) => {
        if (
          document.body.classList.contains('grid-open') &&
          document.querySelectorAll('.showcase-carousel').length > 0
        ) {
          bGridSwiped = true
        }
      })
      window.addEventListener('touchcancel', (event) => {
        if (
          document.body.classList.contains('grid-open')(
            document.querySelectorAll('.showcase-carousel').length > 0,
          )
        ) {
          bGridSwiped = false
        }
      })
      window.addEventListener('touchend', (event) => {
        if (
          document.body.classList.contains('grid-open') &&
          bGridSwiped &&
          document.querySelectorAll('.showcase-carousel').length > 0
        ) {
          bGridSwiped = false
          hideGrid()
        }
      })
      const closeGrid = document.querySelector('.carousel-close-thumbs')
      if (closeGrid != null) {
        closeGrid.addEventListener('click', (event) => {
          if (
            document.body.classList.contains('grid-open') &&
            document.querySelectorAll('.showcase-carousel').length > 0
          ) {
            hideGrid()
          }
        })
      }
    }
    const previewModeEnabled = document.querySelector('.preview-mode-enabled')
    if (previewModeEnabled) {
      initEvents()
    }
    if (!isMobile()) {
      var dragWrapper = document.querySelectorAll('.clapat-slider')
      dragWrapper.forEach((_element10) =>
        _element10.addEventListener('mousedown', function (evt) {
          dragWrapper.forEach((_element11) =>
            _element11.addEventListener(
              'mouseup mousemove',
              function handler(evt) {
                if (evt.type === 'mouseup') {
                  document
                    .querySelectorAll('body')
                    .forEach((_element17) =>
                      _element17.classList.add('scale-drag-x'),
                    )
                }
                dragWrapper.off('mouseup mousemove', handler)
              },
            ),
          )
        }),
      )
      document.querySelectorAll('.clapat-slider').forEach((_element22) =>
        _element22.addEventListener('mouseup touchend', function () {
          document
            .querySelectorAll('body')
            .forEach((_element23) =>
              _element23.classList.remove('scale-drag-x'),
            )
        }),
      )
      document.querySelectorAll('body').forEach((_element24) =>
        _element24.addEventListener('mouseleave', function () {
          document
            .querySelectorAll('body')
            .forEach((_element25) =>
              _element25.classList.remove('scale-drag-x'),
            )
        }),
      )
      const _start = document.querySelectorAll(
        '.showcase-carousel.preview-mode-enabled .clapat-slide .slide-inner',
      )
      _start.forEach((_element50) =>
        _element50.addEventListener('mouseenter', function () {
          if (
            !document
              .querySelectorAll('body')
              .classList.contains('scale-drag-x')
          ) {
          }
        }),
      )
      _start.forEach((_element51) =>
        _element51.addEventListener('mouseleave', function () {
          if (
            !document
              .querySelectorAll('body')
              .classList.contains('scale-drag-x')
          ) {
            const _start4 = document.querySelectorAll(this)
            const _chain7 = [].concat(
              ..._start4.map((_element34) =>
                _element34.querySelectorAll('video'),
              ),
            )
            const _chain8 = document
              .querySelectorAll(_chain7)
              .each(function () {
                const _start5 = document.querySelectorAll(this)
                const _chain9 = document
                  .querySelectorAll(_start5)
                  .get(0)
                  .toArray()
                const _chain10 = document
                  .querySelectorAll(_chain9)
                  .pause()
                  .toArray()
              })
              .toArray()
          }
        }),
      )
      const triggerItems = document.querySelectorAll('.trigger-item')

      triggerItems.forEach((item) => {
        item.addEventListener('mouseenter', function () {
          if (!document.body.classList.contains('scale-drag-x')) {
            const videos = this.querySelectorAll('video')
            videos.forEach((video) => video.play())
          }
        })

        item.addEventListener('mouseleave', function () {
          if (!document.body.classList.contains('scale-drag-x')) {
            // Add mouseleave functionality here if needed
          }
        })
      })

      document
        .querySelectorAll('.showcase-carousel .clapat-slide .slide-inner')
        .forEach((_element43) =>
          _element43.addEventListener('mouseenter', function () {
            gsap.to(
              [].concat(
                ...document
                  .querySelectorAll(this)
                  .map((_element44) =>
                    _element44.querySelectorAll('.slide-caption'),
                  ),
              ),
              {
                duration: 0.2,
                opacity: 1,
                ease: Power2.easeOut,
              },
            )
            gsap.set(
              [].concat(
                ...document
                  .querySelectorAll(this)
                  .map((_element45) =>
                    _element45.querySelectorAll('.slide-title span'),
                  ),
              ),
              {
                y: 40,
                opacity: 0,
              },
            )
            gsap.to(
              [].concat(
                ...document
                  .querySelectorAll(this)
                  .map((_element46) =>
                    _element46.querySelectorAll('.slide-title span'),
                  ),
              ),
              {
                duration: 0.5,
                y: 0,
                opacity: 1,
                ease: Power2.easeOut,
              },
            )
          }),
        )
      document
        .querySelectorAll('.showcase-carousel .clapat-slide .slide-inner')
        .forEach((_element47) =>
          _element47.addEventListener('mouseleave', function () {
            gsap.to(
              [].concat(
                ...document
                  .querySelectorAll(this)
                  .map((_element48) =>
                    _element48.querySelectorAll('.slide-caption'),
                  ),
              ),
              {
                duration: 0.5,
                opacity: 0,
                delay: 0.1,
                ease: Power2.easeOut,
              },
            )
            gsap.to(
              [].concat(
                ...document
                  .querySelectorAll(this)
                  .map((_element49) =>
                    _element49.querySelectorAll('.slide-title span'),
                  ),
              ),
              {
                duration: 0.5,
                y: -60,
                opacity: 0,
                ease: Power2.easeOut,
              },
            )
          }),
        )
    }
    document.querySelectorAll('.trigger-item').forEach((_element54) =>
      _element54.addEventListener('click', function () {
        let trigger_item = document.querySelectorAll(this)
        if (
          document
            .querySelectorAll('.showcase-carousel')
            .classList.contains('preview-mode-enabled')
        ) {
          document
            .querySelectorAll('body')
            .forEach((_element55) =>
              _element55.classList.add('load-project-thumb-with-title'),
            )
        } else {
          document
            .querySelectorAll('body')
            .forEach((_element56) =>
              _element56.classList.add('load-project-thumb'),
            )
        }
        gsap.to(
          document.querySelectorAll('.carousel-thumbs-wrapper .trigger-item'),
          {
            duration: 0.3,
            y: 160,
            x: 0,
            opacity: 1,
            stagger: 0.05,
            delay: 0,
            ease: Power2.easeIn,
          },
        )
        document
          .querySelectorAll('body')
          .append(
            '<div class="temporary-hero light-content"><div class="outer content-full-width"><div class="inner"></div></div></div>',
          )
        if (
          document.querySelectorAll(this).classList.contains('change-header')
        ) {
          gsap.to(document.querySelectorAll('.slide-title'), {
            duration: 1.5,
            color: '#000',
            delay: 0.3,
            ease: Power4.easeInOut,
          })
        } else {
          gsap.to(document.querySelectorAll('.slide-title'), {
            duration: 1.5,
            color: '#fff',
            delay: 0.3,
            ease: Power4.easeInOut,
          })
        }
        gsap.to(
          document.querySelectorAll(
            '.showcase-carousel .carousel-zoom-wrapper .slide-caption .slide-subtitle span',
          ),
          {
            duration: 0.3,
            y: 30,
            opacity: 0,
            stagger: -0.03,
            ease: Power2.easeInOut,
          },
        )
        setTimeout(function () {
          const _start11 = document.querySelectorAll('.carousel-zoom-wrapper')
          const _chain19 = [].concat(
            ..._start11.map((_element59) =>
              _element59.querySelectorAll('.slide-title'),
            ),
          )
          const _chain20 = document
            .querySelectorAll(_chain19)
            .appendTo('.temporary-hero .inner')
            .toArray()
          var moveTitle =
            document.querySelectorAll('.temporary-hero .inner').outerHeight() -
            document
              .querySelectorAll('.temporary-hero .slide-title')
              .outerHeight()
          gsap.to(document.querySelectorAll('.temporary-hero .slide-title'), {
            duration: 1.5,
            y: moveTitle,
            opacity: 1,
            delay: 0.3,
            ease: Power4.easeInOut,
          })
          if (trigger_item.classList.contains('change-header')) {
            gsap.to(document.querySelectorAll('.slide-title'), {
              duration: 1.5,
              color: '#000',
              ease: Power4.easeInOut,
            })
          }
          document
            .querySelectorAll('body')
            .forEach((_element58) => _element58.classList.add('show-loader'))
        }, 300)
        gsap.to('footer, .carousel-nav-wrapper', {
          duration: 0.5,
          opacity: 0,
          ease: Power4.easeInOut,
        })
      }),
    )
  }
} //End Showcase Carousel

/*--------------------------------------------------
Function Showcase Slider
---------------------------------------------------*/

export function ShowcaseSlider() {
  if (document.querySelectorAll('.showcase-slider').length > 0) {
    document
      .querySelectorAll('body')
      .forEach((_element) => _element.classList.add('disable-scroll'))
    document
      .querySelectorAll('footer')
      .forEach((_element2) => _element2.classList.add('showcase-footer'))
    gsap.set(
      document.querySelectorAll('.showcase-slider .clapat-slider .slide-inner'),
      {
        opacity: 0,
        scale: 1.1,
      },
    )
    gsap.set(document.querySelectorAll('.showcase-slider .slide-title span'), {
      y: 100,
      opacity: 0,
    })
    gsap.set(
      document.querySelectorAll(
        '#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text',
      ),
      {
        opacity: 0,
      },
    )
    slider = new ClapatSlider('.showcase-slider', {
      direction: 'vertical',
      snap: true,
      navigation: {
        nextEl: '.cp-button-next',
        prevEl: '.cp-button-prev',
      },
      parallax: [
        {
          element: '.section-image',
          margin: 20,
        },
      ],
      on: {
        init: function () {
          if (
            document.querySelectorAll('body').classList.contains('show-loader')
          ) {
            imagesLoaded('body', function () {
              gsap.to(
                document.querySelectorAll(
                  '.showcase-slider .clapat-slider .clapat-slide .slide-inner',
                ),
                {
                  duration: 1.2,
                  opacity: 1,
                  scale: 1,
                  delay: 0,
                  ease: Power4.easeOut,
                },
              )
              gsap.to(
                document.querySelectorAll('.showcase-slider .slide-title span'),
                {
                  duration: 0.7,
                  y: 0,
                  opacity: 1,
                  delay: 0.1,
                  ease: Power4.easeOut,
                },
              )
              gsap.to(
                document.querySelectorAll(
                  '#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text',
                ),
                {
                  duration: 0.5,
                  opacity: 1,
                  delay: 0.4,
                  ease: Power3.easeOut,
                },
              )
              var bullets = document.querySelectorAll(
                '.showcase-carousel .clapat-pagination-bullet',
              )
              var initialHeights = Array.from(bullets).map(function (bullet) {
                return bullet.clientHeight + 'px'
              })
              gsap.set(bullets, {
                height: 0,
              })
              gsap.to(bullets, {
                duration: 0.3,
                delay: 0.3,
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
            })
            let pageContent = document.getElementById('page-content')
            let magicCursor = document.getElementById('magic-cursor')
            let firstSlide = document.querySelector('.clapat-slide')
            let videos = firstSlide.querySelectorAll('video')
            if (firstSlide.classList.contains('change-header')) {
              pageContent.classList.remove('light-content')
              magicCursor.classList.remove('light-content')
            } else {
              pageContent.classList.add('light-content')
              magicCursor.classList.add('light-content')
            }
            videos.forEach(function (video) {
              video.play()
            })
          }
        },
        activeSlideChanged: function (activeSlide, prevSlide, nextSlide) {
          console.log('Click event ')
          let pageContent = document.getElementById('page-content')
          let magicCursor = document.getElementById('magic-cursor')
          if (activeSlide.classList.contains('change-header')) {
            pageContent.classList.remove('light-content')
            magicCursor.classList.remove('light-content')
          } else {
            pageContent.classList.add('light-content')
            magicCursor.classList.add('light-content')
          }
          if (prevSlide.querySelector('video')) {
            const _chain = document
              .querySelectorAll(prevSlide)
              .querySelector('video')
              .toArray()
            const _chain2 = document.querySelectorAll(_chain).pause().toArray()
          }
          if (activeSlide.querySelector('video')) {
            const _chain3 = document
              .querySelectorAll(activeSlide)
              .querySelector('video')
              .toArray()
            const _chain4 = document.querySelectorAll(_chain3).play().toArray()
          }
          if (nextSlide.querySelector('video')) {
            const _chain5 = document
              .querySelectorAll(nextSlide)
              .querySelector('video')
              .toArray()
            const _chain6 = document.querySelectorAll(_chain5).pause().toArray()
          }
        },
      },
    })
    arrTitles = gsap.utils.toArray(
      '.clapat-slider-wrapper .clapat-sync-slider .clapat-sync-slide',
    )
    if (
      document
        .querySelectorAll('.showcase-slider')
        .classList.contains('rotate-caption')
    ) {
      const slideduration = 1 / arrTitles.length
      const transitionduration = slideduration
      let currentTimelinePos = 0
      for (let i = 0; i < arrTitles.length; i++) {
        const rowTitleWrapper = arrTitles[i]
        if (i != 0) {
          gsap.set(rowTitleWrapper, {
            yPercent: 60,
            rotationX: -90,
            z: -60,
            opacity: 0.5,
          })
          slider.tl
            .to(
              rowTitleWrapper,
              {
                yPercent: 0,
                rotationX: 0,
                z: 0,
                opacity: 1,
                duration: transitionduration,
              },
              '<',
            )
            .to(
              rowTitleWrapper,
              {
                yPercent: -65,
                rotationX: 90,
                z: -60,
                opacity: 0.5,
                duration: transitionduration,
              },
              '>',
            )
        } else {
          slider.tl.fromTo(
            rowTitleWrapper,
            {
              yPercent: 0,
              rotationX: 0,
              z: 0,
              opacity: 1,
            },
            {
              yPercent: -65,
              rotationX: 90,
              z: -60,
              opacity: 0.5,
              duration: transitionduration,
            },
            0,
          )
        }
        currentTimelinePos += transitionduration
      }
      const firstTitle = arrTitles[0]
      slider.tl.fromTo(
        firstTitle,
        {
          yPercent: 65,
          rotationX: -90,
          z: -60,
          opacity: 0.5,
        },
        {
          yPercent: 0,
          rotationX: 0,
          z: 0,
          opacity: 1,
          duration: transitionduration,
        },
        '<',
      )
      gsap.set(firstTitle, {
        yPercent: 0,
        rotationX: 0,
        z: 0,
        opacity: 1,
      })
    } else {
      const slideduration = 1 / arrTitles.length
      const transitionduration = slideduration
      let currentTimelinePos = 0
      for (let i = 0; i < arrTitles.length; i++) {
        const rowTitleWrapper = arrTitles[i]
        if (i != 0) {
          gsap.set(rowTitleWrapper, {
            yPercent: 100,
          })
          slider.tl
            .to(
              rowTitleWrapper,
              {
                yPercent: 0,
                duration: transitionduration,
              },
              '<',
            )
            .to(
              rowTitleWrapper,
              {
                yPercent: -100,
                duration: transitionduration,
              },
              '>',
            )
        } else {
          slider.tl.fromTo(
            rowTitleWrapper,
            {
              yPercent: 0,
            },
            {
              yPercent: -100,
              duration: transitionduration,
            },
            0,
          )
        }
        currentTimelinePos += transitionduration
      }
      const firstTitle = arrTitles[0]
      slider.tl.fromTo(
        firstTitle,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: transitionduration,
        },
        '<',
      )
      gsap.set(firstTitle, {
        yPercent: 0,
      })
    }
    slider.tl
      .fromTo(
        '.progress-info-fill',
        {
          backgroundSize: '0% 100%',
        },
        {
          backgroundSize: '100% 100%',
        },
        0,
      )
      .fromTo(
        '.progress-info-fill-2',
        {
          backgroundSize: '100% 100%',
        },
        {
          backgroundSize: '0% 100%',
          duration: 0.3,
          ease: 'power3',
        },
        0,
      )
    document.querySelectorAll('.carousel-prev').forEach((_element3) =>
      _element3.addEventListener('click', function () {
        if (window.rotateElement && window.rotateElement.isActive()) {
          return
        } else {
          window.rotateElement = gsap.to(
            [].concat(
              ...document
                .querySelectorAll(this)
                .map((_element4) => _element4.querySelectorAll('i')),
            ),
            {
              duration: 0.3,
              rotate: '-= 180',
            },
          )
        }
      }),
    )
    document.querySelectorAll('.carousel-next').forEach((_element5) =>
      _element5.addEventListener('click', function () {
        if (window.rotateElement && window.rotateElement.isActive()) {
          return
        } else {
          window.rotateElement = gsap.to(
            [].concat(
              ...document
                .querySelectorAll(this)
                .map((_element6) => _element6.querySelectorAll('i')),
            ),
            {
              duration: 0.3,
              rotate: '+= 90',
            },
          )
        }
      }),
    )
    if (!isMobile()) {
      var dragWrapper = document.querySelectorAll('.clapat-slider')
      dragWrapper.forEach((_element7) =>
        _element7.addEventListener('mousedown', function (evt) {
          dragWrapper.forEach((_element8) =>
            _element8.addEventListener(
              'mouseup mousemove',
              function handler(evt) {
                if (evt.type === 'mouseup') {
                  // click

                  document
                    .querySelectorAll('body')
                    .forEach((_element9) =>
                      _element9.classList.remove('scale-drag-y'),
                    )
                } else {
                  document
                    .querySelectorAll('body')
                    .forEach((_element14) =>
                      _element14.classList.add('scale-drag-y'),
                    )
                }
                dragWrapper.off('mouseup mousemove', handler)
              },
            ),
          )
        }),
      )
      document.querySelectorAll('.clapat-slider').forEach((_element19) =>
        _element19.addEventListener('mouseup touchend', function () {
          document
            .querySelectorAll('body')
            .forEach((_element20) =>
              _element20.classList.remove('scale-drag-y'),
            )
        }),
      )
      document.querySelectorAll('body').forEach((_element21) =>
        _element21.addEventListener('mouseleave', function () {
          document
            .querySelectorAll('body')
            .forEach((_element22) =>
              _element22.classList.remove('scale-drag-y'),
            )
        }),
      )
      const _start = document.querySelectorAll('.trigger-item')
      _start.forEach((_element31) =>
        _element31.addEventListener('mouseenter', function () {
          if (
            !document
              .querySelectorAll('body')
              .classList.contains('scale-drag-y')
          ) {
            const $this = document.querySelectorAll(this)

            const _start2 = document.querySelectorAll(this)
            const _chain7 = [].concat(
              ..._start2.map((_element26) =>
                _element26.querySelectorAll('video'),
              ),
            )
            const _chain8 = document
              .querySelectorAll(_chain7)
              .each(function () {
                const _start3 = document.querySelectorAll(this)
                const _chain9 = document
                  .querySelectorAll(_start3)
                  .get(0)
                  .toArray()
                const _chain10 = document
                  .querySelectorAll(_chain9)
                  .play()
                  .toArray()
              })
              .toArray()
          }
        }),
      )
      _start.forEach((_element32) =>
        _element32.addEventListener('mouseleave', function () {
          if (
            !document
              .querySelectorAll('body')
              .classList.contains('scale-drag-y')
          ) {
            const _start4 = document.querySelectorAll(this)
            const _chain11 = [].concat(
              ..._start4.map((_element30) =>
                _element30.querySelectorAll('video'),
              ),
            )
            const _chain12 = document
              .querySelectorAll(_chain11)
              .each(function () {
                const _start5 = document.querySelectorAll(this)
                const _chain13 = document
                  .querySelectorAll(_start5)
                  .get(0)
                  .toArray()
                const _chain14 = document
                  .querySelectorAll(_chain13)
                  .pause()
                  .toArray()
              })
              .toArray()
          }
        }),
      )
    }
    document.querySelectorAll('.trigger-item').forEach((_element33) =>
      _element33.addEventListener('click', function () {
        let trigger_item = document.querySelectorAll(this)
        var clickedIndex = document.querySelectorAll(this).data('index')
        document
          .querySelectorAll('body')
          .forEach((_element34) =>
            _element34.classList.add('load-project-thumb-with-title'),
          )
        document
          .querySelectorAll('body')
          .append(
            '<div class="temporary-hero light-content"><div class="outer content-full-width middle"><div class="inner"></div></div></div>',
          )
        if (
          document.querySelectorAll(this).classList.contains('change-header')
        ) {
          gsap.to(document.querySelectorAll('.slide-title'), {
            duration: 1.5,
            color: '#000',
            delay: 0.3,
            ease: Power4.easeInOut,
          })
        } else {
          gsap.to(document.querySelectorAll('.slide-title'), {
            duration: 1.5,
            color: '#fff',
            delay: 0.3,
            ease: Power4.easeInOut,
          })
        }
        setTimeout(function () {
          // Find the corresponding cloned list item
          var clonedListItem = document.querySelectorAll(
            '.clapat-sync-slider-viewport .clapat-sync-slide:eq(' +
              clickedIndex +
              ')',
          )
          const _chain15 = [].concat(
            ...clonedListItem.map((_element37) =>
              _element37.querySelectorAll('.slide-title'),
            ),
          )
          const _chain16 = document
            .querySelectorAll(_chain15)
            .appendTo('.temporary-hero .inner')
            .toArray()
          var moveTitle =
            document.querySelectorAll('.temporary-hero .inner').outerHeight() /
              2 -
            document
              .querySelectorAll('.temporary-hero .slide-title')
              .outerHeight() *
              0.5 -
            1
          gsap.to(document.querySelectorAll('.temporary-hero .slide-title'), {
            duration: 1.5,
            y: moveTitle,
            opacity: 1,
            delay: 0.3,
            ease: Power4.easeInOut,
          })
          if (trigger_item.classList.contains('change-header')) {
            gsap.to(document.querySelectorAll('.slide-title'), {
              duration: 1.5,
              color: '#000',
              ease: Power4.easeInOut,
            })
          }
          document
            .querySelectorAll('body')
            .forEach((_element36) => _element36.classList.add('show-loader'))
        }, 300)
        gsap.to('footer, .carousel-nav-wrapper', {
          duration: 0.5,
          opacity: 0,
          ease: Power4.easeInOut,
        })

        const _chain17 = document
          .querySelectorAll(trigger_item)
          .delay(1500)
          .toArray()
        const _chain18 = document
          .querySelectorAll(_chain17)
          .queue(function () {
            var link = [].concat(
              ...trigger_item.map((_element40) =>
                _element40.querySelectorAll('a'),
              ),
            )
            link.trigger('click')
          })
          .toArray()
      }),
    )
  }
} //End Showcase Slider

/*--------------------------------------------------
Function Showcase Portfolio
---------------------------------------------------*/

function ShowcasePortfolio() {
  if (document.querySelectorAll('.showcase-portfolio').length > 0) {
    gsap.set(document.querySelectorAll('.showcase-portfolio .img-mask'), {
      scaleY: 1.1,
      y: 100,
      opacity: 0,
      filter: 'brightness(150%)',
    })
    if (isMobile()) {
      gsap.set(
        document.querySelectorAll('.showcase-portfolio .slide-caption'),
        {
          y: 30,
          opacity: 0,
        },
      )
    }
    var thumbAnimation = gsap.utils.toArray('.img-mask')
    thumbAnimation.forEach(function (tAnimation) {
      gsap.to(tAnimation, {
        scrollTrigger: {
          trigger: tAnimation,
          start: 'top 100%',
          stagger: 0.5,
          markers: false,
          onEnter: function () {
            tAnimation.classList.add('animated')
            tAnimation.closest('.slide-inner').classList.add('show-caption')
            if (document.body.classList.contains('show-loader')) {
              setTimeout(function () {
                gsap.set(
                  document.querySelectorAll(
                    '.showcase-portfolio .img-mask.animated',
                  ),
                  {
                    scaleY: 1.1,
                    y: 100,
                    opacity: 0,
                    filter: 'brightness(150%)',
                  },
                )
                gsap.to(
                  document.querySelectorAll(
                    '.showcase-portfolio .img-mask.animated',
                  ),
                  {
                    duration: 0.7,
                    scaleY: 1,
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    delay: 0.5,
                    filter: 'brightness(100%)',
                    ease: Power2.easeOut,
                  },
                )
              }, 200)
            }
            if (isMobile()) {
              gsap.to(
                document.querySelectorAll('.show-caption .slide-caption'),
                {
                  duration: 0.3,
                  y: 0,
                  opacity: 1,
                  delay: 0.4,
                  ease: Power2.easeOut,
                },
              )
            }
          },
        },
        duration: 0.7,
        delay: 0.1,
        scaleY: 1,
        y: 0,
        opacity: 1,
        filter: 'brightness(100%)',
        ease: Power2.easeOut,
        onComplete: function () {
          gsap.set(tAnimation, {
            opacity: '',
          })
        },
      })
    })
    function listView() {
      var grid = document.querySelector('.showcase-portfolio')
      var heroFooter = document.getElementById('hero-footer')
      var startHeight = gsap.getProperty('.showcase-portfolio', 'height')
      var stateThumb = Flip.getState('.clapat-item .slide-inner')
      if (!grid.classList.contains('list-grid')) {
        if (isMobile()) {
          gsap.to(document.querySelectorAll('.clapat-item .slide-caption'), {
            duration: 0.5,
            opacity: 0,
            y: 0,
            stagger: 0.05,
            ease: 'power3.inOut',
          })
        }
        heroFooter.classList.add('list-enable')
        gsap.to(document.querySelectorAll('.clapat-item .section-image'), {
          duration: 0.5,
          opacity: 0,
          scale: 0.5,
          stagger: 0.05,
          ease: 'power3.inOut',
          onComplete: function () {
            var otherClass = grid.classList.item(1)
            grid.classList.remove(otherClass)
            grid.dataset.originalClass = otherClass
            grid.classList.add('list-grid')
            var slideInners = document.querySelectorAll(
              '.clapat-item .slide-inner',
            )
            slideInners.forEach(function (slideInner) {
              var listMask = document.createElement('div')
              listMask.classList.add('list-mask')
              slideInner.appendChild(listMask)
            })
            gsap.set(
              document.querySelectorAll('.list-grid .slide-title span'),
              {
                y: '',
                opacity: '',
              },
            )
            gsap.set(document.querySelectorAll('.list-grid .slide-cat span'), {
              y: '',
              opacity: '',
            })
            var borederColorBlack = 'rgba(0,0,0,0.1)'
            var borederColorWhite = 'rgba(255,255,255,0.15)'
            if (
              document
                .querySelectorAll('#page-content')
                .classList.contains('light-content')
            ) {
              gsap.to(document.querySelectorAll('.clapat-item'), {
                duration: 0.5,
                borderBottomColor: borederColorWhite,
                stagger: 0.05,
                ease: 'power3.inOut',
              })
            } else if (
              document
                .querySelectorAll('#page-content')
                .classList.contains('dark-content')
            ) {
              gsap.to(document.querySelectorAll('.clapat-item'), {
                duration: 0.5,
                borderBottomColor: borederColorBlack,
                stagger: 0.05,
                ease: 'power3.inOut',
              })
            }
            gsap.to(document.querySelectorAll('.list-grid .slide-caption'), {
              duration: 0.5,
              opacity: 1,
              stagger: 0.05,
              ease: 'power3.inOut',
            })
            var endHeight = gsap.getProperty('.showcase-portfolio', 'height')
            var flip = Flip.from(stateThumb, {
              absolute: true,
              duration: 0,
              stagger: 0,
              ease: 'power3.inOut',
              onComplete: function () {
                ScrollTrigger.refresh()
                gsap.set(
                  document.querySelectorAll('.clapat-item .section-image'),
                  {
                    width: '100px',
                  },
                )
              },
            })
            flip.fromTo(
              '.showcase-portfolio',
              {
                height: startHeight,
              },
              {
                height: endHeight,
                clearProps: 'height',
                duration: flip.duration(),
              },
              0,
            )
          },
        })
      } else {
        heroFooter.classList.remove('list-enable')
        gsap.to(document.querySelectorAll('.list-grid .slide-caption'), {
          duration: 0.3,
          opacity: 0,
          ease: Power2.easeOut,
        })
        gsap.to(document.querySelectorAll('.clapat-item'), {
          duration: 0.3,
          borderBottomColor: 'rgba(0,0,0,0)',
          ease: Power2.easeOut,
        })
        var listMasks = document.querySelectorAll(
          '.clapat-item .slide-inner .list-mask',
        )
        listMasks.forEach(function (listMask) {
          listMask.parentNode.removeChild(listMask)
        })
        gsap.to(document.querySelectorAll('.clapat-item .section-image'), {
          duration: 0.5,
          width: '100%',
          scale: 0.9,
          ease: 'power3.inOut',
          onComplete: function () {
            grid.classList.remove('list-grid')
            if (grid.dataset.originalClass) {
              grid.classList.add(grid.dataset.originalClass)
              delete grid.dataset.originalClass
            }
            var endHeight = gsap.getProperty('.showcase-portfolio', 'height')
            var flip = Flip.from(stateThumb, {
              absolute: true,
              duration: 0,
              stagger: 0,
              ease: 'power3.inOut',
              onComplete: function () {
                ScrollTrigger.refresh()
                gsap.to(
                  document.querySelectorAll('.clapat-item .section-image'),
                  {
                    duration: 0.5,
                    scale: 1,
                    opacity: 1,
                    stagger: 0.05,
                    ease: 'power3.Out',
                  },
                )
                if (isMobile()) {
                  gsap.to(
                    document.querySelectorAll('.clapat-item .slide-caption'),
                    {
                      duration: 0.5,
                      opacity: 1,
                      delay: 0.2,
                      stagger: 0.05,
                      ease: 'power3.Out',
                    },
                  )
                }
              },
            })
            flip.fromTo(
              '.showcase-portfolio',
              {
                height: startHeight,
              },
              {
                height: endHeight,
                clearProps: 'height',
                duration: flip.duration(),
              },
              0,
            )
          },
        })
      }
    }
    const listViewDiv = document.querySelector('.list-view')
    if (listViewDiv) {
      listViewDiv.addEventListener('click', function (event) {
        event.preventDefault()
        listView()
      })
    }
    function shuffleGrid() {
      var grid = document.querySelector('.showcase-portfolio')
      var startHeight = gsap.getProperty('.showcase-portfolio', 'height')
      var state = Flip.getState('.clapat-item')
      var layouts = ['layout-one', 'layout-two', 'layout-three']
      var curLayout = layouts.indexOf(grid.classList[1])
      grid.classList.remove(layouts[curLayout])
      curLayout = (curLayout + 1) % layouts.length
      grid.classList.add(layouts[curLayout])
      var endHeight = gsap.getProperty('.showcase-portfolio', 'height')
      var flip = Flip.from(state, {
        absolute: true,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.inOut',
        onComplete: function () {
          ScrollTrigger.refresh()
        },
      })
      flip.fromTo(
        '.showcase-portfolio',
        {
          height: startHeight,
        },
        {
          height: endHeight,
          clearProps: 'height',
          duration: flip.duration(),
        },
        0,
      )
    }
    const shuffleGridDiv = document.querySelector('.shuffle-grid')
    if (shuffleGridDiv) {
      document
        .querySelector('.shuffle-grid')
        .addEventListener('click', function (event) {
          event.preventDefault()
          shuffleGrid()
        })
    }
    function filter() {
      var projects = document.querySelectorAll('.clapat-item')
      var startHeight = gsap.getProperty('.showcase-portfolio', 'height')
      var state = Flip.getState('.clapat-item')
      var filters = document.querySelectorAll('.filter-option.is_active')
      if (filters.length) {
        projects.forEach(function (project) {
          gsap.set(project, {
            display: 'block',
          })
          project.classList.remove('filtered')
        })
        filters.forEach(function (filter) {
          var colorClass = filter.dataset.filter
          if (colorClass !== '') {
            projects.forEach(function (project) {
              if (!project.classList.contains(colorClass)) {
                gsap.set(project, {
                  display: 'none',
                })
                project.classList.remove('filtered')
              } else {
                gsap.set(project, {
                  display: 'block',
                })
                project.classList.add('filtered')
              }
            })
          } else {
            projects.forEach(function (project) {
              gsap.set(project, {
                display: 'block',
              })
              project.classList.remove('filtered')
            })
          }
        })
      } else {
        projects.forEach(function (project) {
          gsap.set(project, {
            display: 'block',
          })
          project.classList.remove('filtered')
        })
      }
      var endHeight = gsap.getProperty('.showcase-portfolio', 'height')
      var flip = Flip.from(state, {
        duration: 0.6,
        ease: 'power3.inOut',
        stagger: 0,
        absolute: true,
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            {
              opacity: 0,
              scale: 0,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
            },
          ),
        onLeave: (elements) =>
          gsap.fromTo(
            elements,
            {
              opacity: 1,
              scale: 1,
            },
            {
              opacity: 0,
              scale: 0,
              duration: 0.6,
            },
          ),
        onComplete: function () {
          ScrollTrigger.refresh()
        },
      })
      flip.fromTo(
        '.showcase-portfolio',
        {
          height: startHeight,
        },
        {
          height: endHeight,
          clearProps: 'height',
          duration: flip.duration(),
        },
        0,
      )
    }
    const filtersOptionDiv = document.querySelector('.filters-options-wrapper')
    if (filtersOptionDiv) {
      document.querySelectorAll('.filter-option').forEach(function (option) {
        option.addEventListener('click', function (event) {
          event.preventDefault()
          document
            .querySelector('.filter-option.is_active')
            .classList.remove('is_active')
          event.currentTarget.classList.add('is_active')
          filter()
        })
      })
    }
    if (!isMobile()) {
      const startElements = document.querySelectorAll(
        '.showcase-portfolio .clapat-item .slide-inner',
      )
      startElements.forEach((element) =>
        element.addEventListener('mouseenter', function () {
          // 'this' now refers to the current element
          const currentElement = this
          const videos = currentElement.querySelectorAll('video')
          videos.forEach((video) => {
            if (video.paused) {
              video.play()
            }
          })
        }),
      )

      const portfolioItems = document.querySelectorAll(
        '.showcase-portfolio .clapat-item .slide-inner',
      )

      portfolioItems.forEach((item) =>
        item.addEventListener('mouseenter', function () {
          const currentElement = this
          if (
            !document
              .querySelector('.showcase-portfolio')
              .classList.contains('list-grid')
          ) {
            gsap.set(currentElement.querySelectorAll('.slide-title span'), {
              y: 30,
              opacity: 0,
            })

            gsap.set(currentElement.querySelectorAll('.slide-cat span'), {
              y: 30,
              opacity: 0,
            })

            gsap.to(currentElement.querySelector('.slide-caption'), {
              duration: 0.2,
              opacity: 1,
              ease: Power2.easeOut,
            })

            gsap.to(currentElement.querySelectorAll('.slide-title span'), {
              duration: 0.3,
              y: 0,
              opacity: 1,
              ease: Power2.easeOut,
            })

            gsap.to(currentElement.querySelectorAll('.slide-cat span'), {
              duration: 0.3,
              y: 0,
              opacity: 1,
              ease: Power2.easeOut,
            })
          }
        }),
      )

      portfolioItems.forEach((item) =>
        item.addEventListener('mouseleave', function () {
          const currentElement = this
          if (
            !document
              .querySelector('.showcase-portfolio')
              .classList.contains('list-grid')
          ) {
            gsap.to(currentElement.querySelector('.slide-caption'), {
              duration: 0.3,
              opacity: 0,
              delay: 0.1,
              ease: Power2.easeOut,
            })

            gsap.to(currentElement.querySelectorAll('.slide-title span'), {
              duration: 0.3,
              y: -30,
              opacity: 0,
              ease: Power2.easeOut,
            })

            gsap.to(currentElement.querySelectorAll('.slide-cat span'), {
              duration: 0.5,
              y: -30,
              delay: 0.05,
              opacity: 0,
              ease: Power2.easeOut,
            })
          }
        }),
      )
    }
    document.querySelectorAll('.trigger-item').forEach((_element23) =>
      _element23.addEventListener('click', function () {
        if (
          !document
            .querySelector('.showcase-portfolio')
            .classList.contains('list-grid')
        ) {
          document.body.classList.add('load-project-thumb')
        }
        document
          .querySelectorAll('.showcase-portfolio .trigger-item')
          .forEach(function (item) {
            if (!item.classList.contains('above')) {
              gsap.to(item, {
                duration: 0.5,
                delay: 0,
                opacity: 0,
                ease: Power4.easeInOut,
              })
            } else {
              gsap.to(document.querySelectorAll(this), {
                duration: 0.5,
                delay: 0.4,
                opacity: 0,
                ease: Power4.easeInOut,
              })
            }
          })
        setTimeout(function () {
          document
            .querySelectorAll('body')
            .forEach((_element25) => _element25.classList.add('show-loader'))
        }, 300)
        gsap.to(
          'footer, .carousel-nav-wrapper, .showcase-portfolio.list-grid',
          {
            duration: 0.5,
            opacity: 0,
            ease: Power4.easeInOut,
          },
        )
      }),
    )
  }
} //End Showcase Portfolio

/*--------------------------------------------------
Function Showcase Lists
---------------------------------------------------*/

function ShowcaseLists() {
  if (document.querySelectorAll('.showcase-lists').length > 0) {
    document
      .querySelectorAll('footer')
      .forEach((_element) => _element.classList.add('showcase-footer'))

    // timeline slide list total height sum < window height,  then duplicate until they pass the window height
    const slidesRoot = document.querySelector(
      '.clapat-sync-slider .clapat-sync-slider-wrapper .clapat-sync-slider-viewport',
    )
    const slidesList = slidesRoot.querySelectorAll(
      '.clapat-sync-slider .clapat-sync-slide',
    )
    let slidesHeight = 0
    for (const clapatSyncSlide of slidesList) {
      slidesHeight += clapatSyncSlide.offsetHeight
    }
    let iterCloning = Math.floor(window.innerHeight / slidesHeight)
    if (iterCloning >= 1) {
      iterCloning--
      if (window.innerHeight % slidesHeight > 0) {
        iterCloning++
      }
      for (let i = 0; i < iterCloning; i++) {
        for (const clapatSyncSlide of slidesList) {
          let cloneSlide = clapatSyncSlide.cloneNode(true)
          slidesRoot.appendChild(cloneSlide)
        }
      }
    }
    const clapatSyncSlider = document.querySelector(
      '.clapat-slider-wrapper.showcase-lists .clapat-sync-slider-viewport',
    )
    const syncSliderClone = clapatSyncSlider.cloneNode(true)
    document
      .querySelector(
        '.clapat-slider-wrapper.showcase-lists .clapat-sync-slider-wrapper',
      )
      .appendChild(syncSliderClone)
    slider = new ClapatSlider('.showcase-lists', {
      direction: 'vertical',
      snap: false,
      navigation: {
        nextEl: '.cp-button-next',
        prevEl: '.cp-button-prev',
      },
      on: {
        init: function () {
          if (
            document.querySelectorAll('body').classList.contains('show-loader')
          ) {
            gsap.to(
              document.querySelectorAll(
                '#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text',
              ),
              {
                duration: 0.5,
                opacity: 1,
                delay: 0.3,
                ease: Power2.easeOut,
              },
            )
          }
        },
      },
    })
    const syncSliderCloneTranslate = document.querySelectorAll(
      '.clapat-slider-wrapper.showcase-lists .clapat-sync-slider-wrapper > .clapat-sync-slider-viewport',
    )
    const titleWrapper = document.querySelector('.clapat-sync-slider-wrapper')
    slider.tl
      .fromTo(
        '.clapat-slider-wrapper.showcase-lists .clapat-sync-slider-wrapper',
        {
          yPercent: 0,
        },
        {
          yPercent: -(100 - 100 / syncSliderCloneTranslate.length),
        },
        0,
      )
      .fromTo(
        '.hover-reveal',
        {
          y: 0,
        },
        {
          y: +(titleWrapper.offsetHeight / 2),
        },
        0,
      )
      .fromTo(
        '.progress-info-fill',
        {
          backgroundSize: '0% 100%',
        },
        {
          backgroundSize: '100% 100%',
        },
        0,
      )
      .fromTo(
        '.progress-info-fill-2',
        {
          backgroundSize: '100% 100%',
        },
        {
          backgroundSize: '0% 100%',
          duration: 0.3,
          ease: 'power3',
        },
        0,
      )
    document.querySelectorAll('.carousel-prev').forEach((_element2) =>
      _element2.addEventListener('click', function () {
        if (window.rotateElement && window.rotateElement.isActive()) {
          return
        } else {
          window.rotateElement = gsap.to(
            [].concat(
              ...document
                .querySelectorAll(this)
                .map((_element3) => _element3.querySelectorAll('i')),
            ),
            {
              duration: 0.3,
              rotate: '-= 180',
            },
          )
        }
      }),
    )
    document.querySelectorAll('.carousel-next').forEach((_element4) =>
      _element4.addEventListener('click', function () {
        if (window.rotateElement && window.rotateElement.isActive()) {
          return
        } else {
          window.rotateElement = gsap.to(
            [].concat(
              ...document
                .querySelectorAll(this)
                .map((_element5) => _element5.querySelectorAll('i')),
            ),
            {
              duration: 0.3,
              rotate: '+= 90',
            },
          )
        }
      }),
    )
    if (!isMobile()) {
      var dragWrapper = document.querySelectorAll('.clapat-slider')
      dragWrapper.forEach((_element6) =>
        _element6.addEventListener('mousedown', function (evt) {
          dragWrapper.forEach((_element7) =>
            _element7.addEventListener(
              'mouseup mousemove',
              function handler(evt) {
                if (evt.type === 'mouseup') {
                  // click

                  document
                    .querySelectorAll('body')
                    .forEach((_element8) =>
                      _element8.classList.remove('scale-drag-y'),
                    )

                  document
                    .querySelectorAll(
                      '.showcase-lists .clapat-sync-slide .slide-inner',
                    )
                    .forEach((_element11) =>
                      _element11.addEventListener('click', function () {
                        if (
                          !document
                            .querySelectorAll('body')
                            .classList.contains('scale-drag-y')
                        ) {
                          gsap.to(
                            document.querySelectorAll(
                              '.showcase-lists .slide-title span',
                            ),
                            {
                              duration: 0.4,
                              y: -70,
                              opacity: 0,
                              delay: 0.1,
                              ease: Power2.easeInOut,
                            },
                          )
                          gsap.to(
                            document.querySelectorAll(
                              '.showcase-lists .slide-title i',
                            ),
                            {
                              duration: 0.3,
                              opacity: 0,
                              delay: 0,
                              ease: Power2.easeInOut,
                            },
                          )
                        }
                      }),
                    )
                } else {
                  // drag
                  if (
                    document
                      .querySelectorAll('#magic-cursor')
                      .classList.contains('light-content')
                  ) {
                  } else {
                  }
                  document
                    .querySelectorAll('body')
                    .forEach((_element12) =>
                      _element12.classList.add('scale-drag-y'),
                    )
                }
                dragWrapper.off('mouseup mousemove', handler)
              },
            ),
          )
        }),
      )
      document.querySelectorAll('.clapat-slider').forEach((_element15) =>
        _element15.addEventListener('mouseup touchend', function () {
          document
            .querySelectorAll('body')
            .forEach((_element16) =>
              _element16.classList.remove('scale-drag-y'),
            )
        }),
      )
      document.querySelectorAll('body').forEach((_element17) =>
        _element17.addEventListener('mouseleave', function () {
          document
            .querySelectorAll('body')
            .forEach((_element18) =>
              _element18.classList.remove('scale-drag-y'),
            )
        }),
      )
      const _start = document.querySelectorAll(
        '.showcase-lists .clapat-sync-slide .slide-inner',
      )
      _start.forEach((_element36) =>
        _element36.addEventListener('mouseenter', function () {
          if (
            !document
              .querySelectorAll('body')
              .classList.contains('scale-drag-x')
          ) {
            var $this = document.querySelectorAll(this)

            const _start2 = document.querySelectorAll(this)
            const _chain = [].concat(
              ..._start2.map((_element23) =>
                _element23.querySelectorAll('video'),
              ),
            )
            const _chain2 = document
              .querySelectorAll(_chain)
              .each(function () {
                const _start3 = document.querySelectorAll(this)
                const _chain3 = document
                  .querySelectorAll(_start3)
                  .get(0)
                  .toArray()
                const _chain4 = document
                  .querySelectorAll(_chain3)
                  .play()
                  .toArray()
              })
              .toArray()
          }
        }),
      )
      _start.forEach((_element37) =>
        _element37.addEventListener('mouseleave', function () {
          if (
            !document
              .querySelectorAll('body')
              .classList.contains('scale-drag-x')
          ) {
            const _start4 = document.querySelectorAll(this)
            const _chain5 = [].concat(
              ..._start4.map((_element27) =>
                _element27.querySelectorAll('video'),
              ),
            )
            const _chain6 = document
              .querySelectorAll(_chain5)
              .each(function () {
                const _start5 = document.querySelectorAll(this)
                const _chain7 = document
                  .querySelectorAll(_start5)
                  .get(0)
                  .toArray()
                const _chain8 = document
                  .querySelectorAll(_chain7)
                  .pause()
                  .toArray()
              })
              .toArray()
          }
        }),
      )
      const _start6 = document.querySelectorAll('.clapat-sync-slide')
      _start6.forEach((_element38) =>
        _element38.addEventListener('mouseenter', function () {
          document
            .querySelectorAll('.clapat-sync-slide')
            .forEach((_element29) => _element29.classList.add('disable'))
          document
            .querySelectorAll(this)
            .forEach((_element30) => _element30.classList.remove('disable'))
          const _start7 = document.querySelectorAll(this)
          const _chain9 = [].concat(
            ..._start7.map((_element32) =>
              _element32.querySelectorAll('video'),
            ),
          )
          const _chain10 = document
            .querySelectorAll(_chain9)
            .each(function () {
              const _start8 = document.querySelectorAll(this)
              const _chain11 = document
                .querySelectorAll(_start8)
                .get(0)
                .toArray()
              const _chain12 = document
                .querySelectorAll(_chain11)
                .play()
                .toArray()
            })
            .toArray()
        }),
      )
      _start6.forEach((_element39) =>
        _element39.addEventListener('mouseleave', function () {
          document
            .querySelectorAll('.clapat-sync-slide')
            .forEach((_element33) => _element33.classList.remove('disable'))
          const _start9 = document.querySelectorAll(this)
          const _chain13 = [].concat(
            ..._start9.map((_element35) =>
              _element35.querySelectorAll('video'),
            ),
          )
          const _chain14 = document
            .querySelectorAll(_chain13)
            .each(function () {
              const _start10 = document.querySelectorAll(this)
              const _chain15 = document
                .querySelectorAll(_start10)
                .get(0)
                .toArray()
              const _chain16 = document
                .querySelectorAll(_chain15)
                .pause()
                .toArray()
            })
            .toArray()
        }),
      )
    }
    const getMousePos = (e) => {
      let posx = 0
      let posy = 0
      if (!e) e = window.event
      if (e.pageX || e.pageY) {
        posx = e.pageX
        posy = e.pageY
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop
      }
      return {
        x: posx,
        y: posy,
      }
    }

    // Effect 1
    class HoverImgFx1 {
      constructor(el) {
        this.DOM = {
          el: el,
        }
        this.DOM.reveal = this.DOM.el.querySelector('.hover-reveal')
        this.DOM.revealInner = this.DOM.reveal.querySelector(
          '.hover-reveal__inner',
        )
        this.DOM.revealInner.style.overflow = 'hidden'
        this.DOM.revealImg =
          this.DOM.revealInner.querySelector('.hover-reveal__img')
        this.initEvents()
      }
      initEvents() {
        this.positionElement = (ev) => {
          const mousePos = getMousePos(ev)
          gsap.to(document.querySelectorAll('.hover-reveal'), {
            duration: 0.7,
            top: `${mousePos.y - this.DOM.el.querySelector('.hover-reveal').offsetHeight * 0.5}px`,
            left: `${mousePos.x - this.DOM.el.querySelector('.hover-reveal').offsetWidth * 0.5}px`,

            ease: Power4.easeOut,
          })
        }
        this.mouseenterFn = (ev) => {
          this.positionElement(ev)
          this.showImage()
        }
        this.mousemoveFn = (ev) =>
          requestAnimationFrame(() => {
            this.positionElement(ev)
          })
        this.mouseleaveFn = () => {
          this.hideImage()
        }
        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn)
        this.DOM.el.addEventListener('mousemove', this.mousemoveFn)
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn)
      }
      showImage() {
        gsap.killTweensOf(this.DOM.revealInner)
        gsap.killTweensOf(this.DOM.revealImg)
        this.tl = gsap
          .timeline({
            onStart: () => {
              this.DOM.reveal.style.opacity = 1
              gsap.set(this.DOM.el, {
                zIndex: 1000,
              })
            },
          })
          .add('begin')
          .add(
            gsap.to(this.DOM.revealInner, {
              duration: 0.4,
              ease: Sine.easeOut,
              startAt: {
                x: '-100%',
              },
              x: '0%',
            }),
            'begin',
          )
          .add(
            gsap.to(this.DOM.revealImg, {
              duration: 0.4,
              ease: Sine.easeOut,
              startAt: {
                x: '100%',
              },
              x: '0%',
            }),
            'begin',
          )
      }
      hideImage() {
        gsap.killTweensOf(this.DOM.revealInner)
        gsap.killTweensOf(this.DOM.revealImg)
        this.tl = gsap
          .timeline({
            onStart: () => {
              gsap.set(this.DOM.el, {
                zIndex: 999,
              })
            },
            onComplete: () => {
              gsap.set(this.DOM.el, {
                zIndex: '',
              })
              gsap.set(this.DOM.reveal, {
                opacity: 0,
              })
            },
          })
          .add('begin')
          .add(
            gsap.to(this.DOM.revealInner, {
              duration: 0.4,
              ease: Sine.easeOut,
              x: '100%',
            }),
            'begin',
          )
          .add(
            gsap.to(this.DOM.revealImg, {
              duration: 0.4,
              ease: Sine.easeOut,
              x: '-100%',
            }),
            'begin',
          )
      }
    }
    Array.from(document.querySelectorAll('.clapat-sync-slide')).forEach(
      (link) => new HoverImgFx1(link),
    )
    document.querySelectorAll('.trigger-item').forEach((_element40) =>
      _element40.addEventListener('click', function () {
        document
          .querySelectorAll('body')
          .forEach((_element41) =>
            _element41.classList.add('load-project-thumb'),
          )
        setTimeout(function () {
          document
            .querySelectorAll('body')
            .forEach((_element42) => _element42.classList.add('show-loader'))
        }, 300)
        gsap.to('footer, .carousel-nav-wrapper', {
          duration: 0.5,
          opacity: 0,
          ease: Power4.easeInOut,
        })
      }),
    )
  }
} //End Showcase Lists

/*--------------------------------------------------
Function Showcase Gallery
---------------------------------------------------*/

function ShowcaseGallery() {
  const currentElement = this
  if (document.querySelector('.showcase-gallery')) {
    document.querySelector('footer').classList.add('showcase-footer')
    gsap.set(
      document.querySelectorAll(
        '.showcase-gallery .slide-hero-title span, .showcase-gallery .slide-hero-subtitle span',
      ),
      {
        y: 120,
        opacity: 0,
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
    slider = new ClapatSlider('.showcase-gallery', {
      direction: 'vertical',
      snap: false,
      navigation: {
        nextEl: '.cp-button-next',
        prevEl: '.cp-button-prev',
      },
      parallax: [
        {
          element: '.speed-50',
          margin: -80,
        },
      ],
      on: {
        init: function (slide) {
          if (document.body.classList.contains('show-loader')) {
            gsap.to(
              document.querySelectorAll(
                '.showcase-gallery .slider-fixed-content .caption-timeline span',
              ),
              {
                duration: 0.7,
                y: 0,
                opacity: 1,
                stagger: 0.1,
                delay: 0.55,
                ease: Power3.easeOut,
              },
            )
            gsap.to(
              document.querySelectorAll(
                '.showcase-gallery .clapat-slider .clapat-slide .slide-inner',
              ),
              {
                duration: 0.7,
                opacity: 1,
                delay: 0.4,
                ease: Power2.easeOut,
              },
            )
            var gallerySlideClasses = [
              '.clapat-slide-prev-two',
              '.clapat-slide-prev',
              '.clapat-slide-active',
              '.clapat-slide-next',
              '.clapat-slide-next-two',
            ]
            gallerySlideClasses.forEach(function (gallerySlideClass, index) {
              var gallerySlide = document.querySelector(
                '.showcase-gallery .clapat-slider ' +
                  gallerySlideClass +
                  ' .slide-inner',
              )
              var delay = 0 + index * 0.1
              gsap.set(gallerySlide, {
                yPercent: 150,
              })
              gsap.to(gallerySlide, {
                duration: 1.5,
                yPercent: 0,
                delay: delay,
                ease: Power4.easeOut,
              })
            })
            gsap.to(
              document.querySelectorAll(
                '#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text',
              ),
              {
                duration: 0.5,
                opacity: 1,
                delay: 0.4,
                ease: Power2.easeOut,
              },
            )
          }
        },
        slideLeaveViewport: function (slide) {
          gsap.set(
            document.querySelectorAll(
              '.clapat-slider div:not(.clapat-slide-visible) .slide-events',
            ),
            {
              y: '',
            },
          )
        },
      },
    })
    slider.tl
      .fromTo(
        '.progress-info-fill',
        {
          backgroundSize: '0% 100%',
        },
        {
          backgroundSize: '100% 100%',
        },
        0,
      )
      .fromTo(
        '.progress-info-fill-2',
        {
          backgroundSize: '100% 100%',
        },
        {
          backgroundSize: '0% 100%',
          duration: 0.3,
          ease: 'power3',
        },
        0,
      )
    document
      .querySelector('.carousel-prev')
      .addEventListener('click', function () {
        if (window.rotateElement && window.rotateElement.isActive()) {
          return
        } else {
          window.rotateElement = gsap.to(currentElement.querySelector('i'), {
            duration: 0.3,
            rotate: '-= 180',
          })
        }
      })
    document
      .querySelector('.carousel-next')
      .addEventListener('click', function () {
        if (window.rotateElement && window.rotateElement.isActive()) {
          return
        } else {
          window.rotateElement = gsap.to(currentElement.querySelector('i'), {
            duration: 0.3,
            rotate: '+= 90',
          })
        }
      })
    class Item {
      constructor(DOM_el) {
        // DOM elements
        this.DOM = {
          // main element (.item)
          el: null,
          // imageWrap (.item__image-wrap)
          imageWrap: null,
          // imageCaption
          imageCaption: null,
          // image (.item__image)
          image: null,
          // imageInner (.item__image > .item__image-inner)
          imageInner: null,
        }
        this.DOM.el = DOM_el
        this.DOM.imageWrap = this.DOM.el.querySelector('.slide-moving')
        if (this.DOM.imageWrap != null) {
          this.DOM.imageCaption =
            this.DOM.imageWrap.querySelector('.slide-caption')
        }
        this.DOM.image = this.DOM.el.querySelector('.trigger-item')
        if (this.DOM.image != null) {
          this.DOM.imageInner = this.DOM.image.querySelector('.section-image')
        }
      }
    }

    // Placeholder for the grid items (.item__image). We'll use the gsap FLIP plugin to move the "".item .item__image" inside the grid element
    const grid = document.querySelector('.gallery-thumbs-wrapper')
    const triggeredImage = document.querySelector('.gallery-zoom-wrapper')
    let animateTitle = gsap.timeline()
    let endScaleSmall = gsap.getProperty(
      '.showcase-gallery .has-scale-small .section-image',
      'scale',
    )
    gsap.set('.showcase-gallery .has-scale-small .section-image', {
      scale: endScaleSmall,
    })
    let endScaleMedium = gsap.getProperty(
      '.showcase-gallery .has-scale-medium .section-image',
      'scale',
    )
    gsap.set('.showcase-gallery .has-scale-medium .section-image', {
      scale: endScaleMedium,
    })
    const showGrid = () => {
      document.body.classList.add('grid-open', 'disable-scroll')
      slider.enabled = false
      gsap.to(
        document.querySelectorAll(
          'footer .link-text, .clapat-pagination, .progress-info, #filters-wrapper',
        ),
        {
          duration: 0.3,
          opacity: 0,
          y: 30,
          stagger: -0.05,
          ease: Power2.easeInOut,
        },
      )
      gsap.to(
        document.querySelectorAll(
          '.showcase-gallery .slider-fixed-content .caption-timeline span',
        ),
        {
          duration: 0.3,
          y: -100,
          opacity: 0,
          stagger: 0.1,
          delay: 0,
          ease: Power3.easeIn,
        },
      )

      // get the DOM elements that we'll work with
      const DOM = getDOMElements()
      const allImages = DOM.grid.map((element) => {
        element.item.DOM.image.setAttribute(
          'data-slide-index',
          element.item_index,
        )
        return element.item.DOM.image
      })
      const allImagesInner = DOM.grid.map(
        (element) => element.item.DOM.imageInner,
      )
      const currentImage = DOM.currentItem.DOM.image
      const currentImageInner = DOM.currentItem.DOM.imageInner
      const currentImageCaption = DOM.currentItem.DOM.imageCaption

      // Use gsap flip for the animation
      // save the current state of the images
      const flipstate = Flip.getState([allImages])
      const flipstate1 = Flip.getState([currentImage])
      gsap.set(currentImage.closest('.clapat-slide'), {
        zIndex: 0,
      })

      // put them inside the .grid element
      grid.append(...allImages)
      currentImage.setAttribute('data-slide-index', DOM.currentIndex)
      triggeredImage.append(currentImage)
      triggeredImage.append(currentImageCaption)
      gsap.to('.clapat-slider .clapat-slide .trigger-item', {
        duration: 1,
        opacity: 0,
        scale: 0.7,
        ease: Power2.easeOut,
      })

      // Flip it
      const _chain = document
        .querySelectorAll(Flip)
        .from(flipstate, {
          duration: 0.7,
          stagger: 0.02,
          ease: 'power3.inOut',
          absolute: true,
        })
        .toArray()
      const _chain2 = document
        .querySelectorAll(_chain)
        .to(
          currentImageInner,
          {
            duration: 0.7,
            ease: 'power3.inOut',
            scale: 1,
            onComplete: () => {
              document.body.classList.add('enable-trigger')
            },
          },
          0,
        )
        .toArray()
      const _chain3 = document
        .querySelectorAll(_chain2)
        .to(
          allImagesInner,
          {
            duration: 0.7,
            ease: 'power3.inOut',
            scale: 1,
          },
          0,
        )
        .toArray()
      const _chain4 = document
        .querySelectorAll(_chain3)
        .to(
          '.img-mask',
          {
            duration: 0.7,
            ease: 'power3.inOut',
            opacity: 1,
          },
          0,
        )
        .toArray()
      Flip.from(flipstate1, {
        duration: 0.7,
        ease: 'power3.inOut',
        absolute: true,
      })
      animateTitle.set('.showcase-gallery .slide-caption span', {
        y: 120,
        opacity: 0,
      })
      animateTitle.to(
        '.showcase-gallery .gallery-zoom-wrapper .slide-caption span',
        {
          duration: 0.5,
          y: 0,
          opacity: 1,
          delay: 0.2,
          stagger: 0.03,
          ease: Power2.easeOut,
        },
      )
      gsap.to('.showcase-gallery .gallery-zoom-wrapper a.slide-link', {
        duration: 0.7,
        opacity: 1,
        scale: 1,
        ease: Power2.easeIn,
      })
    }
    const hideGrid = () => {
      gsap.to('.clapat-slider .clapat-slide .trigger-item', {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        delay: 0.2,
        ease: 'power3.inOut',
      })
      gsap.to(
        document.querySelectorAll(
          '.showcase-gallery .gallery-zoom-wrapper .slide-caption',
        ),
        {
          duration: 0.25,
          opacity: 0,
          delay: 0,
          ease: Power2.easeOut,
        },
      )
      animateTitle.to(
        '.showcase-gallery .gallery-zoom-wrapper .slide-caption span',
        {
          duration: 0.5,
          y: -100,
          opacity: 0,
          ease: Power2.easeInOut,
        },
      )
      gsap.to('.showcase-gallery a.slide-link', {
        duration: 0.3,
        opacity: 0,
        scale: 0.8,
        delay: 0,
        ease: Power2.easeOut,
      })
      document.body.classList.remove('grid-open')
      slider.enabled = true

      // get the DOM elements that we'll work with
      const DOM = getDOMElements()
      const allImages = document.querySelectorAll(
        '.gallery-thumbs-wrapper .trigger-item',
      )
      const currentImage = document.querySelector(
        '.gallery-zoom-wrapper .trigger-item',
      )
      const currentImageCaption = document.querySelector(
        '.gallery-zoom-wrapper .slide-caption',
      )
      const currentImageInner = document.querySelector(
        '.gallery-zoom-wrapper .trigger-item .section-image',
      )
      const flipstate = Flip.getState([allImages])
      const flipstate1 = Flip.getState([currentImage])
      allImages.forEach((image) => {
        let index = image.getAttribute('data-slide-index')
        let element = DOM.items[index]
        image.removeAttribute('data-slide-index')
        element.DOM.imageWrap.appendChild(image)
      })
      currentImage.removeAttribute('data-slide-index')
      DOM.currentItem.DOM.imageWrap.appendChild(currentImage)

      // Remove all the elements from the grid and current triggered image divs
      const liveGrid = document.querySelector('.gallery-thumbs-wrapper')
      const liveTriggeredImage = document.querySelector('.gallery-zoom-wrapper')
      while (liveGrid.firstChild) {
        liveGrid.removeChild(liveGrid.firstChild)
      }
      Flip.from(flipstate, {
        duration: 0.7,
        stagger: 0.02,
        ease: 'power3.inOut',
      })
      const _chain5 = document
        .querySelectorAll(Flip)
        .from(flipstate1, {
          duration: 0.7,
          stagger: 0.02,
          ease: 'power3.inOut',
          onComplete: function () {
            DOM.currentItem.DOM.imageWrap.appendChild(currentImageCaption)
            const triggeredItem = document.querySelector(
              '.clapat-slide.triggered-item',
            )
            if (triggeredItem != null) {
              triggeredItem.classList.remove('triggered-item')
            }
            const clapatSlides = document.querySelectorAll('.clapat-slide')
            clapatSlides.forEach((slide) => {
              slide.style.zIndex = ''
              slideInner = slide.querySelector('.slide-inner')
              slideInner.classList.remove('disabled')
            })
            document.body.classList.remove('disable-scroll', 'enable-trigger')
            gsap.set(
              document.querySelectorAll('.showcase-gallery .slide-caption'),
              {
                clearProps: 'opacity',
              },
            )
          },
        })
        .toArray()
      const _chain6 = document
        .querySelectorAll(_chain5)
        .to(
          document.querySelectorAll(
            '.showcase-gallery .has-scale-small .section-image',
          ),
          {
            duration: 0.7,
            ease: 'power3.inOut',
            scale: endScaleSmall,
          },
          0,
        )
        .toArray()
      const _chain7 = document
        .querySelectorAll(_chain6)
        .to(
          document.querySelectorAll(
            '.showcase-gallery .has-scale-medium .section-image',
          ),
          {
            duration: 0.7,
            ease: 'power3.inOut',
            scale: endScaleMedium,
          },
          0,
        )
        .toArray()
      gsap.to(
        document.querySelectorAll(
          'footer .link-text, .clapat-pagination, .progress-info, #filters-wrapper',
        ),
        {
          duration: 0.3,
          opacity: 1,
          y: 0,
          stagger: 0.05,
          delay: 0.4,
          ease: Power2.easeInOut,
        },
      )
      gsap.set(
        document.querySelectorAll(
          '.showcase-gallery .slider-fixed-content .caption-timeline span',
        ),
        {
          y: 100,
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
          delay: 0.3,
          ease: Power3.easeOut,
        },
      )
    }

    // Returns some DOM elements that are needed for showing/hiding the grid
    const getDOMElements = () => {
      // Item instances (slides)
      const items = []
      ;[...document.querySelector('.clapat-slide')].forEach((item) => {
        items.push(new Item(item))
      })

      // Cloned items
      const itemsCloned = []
      ;[...document.querySelector('.clapat-slide-clone')].forEach((item) => {
        itemsCloned.push(new Item(item))
      })
      let firstVisibleIndex = -1
      let direction = slider.opts.direction
      for (let i = 0; i < items.length; i++) {
        let item = items[i]
        let bounding = item.DOM.el.getBoundingClientRect()
        if (direction == 'vertical') {
          start = bounding.top
          end = bounding.bottom
        } else {
          start = bounding.left
          end = bounding.right
        }
        if (start <= 0 && end > 0) {
          firstVisibleIndex = i
          break
        }
      }
      const gridItems = []
      let currentIndex = -1
      if (direction == 'vertical') {
        let selectedItems = 0
        // in case of the vertical direction cloned items are reverted, last one becomes first
        if (firstVisibleIndex >= itemsCloned.length) {
          // the first visible index is a clone, therefore iterate back to the first clone
          for (
            index = firstVisibleIndex;
            index >= itemsCloned.length;
            index--
          ) {
            let item = items[index]
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item,
              })
            } else {
              currentIndex = index
            }
            selectedItems++
          }
          // and then from the beginning the rest of the clones
          for (index = 0; selectedItems < itemsCloned.length; index++) {
            let item = items[index]
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item,
              })
            } else {
              currentIndex = index
            }
            selectedItems++
          }
        } else {
          // the first visible index is not a clone, therefore iterate from the beginning of the items
          for (index = firstVisibleIndex; index < itemsCloned.length; index++) {
            let item = items[index]
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item,
              })
            } else {
              currentIndex = index
            }
            selectedItems++
          }
          // and then from the end of the clones
          for (
            index = items.length - 1;
            selectedItems < itemsCloned.length;
            index--
          ) {
            let item = items[index]
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item,
              })
            } else {
              currentIndex = index
            }
            selectedItems++
          }
        }
      } else {
        let iterator = 0
        while (iterator < itemsCloned.length) {
          let index = gsap.utils.wrap(
            0,
            items.length,
            firstVisibleIndex + iterator,
          )
          let item = items[index]
          if (!item.DOM.el.classList.contains('triggered-item')) {
            gridItems.push({
              item_index: index,
              item: item,
            })
          } else {
            currentIndex = index
          }
          iterator++
        }
      }
      return {
        items: items,
        grid: gridItems,
        currentItem: new Item(
          document.querySelector('.clapat-slide.triggered-item'),
        ),
        currentIndex: currentIndex,
      }
    }
    let bGridSwiped = false
    // Initialize the events
    const initEvents = () => {
      const items = document.querySelectorAll('.slide-inner')
      items.forEach((triggerItem) => {
        triggerItem.addEventListener('click', (event) => {
          if (document.querySelector('.showcase-gallery').length > 0) {
            event.currentTarget
              .closest('.clapat-slide')
              .classList.add('triggered-item')
            showGrid()
          }
        })
      })
      window.addEventListener('wheel', (event) => {
        if (
          document.body.classList.contains('grid-open') &&
          document.querySelector('.showcase-gallery').length > 0
        ) {
          hideGrid()
        }
      })
      window.addEventListener('touchmove', (event) => {
        if (
          document.body.classList.contains('grid-open') &&
          document.querySelector('.showcase-gallery').length > 0
        ) {
          bGridSwiped = true
        }
      })
      window.addEventListener('touchcancel', (event) => {
        if (
          document.body.classList.contains('grid-open') &&
          document.querySelector('.showcase-gallery').length > 0
        ) {
          bGridSwiped = false
        }
      })
      window.addEventListener('touchend', (event) => {
        if (
          document.body.classList.contains('grid-open') &&
          bGridSwiped &&
          document.querySelector('.showcase-gallery').length > 0
        ) {
          bGridSwiped = false
          hideGrid()
        }
      })
      const closeGrid = document.querySelector('.gallery-close-thumbs')
      if (closeGrid != null) {
        closeGrid.addEventListener('click', (event) => {
          if (
            document.body.classList.contains('grid-open') &&
            document.querySelector('.showcase-gallery').length > 0
          ) {
            hideGrid()
          }
        })
      }
      function moveThumbGrid(direction = 'next') {
        if (document.body.classList.contains('grid-open')) {
          const allImages = document.querySelectorAll(
            '.gallery-thumbs-wrapper .trigger-item',
          )
          if (allImages.length <= 0) {
            return
          }
          const currentImage = document.querySelector(
            '.gallery-zoom-wrapper .trigger-item',
          )
          const currentImageCaption = document.querySelector(
            '.gallery-zoom-wrapper .slide-caption',
          )
          const currentImageInner = document.querySelector(
            '.gallery-zoom-wrapper .trigger-item .section-image',
          )
          const liveGrid = document.querySelector('.gallery-thumbs-wrapper')
          const liveTriggeredImage = document.querySelector(
            '.gallery-zoom-wrapper',
          )
          let currentIndex = Number(
            currentImage.getAttribute('data-slide-index'),
          )
          let nextImage = null
          if (direction == 'next') {
            for (let i = 0; i < allImages.length; i++) {
              let image = allImages[i]
              let index = Number(image.getAttribute('data-slide-index'))
              if (nextImage == null) {
                if (index > currentIndex) {
                  nextImage = image
                  break
                }
              }
            }
          } else {
            for (let i = allImages.length - 1; i >= 0; i--) {
              let image = allImages[i]
              let index = Number(image.getAttribute('data-slide-index'))
              if (nextImage == null) {
                if (index < currentIndex) {
                  nextImage = image
                  break
                }
              }
            }
          }
          const flipstate = Flip.getState([
            allImages /*allImagesInner*/,
            ,
            currentImage /*currentImageInner*/,
          ])
          if (nextImage != null) {
            liveGrid.replaceChild(currentImage, nextImage)
          } else {
            if (direction == 'next') {
              nextImage = allImages[0]
              liveGrid.appendChild(currentImage)
            } else {
              nextImage = allImages[allImages.length - 1]
              liveGrid.insertBefore(currentImage, liveGrid.firstChild)
            }
          }
          liveTriggeredImage.appendChild(nextImage)

          // Get all the slides
          let slides = document.querySelectorAll('.clapat-slide')

          // Remove the caption in the image preview in order to replace it with the next
          let currentSlide = slides[currentIndex]
          let elWrap = currentSlide.querySelector('.slide-moving')
          if (elWrap != null) {
            animateTitle.to(
              '.showcase-gallery .gallery-zoom-wrapper .slide-caption span',
              {
                duration: 0.2,
                y: -15,
                opacity: 0,
                delay: 0,
                stagger: 0,
                ease: Power2.easeInOut,
                onComplete: function () {
                  elWrap.appendChild(currentImageCaption)
                },
              },
            )
          }

          // Update the triggered item flag in slider as it marks the current image
          document
            .querySelector('.clapat-slide')
            .classList.remove('triggered-item')
          let indexSlide = Number(nextImage.getAttribute('data-slide-index'))
          let nextSlide = slides[indexSlide]
          if (nextSlide) {
            nextSlide.classList.add('triggered-item')
            let elNextWrap = nextSlide.querySelector('.slide-moving')
            if (elNextWrap != null) {
              let nextCaption = elNextWrap.querySelector('.slide-caption')
              liveTriggeredImage.appendChild(nextCaption)
            }
          }

          // Move the slider to the next or prev slide
          slider.goTo(indexSlide)
          animateTitle.set('.showcase-gallery .slide-caption span', {
            y: 15,
            opacity: 0,
          })
          gsap.to('.showcase-gallery a.slide-link', {
            duration: 0.2,
            opacity: 0,
            scale: 0.8,
            ease: Power2.easeInOut,
          })
          Flip.from(flipstate, {
            duration: 0.5,
            stagger: 0,
            ease: 'power3.inOut',
            absolute: true,
            onComplete: function () {
              animateTitle.to(
                '.showcase-gallery .gallery-zoom-wrapper .slide-caption span',
                {
                  duration: 0.3,
                  y: 0,
                  opacity: 1,
                  delay: 0,
                  stagger: 0.03,
                  ease: Power2.easeOut,
                },
              )
              gsap.to('.showcase-gallery .gallery-zoom-wrapper a.slide-link', {
                duration: 0.3,
                opacity: 1,
                scale: 1,
                delay: 0,
                ease: Power2.easeOut,
              })
            },
          })
        }
      }
      function throttle(calback, delay = 250) {
        let shouldWait = false
        return (...args) => {
          if (shouldWait) return
          calback(...args)
          shouldWait = true
          setTimeout(() => {
            shouldWait = false
          }, delay)
        }
      }
      const nextBtn = document.querySelector('.cp-button-next')
      if (nextBtn != null) {
        nextBtn.addEventListener(
          'click',
          throttle((event) => {
            console.log('Click event ' + performance.now())
            moveThumbGrid('next')
          }, 500),
        )
      }
      const prevBtn = document.querySelector('.cp-button-prev')
      if (prevBtn != null) {
        prevBtn.addEventListener(
          'click',
          throttle((event) => {
            moveThumbGrid('prev')
          }, 500),
        )
      }
    }
    const previewModeEnabled = document.querySelector('.preview-mode-enabled')
    if (previewModeEnabled) {
      initEvents()
    }
    if (!isMobile()) {
      if (
        document
          .querySelector('.showcase-gallery')
          .classList.contains('tilt-gallery')
      ) {
        var timeout
        document.querySelector('.showcase-gallery').mousemove(function (e) {
          if (timeout) clearTimeout(timeout)
          timeout = setTimeout(callTiltSlider.bind(null, e))
        })
        function callTiltSlider(e) {
          moveItSlider(e, '.clapat-slider-viewport', 30)
        }
        function moveItSlider(e, target, movement) {
          const gallery = document.querySelector('.showcase-gallery')
          const rect = gallery.getBoundingClientRect()
          const relX = e.pageX - rect.left
          const relY = e.pageY - rect.top
          gsap.to(target, 1, {
            x: ((relX - rect.width / 2) / rect.width) * movement,
            y: ((relY - rect.height / 2) / rect.height) * movement,
            ease: 'power4.out',
          })
        }
        const dragWrapper = document.querySelector('.clapat-slider')
        dragWrapper.addEventListener('mousedown', function (evt) {
          dragWrapper.addEventListener(
            'mouseup mousemove',
            function handler(evt) {
              if (evt.type === 'mouseup') {
                // click

                document.body.classList.remove('scale-drag-y')
              }
              dragWrapper.off('mouseup mousemove', handler)
            },
          )
        })
        document
          .querySelector('.clapat-slider')
          .addEventListener('mouseup touchend', function () {
            document.body.classList.remove('scale-drag-y')
          })
        document.body.addEventListener('mouseleave', function () {
          document.body.classList.remove('scale-drag-y')
        })
        document
          .querySelectorAll(
            '.showcase-gallery.preview-mode-enabled .clapat-slide .slide-inner',
          )
          .forEach((element) => {
            element.addEventListener('mouseenter', function () {
              if (!document.body.classList.contains('scale-drag-x')) {
                this.querySelectorAll('video').forEach((video) => {
                  video.play()
                })
              }
            })
          })
        element.addEventListener('mouseleave', function () {
          if (!document.body.classList.contains('scale-drag-x')) {
            this.querySelectorAll('video').forEach((video) => {
              video.pause()
            })
          }
        })
        document
          .querySelector('.trigger-item')
          .addEventListener('mouseenter', function () {
            if (!document.body.classList.contains('scale-drag-x')) {
              this.querySelectorAll('video').forEach((video) => {
                video.play()
              })
            }
          })
          .addEventListener('mouseleave', function () {
            if (!document.body.classList.contains('scale-drag-x')) {
              this.querySelectorAll('video').forEach((video) => {
                video.pause()
              })
            }
          })
      }
      function wrapElements(selector, wrapperElement = 'div') {
        const elements = document.querySelectorAll(selector)
        elements.forEach((el) => {
          const wrapper = document.createElement(wrapperElement)
          el.parentNode.insertBefore(wrapper, el)
          wrapper.appendChild(el)
        })
      }
      wrapElements('.slide-hero-title span, .slide-hero-subtitle span')
      if (document.getElementById('filters-wrapper')) {
        document
          .querySelectorAll('li.filters-timeline a')
          .forEach((element) => {
            element.addEventListener('click', function (e) {
              e.preventDefault()
              document.querySelectorAll('.slide-inner').forEach((slide) => {
                slide.classList.remove('disabled')
              })
              gsap.to(document.querySelectorAll('.slide-inner .img-mask'), {
                duration: 0.2,
                opacity: 1,
                ease: 'power1.in',
              })
              let filterClass = this.getAttribute('data-filter')
              if (filterClass == '*') {
                return
              }
              document
                .querySelectorAll('.slide-inner:not(' + filterClass + ')')
                .forEach((slide) => {
                  slide.classList.add('disabled')
                })
              gsap.to(
                document.querySelectorAll(
                  '.slide-inner:not(' + filterClass + ') .img-mask',
                ),
                {
                  duration: 0.2,
                  opacity: 0.2,
                  ease: 'power1.out',
                },
              )
            })
          })
      }
      getElementById('#footer-container').addEventListener(
        'click',
        '.toggle-filters, #close-filters',
        function () {
          var closeFiltersDiv = document.getElementById('close-filters')
          if (!closeFiltersDiv) {
            closeFiltersDiv = document.createElement('div')
            closeFiltersDiv.id = 'close-filters'
            document
              .getElementById('footer-container')
              .appendChild(closeFiltersDiv)
          } else {
            closeFiltersDiv.parentNode.removeChild(closeFiltersDiv)
          }
          const filtersWrapper = document.getElementById('filters-wrapper')
          filtersWrapper.classList.toggle('on')
          filtersWrapper.classList.toggle('open')
          filtersWrapper.classList.toggle('active')
          document.querySelector('.toggle-filters').textContent =
            filtersWrapper.classList.contains('on') ? 'Close' : 'Filters'
          const filters = document.getElementById('filters')
          const filtersLi = filters.querySelectorAll('li')
          function getOuterHeight(el) {
            const styles = window.getComputedStyle(el)
            const margin =
              parseFloat(styles['marginTop']) +
              parseFloat(styles['marginBottom'])
            return Math.ceil(el.offsetHeight + margin)
          }
          const filtersHeight =
            4 +
            Array.from(filtersLi).reduce(
              (acc, li) => acc + getOuterHeight(li),
              0,
            )
          gsap.to(filters, {
            duration: 0.3,
            opacity: filtersWrapper.classList.contains('on') ? 1 : 0,
            height: filtersWrapper.classList.contains('on') ? filtersHeight : 0,
            delay: 0,
          })
          gsap.to('.active-filter-bg', {
            duration: 0.3,
            opacity: filtersWrapper.classList.contains('on') ? 1 : 0,
            delay: 0.1,
          })
        },
      )
      function initFiltersWrapper() {
        if (typeof window !== 'undefined') {
          const filtersWrapper = document.getElementById('filters-wrapper')
          if (filtersWrapper) {
            filtersWrapper.addEventListener('click', function () {
              if (window.innerWidth > 1024) {
                this.classList.add('open')
                setTimeout(() => this.classList.add('active'), 200)
              }
            })
          }
        }
      }

      // Call this function after your component mounts
      initFiltersWrapper()
      function initFiltersMouseLeave() {
        if (typeof window !== 'undefined') {
          const filters = document.getElementById('filters')
          if (filters) {
            filters.addEventListener('mouseleave', function () {
              if (window.innerWidth > 1024) {
                const filtersWrapper =
                  document.getElementById('filters-wrapper')
                filtersWrapper.classList.remove('open', 'active', 'on')
                gsap.to('#filters', {
                  duration: 0.3,
                  opacity: 0,
                  height: 0,
                  delay: 0.1,
                })
              }
            })
          }
        }
      }

      initFiltersMouseLeave()

      const filtersTimeline = document.querySelectorAll('.filters-timeline')
      const firstChild = filtersTimeline[0].querySelector(':first-child')
      const firstOffsetLeft = firstChild.offsetLeft
      const firstOffsetTop = firstChild.offsetTop

      filtersTimeline.forEach((timeline) => {
        timeline.addEventListener('mouseenter', function () {
          const currentElement = this
          const rect = currentElement.getBoundingClientRect()
          const offsetParent = currentElement.offsetParent || document.body
          const parentRect = offsetParent.getBoundingClientRect()

          const offsetLeft = rect.left - parentRect.left
          const offsetTop = rect.top - parentRect.top

          gsap.to('.active-filter-bg', {
            duration: 0.3,
            width: currentElement.offsetWidth,
            x: offsetLeft,
            y: offsetTop,
          })
        })
      })
    }
    document
      .querySelector('.trigger-item')
      .addEventListener('click', function () {
        document.body.classList.add('load-project-thumb')
        gsap.to('.showcase-gallery .gallery-zoom-wrapper .slide-caption span', {
          duration: 0.3,
          y: 15,
          opacity: 0,
          delay: 0,
          stagger: 0,
          ease: Power2.easeIn,
        })
        gsap.to('.showcase-gallery a.slide-link', {
          duration: 0.3,
          opacity: 0,
          scale: 0.8,
          delay: 0,
          ease: Power2.easeIn,
        })
        gsap.to(
          document.querySelectorAll('.gallery-thumbs-wrapper .trigger-item'),
          {
            duration: 0.3,
            y: 160,
            x: 0,
            opacity: 1,
            stagger: 0.05,
            delay: 0,
            ease: Power2.easeIn,
          },
        )
        setTimeout(function () {
          document.body.classList.add('show-loader')
        }, 300)
        gsap.to('footer, .carousel-nav-wrapper', {
          duration: 0.5,
          opacity: 0,
          ease: Power4.easeInOut,
        })
      })
  }
}

function LoadViaAjax() {
  CleanupBeforeAjax()
  FirstLoad()
  ScrollEffects()
  Sliders()
  PageLoadActions()
  FitThumbScreenGSAP()
  ShowcaseCarousel()
  ShowcaseSlider()
  ShowcasePortfolio()
  ShowcaseLists()
  ShowcaseGallery()
  FitThumbScreenWEBGL()
  LazyLoad()
  Shortcodes()
  JustifiedGrid()
  Lightbox()
  PlayVideo()
  ContactForm()
  ContactMap()
  CustomFunction()
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initializeApp)
  window.LoadViaAjax = LoadViaAjax
}

export { LoadViaAjax }
