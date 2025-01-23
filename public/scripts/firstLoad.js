import { gsap, Power0, Power2 } from '/node_modules/gsap/all'

export function FirstLoad() {
  document.addEventListener('DOMContentLoaded', function FirstLoad() {
    window.addEventListener('popstate', function () {
      location.reload(true)
    })

    const pageContent = document.querySelector('[id$="page-content"]')

    const header = document.querySelector('header')
    const nav = document.querySelector('nav')

    const hero = document.getElementById('hero')
    const blog = document.getElementById('blog')
    const post = document.getElementById('post')

    if (pageContent.classList.contains('light-content')) {
      nav.style.backgroundColor = header.dataset.menucolor

      gsap.to('main', {
        duration: 0.5,
        backgroundColor: pageContent.dataset.bgcolor,
        ease: Power2.easeInOut,
      })

      magicCursor.classList.add('light-content')

      if (hero) {
        if (hero.classList.contains('has-image')) {
          header.style.backgroundColor = 'transparent'
        } else {
          if (header.classList.contains('fullscreen-menu')) {
            header.style.backgroundColor = 'transparent'
          } else {
            if (blog || post) {
              header.style.backgroundColor = '#171717'
            }
          }
        }
      } else {
        header.style.backgroundColor = 'transparent'
      }
    } else {
      nav.style.backgroundColor = header.dataset.menucolor

      gsap.to('main', {
        duration: 0.5,
        backgroundColor: pageContent.dataset.bgcolor,
        ease: Power2.easeInOut,
      })

      magicCursor.classList.remove('light-content')

      if (hero) {
        if (hero.classList.contains('has-image')) {
          header.style.backgroundColor = 'transparent'
        } else {
          if (header.classList.contains('fullscreen-menu')) {
            header.style.backgroundColor = 'transparent'
          } else {
            if (blog || post) {
              header.style.backgroundColor = '#fff'
            }
          }
        }
      } else {
        header.style.backgroundColor = 'transparent'
      }
    }

    document.querySelectorAll('.video-cover').forEach((cover) => {
      const image = cover.dataset.src
      cover.style.backgroundImage = `url(${image})`
    })

    // Load Default Page
    document.querySelectorAll('a.ajax-link').forEach((link) => {
      link.addEventListener('click', function () {
        document.body.classList.add('show-loader')
        setTimeout(() => {
          document
            .getElementById('header-container')
            .classList.remove('light-content-header', 'dark-content-header')
        }, 50)
        document.querySelector('.flexnav').classList.remove('flexnav-show')
        document.getElementById('menu-burger').classList.remove('open')

        gsap.to('nav', {
          duration: 0.3,
          backgroundColor: pageContent.getAttribute('data-bgcolor'),
        })

        header.classList.remove('white-header')
        document.getElementById('app')?.remove()
        setTimeout(() => {
          document.querySelector('#canvas-slider.active')?.remove()
        }, 300)
        document.querySelector('.temporary-hero')?.remove()

        gsap.to(document.querySelectorAll('.fullscreen-menu .menu-timeline'), {
          duration: 0.3,
          y: -30,
          opacity: 0,
          stagger: 0.03,
          ease: Power2.easeIn,
        })

        gsap.to('#ball', {
          duration: 0.3,
          borderWidth: '4px',
          scale: 0.5,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          opacity: 1,
        })
        gsap.to(
          document.querySelectorAll(
            '#main, #hero-image-wrapper, #project-nav, .next-project-image, #app, #canvas-slider, #showcase-slider-webgl-holder, .showcase-pagination-wrap, #quickmenu-scroll, #blog, .next-project-image-wrapper',
          ),
          { duration: 0.3, opacity: 0, delay: 0, ease: Power0.ease },
        )
        gsap.to(
          document.querySelectorAll('#footer-container, .header-middle'),
          {
            duration: 0.3,
            opacity: 0,
            ease: Power0.ease,
          },
        )
        gsap.to(document.querySelectorAll('#show-filters, #counter-wrap'), {
          duration: 0.2,
          opacity: 0,
        })
      })
    })

    // Load Page From Menu
    document.querySelectorAll('nav .ajax-link').forEach((link) => {
      link.addEventListener('click', function () {
        this.closest('.menu-timeline').classList.add('hover')
        this.closest('.item-with-ul').classList.add('hover')
        gsap.set(this.querySelector('span'), { yPercent: 0 })
        header.classList.remove('white-header')
        document.getElementById('app')?.remove()
        document.querySelector('.big-title-caption')?.remove()
      })
    })

    document
      .querySelectorAll('.flexnav li.menu-timeline .before-span')
      .forEach((menuItem) => {
        const spans = menuItem.querySelectorAll('span')
        const spanCube = document.createElement('div')
        spanCube.className = 'span-cube'

        spans.forEach((span) => {
          for (let i = 0; i < 3; i++) {
            spanCube.appendChild(span.cloneNode(true))
          }
        })

        menuItem.innerHTML = ''
        menuItem.appendChild(spanCube)
      })

    document
      .querySelectorAll('#burger-wrapper, .menu .button-text')
      .forEach((element) => {
        element.addEventListener('click', function () {
          document.getElementById('menu-burger').classList.toggle('open')
          nav.classList.toggle('open')

          setTimeout(() => {
            if (
              document.getElementById('menu-burger').classList.contains('open')
            ) {
              // Open menu logic
              gsap.to('nav', {
                duration: 0.3,
                opacity: 1,
                ease: Power2.easeInOut,
              })
              header.classList.add('over-sidebar', 'over-white-section')

              if (header.classList.contains('invert-header')) {
                document
                  .getElementById('header-container')
                  .classList.add('light-content-header')
              } else {
                document
                  .getElementById('header-container')
                  .classList.add('dark-content-header')
              }
              gsap.set(document.querySelectorAll('nav ul ul li'), {
                y: 0,
                opacity: 1,
              })
              gsap.set(
                document.querySelectorAll('.menu-timeline .before-span'),
                {
                  y: 160,
                  opacity: 0,
                },
              )
              gsap.to(
                document.querySelectorAll('.menu-timeline .before-span'),
                {
                  duration: 0.7,
                  y: 0,
                  opacity: 1,
                  delay: 0.4,
                  stagger: 0.1,
                  ease: Power2.easeOut,
                },
              )

              document
                .querySelectorAll('.menu-timeline > .touch-button')
                .forEach((button) => {
                  button.addEventListener('click', function (e) {
                    if (e.isTrusted === false) return
                    document
                      .querySelectorAll('.menu-timeline > .touch-button.active')
                      .forEach((activeButton) => {
                        if (activeButton !== this) {
                          activeButton.click()
                        }
                      })
                  })
                })
            } else {
              // Close menu logic
              gsap.to('nav', {
                duration: 0.3,
                opacity: 0,
                delay: 0.6,
                ease: Power2.easeInOut,
              })
              gsap.to(
                document.querySelectorAll('.menu-timeline .before-span'),
                {
                  duration: 0.5,
                  y: -200,
                  opacity: 0,
                  delay: 0,
                  stagger: 0.05,
                  ease: Power2.easeIn,
                },
              )
              gsap.to(document.querySelectorAll('nav ul ul li'), {
                duration: 0.5,
                y: -120,
                opacity: 0,
                delay: 0,
                stagger: 0.03,
                ease: Power2.easeIn,
              })

              if (header.classList.contains('invert-header')) {
                setTimeout(() => {
                  document
                    .getElementById('header-container')
                    .classList.remove('light-content-header')
                }, 500)
              } else {
                setTimeout(() => {
                  document
                    .getElementById('header-container')
                    .classList.remove('dark-content-header')
                }, 500)
              }
              setTimeout(() => {
                document.querySelector('.touch-button.active')?.click()
                header.classList.remove('over-sidebar')
                setTimeout(() => {
                  header.classList.remove('over-white-section')
                }, 350)
              }, 500)
            }
          }, 20)
        })
      })

    document.querySelectorAll('.wpcf7-form-control-wrap').forEach((wrap) => {
      if (wrap.querySelector('label') === null) {
        wrap.insertAdjacentHTML(
          'beforeend',
          '<label class="input_label"></label>',
        )
      }
    })
  })
}

 
