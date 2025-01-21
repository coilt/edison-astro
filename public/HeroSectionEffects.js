import { gsap, Linear } from '/node_modules/gsap/all'
 

export function HeroSectionEffects() {
  if (document.body.classList.contains('hero-below-caption')) {
    // Create Scripts
  } else {
    if (document.querySelector('#hero').classList.contains('has-image')) {
      const heroCaption = document.querySelector(
        '#hero.has-image #hero-caption',
      )
      const heroImage = document.querySelector('#hero-image-wrapper')

      function setheroImageProperties() {
        gsap.set(heroCaption, { height: window.innerHeight })
        gsap.set(heroImage, { height: window.innerHeight })
      }

      setheroImageProperties()

      const heroImagePin = gsap.to('#hero-image-wrapper', {
        scrollTrigger: {
          trigger: '#hero.has-image',

          start: 'top top',
          end: function () {
            const heroElement = document.querySelector('#hero.has-image')
            const durationHeight = heroElement.offsetHeight - window.innerHeight
            return '+=' + durationHeight
          },

          pin: '#hero-background-layer',
        },
      })

      window.addEventListener('resize', setheroImageProperties)

      // const heroImageParallax = gsap.to(
      //   '.parallax-scroll-image #hero-bg-image',
      //   {
      //     duration: 1,
      //     backgroundPosition: 'center 95%',
      //     ease: Linear.easeNone,
      //     scrollTrigger: {
      //       trigger: '#hero',
      //       start: 'top top',
      //       end: () =>
      //         `+=${
      //           document.getElementById('hero').offsetHeight -
      //           window.innerHeight
      //         }`,
      //       scrub: true,
      //     },
      //   },
      // )

		
      // const heroImageParallax = gsap.to('.parallax-scroll-image #hero-bg-image', {
      //   duration: 1, 
      //   backgroundPosition: "center " + 95 +"%", 
      //   ease:Linear.easeNone,
      //   scrollTrigger: {
      //     trigger: '#hero',
      //     start: "top top",
      //     end: () => {
      //       const heroElement = document.getElementById('hero');
      //       const durationHeight = heroElement.offsetHeight - window.innerHeight;
      //       return `+=${durationHeight}`;
      //   },
      //     scrub: true,
      //   }
      // });




      const heroFooter = document.getElementById('#hero-footer')
      if (heroFooter) {
        const heroDescription = document.getElementById('#hero-description')
        if (heroDescription) {
          gsap.to('#hero-footer', {
            duration: 1,
            yPercent: 15,
            opacity: 0,
            ease: Linear.easeNone,
            scrollTrigger: {
              trigger: '#hero-description',
              start: 'top 50%',
              end: function () {
                const durationHeight =
                  document.getElementById('#hero-description').outerHeight() * 2
                return '+=' + durationHeight
              },
              scrub: true,
            },
          })
        } else {
          console.log(
            'Element with ID "hero-description" not found in the document',
          )
        }
      } else {
        // console.log('Element with ID "hero-footer" not found in the document')
      }
    }

    const heroCaptionParallax = gsap.to(
      document.querySelector('#hero-caption.parallax-scroll-caption'),
      {
        duration: 1,
        yPercent: 5,
        opacity: 0.5,
        ease: Linear.easeNone,
        scrollTrigger: {
          trigger: document.querySelector('#hero'),
          start: 'top top',
          end: () => `+=${document.querySelector('#hero').offsetHeight}`,
          scrub: true,
        },
      },
    )

    // Page and Project Navigation

    if (document.body.classList.contains('hero-below-caption')) {
      // Create Scripts
    } else {
      const NextheroPin = gsap.to('.next-project-wrap', {
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

      const nextProjectImageParallax = gsap.to('.next-project-image', {
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

      const nextAllWorks = gsap.to('.all-works', {
        opacity: 0,
        ease: Linear.easeNone,
        scrollTrigger: {
          trigger: '#project-nav',
          start: 'top 0%',
          end: '+=50%',
          scrub: true,
        },
      })

      const nextProjectProgress = gsap.to('.next-hero-progress span', {
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

      const startCount = 0
      const num = { const: startCount }
      const numbers = document.querySelector('.next-hero-counter span')
      if (numbers) {
        const nextProjectCounter = gsap
          .timeline({
            scrollTrigger: {
              trigger: '#project-nav',
              start: 'top top',
              end: '+=100%',
              scrub: true,
            },
          })
          .to(num, {
            const: 100,
            duration: 1,
            ease: Linear.easeNone,
            onUpdate: changeNumber,
          })
      }

      function changeNumber() {
        numbers.innerHTML = num.const.toFixed()
      }

      const nextPageCaptionParallax = gsap.to('.page-nav-caption', {
        duration: 1,
        top: '0',
        scale: 1,
        opacity: 1,
        ease: Linear.easeNone,
        scrollTrigger: {
          trigger: '#page-nav',
          start: 'top 100%',
          end: () =>
            `+=${
              Array.from(document.querySelectorAll('#page-nav')).reduce(
                (total, element) => total + element.offsetHeight,
                0,
              ) + document.querySelector('footer').offsetHeight
            }`,
          scrub: true,
        },
      })
    }
  }
}
