import { gsap, Flip } from '/node_modules/gsap/all'

export function Lightbox() {
  // Image Popup
  const items = gsap.utils.toArray('.image-link')

  let sourceItem = null // keeps track of which item is the source (clicked to open)
  let activeItem = null // keeps track of which item is opened (details)

  // Add click listeners
  function showDetails(item, event) {
    if (sourceItem) {
      // someone could click on an element behind the open details panel in which case we should just ignore it.
      return
    }

    event.preventDefault()

    document.body.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="clapat-img-popup">
          <div class="clapat-img-popup-bg-close"></div>      
          <div class="clapat-img-popup-viewport">
              <div class="clapat-img-popup-preloader"><div></div><div></div><div></div><div></div></div>          
              <img />
              <div class="clapat-img-popup-close link"></div>          
          </div>        
          <div class="clapat-img-popup-prev link"></div>
          <div class="clapat-img-popup-next link"></div>
      </div>
  `,
    )

    const details = document.querySelector('.clapat-img-popup')
    const detailsBgClose = document.querySelector('.clapat-img-popup-bg-close')
    const detailsClose = document.querySelector('.clapat-img-popup-close')
    const detailsPreloader = document.querySelector(
      '.clapat-img-popup-preloader',
    )
    const detailImage = document.querySelector('.clapat-img-popup img')
    const detailPrev = document.querySelector('.clapat-img-popup-prev')
    const detailNext = document.querySelector('.clapat-img-popup-next')

    gsap.to(detailsBgClose, {
      duration: 0.3,
      delay: 0,
      backgroundColor: 'rgba(0,0,0,0.9)',
    })
    gsap.to(detailsPreloader, { duration: 0.2, opacity: 1 })
    gsap.set(detailImage, { opacity: 0 })

    let onLoad = () => {
      gsap.to(detailsPreloader, { duration: 0.2, opacity: 0 })
      gsap.set(detailImage, { opacity: 1 })
      // position the details on top of the item (scaled down)
      Flip.fit(details, item, { scale: true, fitChild: detailImage })

      // record the state
      const state = Flip.getState(detailImage)

      // set the final state
      gsap.set(details, { clearProps: true }) // wipe out all inline stuff so it's in the native state (not scaled)

      gsap.to([detailsClose, detailPrev, detailNext], {
        duration: 0.3,
        delay: 0.6,
        opacity: 1,
      })

      Flip.from(state, {
        delay: 0.2,
        duration: 0.5,
        ease: 'power2.inOut',
        scale: true,
      })

      detailImage.removeEventListener('load', onLoad)
      detailsBgClose.addEventListener('click', hideDetails)
      detailsClose.addEventListener('click', hideDetails)
      detailPrev.addEventListener('click', prevPopup)
      detailNext.addEventListener('click', nextPopup)
    }

    // change image
    detailImage.addEventListener('load', onLoad)
    detailImage.src = item.getAttribute('href')

    // set the source item that was clicked
    sourceItem = activeItem = item
  }

  function hideDetails() {
    const details = document.querySelector('.clapat-img-popup')
    const detailsBgClose = document.querySelector('.clapat-img-popup-bg-close')
    const detailsClose = document.querySelector('.clapat-img-popup-close')
    const detailImage = document.querySelector('.clapat-img-popup img')
    const detailPrev = document.querySelector('.clapat-img-popup-prev')
    const detailNext = document.querySelector('.clapat-img-popup-next')

    detailsBgClose.removeEventListener('click', hideDetails)
    detailsClose.removeEventListener('click', hideDetails)
    gsap.set(details, { overflow: 'hidden' })

    // record the current state of details
    const state = Flip.getState(detailImage)

    // scale details down so that its detailImage fits exactly on top of sourceItem
    Flip.fit(detailImage, sourceItem, { scale: true, fitChild: detailImage })

    gsap.to([detailsClose, detailPrev, detailNext], {
      duration: 0.2,
      delay: 0,
      opacity: 0,
    })

    // animate from the original state to the current one.
    Flip.from(state, {
      scale: true,
      duration: 0.5,
      delay: 0.0, // time in ms if we want a delay before flip
      onComplete: () =>
        gsap.to(detailsBgClose, {
          duration: 0.5,
          backgroundColor: 'rgba(0,0,0,0)',
          onComplete: function () {
            document.querySelectorAll('.clapat-img-popup').remove()
          },
        }),
    })

    sourceItem = activeItem = null
  }

  function nextPopup() {
    const detailsPreloader = document.querySelector(
      '.clapat-img-popup-preloader',
    )
    const detailImage = document.querySelector('.clapat-img-popup img')
    let currIndex = items.indexOf(activeItem)

    let nextIndex = currIndex + 1
    if (nextIndex >= items.length) {
      nextIndex = 0
    }

    gsap.to(detailsPreloader, { duration: 0.2, opacity: 1 })
    gsap.to(detailImage, { duration: 0.2, opacity: 0 })

    let onLoad = () => {
      gsap.to(detailsPreloader, { duration: 0.2, opacity: 0 })
      gsap.to(detailImage, { duration: 0.2, opacity: 1, delay: 0 })
      detailImage.removeEventListener('load', onLoad)
    }

    sourceItem = activeItem = items[nextIndex]
    detailImage.addEventListener('load', onLoad)
    detailImage.src = activeItem.getAttribute('href')
  }

  function prevPopup() {
    const detailsPreloader = document.querySelector(
      '.clapat-img-popup-preloader',
    )
    const detailImage = document.querySelector('.clapat-img-popup img')
    let currIndex = items.indexOf(activeItem)

    let prevIndex = currIndex - 1
    if (prevIndex < 0) {
      prevIndex = items.length - 1
    }

    gsap.to(detailsPreloader, { duration: 0.2, opacity: 1 })
    gsap.to(detailImage, { duration: 0.2, opacity: 0 })

    let onLoad = () => {
      gsap.to(detailsPreloader, { duration: 0.2, opacity: 0 })
      gsap.to(detailImage, { duration: 0.2, opacity: 1 })
      detailImage.removeEventListener('load', onLoad)
    }

    sourceItem = activeItem = items[prevIndex]
    detailImage.addEventListener('load', onLoad)
    detailImage.src = activeItem.getAttribute('href')
  }

  gsap.utils
    .toArray('.image-link')
    .forEach((item) => item.addEventListener('click', () => showDetails(item)))

  // Video Popup
  const videoItems = gsap.utils.toArray('.video-link')

  let sourceVideoItem = null // keeps track of which item is opened (details)

  // Add click listeners
  function showVideoDetails(event, item) {
    event.preventDefault()

    if (sourceVideoItem) {
      // someone could click on an element behind the open details panel in which case we should just ignore it.

      return
    }

    document.body.prepend(`<div class="clapat-video-popup">
      <button title="Close (Esc)" type="button" class="clapat-video-popup-close">×</button>
      <iframe class="clapat-video-popup-iframe" frameborder="0" allow="autoplay"></iframe></div>`)

    const details = document.querySelector('.clapat-video-popup')
    const detailsClose = document.querySelector('.clapat-video-popup-close')
    const detailIframe = document.querySelector('.clapat-video-popup iframe')

    let onVideoLoad = () => {
      console.log('Popup Video is ready to play.')
    }

    // load the video
    detailIframe.addEventListener('load', onVideoLoad)
    let videoUrl = item.getAttribute('href')
    if (videoUrl.indexOf('vimeo.com/') >= 0) {
      // this is a vimeo url, extract the video id from it
      let regExp =
        /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/
      let parseUrl = regExp.exec(videoUrl)
      let videoId = parseUrl[5]
      detailIframe.src =
        'https://player.vimeo.com/video/' + videoId + '?autoplay=1'
    } else if (videoUrl.indexOf('youtube.com/') >= 0) {
      // this is a youtube url, extract the video id from it
      let videoId = videoUrl.split('v=')[1]
      let ampersandPosition = videoId.indexOf('&')
      if (ampersandPosition != -1) {
        videoId = videoId.substring(0, ampersandPosition)
      }
      detailIframe.src =
        'https://www.youtube.com/embed/' + videoId + '?autoplay=1'
    } else {
      // give it a try anyway
      detailIframe.src = item.getAttribute('href')
    }

    // assign the current item
    sourceVideoItem = item

    // position the details on top of the item (scaled down)
    Flip.fit(details, item, { scale: true, fitChild: detailIframe })

    // record the state
    const state = Flip.getState(details)

    // set the final state
    gsap.set(details, { clearProps: true }) // wipe out all inline stuff so it's in the native state (not scaled)
    gsap.set(details, {
      xPercent: -50,
      top: '50%',
      yPercent: -50,
      visibility: 'visible',
      overflow: 'hidden',
    })

    Flip.from(state, {
      duration: 0.5,
      ease: 'power2.inOut',
      scale: true,
      onComplete: () => gsap.set(details, { overflow: 'auto' }), // to permit scrolling if necessary
    })

    detailsClose.addEventListener('click', hideVideoDetails)
  }

  function hideVideoDetails() {
    const details = document.querySelector('.clapat-video-popup')
    const detailsClose = document.querySelector('.clapat-video-popup-close')
    const detailIframe = document.querySelector('.clapat-video-popup iframe')

    detailsClose.removeEventListener('click', hideDetails)
    gsap.set(details, { overflow: 'hidden' })

    // record the current state of details
    const state = Flip.getState(details)

    // scale details down so that its detailImage fits exactly on top of sourceItem
    Flip.fit(details, sourceVideoItem, { scale: true, fitChild: detailIframe })

    // animate from the original state to the current one.
    Flip.from(state, {
      scale: true,
      duration: 0.5,
      delay: 0.0, // time in ms if we want a delay before flip
      onComplete: () => $('.clapat-video-popup').remove(),
      //onInterrupt: () => tl.kill()
    }).set(details, { visibility: 'hidden' })

    sourceVideoItem = null
  }

  gsap.utils
    .toArray('.video-link')
    .forEach((item) =>
      item.addEventListener('click', (e) => showVideoDetails(e, item)),
    )
}
