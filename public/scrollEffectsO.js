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



export function ScrollEffects() {
 
  gsap.defaults({ overwrite: 'auto' })
  gsap.registerPlugin(ScrollTrigger, Flip)
  gsap.config({ nullTargetWarn: false })

  setTimeout(function () {
    var threeapp = document.getElementById('app')
    threeapp.className += 'active'
    $('body').append(threeapp)
  }, 1500)

  if ($('#showcase-slider').length > 0) {
    setTimeout(function () {
      var threeSlider = document.getElementById('canvas-slider')
      threeSlider.className += ' active'
      $('body').append(threeSlider)
    }, 1500)
  }

  if (!$('body').hasClass('project-nav-text')) {
    if ($('#project-nav').length > 0) {
      $('#main-content').addClass('solid-color')
      $('#main-page-content').addClass('project-page')
    }
  }

  if ($('.portfolio').length > 0) {
    $('#main-content').addClass('portfolio-page')
  }

  let enableSmoothScrollMobile = true
  if (isMobile()) {
    if (!enableSmoothScrollMobile) {
      document.body.classList.remove('smooth-scroll')
    }
  }

  if (document.body.classList.contains('smooth-scroll')) {
    const ScrollArea = document.querySelector('#content-scroll')
    class EdgeEasingPlugin extends Scrollbar.ScrollbarPlugin {
      constructor() {
        super(...arguments)
        this._remainMomentum = {
          x: 0,
          y: 0,
        }
      }
      transformDelta(delta) {
        const { limit, offset } = this.scrollbar
        const x = this._remainMomentum.x + delta.x
        const y = this._remainMomentum.y + delta.y
        // clamps momentum within [-offset, limit - offset]
        this.scrollbar.setMomentum(
          Math.max(-offset.x, Math.min(x, limit.x - offset.x)),
          Math.max(-offset.y, Math.min(y, limit.y - offset.y)),
        )
        return { x: 0, y: 0 }
      }
      onRender(remainMomentum) {
        Object.assign(this._remainMomentum, remainMomentum)
      }
    }

    EdgeEasingPlugin.pluginName = 'edgeEasing'
    Scrollbar.use(EdgeEasingPlugin)

    // Config

    if (!isMobile()) {
      var ScrollbarOptions = {
        damping: 0.1,
        renderByPixel: true,
        continuousScrolling: true,
        syncCallbacks: true,
      }
    }

    if (isMobile()) {
      var ScrollbarOptions = {
        damping: 0.2,
        renderByPixel: true,
        continuousScrolling: true,
        syncCallbacks: true,
      }
    }

    // Initialise
    var scrollbar = Scrollbar.init(ScrollArea /*ScrollbarOptions*/)

    ScrollTrigger.scrollerProxy('#content-scroll', {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.scrollTop = value
        }
        return scrollbar.scrollTop
      },
    })

    scrollbar.addListener(ScrollTrigger.update)
    ScrollTrigger.defaults({ scroller: ScrollArea })
  } // End Smooth Scroll

  if (isMobile()) {
    var heroTranslate = $('.hero-translate').height()
    var winHeight = $(window).height()
    var footer_height = $('footer').height()
    $(
      '.smooth-scroll main, .has-parallax, nav, .clapat-slider-wrapper:not(.content-slider), .showcase-lists .clapat-sync-slider, .next-project-image-wrapper, .slider-fixed-content',
    ).css({ height: winHeight })
    $('#main-page-content.project-page').css({
      'margin-bottom': winHeight * 2 - footer_height,
    })
    if (!$('body').hasClass('project-nav-text')) {
      $('#project-nav').css({ height: winHeight * 2, bottom: -winHeight * 2 })
    }
    $('.icon-wrap').removeClass('parallax-wrap')

    var resizeTime
    $(window).resize(function () {
      clearTimeout(resizeTime)
      resizeTime = setTimeout(doneResizing, 100)
    })

    function doneResizing() {
      var heroTranslate = $('.hero-translate').height()
      var winHeight = $(window).height()
      var footer_height = $('footer').height()
      $(
        '.smooth-scroll main, .has-parallax, nav, .clapat-slider-wrapper:not(.content-slider), .showcase-lists .clapat-sync-slider, .next-project-image-wrapper, .slider-fixed-content',
      ).css({ height: winHeight })
      $('#main-page-content.project-page').css({
        'margin-bottom': winHeight * 2 - footer_height,
      })
      if (!$('body').hasClass('project-nav-text')) {
        $('#project-nav').css({ height: winHeight * 2, bottom: -winHeight * 2 })
      }
      $('.icon-wrap').removeClass('parallax-wrap')
    }
  }

  // Hero AutoScroll On Page Load
  let autoScroll = null

  if (
    $('body').hasClass('load-project-thumb') ||
    $('body').hasClass('load-project-thumb-with-title')
  ) {
    const delayTime = $('body').hasClass('load-project-thumb-with-title')
      ? 0.6
      : 1.2

    if ($('#hero.has-image').hasClass('autoscroll')) {
      if ($('body').hasClass('smooth-scroll')) {
        scrollbar.scrollTop = 0 // Reset the scrollbar position to 0
        autoScroll = gsap.to(scrollbar, {
          duration: 0.7,
          scrollTop: 120,
          delay: delayTime,
          ease: Power2.easeInOut,
        })
      } else {
        autoScroll = gsap.to(window, {
          duration: 0.7,
          scrollTo: 120,
          delay: delayTime,
          ease: Power2.easeInOut,
        })
      }
    }
  }

  // Slider Center on click
  $('.autocenter').on('click', function () {
    var $window = $(window),
      $element = $(this),
      elementTop = $element.offset().top,
      elementHeight = $element.height(),
      viewportHeight = $window.height(),
      scrollIt = elementTop - (viewportHeight - elementHeight) / 2
    if ($('body').hasClass('smooth-scroll')) {
      var scrollOffset =
        scrollbar.offset.y +
        (elementTop - scrollbar.getSize().container.height / 2)
      autoScroll = gsap.to(scrollbar, {
        duration: 0.8,
        scrollTop: scrollOffset + elementHeight / 2,
        ease: Power4.easeInOut,
      })
    } else {
      $('html, body').animate({ scrollTop: scrollIt }, 350)
    }
  })

  // Add an event listener for the mousewheel event
  window.addEventListener('wheel', function (event) {
    if (autoScroll !== null) {
      // Kill the scroll trigger animation
      autoScroll.kill()
      autoScroll = null
    }
  })

  if ($('body').hasClass('swap-logo')) {
    var imgLogoWhite = document.querySelector('.white-logo')
    var originalSrcWhite = 'images/logo-white.png'
    var updatedSrcWhite = 'images/logo-white-symbol.png'

    var imgLogoBlack = document.querySelector('.black-logo')
    var originalSrcBlack = 'images/logo.png'
    var updatedSrcBlack = 'images/logo-symbol.png'

    // Create a scroll trigger

    ScrollTrigger.create({
      trigger: 'header', // Set the trigger element
      start: 'top 120px',
      onEnter: function () {
        //Restore the original image source
        imgLogoWhite.src = originalSrcWhite
        imgLogoBlack.src = originalSrcBlack
        gsap.to($('#logo'), { duration: 0.2, opacity: 1 })
      },
      onEnterBack: function () {
        // Restore the original image source
        gsap.to($('#logo'), {
          duration: 0.2,
          opacity: 0,
          onComplete: function () {
            imgLogoWhite.src = originalSrcWhite
            imgLogoBlack.src = originalSrcBlack
            gsap.to($('#logo'), { duration: 0.2, opacity: 1 })
          },
        })

        $('header').removeClass('swapped-logo')
      },
      onLeave: function () {
        // Change the image source
        gsap.to($('#logo'), {
          duration: 0.2,
          opacity: 0,
          onComplete: function () {
            imgLogoWhite.src = updatedSrcWhite
            imgLogoBlack.src = updatedSrcBlack
            gsap.to($('#logo'), { duration: 0.2, opacity: 1 })
          },
        })

        $('header').addClass('swapped-logo')
      },
      onLeaveBack: function () {
        // Change the image source
        gsap.to($('#logo'), {
          duration: 0.2,
          opacity: 0,
          onComplete: function () {
            imgLogoWhite.src = updatedSrcWhite
            imgLogoBlack.src = updatedSrcBlack
            gsap.to($('#logo'), { duration: 0.2, opacity: 1 })
          },
        })

        $('header').addClass('swapped-logo')
      },
    })

    $('a.ajax-link, a.slide-link, a.next-ajax-link-page').on(
      'click',
      function () {
        // Restore the original image source when you leave the page
        if ($('header').hasClass('swapped-logo')) {
          gsap.to($('#logo'), {
            duration: 0.2,
            opacity: 0,
            onComplete: function () {
              imgLogoWhite.src = originalSrcWhite
              imgLogoBlack.src = originalSrcBlack
              gsap.to($('#logo'), { duration: 0.2, opacity: 1 })
            },
          })
        }
      },
    )
  }

  // Back To Top
  $('#backtotop').on('click', function () {
    if ($('body').hasClass('smooth-scroll')) {
      gsap.to(scrollbar, {
        duration: 1.5,
        scrollTop: 0,
        delay: 0.1,
        ease: Power4.easeInOut,
      })
      gsap.to('#ball', {
        duration: 0.3,
        borderWidth: '4px',
        scale: 0.5,
        borderColor: '#999999',
        delay: 0.15,
      })
    } else {
      $('html,body').animate({ scrollTop: 0 }, 800)
      gsap.to('#ball', {
        duration: 0.3,
        borderWidth: '4px',
        scale: 0.5,
        borderColor: '#999999',
        delay: 0.15,
      })
    }
  })

  //Scroll Down
  $('.scroll-down, .hero-arrow.link').on('click', function () {
    var heroheight = $('#hero').height()
    if ($('body').hasClass('smooth-scroll')) {
      gsap.to(scrollbar, {
        duration: 1.5,
        scrollTop: heroheight,
        ease: Power4.easeInOut,
      })
      gsap.to('#ball', {
        duration: 0.3,
        borderWidth: '4px',
        scale: 0.5,
        borderColor: '#999999',
        delay: 0.15,
      })
    } else {
      $('html,body').animate({ scrollTop: heroheight }, 800)
      gsap.to('#ball', {
        duration: 0.3,
        borderWidth: '4px',
        scale: 0.5,
        borderColor: '#999999',
        delay: 0.15,
      })
    }
  })

  // Zoom Gallery
  gsap.utils.toArray('.zoom-gallery').forEach((zoomGallery) => {
    const zoomGalleryWrapper = zoomGallery.querySelector(
      '.zoom-wrapper-gallery',
    )
    const zoomWrapperThumb = zoomGallery.querySelector('.zoom-wrapper-thumb')
    const ZoomItem = zoomGallery.querySelector('.zoom-center .zoom-img-wrapper')
    const zoomImgsWrapper = zoomGallery.querySelectorAll(
      'li:not(.zoom-center) .zoom-img-wrapper',
    )
    const zoomImgsWrapperAll = zoomGallery.querySelectorAll(
      'li .zoom-img-wrapper',
    )
    const heightRatio = zoomGalleryWrapper.dataset.heightratio
    const zoomImgsHeight = ZoomItem.offsetWidth * heightRatio
    const paddingBottom = (window.innerHeight - zoomImgsHeight) / 2

    gsap.set(zoomGallery, { paddingBottom: paddingBottom })
    gsap.set(zoomGalleryWrapper, { height: zoomImgsHeight })
    gsap.set(zoomWrapperThumb, {
      top: -paddingBottom,
      height: window.innerHeight,
    })

    gsap.to(zoomGallery, {
      scrollTrigger: {
        trigger: zoomGallery,
        start: function () {
          const startPin =
            (window.innerHeight - zoomGalleryWrapper.offsetHeight) / 2
          return 'top +=' + startPin
        },
        end: '+=200%',
        scrub: true,
        pin: true,
      },
    })

    gsap.to(zoomImgsWrapper, {
      scale: 0.9,
      opacity: 0,
      borderRadius: '0',
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: zoomGallery,
        start: function () {
          const startPin =
            (window.innerHeight - zoomGalleryWrapper.offsetHeight) / 2
          return 'top +=' + startPin
        },
        end: '+=25%',
        scrub: true,
      },
    })

    const state = Flip.getState(ZoomItem)
    zoomWrapperThumb.appendChild(ZoomItem)

    const zoomAnimation = Flip.from(state, {
      borderRadius: '0',
      absolute: true,
    })

    ScrollTrigger.create({
      trigger: zoomGalleryWrapper,
      start: function () {
        const startPin =
          (window.innerHeight - zoomGalleryWrapper.offsetHeight) / 2
        return 'top +=' + startPin
      },
      end: '+=200%',
      scrub: true,
      animation: zoomAnimation,
    })
  })

  // Carousel Shortcode
  gsap.utils
    .toArray('.carousel-shortcode-pin')
    .forEach((carouselShortcodePin) => {
      const carouselShortcodeThumbs = carouselShortcodePin.querySelector(
        '.carousel-shortcode-thumbs',
      )
      const carouselShortcodeCaption = carouselShortcodePin.querySelector(
        '.carousel-shortcode-caption',
      )
      const carouselShortcodeWrapper = carouselShortcodePin.closest(
        '.carousel-shortcode-wrapper',
      )
      const carouselShortcodeTitleHide = carouselShortcodePin.querySelectorAll(
        '.carousel-shortcode-title-hide span',
      )
      const carouselShortcodeTitleShow = carouselShortcodePin.querySelectorAll(
        '.carousel-shortcode-title-show span',
      )
      const carouselShortcodeCTA = carouselShortcodePin.querySelector(
        '.carousel-shortcode-cta',
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
        '.carousel-shortcode-thumbs .clapat-item',
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
          'clapatItemsPause',
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
          '+=4',
        )
        .to(
          carouselShortcodeCTA,
          {
            opacity: 1,
            scale: 1,
            y: 0,
          },
          '<+=50%',
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

      if (!isMobile()) {
        $('.carousel-shortcode-thumbs .clapat-item .slide-inner')
          .on('mouseenter', function () {
            $('#ball p').remove()
            var $this = $(this)
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
            $('#ball').addClass('with-blur')
            $('#ball').append(
              '<p class="center-first">' + $this.data('centerline') + '</p>',
            )
            $(this)
              .find('video')
              .each(function () {
                $(this).get(0).play()
              })
          })
          .on('mouseleave', function () {
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
            $('#ball').removeClass('with-blur')
            $('#ball p').remove()
            $(this)
              .find('video')
              .each(function () {
                $(this).get(0).pause()
              })
          })

        $('.showcase-portfolio .clapat-item .slide-inner')
          .on('mouseenter', function () {
            if (!$('.showcase-portfolio').hasClass('list-grid')) {
              gsap.set($(this).find('.slide-title span'), { y: 30, opacity: 0 })
              gsap.set($(this).find('.slide-cat span'), { y: 30, opacity: 0 })
              gsap.to($(this).find('.slide-caption'), {
                duration: 0.2,
                opacity: 1,
                ease: Power2.easeOut,
              })
              gsap.to($(this).find('.slide-title span'), {
                duration: 0.3,
                y: 0,
                opacity: 1,
                ease: Power2.easeOut,
              })
              gsap.to($(this).find('.slide-cat span'), {
                duration: 0.3,
                y: 0,
                opacity: 1,
                ease: Power2.easeOut,
              })
            }
          })
          .on('mouseleave', function () {
            if (!$('.showcase-portfolio').hasClass('list-grid')) {
              gsap.to($(this).find('.slide-caption'), {
                duration: 0.3,
                opacity: 0,
                delay: 0.1,
                ease: Power2.easeOut,
              })
              gsap.to($(this).find('.slide-title span'), {
                duration: 0.3,
                y: -30,
                opacity: 0,
                ease: Power2.easeOut,
              })
              gsap.to($(this).find('.slide-cat span'), {
                duration: 0.5,
                y: -30,
                delay: 0.05,
                opacity: 0,
                ease: Power2.easeOut,
              })
            }
          })
      }

      $('.trigger-item').on('click', function () {
        $('body').addClass('load-project-thumb')
        $('.carousel-shortcode-thumbs .trigger-item').each(function () {
          if (!$(this).hasClass('above')) {
            gsap.to($(this), {
              duration: 0.5,
              delay: 0,
              opacity: 0,
              ease: Power4.easeInOut,
            })
          } else {
            gsap.to($(this).parent(), {
              duration: 0.3,
              opacity: 1,
              ease: Power4.easeInOut,
            })
            gsap.to($(this), {
              duration: 0.5,
              delay: 0.4,
              opacity: 0,
              ease: Power4.easeInOut,
            })
          }
        })
        setTimeout(function () {
          $('body').addClass('show-loader')
        }, 300)
        gsap.to(
          'footer, .carousel-nav-wrapper, .showcase-portfolio.list-grid',
          { duration: 0.5, opacity: 0, ease: Power4.easeInOut },
        )
        gsap.to('#ball', {
          duration: 0.3,
          borderWidth: '4px',
          scale: 0.5,
          borderColor: '#999999',
          backgroundColor: 'transparent',
        })
        gsap.to('#ball-loader', {
          duration: 0.3,
          borderWidth: '4px',
          top: 0,
          left: 0,
        })
        $('#ball').removeClass('with-blur')
        $('#ball p').remove()
      })
    })

  // News Shortcode
  gsap.utils.toArray('.news-shortcode').forEach((newsShortcode) => {
    const newsPosts = Array.from(newsShortcode.querySelectorAll('.news-post'))

    newsPosts.forEach((newsPost, index) => {
      newsPosts[0].classList.add('in-view')
      gsap.set(newsPosts[0], { opacity: 1 })

      const newsContent = newsPost.querySelector('.post-content')

      const newsContentHeight = gsap.getProperty(newsContent, 'height')

      if (index === 0) {
        gsap.set(newsContent, { height: 'auto' })
      } else {
        gsap.set(newsContent, { height: 0 })
      }

      gsap.to(newsPost, {
        scrollTrigger: {
          trigger: newsPost,
          start: () => {
            const startPin = window.innerHeight / 2 + newsPost.offsetHeight / 2
            return 'top +=' + startPin
          },
          end: () => {
            const endPin = newsPost.offsetHeight + newsContentHeight / 1.8
            return '+=' + endPin
          },
          onEnter: () => {
            newsPost.classList.add('in-view')
            gsap.to(newsPost, {
              duration: 0.2,
              opacity: 1,
              ease: 'power2.easeOut',
            })
            gsap.to(newsContent, {
              duration: 0.2,
              height: 'auto',
              ease: 'power2.easeOut',
            })
          },
          onLeave: () => {
            if (index !== newsPosts.length - 1) {
              newsPost.classList.remove('in-view')
              gsap.to(newsPost, {
                duration: 0.2,
                opacity: 0.2,
                ease: 'power2.easeOut',
              })
              gsap.to(newsContent, {
                duration: 0.2,
                height: 0,
                ease: 'power2.easeOut',
              })
            }
          },
          onEnterBack: () => {
            newsPost.classList.add('in-view')
            gsap.to(newsPost, {
              duration: 0.2,
              opacity: 1,
              ease: 'power2.easeOut',
            })
            gsap.to(newsContent, {
              duration: 0.2,
              height: 'auto',
              ease: 'power2.easeOut',
            })
          },
          onLeaveBack: () => {
            if (index !== 0) {
              newsPost.classList.remove('in-view')
              gsap.to(newsPost, {
                duration: 0.2,
                opacity: 0.2,
                ease: 'power2.easeOut',
              })
              gsap.to(newsContent, {
                duration: 0.2,
                height: 0,
                ease: 'power2.easeOut',
              })
            }
          },
        },
      })
    })
  })

  // List Rotator
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

  // Clipped Image
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

      var clippedImageAnimation = gsap.to(clippedImage, {
        clipPath: 'inset(0% 0% 0%)',
        scale: 1,
        duration: 1,
        ease: 'Linear.easeNone',
      })

      var clippedImageScene = ScrollTrigger.create({
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

  // Horizontal Gallery
  const panelsSections = gsap.utils.toArray('.panels')
  for (var i = 0; i < panelsSections.length; i++) {
    thePanelsSection = panelsSections[i]
    const panels = gsap.utils.toArray(
      '.panels-container .panel',
      thePanelsSection,
    )
    const panelsImgs = gsap.utils.toArray(
      '.panels-container .panel img',
      thePanelsSection,
    )
    const panelsContainer = thePanelsSection.querySelector('.panels-container')
    const widthRatio = thePanelsSection.dataset.widthratio

    gsap.set([panelsContainer, panels], { height: window.innerHeight * 0.6 })
    gsap.set(panels, { width: window.innerHeight * widthRatio })

    var totalPanelsWidth = 0
    panels.forEach(function (panel) {
      totalPanelsWidth += $(panel).outerWidth(true)
    })
    gsap.set(panelsContainer, { width: totalPanelsWidth })

    gsap.set(thePanelsSection, {
      height:
        panelsContainer.offsetWidth - innerWidth + panelsContainer.offsetHeight,
    })

    gsap.to(panels, {
      x: -totalPanelsWidth + innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: panelsContainer,
        pin: true,
        start: function () {
          const startPin =
            (window.innerHeight - panelsContainer.offsetHeight) / 2
          return 'top +=' + startPin
        },
        end: function () {
          const endPin = panelsContainer.offsetWidth - innerWidth
          return '+=' + endPin
        },
        scrub: 1,
      },
    })
  }

  // Slowed Pin Section
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

  imagesLoaded('body', function () {
    // Pinned Gallery
    gsap.utils.toArray('.pinned-gallery').forEach((pinnedGallery) => {
      if (
        pinnedGallery &&
        pinnedGallery.classList.contains('random-img-ratation')
      ) {
        const rotatedImages = pinnedGallery.querySelectorAll(
          '.pinned-image:not(:first-child):not(:last-child)',
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

    // Pinned Sections
    if (window.innerWidth > 479) {
      var pinnedSection = gsap.utils.toArray('.pinned-element')
      pinnedSection.forEach(function (pinElement) {
        var parentNode = pinElement.parentNode
        var scrollingElement = parentNode.querySelector('.scrolling-element')

        var pinnedScene = ScrollTrigger.create({
          trigger: pinElement,
          //start: "top top-=-50px",
          start: function () {
            const startPin = (window.innerHeight - pinElement.offsetHeight) / 2
            return 'top +=' + startPin
          },
          end: () =>
            `+=${scrollingElement.offsetHeight - pinElement.offsetHeight}`,
          pin: pinElement,
        })
      })
    }

    // Vertical Parallax Columns
    if (window.innerWidth > 767) {
      gsap.utils.toArray('.vertical-parallax').forEach((parallaxElement) => {
        var startMovement = -(
          parallaxElement.offsetHeight * parallaxElement.dataset.startparallax
        )
        var endMovement = -(
          parallaxElement.offsetHeight * parallaxElement.dataset.endparallax
        )
        gsap.fromTo(
          parallaxElement,
          { y: -startMovement },
          {
            y: endMovement,
            ease: 'none',
            scrollTrigger: {
              trigger: parallaxElement,
              scrub: 0.5,
            },
          },
        )
      })
    }

    // Moving Gallery
    gsap.utils.toArray('.moving-gallery').forEach((section, index) => {
      const w = section.querySelector('.wrapper-gallery')
      const [x, xEnd] =
        index % 2
          ? [section.offsetWidth - w.scrollWidth, 0]
          : [0, section.offsetWidth - w.scrollWidth]
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        },
      )
    })

    // Reveal Gallery
    gsap.utils.toArray('.reveal-gallery').forEach((revealGallery) => {
      const imgFixed = revealGallery.querySelector('.reveal-img-fixed')
      const imgRotateLeft = revealGallery.querySelector(
        '.reveal-img:first-child',
      )
      const imgRotateRight = revealGallery.querySelector(
        '.reveal-img:last-child',
      )

      gsap.set(imgRotateLeft, { left: '50%', transform: 'translateX(-50%)' })
      gsap.set(imgRotateRight, { left: '50%', transform: 'translateX(-50%)' })

      function setImgProperties() {
        gsap.set(imgRotateLeft, {
          x: -imgFixed.offsetWidth * 0.35,
          height: revealGallery.offsetHeight,
          scale: 0.9,
        })
        gsap.set(imgRotateRight, {
          x: imgFixed.offsetWidth * 0.35,
          height: revealGallery.offsetHeight,
          scale: 0.9,
        })
      }
      setImgProperties()

      window.addEventListener('resize', setImgProperties)

      gsap.to(imgRotateLeft, {
        scrollTrigger: {
          trigger: revealGallery,
          scrub: true,
          start: 'top 100%',
          end: function () {
            const durationHeight =
              revealGallery.offsetHeight + window.innerHeight
            return '+=' + durationHeight
          },
          invalidateOnRefresh: true,
        },
        x: function () {
          return -imgFixed.offsetWidth * 0.65
        },
        rotation: -12,
      })

      gsap.to(imgRotateRight, {
        scrollTrigger: {
          trigger: revealGallery,
          scrub: true,
          start: 'top 100%',
          end: function () {
            const durationHeight =
              revealGallery.offsetHeight + window.innerHeight
            return '+=' + durationHeight
          },
          invalidateOnRefresh: true,
        },
        x: function () {
          return imgFixed.offsetWidth * 0.65
        },
        rotation: 12,
      })
    })

    // Roling Text
    let direction = 1
    const marqueeFw = roll('.marquee-text.fw', { duration: 20 })
    const marqueeBw = roll('.marquee-text.bw', { duration: 20 }, true)

    scroll = ScrollTrigger.create({
      onUpdate(self) {
        if (self.direction !== direction) {
          direction *= -1
          gsap.to([marqueeFw, marqueeBw], {
            timeScale: direction,
            overwrite: true,
          })
        }
      },
    })

    function roll(targets, vars, reverse) {
      const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 10)
        },
      })
      vars = vars || {}
      vars.ease || (vars.ease = 'none')
      gsap.utils.toArray(targets).forEach((el) => {
        let clone = el.cloneNode(true)
        el.parentNode.appendChild(clone)
        gsap.set(clone, {
          position: 'absolute',
          top: el.offsetTop,
          left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
        })
        gsap.to(clone.querySelectorAll('span'), {
          duration: 0.7,
          y: 0,
          opacity: 1,
          delay: 0.5,
          ease: Power2.easeOut,
        })
        tl.to([el, clone], { xPercent: reverse ? 100 : -100, ...vars }, 0)
      })
      return tl
    }
  })

  // Hero Section Effects
  if ($('body').hasClass('hero-below-caption')) {
    // Create Scripts
  } else {
    if ($('#hero').hasClass('has-image')) {
      const heroCaption = document.querySelector(
        '#hero.has-image #hero-caption',
      )
      const heroImage = document.querySelector('#hero-image-wrapper')

      function setheroImageProperties() {
        gsap.set(heroCaption, { height: window.innerHeight })
        gsap.set(heroImage, { height: window.innerHeight })
      }

      setheroImageProperties()

      var heroImagePin = gsap.to('#hero-image-wrapper', {
        scrollTrigger: {
          trigger: $('#hero.has-image'),
          start: 'top top',
          end: function () {
            const durationHeight =
              $('#hero.has-image').outerHeight() - window.innerHeight
            return '+=' + durationHeight
          },
          pin: '#hero-background-layer',
        },
      })

      window.addEventListener('resize', setheroImageProperties)

      var heroImageParallax = gsap.to('.parallax-scroll-image #hero-bg-image', {
        duration: 1,
        backgroundPosition: 'center ' + 95 + '%',
        ease: Linear.easeNone,
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: () => `+=${$('#hero').outerHeight() - window.innerHeight}`,
          scrub: true,
        },
      })

      var heroFooterParallax = gsap.to('#hero-footer', {
        duration: 1,
        yPercent: 15,
        opacity: 0,
        ease: Linear.easeNone,
        scrollTrigger: {
          trigger: '#hero-description',
          start: 'top 50%',
          end: function () {
            var durationHeight = $('#hero-description').outerHeight() * 2
            return '+=' + durationHeight
          },
          scrub: true,
        },
      })
    }

    var heroCaptionParallax = gsap.to('#hero-caption.parallax-scroll-caption', {
      duration: 1,
      yPercent: 5,
      opacity: 0.5,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: () => `+=${$('#hero').outerHeight()}`,
        scrub: true,
      },
    })
  }

  // Page and Project Navigation

  if ($('body').hasClass('hero-below-caption')) {
    // Create Scripts
  } else {
    var NextheroPin = gsap.to('.next-project-wrap', {
      duration: 1,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: '.next-project-wrap',
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: true,
      },
    })

    var nextProjectImageParallax = gsap.to('.next-project-image', {
      duration: 1,
      clipPath: 'inset(0 0%)',
      scale: 1.05,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: '#project-nav',
        start: 'top 0%',
        end: '+=100%',
        scrub: true,
      },
    })

    var nextAllWorks = gsap.to('.all-works', {
      opacity: 0,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: '#project-nav',
        start: 'top 0%',
        end: '+=50%',
        scrub: true,
      },
    })

    var nextProjectProgress = gsap.to('.next-hero-progress span', {
      duration: 1,
      width: '100%',
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: '#project-nav',
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
    })

    var startCount = 0
    var num = { var: startCount }
    var numbers = document.querySelector('.next-hero-counter span')
    if (numbers) {
      var nextProjectCounter = gsap
        .timeline({
          scrollTrigger: {
            trigger: '#project-nav',
            start: 'top top',
            end: '+=100%',
            scrub: true,
          },
        })
        .to(num, {
          var: 100,
          duration: 1,
          ease: Linear.easeNone,
          onUpdate: changeNumber,
        })
    }

    function changeNumber() {
      numbers.innerHTML = num.var.toFixed()
    }

    var nextPageCaptionParallax = gsap.to('.page-nav-caption', {
      duration: 1,
      top: '0',
      scale: 1,
      opacity: 1,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: '#page-nav',
        start: 'top 100%',
        end: () =>
          `+=${$('#page-nav').outerHeight() + $('footer').outerHeight()}`,
        scrub: true,
      },
    })
  }

  // Elements Animation

  var contentVideo = gsap.utils.toArray('.content-video-wrapper')
  contentVideo.forEach(function (videoPlay) {
    var video = videoPlay.querySelector('video')

    var videoScene = ScrollTrigger.create({
      trigger: videoPlay,
      start: 'top 100%',
      end: () => `+=${videoPlay.offsetHeight + window.innerHeight * 2}`,
      onEnter: function () {
        video.play()
      },
      onLeave: function () {
        video.pause()
      },
      onEnterBack: function () {
        video.play()
      },
      onLeaveBack: function () {
        video.pause()
      },
    })
  })

  var hasParallax = gsap.utils.toArray('.has-parallax')
  hasParallax.forEach(function (hParallax) {
    var bgImage = hParallax.querySelector('img')
    var bgVideo = hParallax.querySelector('video')
    var parallax = gsap.fromTo(
      [bgImage, bgVideo],
      { y: '-20%', scale: 1.15 },
      { y: '20%', scale: 1, duration: 1, ease: Linear.easeNone },
    )
    var parallaxScene = ScrollTrigger.create({
      trigger: hParallax,
      start: 'top 100%',
      end: () => `+=${hParallax.offsetHeight + window.innerHeight}`,
      animation: parallax,
      scrub: true,
    })
  })

  var hasAnimation = gsap.utils.toArray('.has-animation')
  hasAnimation.forEach(function (hAnimation) {
    var delayValue = parseInt(hAnimation.getAttribute('data-delay')) || 0
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

  $('.has-cover').css('background-color', function () {
    return $(this).parents('.content-row').data('bgcolor')
  })

  $('.has-mask').each(function () {
    var words = $(this).text().split(' ')
    var total = words.length
    $(this).empty()
    for (index = 0; index < total; index++) {
      $(this).append($('<span /> ').text(words[index]))
    }
  })

  $('.has-mask span').each(function () {
    var words = $(this).text().split(' ')
    var total = words.length
    $(this).empty()
    for (index = 0; index < total; index++) {
      $(this).append($('<span /> ').text(words[index]))
    }
  })

  var hasMask = gsap.utils.toArray('.has-mask')
  hasMask.forEach(function (hMask) {
    var delayValue = parseInt(hMask.getAttribute('data-delay')) || 0
    var spanMask = hMask.querySelectorAll('span > span')
    gsap.to(spanMask, {
      scrollTrigger: {
        trigger: hMask,
        start: 'top 85%',
        onEnter: function () {
          hMask.classList.add('animated')
        },
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: Power2.easeOut,
      delay: delayValue / 1000,
    })
  })

  $('.has-mask-fill').each(function () {
    var words = $(this).text()
    var total = words
    $(this).empty()
    $(this).append($('<span /> ').text(words))
  })

  $('.has-mask-fill.block-title').each(function () {
    var words = $(this).text().split(' ')
    var total = words.length
    $(this).empty()
    for (index = 0; index < total; index++) {
      $(this).append($('<span /> ').text(words[index]))
    }
  })

  var hasMaskFill = gsap.utils.toArray('.has-mask-fill')
  hasMaskFill.forEach(function (hMaskFill) {
    var spanFillMask = hMaskFill.querySelectorAll('span')
    gsap.to(spanFillMask, {
      scrollTrigger: {
        trigger: hMaskFill,
        start: 'top 85%',
        end: () => `+=${hMaskFill.offsetHeight * 2}`,
        scrub: 1,
      },
      duration: 1,
      backgroundSize: '200% 100%',
      stagger: 0.5,
      ease: Linear.easeNone,
    })
  })

  $('.has-opacity').each(function () {
    var words = $(this).text().split(' ')
    var total = words.length
    $(this).empty()
    for (index = 0; index < total; index++) {
      $(this).append($('<span /> ').text(words[index] + ' '))
    }
  })

  var hasOpacity = gsap.utils.toArray('.has-opacity')
  hasOpacity.forEach(function (hOpacity) {
    var spanOpacity = hOpacity.querySelectorAll('span')
    gsap.to(spanOpacity, {
      scrollTrigger: {
        trigger: hOpacity,
        start: 'top 85%',
        end: () => `+=${hOpacity.offsetHeight}`,
        scrub: 1,
      },
      duration: 1,
      opacity: 1,
      stagger: 0.5,
      ease: Linear.easeNone,
    })
  })

  var counter = gsap.utils.toArray('.number-counter')
  counter.forEach(function (countNumber) {
    gsap.fromTo(
      countNumber,
      { innerText: countNumber.innerText },
      {
        innerText: function () {
          return Math.floor(parseFloat(countNumber.getAttribute('data-target')))
        },
        duration: 1,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: countNumber,
          start: 'top 90%',
        },
      },
    )
  })

  var titleMovingForward = gsap.utils.toArray('.title-moving-forward')
  titleMovingForward.forEach(function (movingTitle) {
    var parallax = gsap.to(movingTitle, 1, {
      x: -(movingTitle.offsetWidth - window.innerWidth),
      ease: Linear.easeNone,
    })
    var parallaxScene = ScrollTrigger.create({
      trigger: movingTitle,
      end: () => `+=${movingTitle.offsetHeight + window.innerHeight}`,
      animation: parallax,
      scrub: 2,
    })
  })

  var titleMovingBackward = gsap.utils.toArray('.title-moving-backward')
  titleMovingBackward.forEach(function (movingTitle) {
    gsap.set(movingTitle, { x: -(movingTitle.offsetWidth - window.innerWidth) })
    var parallax = gsap.to(movingTitle, 1, { x: 0, ease: Linear.easeNone })
    var parallaxScene = ScrollTrigger.create({
      trigger: movingTitle,
      end: () => `+=${movingTitle.offsetHeight + window.innerHeight}`,
      animation: parallax,
      scrub: 2,
    })
  })

  // Content Row Options

  if ($('.content-row').hasClass('light-section')) {
    $('.light-section').each(function (i) {
      $(this).wrap(
        "<div class='light-section-wrapper'><div class='light-section-container content-max-width'></div></div>",
      )
      $('body')
        .find('.light-section-wrapper')
        .each(function (i) {
          $(this).css('background-color', function () {
            return $(this).children().children().data('bgcolor')
          })
        })
    })
  }

  if ($('.content-row').hasClass('dark-section')) {
    $('.dark-section').each(function (i) {
      $(this).wrap(
        "<div class='dark-section-wrapper'><div class='dark-section-container content-max-width'></div></div>",
      )
      $('body')
        .find('.dark-section-wrapper')
        .each(function (i) {
          $(this).css('background-color', function () {
            return $(this).children().children().data('bgcolor')
          })
        })
    })
  }

  $('.content-row.has-clip-path').parent().parent().addClass('clip-effects')

  var hasClipPath = gsap.utils.toArray('.has-clip-path')
  hasClipPath.forEach(function (hClipPath) {
    var clipPath = gsap.to(hClipPath.closest('.clip-effects'), {
      clipPath: 'inset(0% 0%)',
      duration: 1,
      ease: 'Linear.easeNone',
    })

    var clipPathScene = ScrollTrigger.create({
      trigger: hClipPath,
      start: 'top 100%',
      end: `+=${window.innerHeight / 3}`,
      animation: clipPath,
      scrub: 1,
    })
  })

  if ($('.change-header-color').length > 0) {
    imagesLoaded('body', function () {
      setTimeout(function () {
        var changeHeaderColor = gsap.utils.toArray('.change-header-color')
        changeHeaderColor.forEach(function (changeHeaderElement) {
          var pageHeader = document.querySelector('header')
          gsap.to(changeHeaderElement, {
            scrollTrigger: {
              trigger: changeHeaderElement,
              start: 'top 8%',
              end: () => `+=${changeHeaderElement.offsetHeight}`,
              //markers: true,
              onEnter: function () {
                pageHeader.classList.add('white-header')
              },
              onEnterBack: function () {
                pageHeader.classList.add('white-header')
              },
              onLeave: function () {
                pageHeader.classList.remove('white-header')
              },
              onLeaveBack: function () {
                pageHeader.classList.remove('white-header')
              },
            },
          })
        })
      }, 100)
    })
  }

  if ($('#page-content').hasClass('light-content')) {
    if ($('#project-nav').hasClass('change-header')) {
      imagesLoaded('body', function () {
        setTimeout(function () {
          var pageNav = document.querySelector('#project-nav.change-header')
          if (pageNav) {
            var pageContent = document.querySelector('#page-content')
            var nextPageCaptionParallax = gsap.to('.page-nav-caption', {
              scrollTrigger: {
                trigger: pageNav,
                start: 'top 8%',
                end: () => `+=${pageNav.offsetHeight}`,
                onEnter: function () {
                  pageContent.classList.remove('light-content')
                },
                onEnterBack: function () {
                  pageContent.classList.remove('light-content')
                },
                onLeave: function () {
                  pageContent.classList.add('light-content')
                },
                onLeaveBack: function () {
                  pageContent.classList.add('light-content')
                },
              },
            })
          }
        }, 100)
      })
    }
  }

  if ($('#page-content').hasClass('dark-content')) {
    if ($('#project-nav').hasClass('change-header')) {
      imagesLoaded('body', function () {
        setTimeout(function () {
          var pageNav = document.querySelector('#project-nav')
          if (pageNav) {
            var pageContent = document.querySelector('#page-content')
            var nextPageCaptionParallax = gsap.to('.page-nav-caption', {
              scrollTrigger: {
                trigger: pageNav,
                start: 'top 8%',
                end: () => `+=${pageNav.offsetHeight}`,
                onEnter: function () {
                  pageContent.classList.add('light-content')
                },
                onEnterBack: function () {
                  pageContent.classList.add('light-content')
                },
                onLeave: function () {
                  pageContent.classList.remove('light-content')
                },
                onLeaveBack: function () {
                  pageContent.classList.remove('light-content')
                },
              },
            })
          }
        }, 100)
      })
    }
  }

  // Reinit All Scrolltrigger After Page Load

  // imagesLoaded('body', function() {
  //   setTimeout(function() {
  //     ScrollTrigger.refresh()
  //   }, 1000);
  // });
} // End Scroll Effects
