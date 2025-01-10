export function PlayVideo() {
 


  if (document.querySelectorAll('.video-wrapper').length > 0) {

    document.querySelectorAll(".video-wrapper").forEach(wrapper => {
        wrapper.addEventListener("mouseenter", function(e) {
            if (this.classList.contains("play")) {
                document.getElementById("ball").classList.add("pause-movie");
            }
            gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#fff'});
            document.getElementById("ball").classList.add("over-movie");
            document.getElementById("ball").innerHTML = '<i class="fa fa-play"></i><i class="fa fa-pause"></i>';
        });

        wrapper.addEventListener("mouseleave", function(e) {
            gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999'});
            document.getElementById("ball").classList.remove("over-movie", "pause-movie");
            document.getElementById("ball").innerHTML = '';
        });

        wrapper.querySelector(".control").addEventListener("mouseenter", function(e) {
            gsap.to('#ball', {duration: 0.2, borderWidth: '20px', scale: 0});
        });

        wrapper.querySelector(".control").addEventListener("mouseleave", function(e) {
            gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#fff'});
        });
    });

    var videocenter = (window.innerHeight - document.querySelector('.video-cover').offsetHeight) / 2;

    var playpause = function(videoObj) {
        if (videoObj != null) {
            if (videoObj.paused || videoObj.ended) {
                videoObj.parentNode.classList.add('play');
                videoObj.play();
            } else {
                videoObj.parentNode.classList.remove('play');
                videoObj.pause();
            }
        }
    };

 
    //Time format converter - 00:00
    var timeFormat = function (seconds) {
      var m =
        Math.floor(seconds / 60) < 10
          ? '0' + Math.floor(seconds / 60)
          : Math.floor(seconds / 60)
      var s =
        Math.floor(seconds - m * 60) < 10
          ? '0' + Math.floor(seconds - m * 60)
          : Math.floor(seconds - m * 60)
      return m + ':' + s
    }

    // Events
    // click to video cover - will start the video

    document.addEventListener('DOMContentLoaded', function () {
      const videoWrappers = document.querySelectorAll('.video-wrapper')
      const ball = document.getElementById('ball')
      const mainPageContent = document.getElementById('main-page-content')

      videoWrappers.forEach((wrapper) => {
        wrapper.addEventListener('click', function () {
          const videocenter =
            (window.innerHeight -
              document.querySelector('.video-cover').offsetHeight) /
            2

          window.scrollTo({
            top: this.offsetTop - videocenter,
            behavior: 'smooth',
          })

          // hide the video cover in order to start playing
          this.querySelector('.video-cover').classList.add('hidden')

          ball.classList.toggle('pause-movie')

          // pause first the other videos
          const current_wrapper = this
          mainPageContent
            .querySelectorAll('.video-wrapper')
            .forEach((otherWrapper) => {
              if (otherWrapper !== current_wrapper) {
                otherWrapper.classList.remove('play')
                otherWrapper.querySelectorAll('video').forEach((video) => {
                  if (!video.paused && !video.ended) {
                    video.pause()
                  }
                })
              }
            })

          // trigger the click for the inner video
          this.querySelectorAll('video').forEach((video) => {
            playpause(video)
          })
        })
      })

      function playpause(videoObj) {
        if (videoObj instanceof HTMLElement) {
          if (videoObj.paused || videoObj.ended) {
            videoObj.parentNode.classList.add('play')
            videoObj.play()
          } else {
            videoObj.parentNode.classList.remove('play')
            videoObj.pause()
          }
        }
      }
    })

    document.addEventListener('DOMContentLoaded', function () {
      // Fullscreen button clicked
      document.querySelectorAll('.btnFS').forEach((btn) => {
        btn.addEventListener('click', function (e) {
          const parent_wrapper = this.closest('.video-wrapper')
          const video_object = parent_wrapper.querySelector('video')

          if (video_object.requestFullscreen) {
            video_object.requestFullscreen()
          } else if (video_object.webkitRequestFullscreen) {
            // Safari
            video_object.webkitRequestFullscreen()
          } else if (video_object.msRequestFullscreen) {
            // IE11
            video_object.msRequestFullscreen()
          } else {
            alert("Your browser doesn't support fullscreen")
          }

          // Prevent video wrapper div responding to the event
          e.stopPropagation()
        })
      })

      // Sound button clicked
      document.querySelectorAll('.sound').forEach((btn) => {
        btn.addEventListener('click', function (e) {
          const parent_wrapper = this.closest('.video-wrapper')
          const video_object = parent_wrapper.querySelector('video')

          video_object.muted = !video_object.muted
          this.classList.toggle('muted')

          const volumeBar = parent_wrapper.querySelector('.volumeBar')
          if (video_object.muted) {
            volumeBar.style.width = '0'
          } else {
            volumeBar.style.width = video_object.volume * 100 + '%'
          }

          // Prevent video wrapper div responding to the event
          e.stopPropagation()
        })
      })

      // Progress bar (video timebar) clicked
      document.querySelectorAll('.progress').forEach((progressBar) => {
        progressBar.addEventListener('click', function (e) {
          const parent_wrapper = this.closest('.video-wrapper')
          const video_object = parent_wrapper.querySelector('video')

          // Calculate click position
          // and update video current time
          // as well as progress bar
          const maxduration = video_object.duration
          const position = e.pageX - this.getBoundingClientRect().left
          let percentage = (100 * position) / this.offsetWidth

          percentage = Math.max(0, Math.min(100, percentage))

          parent_wrapper.querySelector('.timeBar').style.width =
            percentage + '%'
          video_object.currentTime = (maxduration * percentage) / 100

          // Prevent video wrapper div responding to the event
          e.stopPropagation()
        })
      })
    })

    document.addEventListener('DOMContentLoaded', function () {
      const mainPageContent = document.getElementById('main-page-content')
      const videos = mainPageContent.querySelectorAll('video')

      videos.forEach(function (video) {
        const video_wrapper = video.parentElement

        // Remove default control when JS loaded
        video.removeAttribute('controls')
        fadeIn(video_wrapper.querySelector('.control'), 500)
        fadeIn(video_wrapper.querySelector('.caption'), 500)

        // Before everything get started and we have the info about the video such as duration
        video.addEventListener('loadedmetadata', function () {
          // Set video properties
          video_wrapper.querySelector('.current').textContent = timeFormat(0)
          video_wrapper.querySelector('.duration').textContent = timeFormat(
            video.duration,
          )
        })

        // Display current video buffered progress
        video.addEventListener('progress', function () {
          const maxduration = video.duration

          if (maxduration > 0) {
            for (let i = 0; i < video.buffered.length; i++) {
              if (
                video.buffered.start(video.buffered.length - 1 - i) <
                video.currentTime
              ) {
                const perc =
                  (video.buffered.end(video.buffered.length - 1 - i) /
                    maxduration) *
                    100 +
                  '%'
                video_wrapper.querySelector('.bufferBar').style.width = perc
                break
              }
            }
          }
        })
      })

      // Helper function to format time
      function timeFormat(seconds) {
        const m =
          Math.floor(seconds / 60) < 10
            ? '0' + Math.floor(seconds / 60)
            : Math.floor(seconds / 60)
        const s =
          Math.floor(seconds - m * 60) < 10
            ? '0' + Math.floor(seconds - m * 60)
            : Math.floor(seconds - m * 60)
        return m + ':' + s
      }

      // Helper function to fade in an element
      function fadeIn(element, duration) {
        element.style.opacity = 0
        element.style.display = 'block'

        let start = null
        function step(timestamp) {
          if (!start) start = timestamp
          const progress = timestamp - start
          element.style.opacity = Math.min(progress / duration, 1)
          if (progress < duration) {
            window.requestAnimationFrame(step)
          }
        }
        window.requestAnimationFrame(step)
      }

      document.addEventListener('DOMContentLoaded', function () {
        const mainPageContent = document.getElementById('main-page-content')
        const videos = mainPageContent.querySelectorAll('video')
        const ball = document.getElementById('ball')

        videos.forEach(function (video) {
          const video_wrapper = video.parentElement
          let completeloaded = false

          // Display current video play time
          video.addEventListener('timeupdate', function () {
            const currentPos = this.currentTime
            const maxduration = this.duration
            const perc = (100 * currentPos) / maxduration
            video_wrapper.querySelector('.timeBar').style.width = perc + '%'
            video_wrapper.querySelector('.current').textContent =
              timeFormat(currentPos)
          })

          // Video screen and play button clicked
          video.addEventListener('click', function () {
            playpause(this)
          })

          // Video canplay event
          video.addEventListener('canplay', function () {
            fadeOut(video_wrapper.querySelector('.loading'), 100)
          })

          // Video canplaythrough event
          // Solve Chrome cache issue
          video.addEventListener('canplaythrough', function () {
            completeloaded = true
          })

          // Video ended event
          video.addEventListener('ended', function () {
            this.pause()
            video_wrapper.classList.remove('play')
            ball.classList.toggle('pause-movie')
          })

          // Video seeking event
          video.addEventListener('seeking', function () {
            // If video fully loaded, ignore loading screen
            if (!completeloaded) {
              fadeIn(video_wrapper.querySelector('.loading'), 200)
            }
          })

          // Video seeked event
          video.addEventListener('seeked', function () {
            // You can add code here if needed
          })

          // Video waiting for more data event
          video.addEventListener('waiting', function () {
            fadeIn(video_wrapper.querySelector('.loading'), 200)
          })
        })

        // Helper function to format time
        function timeFormat(seconds) {
          const m =
            Math.floor(seconds / 60) < 10
              ? '0' + Math.floor(seconds / 60)
              : Math.floor(seconds / 60)
          const s =
            Math.floor(seconds - m * 60) < 10
              ? '0' + Math.floor(seconds - m * 60)
              : Math.floor(seconds - m * 60)
          return m + ':' + s
        }

        // Helper function to fade in an element
        function fadeIn(element, duration) {
          element.style.opacity = 0
          element.style.display = 'block'

          let start = null
          function step(timestamp) {
            if (!start) start = timestamp
            const progress = timestamp - start
            element.style.opacity = Math.min(progress / duration, 1)
            if (progress < duration) {
              window.requestAnimationFrame(step)
            }
          }
          window.requestAnimationFrame(step)
        }

        // Helper function to fade out an element
        function fadeOut(element, duration) {
          element.style.opacity = 1

          let start = null
          function step(timestamp) {
            if (!start) start = timestamp
            const progress = timestamp - start
            element.style.opacity = Math.max(1 - progress / duration, 0)
            if (progress < duration) {
              window.requestAnimationFrame(step)
            } else {
              element.style.display = 'none'
            }
          }
          window.requestAnimationFrame(step)
        }

        // Playpause function (you need to implement this based on your requirements)
        function playpause(video) {
          if (video.paused || video.ended) {
            video.play()
            video.parentElement.classList.add('play')
          } else {
            video.pause()
            video.parentElement.classList.remove('play')
          }
          ball.classList.toggle('pause-movie')
        }
      })
    })
  }
}
