export function FitThumbScreenGSAP() {
  if (!document.body.classList.contains('disable-ajaxload')) {
    const itemsWrapper = document.getElementById('itemsWrapper')
    if (itemsWrapper && itemsWrapper.classList.contains('no-fitthumbs')) {
      document
        .querySelectorAll('#itemsWrapperLinks .trigger-item-link')
        .forEach((link) => {
          link.addEventListener('click', function () {
            const parentItem = this.closest('.trigger-item')
            parentItem.classList.add('above-trigger')
            document.body.classList.add('show-loader')

            const fadeOutTargets = document.querySelectorAll(
              '#hero, #show-filters, .clapat-slider, .item, .item-caption-wrapper, #page-nav, footer, .fadeout-element',
            )
            const tl = gsap.timeline({
              defaults: { duration: 0.5, ease: Power4.easeInOut },
            })
            tl.to(fadeOutTargets, { opacity: 0 })
            setTimeout(() => {
              const linkToClick = document.querySelector('.above-trigger a')
              if (linkToClick) {
                linkToClick.click()
              }
            }, 1000)
          })
        })
    }
  } else {
    document
      .querySelectorAll('#itemsWrapperLinks .trigger-item')
      .forEach((item) => {
        item.addEventListener('click', function () {
          document.body.classList.add('show-loader')
          const fadeOutTargets = document.querySelectorAll(
            '#hero, #show-filters, .clapat-slider, .item, .item-caption-wrapper, #page-nav, footer, .fadeout-element',
          )
          const tl = gsap.timeline()
          tl.to(fadeOutTargets, { opacity: 0 })
        })
      })
  }
}
