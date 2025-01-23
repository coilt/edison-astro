export function Shortcodes() {
  // Buttons
  document.querySelectorAll('.button-border').forEach((button) => {
    button.style.backgroundColor = button.dataset.btncolor
    button.style.borderColor = button.dataset.btncolor
    button.querySelector('a').style.color = button.dataset.btntextcolor
  })

  document.querySelectorAll('.button-border.outline').forEach((button) => {
    button.style.backgroundColor = 'transparent'
    button.style.borderColor = button.dataset.btncolor
    button.querySelector('a').style.color = button.dataset.btncolor

    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = button.dataset.btncolor
      button.style.borderColor = button.dataset.btncolor
      button.querySelector('a').style.color = button.dataset.btntextcolor
    })

    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = 'transparent'
      button.style.borderColor = button.dataset.btncolor
      button.querySelector('a').style.color = button.dataset.btncolor
    })
  })

  // Accordion
  document.querySelectorAll('dd.accordion-content').forEach((content) => {
    content.style.display = 'none'
    content.classList.add('hide')
  })

  document.querySelectorAll('dl.accordion').forEach((accordion) => {
    accordion.addEventListener('click', (event) => {
      if (event.target.tagName === 'DT') {
        const dt = event.target
        const dd = dt.nextElementSibling

        if (dt.classList.contains('accordion-active')) {
          dt.classList.remove('accordion-active')
          slideUp(dd)
        } else {
          dt.classList.add('accordion-active')
          slideDown(dd)
          dt.parentNode
            .querySelectorAll('dd.accordion-content')
            .forEach((otherDd) => {
              if (otherDd !== dd) {
                slideUp(otherDd)
                otherDd.previousElementSibling.classList.remove(
                  'accordion-active',
                )
              }
            })
        }

        setTimeout(() => {
          ScrollTrigger.refresh()
        }, 500)
      }
    })
  })

 
  // Random Collage
  if (document.querySelector('.random-collage-wrap')) {
    if (window.innerWidth >= 1024) {
      document
        .querySelectorAll('.random-collage .rc-slide .item-wrap-image')
        .forEach((item) => {
          item.addEventListener('mouseenter', () => {
            gsap.to('#ball', {
              duration: 0.3,
              borderWidth: '2px',
              scale: 1.2,
              borderColor: document.body.dataset.primaryColor,
              backgroundColor: document.body.dataset.primaryColor,
            })
            gsap.to('#ball-loader', {
              duration: 0.2,
              borderWidth: '2px',
              top: 2,
              left: 2,
            })
            const ball = document.getElementById('ball')
            ball.innerHTML = `<p class="first">${item.dataset.firstline}</p><p>${item.dataset.secondline}</p>`
          })

          item.addEventListener('mouseleave', () => {
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
            document.getElementById('ball').innerHTML = ''
          })
        })
    }
  }

  // Hover Image Effect
  if (document.querySelector('.has-hover-image')) {
    const parentRow = document
      .querySelector('.has-hover-image')
      .closest('.content-row')
    parentRow.style.zIndex = '10'

    if (document.body.classList.contains('smooth-scroll')) {
      const elem = document.querySelector('#content-scroll')
      const scrollbar = Scrollbar.init(elem, {
        renderByPixels: true,
        damping: 0.1,
      })
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
      return { x: posx, y: posy }
    }

    class HoverImgFx1 {
      constructor(el) {
        this.DOM = { el: el }
        this.DOM.reveal = document.createElement('div')
        this.DOM.reveal.className = 'hover-reveal'
        this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`
        this.DOM.el.appendChild(this.DOM.reveal)
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
          if (document.body.classList.contains('smooth-scroll')) {
            const docScrolls = {
              left:
                document.body.scrollLeft + document.documentElement.scrollLeft,
              top: -scrollbar.scrollTop,
            }
            gsap.to('.hover-reveal', {
              duration: 0.7,
              top: `${mousePos.y - this.DOM.el.querySelector('.hover-reveal').offsetHeight * 0.5 - docScrolls.top}px`,
              left: `${mousePos.x - this.DOM.el.querySelector('.hover-reveal').offsetWidth * 0.5 - docScrolls.left}px`,
              ease: Power4.easeOut,
            })
          } else {
            const docScrolls = {
              left:
                document.body.scrollLeft + document.documentElement.scrollLeft,
              top: document.body.scrollTop + document.documentElement.scrollTop,
            }
            gsap.to('.hover-reveal', {
              duration: 1,
              top: `${mousePos.y + 40 - docScrolls.top}px`,
              left: `${mousePos.x + 10 - docScrolls.left}px`,
              ease: Power4.easeOut,
            })
          }
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
        gsap.to.killTweensOf(this.DOM.revealInner)
        gsap.to.killTweensOf(this.DOM.revealImg)

        this.tl = new gsap.to({
          onStart: () => {
            this.DOM.reveal.style.opacity = 1
            gsap.to.set(this.DOM.el, { zIndex: 1000 })
          },
        })
          .add('begin')
          .add(
            new gsap.to(this.DOM.revealInner, 0.3, {
              ease: Sine.easeOut,
              startAt: { x: '-100%' },
              x: '0%',
            }),
            'begin',
          )
          .add(
            new gsap.to(this.DOM.revealImg, 0.3, {
              ease: Sine.easeOut,
              startAt: { x: '100%' },
              x: '0%',
            }),
            'begin',
          )
      }

      hideImage() {
        gsap.to.killTweensOf(this.DOM.revealInner)
        gsap.to.killTweensOf(this.DOM.revealImg)

        this.tl = new gsap.to({
          onStart: () => {
            gsap.to.set(this.DOM.el, { zIndex: 999 })
          },
          onComplete: () => {
            gsap.to.set(this.DOM.el, { zIndex: '' })
            gsap.to.set(this.DOM.reveal, { opacity: 0 })
          },
        })
          .add('begin')
          .add(
            new gsap.to(this.DOM.revealInner, 0.3, {
              ease: Sine.easeOut,
              x: '100%',
            }),
            'begin',
          )
          .add(
            new gsap.to(this.DOM.revealImg, 0.3, {
              ease: Sine.easeOut,
              x: '-100%',
            }),
            'begin',
          )
      }
    }

    Array.from(document.querySelectorAll('.has-hover-image')).forEach(
      (link) => new HoverImgFx1(link),
    )
  }
}

// Helper functions
function slideUp(element) {
  element.style.height = element.offsetHeight + 'px'
  element.offsetHeight // Force reflow
  element.style.height = '0'
  element.style.overflow = 'hidden'
  element.style.transition = 'height 0.35s ease'
  setTimeout(() => {
    element.style.display = 'none'
    element.style.removeProperty('height')
    element.style.removeProperty('overflow')
    element.style.removeProperty('transition')
  }, 350)
}

function slideDown(element) {
  element.style.removeProperty('display')
  let height = element.offsetHeight
  element.style.overflow = 'hidden'
  element.style.height = 0
  element.offsetHeight // Force reflow
  element.style.transition = 'height 0.35s ease'
  element.style.height = height + 'px'
  setTimeout(() => {
    element.style.removeProperty('height')
    element.style.removeProperty('overflow')
    element.style.removeProperty('transition')
  }, 350)
}
