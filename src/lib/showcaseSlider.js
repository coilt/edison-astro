export function ShowcaseSlider() {
  if (document.querySelectorAll('.showcase-slider').length > 0) {
    document.querySelectorAll('body').forEach(_element => _element.classList.add("disable-scroll"));
    document.querySelectorAll('footer').forEach(_element2 => _element2.classList.add("showcase-footer"));
    gsap.set(document.querySelectorAll('.showcase-slider .clapat-slider .slide-inner'), {
      opacity: 0,
      scale: 1.1
    });
    gsap.set(document.querySelectorAll('.showcase-slider .slide-title span'), {
      y: 100,
      opacity: 0
    });
    gsap.set(document.querySelectorAll('#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text'), {
      opacity: 0
    });
    slider = new ClapatSlider('.showcase-slider', {
      direction: 'vertical',
      snap: true,
      navigation: {
        nextEl: '.cp-button-next',
        prevEl: '.cp-button-prev'
      },
      parallax: [{
        element: '.section-image',
        margin: 20
      }],
      on: {
        init: function () {
          if (document.querySelectorAll('body').classList.contains('show-loader')) {
            imagesLoaded('body', function () {
              gsap.to(document.querySelectorAll('.showcase-slider .clapat-slider .clapat-slide .slide-inner'), {
                duration: 1.2,
                opacity: 1,
                scale: 1,
                delay: 0,
                ease: Power4.easeOut
              });
              gsap.to(document.querySelectorAll('.showcase-slider .slide-title span'), {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 0.1,
                ease: Power4.easeOut
              });
              gsap.to(document.querySelectorAll('#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text'), {
                duration: 0.5,
                opacity: 1,
                delay: 0.4,
                ease: Power3.easeOut
              });
              var bullets = document.querySelectorAll('.showcase-carousel .clapat-pagination-bullet');
              var initialHeights = Array.from(bullets).map(function (bullet) {
                return bullet.clientHeight + 'px';
              });
              gsap.set(bullets, {
                height: 0
              });
              gsap.to(bullets, {
                duration: 0.3,
                delay: 0.3,
                height: function (index, target) {
                  return initialHeights[index];
                },
                ease: Power3.easeOut,
                stagger: 0.05,
                onComplete: function () {
                  gsap.set(bullets, {
                    height: ''
                  });
                }
              });
            });
            let pageContent = document.getElementById('page-content');
            let magicCursor = document.getElementById('magic-cursor');
            let firstSlide = document.querySelector('.clapat-slide');
            let videos = firstSlide.querySelectorAll('video');
            if (firstSlide.classList.contains('change-header')) {
              pageContent.classList.remove('light-content');
              magicCursor.classList.remove('light-content');
            } else {
              pageContent.classList.add('light-content');
              magicCursor.classList.add('light-content');
            }
            videos.forEach(function (video) {
              video.play();
            });
          }
        },
        activeSlideChanged: function (activeSlide, prevSlide, nextSlide) {
          console.log('Click event ');
          let pageContent = document.getElementById('page-content');
          let magicCursor = document.getElementById('magic-cursor');
          if (activeSlide.classList.contains('change-header')) {
            pageContent.classList.remove('light-content');
            magicCursor.classList.remove('light-content');
          } else {
            pageContent.classList.add('light-content');
            magicCursor.classList.add('light-content');
          }
          if (prevSlide.querySelector('video')) {
            const _chain = document.querySelectorAll(prevSlide).querySelector('video').toArray();
            const _chain2 = document.querySelectorAll(_chain).pause().toArray();
          }
          if (activeSlide.querySelector('video')) {
            const _chain3 = document.querySelectorAll(activeSlide).querySelector('video').toArray();
            const _chain4 = document.querySelectorAll(_chain3).play().toArray();
          }
          if (nextSlide.querySelector('video')) {
            const _chain5 = document.querySelectorAll(nextSlide).querySelector('video').toArray();
            const _chain6 = document.querySelectorAll(_chain5).pause().toArray();
          }
        }
      }
    });
    arrTitles = gsap.utils.toArray('.clapat-slider-wrapper .clapat-sync-slider .clapat-sync-slide');
    if (document.querySelectorAll('.showcase-slider').classList.contains('rotate-caption')) {
      const slideduration = 1 / arrTitles.length;
      const transitionduration = slideduration;
      let currentTimelinePos = 0;
      for (let i = 0; i < arrTitles.length; i++) {
        const rowTitleWrapper = arrTitles[i];
        if (i != 0) {
          gsap.set(rowTitleWrapper, {
            yPercent: 60,
            rotationX: -90,
            z: -60,
            opacity: 0.5
          });
          slider.tl.to(rowTitleWrapper, {
            yPercent: 0,
            rotationX: 0,
            z: 0,
            opacity: 1,
            duration: transitionduration
          }, '<').to(rowTitleWrapper, {
            yPercent: -65,
            rotationX: 90,
            z: -60,
            opacity: 0.5,
            duration: transitionduration
          }, '>');
        } else {
          slider.tl.fromTo(rowTitleWrapper, {
            yPercent: 0,
            rotationX: 0,
            z: 0,
            opacity: 1
          }, {
            yPercent: -65,
            rotationX: 90,
            z: -60,
            opacity: 0.5,
            duration: transitionduration
          }, 0);
        }
        currentTimelinePos += transitionduration;
      }
      const firstTitle = arrTitles[0];
      slider.tl.fromTo(firstTitle, {
        yPercent: 65,
        rotationX: -90,
        z: -60,
        opacity: 0.5
      }, {
        yPercent: 0,
        rotationX: 0,
        z: 0,
        opacity: 1,
        duration: transitionduration
      }, '<');
      gsap.set(firstTitle, {
        yPercent: 0,
        rotationX: 0,
        z: 0,
        opacity: 1
      });
    } else {
      const slideduration = 1 / arrTitles.length;
      const transitionduration = slideduration;
      let currentTimelinePos = 0;
      for (let i = 0; i < arrTitles.length; i++) {
        const rowTitleWrapper = arrTitles[i];
        if (i != 0) {
          gsap.set(rowTitleWrapper, {
            yPercent: 100
          });
          slider.tl.to(rowTitleWrapper, {
            yPercent: 0,
            duration: transitionduration
          }, '<').to(rowTitleWrapper, {
            yPercent: -100,
            duration: transitionduration
          }, '>');
        } else {
          slider.tl.fromTo(rowTitleWrapper, {
            yPercent: 0
          }, {
            yPercent: -100,
            duration: transitionduration
          }, 0);
        }
        currentTimelinePos += transitionduration;
      }
      const firstTitle = arrTitles[0];
      slider.tl.fromTo(firstTitle, {
        yPercent: 100
      }, {
        yPercent: 0,
        duration: transitionduration
      }, '<');
      gsap.set(firstTitle, {
        yPercent: 0
      });
    }
    slider.tl.fromTo('.progress-info-fill', {
      backgroundSize: '0% 100%'
    }, {
      backgroundSize: '100% 100%'
    }, 0).fromTo('.progress-info-fill-2', {
      backgroundSize: '100% 100%'
    }, {
      backgroundSize: '0% 100%',
      duration: 0.3,
      ease: 'power3'
    }, 0);
    document.querySelectorAll('.carousel-prev').forEach(_element3 => _element3.addEventListener('click', function () {
      if (window.rotateElement && window.rotateElement.isActive()) {
        return;
      } else {
        window.rotateElement = gsap.to([].concat(...document.querySelectorAll(this).map(_element4 => _element4.querySelectorAll('i'))), {
          duration: 0.3,
          rotate: '-= 180'
        });
      }
    }));
    document.querySelectorAll('.carousel-next').forEach(_element5 => _element5.addEventListener('click', function () {
      if (window.rotateElement && window.rotateElement.isActive()) {
        return;
      } else {
        window.rotateElement = gsap.to([].concat(...document.querySelectorAll(this).map(_element6 => _element6.querySelectorAll('i'))), {
          duration: 0.3,
          rotate: '+= 90'
        });
      }
    }));
    if (!isMobile()) {
      var dragWrapper = document.querySelectorAll('.clapat-slider');
      dragWrapper.forEach(_element7 => _element7.addEventListener('mousedown', function (evt) {
        dragWrapper.forEach(_element8 => _element8.addEventListener('mouseup mousemove', function handler(evt) {
          if (evt.type === 'mouseup') {
            // click
            gsap.to('#ball', {
              duration: 0.2,
              borderWidth: '4px',
              scale: 0.5,
              borderColor: '#999999'
            });
            document.querySelectorAll('body').forEach(_element9 => _element9.classList.remove("scale-drag-y"));
            document.querySelectorAll('#ball').forEach(_element10 => _element10.classList.remove("with-icon"));
            document.querySelectorAll('#ball i').forEach(_element11 => _element11.parentNode.removeChild(_element11));
            document.querySelectorAll('#ball').forEach(_element12 => _element12.classList.remove("with-blur"));
            document.querySelectorAll('#ball p').forEach(_element13 => _element13.parentNode.removeChild(_element13));
          } else {
            // drag
            if (document.querySelectorAll('#magic-cursor').classList.contains('light-content')) {
              gsap.to('#ball', {
                duration: 0.2,
                borderWidth: '2px',
                scale: 1,
                borderColor: '#fff',
                backgroundColor: 'transparent'
              });
            } else {
              gsap.to('#ball', {
                duration: 0.2,
                borderWidth: '2px',
                scale: 1,
                borderColor: '#000',
                backgroundColor: 'transparent'
              });
            }
            document.querySelectorAll('body').forEach(_element14 => _element14.classList.add("scale-drag-y"));
            document.querySelectorAll('#ball').forEach(_element15 => _element15.classList.remove("with-icon"));
            document.querySelectorAll('#ball i').forEach(_element16 => _element16.parentNode.removeChild(_element16));
            document.querySelectorAll('#ball').forEach(_element17 => _element17.classList.remove("with-blur"));
            document.querySelectorAll('#ball p').forEach(_element18 => _element18.parentNode.removeChild(_element18));
          }
          dragWrapper.off('mouseup mousemove', handler);
        }));
      }));
      document.querySelectorAll('.clapat-slider').forEach(_element19 => _element19.addEventListener('mouseup touchend', function () {
        gsap.to('#ball', {
          duration: 1,
          borderWidth: '4px',
          scale: 0.5,
          borderColor: '#999999',
          ease: Elastic.easeOut
        });
        document.querySelectorAll('body').forEach(_element20 => _element20.classList.remove("scale-drag-y"));
      }));
      document.querySelectorAll('body').forEach(_element21 => _element21.addEventListener('mouseleave', function () {
        gsap.to('#ball', {
          duration: 1,
          borderWidth: '4px',
          scale: 0.5,
          borderColor: '#999999',
          ease: Elastic.easeOut
        });
        document.querySelectorAll('body').forEach(_element22 => _element22.classList.remove("scale-drag-y"));
      }));
      const _start = document.querySelectorAll('.trigger-item');
      _start.forEach(_element31 => _element31.addEventListener('mouseenter', function () {
        if (!document.querySelectorAll('body').classList.contains('scale-drag-y')) {
          var $this = document.querySelectorAll(this);
          gsap.to('#ball', {
            duration: 0.3,
            borderWidth: '2px',
            scale: 1.4,
            borderColor: 'rgba(255,255,255,0)',
            backgroundColor: 'rgba(255,255,255,0.1)'
          });
          gsap.to('#ball-loader', {
            duration: 0.2,
            borderWidth: '2px',
            top: 2,
            left: 2
          });
          document.querySelectorAll('#ball').forEach(_element24 => _element24.classList.add("with-blur"));
          document.querySelectorAll('#ball').append('<p class="center-first">' + $this.data('centerline') + '</p>');
          const _start2 = document.querySelectorAll(this);
          const _chain7 = [].concat(..._start2.map(_element26 => _element26.querySelectorAll('video')));
          const _chain8 = document.querySelectorAll(_chain7).each(function () {
            const _start3 = document.querySelectorAll(this);
            const _chain9 = document.querySelectorAll(_start3).get(0).toArray();
            const _chain10 = document.querySelectorAll(_chain9).play().toArray();
          }).toArray();
        }
      }));
      _start.forEach(_element32 => _element32.addEventListener('mouseleave', function () {
        if (!document.querySelectorAll('body').classList.contains('scale-drag-y')) {
          gsap.to('#ball', {
            duration: 0.2,
            borderWidth: '4px',
            scale: 0.5,
            borderColor: '#999999',
            backgroundColor: 'transparent'
          });
          gsap.to('#ball-loader', {
            duration: 0.2,
            borderWidth: '4px',
            top: 0,
            left: 0
          });
          document.querySelectorAll('#ball').forEach(_element27 => _element27.classList.remove("with-blur"));
          document.querySelectorAll('#ball p').forEach(_element28 => _element28.parentNode.removeChild(_element28));
          const _start4 = document.querySelectorAll(this);
          const _chain11 = [].concat(..._start4.map(_element30 => _element30.querySelectorAll('video')));
          const _chain12 = document.querySelectorAll(_chain11).each(function () {
            const _start5 = document.querySelectorAll(this);
            const _chain13 = document.querySelectorAll(_start5).get(0).toArray();
            const _chain14 = document.querySelectorAll(_chain13).pause().toArray();
          }).toArray();
        }
      }));
    }
    document.querySelectorAll('.trigger-item').forEach(_element33 => _element33.addEventListener('click', function () {
      let trigger_item = document.querySelectorAll(this);
      var clickedIndex = document.querySelectorAll(this).data('index');
      document.querySelectorAll('body').forEach(_element34 => _element34.classList.add("load-project-thumb-with-title"));
      document.querySelectorAll('body').append('<div class="temporary-hero light-content"><div class="outer content-full-width middle"><div class="inner"></div></div></div>');
      if (document.querySelectorAll(this).classList.contains('change-header')) {
        gsap.to(document.querySelectorAll('.slide-title'), {
          duration: 1.5,
          color: '#000',
          delay: 0.3,
          ease: Power4.easeInOut
        });
      } else {
        gsap.to(document.querySelectorAll('.slide-title'), {
          duration: 1.5,
          color: '#fff',
          delay: 0.3,
          ease: Power4.easeInOut
        });
      }
      setTimeout(function () {
        // Find the corresponding cloned list item
        var clonedListItem = document.querySelectorAll('.clapat-sync-slider-viewport .clapat-sync-slide:eq(' + clickedIndex + ')');
        const _chain15 = [].concat(...clonedListItem.map(_element37 => _element37.querySelectorAll('.slide-title')));
        const _chain16 = document.querySelectorAll(_chain15).appendTo('.temporary-hero .inner').toArray();
        var moveTitle = document.querySelectorAll('.temporary-hero .inner').outerHeight() / 2 - document.querySelectorAll('.temporary-hero .slide-title').outerHeight() * 0.5 - 1;
        gsap.to(document.querySelectorAll('.temporary-hero .slide-title'), {
          duration: 1.5,
          y: moveTitle,
          opacity: 1,
          delay: 0.3,
          ease: Power4.easeInOut
        });
        if (trigger_item.classList.contains('change-header')) {
          gsap.to(document.querySelectorAll('.slide-title'), {
            duration: 1.5,
            color: '#000',
            ease: Power4.easeInOut
          });
        }
        document.querySelectorAll('body').forEach(_element36 => _element36.classList.add("show-loader"));
      }, 300);
      gsap.to('footer, .carousel-nav-wrapper', {
        duration: 0.5,
        opacity: 0,
        ease: Power4.easeInOut
      });
      gsap.to('#ball', {
        duration: 0.3,
        borderWidth: '4px',
        scale: 0.5,
        borderColor: '#999999',
        backgroundColor: 'transparent'
      });
      gsap.to('#ball-loader', {
        duration: 0.3,
        borderWidth: '4px',
        top: 0,
        left: 0
      });
      document.querySelectorAll('#ball').forEach(_element38 => _element38.classList.remove("with-blur"));
      document.querySelectorAll('#ball p').forEach(_element39 => _element39.parentNode.removeChild(_element39));
      const _chain17 = document.querySelectorAll(trigger_item).delay(1500).toArray();
      const _chain18 = document.querySelectorAll(_chain17).queue(function () {
        var link = [].concat(...trigger_item.map(_element40 => _element40.querySelectorAll('a')));
        link.trigger('click');
      }).toArray();
    }));
  }
} 