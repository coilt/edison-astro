import { gsap } from '/node_modules/gsap/all'

export function ElementsAnimation() {
  const contentVideo = gsap.utils.toArray('.content-video-wrapper')
  contentVideo.forEach(function (videoPlay) {
    const video = videoPlay.querySelector('video')

    const videoScene = ScrollTrigger.create({
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
}
