import { gsap } from '/node_modules/gsap/all'


// News Shortcode
export function NewsShortcode() {
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
          markers: false,
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
}