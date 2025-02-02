export function LazyLoad() {
  imagesLoaded('body', function () {
    document.querySelectorAll('body').forEach(_element => _element.classList.remove("loading", "hidden", "scale-up", "scale-none"));
    gsap.to(document.querySelectorAll('#header-container, .header-middle'), {
      duration: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
  });
  gsap.to(document.querySelectorAll('#main'), {
    duration: 0.3,
    opacity: 1,
    delay: 0,
    ease: Power2.easeOut
  });
  gsap.to(document.querySelectorAll('#footer-container'), {
    duration: 1,
    opacity: 1,
    delay: 0.2,
    ease: Power2.easeOut
  });
  if (document.querySelectorAll('#hero').classList.contains('has-image')) {
    if (document.querySelectorAll('body').classList.contains('load-project-thumb')) {
      gsap.set(document.querySelectorAll('#hero-caption .hero-title span'), {
        y: 120,
        opacity: 0
      });
      gsap.set(document.querySelectorAll('#hero-caption .hero-subtitle span'), {
        y: 100,
        opacity: 0
      });
      gsap.to(document.querySelectorAll('#hero-bg-image'), {
        duration: 0,
        scale: 1.02,
        opacity: 1,
        delay: 0,
        ease: Power2.easeOut
      });
      gsap.to(document.querySelectorAll('#hero-caption .caption-timeline span'), {
        duration: 0.7,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.6,
        ease: Power3.easeOut,
        onComplete: function () {
          gsap.to(document.querySelectorAll('.hero-footer-left, .hero-footer-right'), {
            duration: 0.3,
            y: 0,
            opacity: 1,
            delay: 0,
            ease: Power2.easeOut
          });
          gsap.to(document.querySelectorAll('#main-page-content'), {
            duration: 0.3,
            opacity: 1,
            delay: 0,
            ease: Power2.easeOut
          });
        }
      });
    } else if (document.querySelectorAll('body').classList.contains('load-project-thumb-with-title')) {
      gsap.set(document.querySelectorAll('#hero-caption .hero-title span'), {
        y: 0,
        opacity: 1
      });
      gsap.set(document.querySelectorAll('#hero-caption .hero-subtitle span'), {
        y: 30,
        opacity: 0
      });
      gsap.to(document.querySelectorAll('#hero-bg-image'), {
        duration: 0,
        scale: 1.02,
        opacity: 1,
        delay: 0,
        ease: Power2.easeOut
      });
      gsap.to(document.querySelectorAll('#hero-caption .caption-timeline span'), {
        duration: 0.7,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: Power3.easeOut,
        onComplete: function () {
          gsap.to(document.querySelectorAll('.hero-footer-left, .hero-footer-right'), {
            duration: 0.3,
            y: 0,
            opacity: 1,
            delay: 0,
            ease: Power2.easeOut
          });
          gsap.to(document.querySelectorAll('#main-page-content'), {
            duration: 0.3,
            opacity: 1,
            delay: 0,
            ease: Power2.easeOut
          });
        }
      });
    } else {
      gsap.set(document.querySelectorAll('#hero-bg-image'), {
        scale: 1.1,
        opacity: 0
      });
      gsap.set(document.querySelectorAll('#hero-caption .hero-title span'), {
        y: 120,
        opacity: 0
      });
      gsap.set(document.querySelectorAll('#hero-caption .hero-subtitle span'), {
        y: 30,
        opacity: 0
      });
      imagesLoaded('#hero-bg-image', function () {
        gsap.to(document.querySelectorAll('#hero-bg-image'), {
          duration: 0.7,
          scale: 1,
          opacity: 1,
          delay: 0,
          ease: Power2.easeOut
        });
      });
      gsap.to(document.querySelectorAll('#hero-caption .caption-timeline span'), {
        duration: 0.7,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: Power3.easeOut,
        onComplete: function () {
          gsap.to(document.querySelectorAll('.hero-footer-left, .hero-footer-right'), {
            duration: 0.3,
            y: 0,
            opacity: 1,
            delay: 0,
            ease: Power2.easeOut
          });
          gsap.to(document.querySelectorAll('#main-page-content, #page-nav'), {
            duration: 0.3,
            opacity: 1,
            delay: 0,
            ease: Power2.easeOut
          });
        }
      });
    }
  } else {
    gsap.set(document.querySelectorAll('#hero-caption .hero-title span'), {
      y: 120,
      opacity: 0
    });
    gsap.set(document.querySelectorAll('#hero-caption .hero-subtitle span'), {
      y: 30,
      opacity: 0
    });
    gsap.to(document.querySelectorAll('#hero-caption .caption-timeline span'), {
      duration: 0.7,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      delay: 0.3,
      ease: Power3.easeOut,
      onComplete: function () {
        gsap.to(document.querySelectorAll('.post-article-wrap'), {
          duration: 0.3,
          y: 0,
          opacity: 1,
          ease: Power2.easeOut
        });
        gsap.to(document.querySelectorAll('.error-button'), {
          duration: 0.3,
          y: 0,
          opacity: 1,
          rotation: 0,
          delay: 0,
          ease: Power2.easeOut
        });
      }
    });
    gsap.to(document.querySelectorAll('.hero-footer-left, .hero-footer-right'), {
      duration: 0.3,
      y: 0,
      opacity: 1,
      delay: 0.7,
      ease: Power2.easeOut,
      onComplete: function () {
        document.querySelectorAll('#hero-footer.has-border').forEach(_element2 => _element2.classList.add("visible"));
      }
    });
    gsap.to(document.querySelectorAll('#main-page-content, #page-nav'), {
      duration: 0.3,
      opacity: 1,
      delay: 0.8,
      ease: Power2.easeOut
    });
  }

  // Fading In Showcase Lists elements on Finised
  gsap.set(document.querySelectorAll('.showcase-lists .slide-title span'), {
    y: 100,
    opacity: 0
  });
  if (!isMobile()) {
    gsap.to(document.querySelectorAll('.showcase-lists .slide-title span'), {
      duration: 0.4,
      y: 0,
      opacity: 1,
      stagger: 0.05,
      delay: 0.1,
      ease: Power3.easeOut
    });
  } else {
    gsap.to(document.querySelectorAll('.showcase-lists .slide-title span'), {
      duration: 0.4,
      y: 0,
      opacity: 1,
      stagger: 0.01,
      delay: 0.1,
      ease: Power3.easeOut
    });
  }
  if (document.querySelectorAll('.load-project-thumb').length > 0) {
    imagesLoaded('#hero-image-wrapper', function () {
      if (isMobile()) {
        const _start = document.querySelectorAll('#hero-image-wrapper');
        const _chain = [].concat(..._start.map(_element4 => _element4.querySelectorAll('video')));
        const _chain2 = document.querySelectorAll(_chain).each(function () {
          const _start2 = document.querySelectorAll(this);
          const _chain3 = document.querySelectorAll(_start2).get(0).toArray();
          const _chain4 = document.querySelectorAll(_chain3).play().toArray();
        }).toArray();
      }
      setTimeout(function () {
        document.querySelectorAll('#app.active').forEach(_element5 => _element5.parentNode.removeChild(_element5));
        document.querySelectorAll('.big-title-caption').forEach(_element6 => _element6.parentNode.removeChild(_element6));
        document.querySelectorAll('.thumb-wrapper').forEach(_element7 => _element7.parentNode.removeChild(_element7));
        gsap.to(document.querySelectorAll('.next-project-image-wrapper.temporary'), {
          duration: 0.1,
          opacity: 0,
          ease: Power2.easeOut,
          onComplete: function () {
            document.querySelectorAll('.next-project-image-wrapper.temporary').forEach(_element8 => _element8.parentNode.removeChild(_element8));
            document.querySelectorAll('.temporary-hero').forEach(_element9 => _element9.parentNode.removeChild(_element9));
          }
        });
        if (!isMobile()) {
          const _start3 = document.querySelectorAll('#hero-image-wrapper');
          const _chain5 = [].concat(..._start3.map(_element11 => _element11.querySelectorAll('video')));
          const _chain6 = document.querySelectorAll(_chain5).each(function () {
            const _start4 = document.querySelectorAll(this);
            const _chain7 = document.querySelectorAll(_start4).get(0).toArray();
            const _chain8 = document.querySelectorAll(_chain7).play().toArray();
          }).toArray();
          gsap.to(document.querySelectorAll('.hero-video-wrapper'), {
            duration: 0.2,
            opacity: 1,
            delay: 0.1,
            ease: Power2.easeOut
          });
        } else if (isMobile()) {
          gsap.to(document.querySelectorAll('.hero-video-wrapper'), {
            duration: 0.2,
            opacity: 1,
            delay: 0.5,
            ease: Power2.easeOut
          });
        }
      }, 450);
    });
  } else if (document.querySelectorAll('.load-project-thumb-with-title').length > 0) {
    imagesLoaded('#hero-image-wrapper', function () {
      if (isMobile()) {
        const _start5 = document.querySelectorAll('#hero-image-wrapper');
        const _chain9 = [].concat(..._start5.map(_element13 => _element13.querySelectorAll('video')));
        const _chain10 = document.querySelectorAll(_chain9).each(function () {
          const _start6 = document.querySelectorAll(this);
          const _chain11 = document.querySelectorAll(_start6).get(0).toArray();
          const _chain12 = document.querySelectorAll(_chain11).play().toArray();
        }).toArray();
      }
      setTimeout(function () {
        document.querySelectorAll('#app.active').forEach(_element14 => _element14.parentNode.removeChild(_element14));
        document.querySelectorAll('.thumb-wrapper').forEach(_element15 => _element15.parentNode.removeChild(_element15));
        document.querySelectorAll('#canvas-slider.active').forEach(_element16 => _element16.parentNode.removeChild(_element16));
        gsap.to(document.querySelectorAll('.next-project-image-wrapper.temporary'), {
          duration: 0.1,
          opacity: 0,
          ease: Power2.easeOut,
          onComplete: function () {
            document.querySelectorAll('.next-project-image-wrapper.temporary').forEach(_element17 => _element17.parentNode.removeChild(_element17));
            document.querySelectorAll('.temporary-hero').forEach(_element18 => _element18.parentNode.removeChild(_element18));
          }
        });
        if (!isMobile()) {
          const _start7 = document.querySelectorAll('#hero-image-wrapper');
          const _chain13 = [].concat(..._start7.map(_element20 => _element20.querySelectorAll('video')));
          const _chain14 = document.querySelectorAll(_chain13).each(function () {
            const _start8 = document.querySelectorAll(this);
            const _chain15 = document.querySelectorAll(_start8).get(0).toArray();
            const _chain16 = document.querySelectorAll(_chain15).play().toArray();
          }).toArray();
          gsap.to(document.querySelectorAll('.hero-video-wrapper'), {
            duration: 0.2,
            opacity: 1,
            delay: 0.1,
            ease: Power2.easeOut
          });
        } else if (isMobile()) {
          gsap.to(document.querySelectorAll('.hero-video-wrapper'), {
            duration: 0.2,
            opacity: 1,
            delay: 0.5,
            ease: Power2.easeOut
          });
        }
        const _start9 = document.querySelectorAll('body');
        _start9.forEach(_element22 => _element22.classList.remove("load-project-thumb-with-title"));
        _start9.forEach(_element23 => _element23.classList.remove("show-loader"));
      }, 200);
    });
  } else {
    imagesLoaded('#hero-image-wrapper', function () {
      const _start10 = document.querySelectorAll('#hero-image-wrapper');
      const _chain17 = [].concat(..._start10.map(_element29 => _element29.querySelectorAll('video')));
      const _chain18 = document.querySelectorAll(_chain17).each(function () {
        const _start11 = document.querySelectorAll(this);
        const _chain19 = document.querySelectorAll(_start11).get(0).toArray();
        const _chain20 = document.querySelectorAll(_chain19).play().toArray();
      }).toArray();
      setTimeout(function () {
        document.querySelectorAll('#app.active').forEach(_element25 => _element25.parentNode.removeChild(_element25));
        document.querySelectorAll('#canvas-slider.active').forEach(_element26 => _element26.parentNode.removeChild(_element26));
        gsap.to(document.querySelectorAll('.next-project-image-wrapper.temporary'), {
          duration: 0.1,
          opacity: 0,
          ease: Power2.easeOut,
          onComplete: function () {
            document.querySelectorAll('.next-project-image-wrapper.temporary').forEach(_element27 => _element27.parentNode.removeChild(_element27));
            document.querySelectorAll('.temporary-hero').forEach(_element28 => _element28.parentNode.removeChild(_element28));
          }
        });
      }, 500);
    });
  }
  setTimeout(function () {
    document.querySelectorAll('header').forEach(_element30 => _element30.classList.remove("white-header"));
    document.querySelectorAll('body').forEach(_element31 => _element31.classList.remove("load-project-thumb", "load-project-thumb-with-title", "load-next-page", "grid-open"));
    setTimeout(function () {
      imagesLoaded('body', function () {
        document.querySelectorAll('body').forEach(_element32 => _element32.classList.remove("show-loader", "disable-scroll"));
      });
    }, 300);
  }, 800);
} // End Lazy Load
