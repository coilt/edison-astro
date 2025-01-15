import { gsap } from '/node_modules/gsap/all'

export function HorizontalGallery() {
  const panelsSections = gsap.utils.toArray('.panels')
  for (const i = 0; i < panelsSections.length; i++) {
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

    const totalPanelsWidth = 0
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
}
