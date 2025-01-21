import { Power2, Cubic } from '/node_modules/gsap/'
import { GridToFullscreenEffect } from './GridToFullScreen.js';


export function FitThumbScreenWEBGL() {
  if (!document.body.classList.contains('disable-ajaxload')) {
    const itemsWrapper = document.getElementById('itemsWrapper');

    if (itemsWrapper && itemsWrapper.classList.contains('webgl-fitthumbs')) {
       
        function createDemoEffect(options) {
          const transitionEffect = new GridToFullscreenEffect(
            document.getElementById('app'),
            document.getElementById('itemsWrapper'),
            Object.assign(
              {
                scrollContainer: window,
                onToFullscreenStart: ({ index }) => {},
                onToFullscreenFinish: ({ index }) => {},
                onToGridStart: ({ index }) => {},
                onToGridFinish: ({ index, lastIndex }) => {},
              },
              options,
            ),
          )

          return transitionEffect
        }

        let currentIndex
        const itemsWrapper = document.getElementById('itemsWrapper')
        const thumbs = [
          ...itemsWrapper.querySelectorAll(
            'img.grid__item-img:not(.grid__item-img--large)',
          ),
        ]

        let transitionEffectDuration = 0.0
        let transitionEffect = null

        if (
          document
            .querySelector('.webgl-fitthumbs')
            .classList.contains('fx-one')
        ) {
          //FX 01 ////////////////////////////// .fx-one

          transitionEffectDuration = 2.2
          transitionEffect = createDemoEffect({
            timing: {
              type: 'sameEnd',
              sections: 0,
              duration: transitionEffectDuration,
            },
            activation: {
              type: 'mouse',
            },
            transformation: {
              type: 'wavy',
              props: { seed: '5000', frequency: 1, amplitude: 0 },
            },
            onToFullscreenStart: ({ index }) => {
              currentIndex = index
              thumbs[currentIndex].style.opacity = 1
              gsap.to(itemsWrapper, {
                duration: 0.6,
                ease: Power1.easeInOut,
                opacity: 1,
                delay: 0,
              })
              toggleFullview()
            },
            onToGridStart: ({ index }) => {
              gsap.to(itemsWrapper, {
                duration: 1,
                ease: Power3.easeInOut,
                scale: 1,
                opacity: 1,
              })
              toggleFullview()
            },
            onToGridFinish: ({ index, lastIndex }) => {
              thumbs[lastIndex].style.opacity = 1
            },
            easings: {
              toFullscreen: Cubic.easeInOut,
            },
          })
        } else if (
          document
            .querySelector('.webgl-fitthumbs')
            .classList.contains('fx-two')
        ) {
          //FX 02 ////////////////////////////// .fx-two

          transitionEffectDuration = 1.8
          transitionEffect = createDemoEffect({
            activation: { type: 'mouse' },
            timing: {
              duration: transitionEffectDuration,
            },
            transformation: {
              type: 'simplex',
              props: {
                seed: '8000',
                frequencyX: 0.2,
                frequencyY: 0.2,
                amplitudeX: 0.3,
                amplitudeY: 0.3,
              },
            },
            onToFullscreenStart: ({ index }) => {
              currentIndex = index
              thumbs[currentIndex].style.opacity = 1
              gsap.to(itemsWrapper, {
                duration: 0.6,
                ease: Power1.easeInOut,
                opacity: 1,
                delay: 0,
              })
              toggleFullview()
            },
            onToGridStart: ({ index }) => {
              gsap.to(itemsWrapper, {
                duration: 1,
                ease: Power3.easeInOut,
                scale: 1,
                opacity: 1,
              })
              toggleFullview()
            },
            onToGridFinish: ({ index, lastIndex }) => {
              thumbs[lastIndex].style.opacity = 1
            },
            easings: {
              toFullscreen: Power1.easeInOut,
            },
          })
        } else if (
          document
            .querySelector('.webgl-fitthumbs')
            .classList.contains('fx-three')
        ) {
          //FX 03 ////////////////////////////// .fx-three

          transitionEffectDuration = 1.8
          transitionEffect = createDemoEffect({
            activation: { type: 'closestCorner' },
            timing: {
              duration: transitionEffectDuration,
            },
            transformation: {
              type: 'flipX',
            },
            flipBeizerControls: {
              c0: {
                x: 0.4,
                y: -0.8,
              },
              c1: {
                x: 0.5,
                y: 0.9,
              },
            },
            onToFullscreenStart: ({ index }) => {
              currentIndex = index
              thumbs[currentIndex].style.opacity = 1
              gsap.to(itemsWrapper, {
                duration: 0.6,
                ease: Power1.easeInOut,
                opacity: 1,
                delay: 0,
              })
              toggleFullview()
            },
            onToGridStart: ({ index }) => {
              gsap.to(itemsWrapper, {
                duration: 1,
                ease: Power3.easeInOut,
                scale: 1,
                opacity: 1,
              })
              toggleFullview()
            },
            onToGridFinish: ({ index, lastIndex }) => {
              thumbs[lastIndex].style.opacity = 1
            },
            easings: {
              toFullscreen: Power1.easeInOut,
            },
          })
        } else if (
          document
            .querySelector('.webgl-fitthumbs')
            .classList.contains('fx-four')
        ) {
          //FX 04 ////////////////////////////// .fx-four

          transitionEffectDuration = 1.5
          transitionEffect = createDemoEffect({
            activation: { type: 'sinX' },
            flipX: false,
            timing: {
              type: 'sections',
              sections: 4,
              duration: transitionEffectDuration,
            },
            onToFullscreenStart: ({ index }) => {
              currentIndex = index
              thumbs[currentIndex].style.opacity = 1
              gsap.to(itemsWrapper, {
                duration: 0.6,
                ease: Power1.easeInOut,
                opacity: 1,
                delay: 0,
              })
              toggleFullview()
            },
            onToGridStart: ({ index }) => {
              gsap.to(itemsWrapper, {
                duration: 1,
                ease: Power3.easeInOut,
                scale: 1,
                opacity: 1,
              })
              toggleFullview()
            },
            onToGridFinish: ({ index, lastIndex }) => {
              thumbs[lastIndex].style.opacity = 1
            },
            easings: {
              toFullscreen: Power3.easeIn,
            },
          })
        } else if (
          document
            .querySelector('.webgl-fitthumbs')
            .classList.contains('fx-five')
        ) {
          //FX 05 ////////////////////////////// .fx-five

          transitionEffectDuration = 1.8
          transitionEffect = createDemoEffect({
            timing: {
              type: 'sections',
              sections: 1,
              duration: transitionEffectDuration,
            },
            activation: {
              type: 'mouse',
            },
            transformation: {
              type: 'wavy',
              props: {
                seed: '8000',
                frequency: 0.1,
                amplitude: 1,
              },
            },
            onToFullscreenStart: ({ index }) => {
              currentIndex = index
              thumbs[currentIndex].style.opacity = 1
              gsap.to(itemsWrapper, {
                duration: 0.6,
                ease: Power1.easeInOut,
                opacity: 1,
                delay: 0,
              })
              toggleFullview()
            },
            onToGridStart: ({ index }) => {
              gsap.to(itemsWrapper, {
                duration: 1,
                ease: Power3.easeInOut,
                scale: 1,
                opacity: 1,
              })
              toggleFullview()
            },
            onToGridFinish: ({ index, lastIndex }) => {
              thumbs[lastIndex].style.opacity = 1
            },
            easings: {
              toFullscreen: Cubic.easeInOut,
            },
          })
        } else if (
          document
            .querySelector('.webgl-fitthumbs')
            .classList.contains('fx-six')
        ) {
          //FX 06 ////////////////////////////// .fx-six

          transitionEffectDuration = 2
          transitionEffect = createDemoEffect({
            activation: { type: 'bottom' },
            timing: {
              duration: transitionEffectDuration,
            },
            transformation: {
              type: 'wavy',
              props: {
                frequency: 1,
                amplitude: 0,
              },
            },
            onToFullscreenStart: ({ index }) => {
              currentIndex = index
              thumbs[currentIndex].style.opacity = 1
              gsap.to(itemsWrapper, {
                duration: 0.6,
                ease: Power1.easeInOut,
                opacity: 1,
                delay: 0,
              })
              toggleFullview()
            },
            onToGridStart: ({ index }) => {
              gsap.to(itemsWrapper, {
                duration: 1,
                ease: Power3.easeInOut,
                scale: 1,
                opacity: 1,
              })
              toggleFullview()
            },
            onToGridFinish: ({ index, lastIndex }) => {
              thumbs[lastIndex].style.opacity = 1
            },
            easings: {
              toFullscreen: Power2.easeInOut,
            },
          })
        } else if (
          document
            .querySelector('.webgl-fitthumbs')
            .classList.contains('fx-seven')
        ) {
          //FX 07 ////////////////////////////// .fx-seven

          transitionEffectDuration = 2
          transitionEffect = createDemoEffect({
            activation: { type: 'none' },
            timing: {
              duration: transitionEffectDuration,
            },
            transformation: {
              type: 'none',
              props: {
                frequency: 1,
                amplitude: 0,
              },
            },
            onToFullscreenStart: ({ index }) => {
              currentIndex = index
              thumbs[currentIndex].style.opacity = 1
              gsap.to(itemsWrapper, {
                duration: 0.6,
                ease: Power1.easeInOut,
                opacity: 1,
                delay: 0,
              })
              toggleFullview()
            },
            onToGridStart: ({ index }) => {
              gsap.to(itemsWrapper, {
                duration: 1,
                ease: Power3.easeInOut,
                scale: 1,
                opacity: 1,
              })
              toggleFullview()
            },
            onToGridFinish: ({ index, lastIndex }) => {
              thumbs[lastIndex].style.opacity = 1
            },
            easings: {
              toFullscreen: Power2.easeInOut,
            },
          })
        } else {
          //FX 01 ////////////////////////////// .fx-one

          transitionEffectDuration = 2.2
          transitionEffect = createDemoEffect({
            timing: {
              type: 'sameEnd',
              sections: 0,
              duration: transitionEffectDuration,
            },
            activation: {
              type: 'mouse',
            },
            transformation: {
              type: 'wavy',
              props: { seed: '5000', frequency: 0.1, amplitude: 1 },
            },
            onToFullscreenStart: ({ index }) => {
              currentIndex = index
              thumbs[currentIndex].style.opacity = 1
              gsap.to(itemsWrapper, {
                duration: 0.6,
                ease: Power1.easeInOut,
                opacity: 1,
                delay: 0,
              })
              toggleFullview()
            },
            onToGridStart: ({ index }) => {
              gsap.to(itemsWrapper, {
                duration: 1,
                ease: Power3.easeInOut,
                scale: 1,
                opacity: 1,
              })
              toggleFullview()
            },
            onToGridFinish: ({ index, lastIndex }) => {
              thumbs[lastIndex].style.opacity = 1
            },
            easings: {
              toFullscreen: Cubic.easeInOut,
            },
          })
        }

        transitionEffect.init()

        if (document.getElementById('#itemsWrapperLinks')) {
          const itemsCaptions = document.getElementById('itemsWrapperLinks')
          const thumbsLink = [
            ...itemsCaptions.querySelectorAll('.trigger-item-link'),
          ]
          for (
            let idxCaption = 0;
            idxCaption < thumbsLink.length;
            idxCaption++
          ) {
            thumbsLink[idxCaption].addEventListener(
              'click',
              transitionEffect.createOnMouseDown(idxCaption),
            )
          }
        }

        const toggleFullview = () => {
          if (transitionEffect.isFullscreen) {
            transitionEffect.toGrid()
          }
        }

        // Preload all the images in the pageI
        imagesLoaded(
          document.querySelectorAll('.grid__item-img'),
          (instance) => {
            let images = []
            for (var i = 0, imageSet = {}; i < instance.elements.length; i++) {
              let image = {
                element: instance.elements[i],
                image: instance.images[i].isLoaded
                  ? instance.images[i].img
                  : null,
              }
              if (i % 2 === 0) {
                imageSet = {}
                imageSet.small = image
              }

              if (i % 2 === 1) {
                imageSet.large = image
                images.push(imageSet)
              }
            }
            transitionEffect.createTextures(images)
          },
        )
      

      const $body = document.body

      document.body.addEventListener('mousedown', function (evt) {
        const handler = function (evt) {
          if (evt.type === 'mouseup') {
            document
              .querySelectorAll(
                '#itemsWrapperLinks .trigger-item-link, #itemsWrapperLinks .trigger-item-link-secondary',
              )
              .forEach(function (element) {
                element.addEventListener('click', function () {
                  const parent_item = this.closest('.trigger-item')
                  parent_item.classList.add('above')

                  if (
                    !document
                      .getElementById('page-content')
                      .classList.contains('light-content')
                  ) {
                    if (
                      !document
                        .querySelector('.portfolio')
                        .classList.contains('portfolio-shortcode')
                    ) {
                      if (!parent_item.classList.contains('change-header')) {
                        document
                          .getElementById('page-content')
                          .classList.add('light-content')
                      }
                    } else {
                      if (!parent_item.classList.contains('change-header')) {
                        document
                          .getElementById('page-content')
                          .classList.remove('light-content')
                      }
                    }
                  } else {
                    if (
                      !document
                        .querySelector('.portfolio')
                        .classList.contains('portfolio-shortcode')
                    ) {
                      if (parent_item.classList.contains('change-header')) {
                        document
                          .getElementById('page-content')
                          .classList.remove('light-content')
                      }
                    } else {
                      if (!parent_item.classList.contains('change-header')) {
                        document
                          .getElementById('page-content')
                          .classList.remove('light-content')
                      }
                    }
                  }

                  document
                    .querySelectorAll('.clapat-slider .trigger-item')
                    .forEach(function (item) {
                      if (!item.classList.contains('above')) {
                        gsap.to(item, {
                          duration: 0.5,
                          delay: 0,
                          opacity: 0,
                          ease: Power4.easeInOut,
                        })
                      } else {
                        gsap.to(item, {
                          duration: 0.5,
                          delay: 0.4,
                          opacity: 0,
                          ease: Power4.easeInOut,
                        })
                      }
                    })

                  gsap.to(
                    '#hero, #show-filters, .item-caption-wrapper, .showcase-portfolio .slide-caption, #page-nav, footer, .fadeout-element',
                    { duration: 0.5, opacity: 0, ease: Power4.easeInOut },
                  )

                  if (document.body.classList.contains('hero-below-caption')) {
                    const heroTranslate =
                      document.querySelector('.hero-translate').offsetHeight
                    gsap.to('#app canvas', {
                      duration: 1,
                      y: heroTranslate,
                      delay: 0.7,
                      ease: Power3.easeInOut,
                    })
                  }

                  setTimeout(function () {
                    const link = document.querySelector('.above a')
                    link.click()
                  }, 1500)
                })
              })
          } else {
            // drag
          }
          document.body.removeEventListener('mouseup', handler)
          document.body.removeEventListener('mousemove', handler)
        }
        document.body.addEventListener('mouseup', handler)
        document.body.addEventListener('mousemove', handler)
      })
    }
  }
} //End FitThumbScreenWEBGL
