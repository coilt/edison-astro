import {
  gsap,
  Power2,

} from '/node_modules/gsap/all'


export function Core() {

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  }


  if (!isMobile() && !document.body.classList.contains('disable-cursor')) {
    const currentElement = this
    const mouse = { x: 0, y: 0 }
    const pos = { x: 0, y: 0 }
    const ratio = 0.65
    const active = false
    const offsetX = 40

    document.addEventListener('mousemove', mouseMove)

    function mouseMove(e) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      mouse.x = e.pageX
      mouse.y = e.pageY - scrollTop
    }
  

  gsap.ticker.add(updatePosition)

  function updatePosition() {
    if (!active) {
      pos.x += (mouse.x - pos.x) * ratio
      pos.y += (mouse.y - pos.y) * ratio
    }
  }

  document
    .querySelectorAll('.sticky.left')
    .addEventListener('mouseenter', function (e) {
      const rcBounds = this.getBoundingClientRect()
      const positionX = rcBounds.left - offsetX
      const positionY = rcBounds.top + rcBounds.height / 2

      gsap.ticker.remove(updatePosition)
    })

  document
    .querySelectorAll('.sticky.right')
    .addEventListener('mouseenter', function (e) {
      const rcBounds = this.getBoundingClientRect()
      const positionX = rcBounds.right + offsetX
      const positionY = rcBounds.top + rcBounds.height / 2

      gsap.ticker.remove(updatePosition)
    })

  document
    .querySelectorAll('#main .sticky.left')
    .addEventListener('mouseenter', function (e) {
      const rcBounds = this.getBoundingClientRect()
      const positionX = rcBounds.left - offsetX + 10
      const positionY = rcBounds.top + rcBounds.height / 2

      gsap.ticker.remove(updatePosition)
    })

  document
    .querySelectorAll('#main .sticky.right')
    .addEventListener('mouseenter', function (e) {
      const rcBounds = this.getBoundingClientRect()
      const positionX = rcBounds.right + offsetX - 10
      const positionY = rcBounds.top + rcBounds.height / 2

      gsap.ticker.remove(updatePosition)
    })

  document
    .querySelectorAll('.clapat-button .sticky.left')
    .addEventListener('mouseenter', function (e) {
      const rcBounds = this.getBoundingClientRect()
      const positionX = rcBounds.left + 22
      const positionY = rcBounds.top + rcBounds.height / 2

      gsap.ticker.remove(updatePosition)
    })

  document
    .querySelectorAll('.clapat-button .sticky.right')
    .addEventListener('mouseenter', function (e) {
      const rcBounds = this.getBoundingClientRect()
      const positionX = rcBounds.right - 22
      const positionY = rcBounds.top + rcBounds.height / 2

      gsap.ticker.remove(updatePosition)
    })

  document.querySelectorAll('.sticky').mouseleave(function (e) {
    gsap.ticker.add(updatePosition)
  })

  document
    .querySelector('.parallax-wrap')
    .addEventListener('mouseenter', function (e) {
      gsap.to(this, { duration: 0.3, scale: 2 })

      gsap.to(currentElement.children(), { duration: 0.3, scale: 0.5 })
      active = true
    })

  document.querySelector('.parallax-wrap').mouseleave(function (e) {
    gsap.to(this, { duration: 0.3, scale: 1 })

    gsap.to(this.children(), { duration: 0.3, scale: 1, x: 0, y: 0 })
    active = false
  })

  document
    .querySelectorAll('.clapat-button .sticky')
    .addEventListener('mouseenter', function (e) {
      if (
        document
          .getElementById('#page-content')
          .classList.contains('light-content')
      ) {
        gsap.to(ball, { duration: 0.5, borderColor: '#000' })
      } else {
        gsap.to(ball, { duration: 0.5, borderColor: '#fff' })
      }
    })
  $('.parallax-wrap').addEventListener('mouseenter', function (e) {
    gsap.to(ball, {
      duration: 0.3,
      borderColor: $('body').data('primary-color'),
    })
  })
  $('.clapat-button .parallax-wrap').addEventListener(
    'mouseenter',
    function (e) {
      if ($('#page-content').classList.contains('light-content')) {
      }
    },
  )

  document.getElementById('.parallax-wrap').mousemove(function (e) {
    parallaxCursor(e, this, 2)
    callParallax(e, this)
  })

  function callParallax(e, parent) {
    parallaxIt(e, parent, parent.querySelector('.parallax-element'), 20)
  }

  function parallaxIt(e, parent, target, movement) {
    const boundingRect = parent.getBoundingClientRect()
    const relX = e.pageX - boundingRect.left
    const relY = e.pageY - boundingRect.top
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    gsap.to(target, {
      duration: 0.3,
      x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
      y:
        ((relY - boundingRect.height / 2 - scrollTop) / boundingRect.height) *
        movement,
      ease: Power2.easeOut,
    })
  }

  if (document.body.classList.contains('disable-ajaxload')) {
    return
  }

  document.addEventListener('DOMContentLoaded', function () {
    var isAnimating = false
    var newLocation = ''
    var firstLoad = false

    // Trigger smooth transition from the actual page to the new one
    document
      .querySelector('main')
      .addEventListener(
        'click',
        '[data-type="page-transition"]',
        function (event) {
          event.preventDefault()

          // Detect which page has been selected
          var newPage = this.getAttribute('href')

          // If the page is not already being animated, trigger animation
          if (!isAnimating) {
            changePage(newPage, true)
          }

          firstLoad = true
        },
      )

    // Detect the 'popstate' event - e.g. user clicking the back button
    window.addEventListener('popstate', function () {
      if (firstLoad) {
        // Safari emits a popstate event on page load - check if firstLoad is true before animating
        // If it's false, the page has just been loaded
        var newPage = location.href

        if (!isAnimating && newLocation !== newPage) {
          changePage(newPage, false)
        }
      }

      firstLoad = true
    })

    function changePage(url, bool) {
      isAnimating = true

      // Trigger page animation
      document.body.classList.add('page-is-changing')
      var coverLayer = document.querySelector('.cd-cover-layer')
      coverLayer.addEventListener('webkitTransitionEnd', function () {
        loadNewContent(url, bool)
        newLocation = url
        coverLayer.removeEventListener('webkitTransitionEnd', arguments.callee)
      })

      // If browser doesn't support CSS transitions, don't wait for the end of transitions
      if (!transitionsSupported()) {
        loadNewContent(url, bool)
        newLocation = url
      }
    }

    function loadNewContent(url, bool) {
      url = url || 'index.html'

      var section = document.createElement('div')
      section.classList.add('cd-main-content')

      fetch(url + ' .cd-main-content > *')
        .then(function (response) {
          return response.text()
        })
        .then(function (html) {
          // Load new content and replace <main> content with the new one
          document.querySelector('main').innerHTML = html

          var clapat_title = html.match(/<title[^>]*>([^<]+)<\/title>/)[1]
          document.querySelector('head title').textContent = clapat_title

          // If we have Elementor inline styles in the target page
          var headTags = [
            'style[id*=elementor-frontend-inline]',
            'style[id*="elementor-post"]',
            'link[id*="elementor-post"]',
            'link[id*="google-fonts"]',
          ]
          var head = document.head
          var newPageRawHead = html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]
          var newPageHead = document.createElement('head')
          newPageHead.innerHTML = newPageRawHead

          var oldHeadTags = head.querySelectorAll(headTags.join(', '))
          var newHeadTags = newPageHead.querySelectorAll(headTags.join(', '))

          // Append new and remove old tags
          for (let i = 0; i < newHeadTags.length; i++) {
            if (typeof oldHeadTags[i] !== 'undefined') {
              head.insertBefore(
                newHeadTags[i],
                oldHeadTags[i].nextElementSibling,
              )
              head.removeChild(oldHeadTags[i])
            } else {
              head.insertBefore(newHeadTags[i], newHeadTags[i - 1] || null)
            }
          }

          document.documentElement.scrollTop = 0

          // If browser doesn't support CSS transitions, don't wait for the end of transitions
          var delay = transitionsSupported() ? 30 : 0
          setTimeout(function () {
            // Wait for the end of the transition on the loading bar before revealing the new content
            document.body.classList.remove('page-is-changing')
            coverLayer.addEventListener('webkitTransitionEnd', function () {
              isAnimating = false
              coverLayer.removeEventListener(
                'webkitTransitionEnd',
                arguments.callee,
              )
            })
          }, delay)
        })
    }

    function transitionsSupported() {
      // Add your implementation to check if CSS transitions are supported
      return true
    }
  })

  function LoadViaAjax() {
    if (!isMobile() && !document.body.classList.contains('disable-cursor')) {
      document
        .querySelector('.sticky.left')
        .addEventListener('mouseenter', function (e) {
          var rcBounds = this.getBoundingClientRect()
          var positionX = rcBounds.left - offsetX
          var positionY = rcBounds.top + rcBounds.height / 2
          gsap.to(ball, {
            duration: 0.5,
            x: positionX,
            y: positionY,
            scale: 0.9,
            borderWidth: '2px',
          })
          gsap.ticker.remove(updatePosition)
        })

      document
        .querySelector('.sticky.right')
        .addEventListener('mouseenter', function (e) {
          var rcBounds = this.getBoundingClientRect()
          var positionX = rcBounds.right + offsetX
          var positionY = rcBounds.top + rcBounds.height / 2
          gsap.to(ball, {
            duration: 0.5,
            x: positionX,
            y: positionY,
            scale: 0.9,
            borderWidth: '2px',
          })
          gsap.ticker.remove(updatePosition)
        })

      document
        .querySelector('#main .sticky.left')
        .addEventListener('mouseenter', function (e) {
          var rcBounds = this.getBoundingClientRect()
          var positionX = rcBounds.left - offsetX + 10
          var positionY = rcBounds.top + rcBounds.height / 2
          gsap.to(ball, {
            duration: 0.5,
            x: positionX,
            y: positionY,
            scale: 0.7,
            opacity: 0.6,
            borderWidth: '6px',
            borderColor: '#999999',
          })
          gsap.ticker.remove(updatePosition)
        })

      document
        .querySelector('#main .sticky.right')
        .addEventListener('mouseenter', function (e) {
          var rcBounds = this.getBoundingClientRect()
          var positionX = rcBounds.right + offsetX - 10
          var positionY = rcBounds.top + rcBounds.height / 2
          gsap.to(ball, {
            duration: 0.5,
            x: positionX,
            y: positionY,
            scale: 0.7,
            opacity: 0.6,
            borderWidth: '6px',
            borderColor: '#999999',
          })
          gsap.ticker.remove(updatePosition)
        })

      document
        .querySelector('.clapat-button .sticky.left')
        .addEventListener('mouseenter', function (e) {
          var rcBounds = this.getBoundingClientRect()
          var positionX = rcBounds.left + 22
          var positionY = rcBounds.top + rcBounds.height / 2
          gsap.to(ball, {
            duration: 0.5,
            x: positionX,
            y: positionY,
            scale: 0.4,
            opacity: 1,
            borderWidth: '6px',
            borderColor: '#000',
          })
          gsap.ticker.remove(updatePosition)
        })

      document
        .querySelector('.clapat-button .sticky.right')
        .addEventListener('mouseenter', function (e) {
          var rcBounds = this.getBoundingClientRect()
          var positionX = rcBounds.right - 22
          var positionY = rcBounds.top + rcBounds.height / 2
          gsap.to(ball, {
            duration: 0.5,
            x: positionX,
            y: positionY,
            scale: 0.4,
            opacity: 1,
            borderWidth: '6px',
            borderColor: '#999999',
          })
          gsap.ticker.remove(updatePosition)
        })

      document.querySelectorAll('.sticky').forEach(function (element) {
        element.addEventListener('mouseleave', function (e) {
          gsap.to(ball, {
            duration: 0.2,
            scale: 0.5,
            borderWidth: '4px',
            borderColor: '#999999',
            opacity: 1,
          })
          gsap.ticker.add(updatePosition)
        })
      })

      document
        .querySelector('.parallax-wrap')
        .addEventListener('mouseenter', function (e) {
          gsap.to(this, { duration: 0.3, scale: 2 })
          gsap.to(ball, {
            duration: 0.3,
            scale: 0.9,
            borderWidth: '2px',
            opacity: 1,
          })
          gsap.to(this.children, { duration: 0.3, scale: 0.5 })
          active = true
        })

      document
        .querySelector('#main .parallax-wrap.icon-wrap')
        .addEventListener('mouseenter', function (e) {
          gsap.to(ball, {
            duration: 0.3,
            scale: 0.7,
            borderWidth: '6px',
            opacity: 0.6,
            borderColor: '#999',
          })
        })

      document
        .querySelector('.clapat-button .parallax-wrap.icon-wrap')
        .addEventListener('mouseenter', function (e) {
          gsap.to(ball, {
            duration: 0.05,
            scale: 0.4,
            borderWidth: '0px',
            opacity: 1,
            borderColor: '#000',
          })
        })

      document
        .querySelector('.parallax-wrap.bigger')
        .addEventListener('mouseenter', function (e) {
          gsap.to(ball, {
            duration: 0.3,
            scale: 1.35,
            borderWidth: '2px',
            opacity: 1,
          })
        })

      document.querySelectorAll('.parallax-wrap').forEach(function (element) {
        element.addEventListener('mouseleave', function (e) {
          gsap.to(this, { duration: 0.3, scale: 1 })
          gsap.to(ball, {
            duration: 0.3,
            scale: 0.5,
            borderWidth: '4px',
            opacity: 1,
            borderColor: '#999999',
          })
          gsap.to(this.children, {
            duration: 0.3,
            scale: 1,
            x: 0,
            y: 0,
          })
          active = false
        })
      })

      document
        .querySelector('.sticky')
        .addEventListener('mouseenter', function (e) {
          gsap.to(ball, {
            duration: 0.5,
            borderColor: document.body.dataset.primaryColor,
          })
        })

      document
        .querySelector('#main .sticky')
        .addEventListener('mouseenter', function (e) {
          gsap.to(ball, { duration: 0.5, borderColor: '#999' })
        })

      document
        .querySelector('.clapat-button .sticky')
        .addEventListener('mouseenter', function (e) {
          if (
            document
              .querySelector('#page-content')
              .classList.contains('light-content')
          ) {
            gsap.to(ball, { duration: 0.5, borderColor: '#000' })
          } else {
            gsap.to(ball, { duration: 0.5, borderColor: '#fff' })
          }
        })

      document
        .querySelector('.parallax-wrap')
        .addEventListener('mouseenter', function (e) {
          gsap.to(ball, {
            duration: 0.3,
            borderColor: document.body.dataset.primaryColor,
          })
        })

      document
        .querySelector('.clapat-button .parallax-wrap')
        .addEventListener('mouseenter', function (e) {
          if (
            document
              .querySelector('#page-content')
              .classList.contains('light-content')
          ) {
            gsap.to(ball, { duration: 0.05, borderColor: '#000' })
          } else {
            gsap.to(ball, { duration: 0.05, borderColor: '#fff' })
          }
        })

      document
        .querySelector('.parallax-wrap.bigger')
        .addEventListener('mouseenter', function (e) {
          gsap.to(ball, {
            duration: 0.3,
            borderColor: document.body.dataset.primaryColor,
          })
        })

      document
        .querySelector('#main .parallax-wrap.icon-wrap')
        .addEventListener('mouseenter', function (e) {
          gsap.to(ball, { duration: 0.3, borderColor: '#999' })
        })

      document.querySelectorAll('.parallax-wrap').forEach(function (element) {
        element.addEventListener('mousemove', function (e) {
          parallaxCursor(e, this, 2)
          callParallax(e, this)
        })
      })

      function callParallax(e, parent) {
        parallaxIt(e, parent, parent.querySelector('.parallax-element'), 20)
      }

      function parallaxIt(e, parent, target, movement) {
        var boundingRect = parent.getBoundingClientRect()
        var relX = e.pageX - boundingRect.left
        var relY = e.pageY - boundingRect.top
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop

        gsap.to(target, {
          duration: 0.3,
          x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
          y:
            ((relY - boundingRect.height / 2 - scrollTop) /
              boundingRect.height) *
            movement,
          ease: Power2.easeOut,
        })
      }

      function parallaxCursor(e, parent, movement) {
        var rect = parent.getBoundingClientRect()
        var relX = e.pageX - rect.left
        var relY = e.pageY - rect.top
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop
        pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement
        pos.y =
          rect.top +
          rect.height / 2 +
          (relY - rect.height / 2 - scrollTop) / movement
        gsap.to(ball, { duration: 0.3, x: pos.x, y: pos.y })
      }

      document
        .querySelector('.hide-ball')
        .addEventListener('mouseenter', function (e) {
          gsap.to('#ball', {
            duration: 0.2,
            borderWidth: '1px',
            scale: 1,
            opacity: 0,
          })
        })

      document
        .querySelector('.hide-ball')
        .addEventListener('mouseleave', function (e) {
          gsap.to('#ball', {
            duration: 0.2,
            borderWidth: '4px',
            scale: 0.5,
            opacity: 1,
          })
        })

      document.querySelectorAll('.link, .button').forEach(function (element) {
        element.addEventListener('mouseenter', function (e) {
          gsap.to('#ball', {
            duration: 0.2,
            borderWidth: '0px',
            scale: 1.5,
            backgroundColor: 'rgba(153, 153, 153, 1)',
            opacity: 0.15,
          })
          gsap.to('#ball-loader', {
            duration: 0.2,
            borderWidth: '2px',
            top: 4,
            left: 4,
          })
        })

        element.addEventListener('mouseleave', function (e) {
          gsap.to('#ball', {
            duration: 0.3,
            borderWidth: '4px',
            scale: 0.5,
            backgroundColor: 'rgba(153, 153, 153, 0)',
            opacity: 1,
          })
          gsap.to('#ball-loader', {
            duration: 0.2,
            borderWidth: '4px',
            top: 0,
            left: 0,
          })
        })
      })

      // Blog Hover Effects
      document
        .querySelectorAll(
          '#blog-page-nav .page-numbers li a, .post-page-numbers, #post-content a, #post-form a, #post-comments a, .wp-block-search__button, .clapat-sidebar-widget a',
        )
        .forEach(function (element) {
          element.addEventListener('mouseenter', function (e) {
            gsap.to('#ball', {
              duration: 0.2,
              borderWidth: '1px',
              scale: 1,
              opacity: 0,
            })
          })

          element.addEventListener('mouseleave', function (e) {
            gsap.to('#ball', {
              duration: 0.3,
              borderWidth: '4px',
              scale: 0.5,
              opacity: 1,
            })
          })
        })
    }

    if (!transitionsSupported()) isAnimating = false
  }

  function transitionsSupported() {
    return document.documentElement.classList.contains('csstransitions')
  }

}}

  