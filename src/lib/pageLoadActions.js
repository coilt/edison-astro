export function PageLoadActions() {
  // Default Page Navigation Load Events

  if (!isMobile()) {
    document.querySelectorAll('#page-nav .page-title').forEach(element => {
      element.addEventListener('mouseenter', function () {
        let $this = this;
        gsap.to('#ball', {
          duration: 0.3,
          borderWidth: '2px',
          scale: 1.4,
          borderColor: 'rgba(255,255,255,0)',
          backgroundColor: 'rgba(128,128,128,0.5)'
        });
        gsap.to('#ball-loader', {
          duration: 0.2,
          borderWidth: '2px',
          top: 2,
          left: 2
        });
        const ball = document.getElementById('ball');
        if (ball) {
          ball.classList.add('with-blur');
          let p = document.createElement('p');
          p.className = 'center-first';
          p.textContent = this.dataset.centerline;
          ball.appendChild(p);
        } else {
          console.warn("Element with id 'ball' not found");
        }
      });
    });
    document.querySelectorAll('#page-nav .page-title').forEach(element => {
      element.addEventListener('mouseleave', function () {
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
        document.getElementById('ball').classList.remove('with-blur');
        document.querySelectorAll('#ball p').forEach(p => p.forEach(_element => _element.parentNode.removeChild(_element)));
      });
    });
  }

  if (!document.querySelectorAll('body').classList.contains('disable-ajaxload')) {
    document.querySelectorAll('#page-nav .page-title').forEach(_element2 => _element2.addEventListener('click', function () {
      document.querySelectorAll('body').forEach(_element3 => _element3.classList.add("show-loader"));
      document.querySelectorAll('header').forEach(_element4 => _element4.classList.remove("white-header"));
      document.querySelectorAll('#app').forEach(_element5 => _element5.parentNode.removeChild(_element5));
      document.querySelectorAll('.big-title-caption').forEach(_element6 => _element6.parentNode.removeChild(_element6));
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
      document.querySelectorAll('#ball').forEach(_element7 => _element7.classList.remove("with-icon"));
      document.querySelectorAll('#ball p').forEach(_element8 => _element8.parentNode.removeChild(_element8));
      document.querySelectorAll('#ball i').forEach(_element9 => _element9.parentNode.removeChild(_element9));
      gsap.to('.hero-arrow i', {
        duration: 0.3,
        y: -40,
        opacity: 0,
        delay: 0,
        ease: Power2.easeInOut
      });
      gsap.to('.page-nav-caption .caption-timeline span', {
        duration: 0.3,
        y: -100,
        opacity: 0,
        delay: 0,
        stagger: 0.05,
        ease: Power2.easeInOut
      });
      gsap.to(document.querySelectorAll('#main-page-content, #hero, footer'), {
        duration: 0.3,
        opacity: 0
      });
    }));
  } else if (document.querySelectorAll('body').classList.contains('disable-ajaxload')) {
    document.querySelectorAll('#page-nav .page-title').forEach(_element10 => _element10.addEventListener('click', function () {
      document.querySelectorAll('body').forEach(_element11 => _element11.classList.add("load-next-page"));
      document.querySelectorAll('body').forEach(_element12 => _element12.classList.add("show-loader"));
      document.querySelectorAll('header').forEach(_element13 => _element13.classList.remove("white-header"));
      document.querySelectorAll('#app').forEach(_element14 => _element14.parentNode.removeChild(_element14));
      document.querySelectorAll('.big-title-caption').forEach(_element15 => _element15.parentNode.removeChild(_element15));
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
      document.querySelectorAll('#ball').forEach(_element16 => _element16.classList.remove("with-icon"));
      document.querySelectorAll('#ball p').forEach(_element17 => _element17.parentNode.removeChild(_element17));
      document.querySelectorAll('#ball i').forEach(_element18 => _element18.parentNode.removeChild(_element18));
      gsap.to(document.querySelectorAll('#main-page-content, #hero, #page-nav'), {
        duration: 0.3,
        opacity: 0
      });
      gsap.to(document.querySelectorAll('footer'), {
        duration: 0.3,
        opacity: 0,
        delay: 0,
        ease: Power2.easeInOut
      });
    }));
  }

  // Project Page Navigation Load Events
  if (!isMobile()) {
    document.querySelectorAll('#project-nav .next-ajax-link-project').mouseenter(function (e) {
      var $this = document.querySelectorAll(this);
      document.querySelectorAll('#ball').append('<p class="first">' + $this.data('firstline') + '</p>' + '<p>' + $this.data('secondline') + '</p>');
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
      document.querySelectorAll('#ball').forEach(_element19 => _element19.classList.add("with-blur"));
      document.querySelectorAll('#project-nav .next-hero-title').forEach(_element20 => _element20.classList.add("hover-title"));
    });
    document.querySelectorAll('#project-nav .next-ajax-link-project').mouseleave(function (e) {
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
      document.querySelectorAll('#ball').forEach(_element21 => _element21.classList.remove("with-blur"));
      document.querySelectorAll('#ball p').forEach(_element22 => _element22.parentNode.removeChild(_element22));
      document.querySelectorAll('#project-nav .next-hero-title').forEach(_element23 => _element23.classList.remove("hover-title"));
    });
  }
  if (!document.querySelectorAll('body').classList.contains('disable-ajaxload')) {
    if (document.querySelectorAll('.next-ajax-link-project').classList.contains('auto-trigger')) {
      if (!(typeof window.ReachBottomArr === 'undefined' || window.ReachBottomArr === null) && Array.isArray(window.ReachBottomArr)) {
        window.ReachBottomArr.forEach(element => {
          element.kill();
        });
      }
      window.ReachBottomArr = new Array();
      setTimeout(function () {
        document.querySelectorAll('#project-nav').each(function () {
          var $this = document.querySelectorAll(this);
          const ReachBottom = ScrollTrigger.create({
            id: Math.floor(Math.random() * 100),
            trigger: document.querySelectorAll('#project-nav'),
            start: () => `top+=${window.innerHeight - 10}px`,
            onEnter: function (st) {
              document.querySelectorAll('body').forEach(_element24 => _element24.classList.add("show-loader"));
              const _chain = document.querySelectorAll($this).delay(500).toArray();
              const _chain2 = document.querySelectorAll(_chain).queue(function () {
                gsap.set(document.querySelectorAll('#project-nav.change-header, .next-hero-progress'), {
                  backgroundColor: 'transparent'
                });
                gsap.to(document.querySelectorAll('.next-hero-progress'), {
                  duration: 0.4,
                  width: '0%',
                  ease: Power4.easeOut,
                  onComplete: function () {
                    gsap.set(document.querySelectorAll('.next-hero-progress'), {
                      opacity: 0
                    });
                  }
                });
                var link = [].concat(...$this.map(_element25 => _element25.querySelectorAll('.next-ajax-link-project')));
                link.trigger('click');
              }).toArray();
            },
            onLeaveBack: function () {
              document.querySelectorAll('body').forEach(_element26 => _element26.classList.remove("show-loader"));
              $this.clearQueue();
            }
          });
          window.ReachBottomArr.push(ReachBottom);
          imagesLoaded('body', function () {
            setTimeout(function () {
              ReachBottom.refresh();
            }, 1200);
          });
        });
      }, 100);
    }
    if (document.querySelectorAll('#hero-image-wrapper').classList.contains('change-header-color')) {
      document.querySelectorAll('#hero-footer').forEach(_element27 => _element27.classList.add("white-header"));
    }
    document.querySelectorAll('.next-ajax-link-project').forEach(_element28 => _element28.addEventListener('click', function () {
      document.querySelectorAll('body').forEach(_element29 => _element29.classList.add("load-project-thumb"));
      document.querySelectorAll('header').forEach(_element30 => _element30.classList.remove("white-header"));
      document.querySelectorAll('#app').forEach(_element31 => _element31.parentNode.removeChild(_element31));
      const _start = document.querySelectorAll('.next-project-image-wrapper');
      _start.forEach(_element38 => _element38.classList.add("temporary"));
      const _chain3 = document.querySelectorAll(_start).appendTo('body').toArray();
      if (!document.querySelectorAll('.next-ajax-link-project').classList.contains('auto-trigger')) {
        document.querySelectorAll('body').forEach(_element33 => _element33.classList.add("show-loader"));
      }
      gsap.to(document.querySelectorAll('.next-hero-counter span'), {
        duration: 0.3,
        y: -20,
        opacity: 0,
        delay: 0,
        ease: Power2.easeInOut
      });
      gsap.to(document.querySelectorAll('.next-hero-title span'), {
        duration: 0.3,
        y: -80,
        opacity: 0,
        stagger: 0.05,
        delay: 0,
        ease: Power2.easeInOut
      });
      gsap.to(document.querySelectorAll('.next-hero-subtitle span'), {
        duration: 0.3,
        y: -40,
        opacity: 0,
        stagger: 0.05,
        delay: 0.1,
        ease: Power2.easeInOut
      });
      gsap.set(document.querySelectorAll('#project-nav.change-header, .next-hero-progress'), {
        backgroundColor: 'transparent'
      });
      gsap.to(document.querySelectorAll('.next-hero-progress span'), {
        duration: 0.4,
        width: '100%',
        ease: Power2.easeInOut,
        onComplete: function () {
          gsap.to(document.querySelectorAll('.next-hero-progress'), {
            duration: 0.4,
            width: '0%',
            ease: Power2.easeInOut
          });
        }
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
      document.querySelectorAll('#ball').forEach(_element34 => _element34.classList.remove("with-icon"));
      document.querySelectorAll('#ball p').forEach(_element35 => _element35.parentNode.removeChild(_element35));
      document.querySelectorAll('#ball i').forEach(_element36 => _element36.parentNode.removeChild(_element36));
      gsap.to(document.querySelectorAll('#main-page-content, #hero, #hero-image-wrapper'), {
        duration: 0.3,
        opacity: 0
      });
      gsap.to(document.querySelectorAll('.next-project-image'), {
        duration: 0.6,
        scale: 1.02,
        clipPath: 'inset(0 0%)',
        opacity: 1,
        ease: Power2.easeInOut,
        onComplete: function () {
          document.querySelectorAll('.temporary .next-project-image').forEach(_element37 => _element37.classList.add("visible"));
        }
      });
      gsap.to(document.querySelectorAll('footer, .all-works'), {
        duration: 0.3,
        opacity: 0,
        ease: Power2.easeInOut
      });
    }));
  } else if (document.querySelectorAll('body').classList.contains('disable-ajaxload')) {
    document.querySelectorAll('.next-ajax-link-project').forEach(_element39 => _element39.addEventListener('click', function () {
      const _start2 = document.querySelectorAll('body');
      _start2.forEach(_element46 => _element46.classList.add("load-project-thumb-with-title"));
      _start2.forEach(_element47 => _element47.classList.add("show-loader"));
      document.querySelectorAll('header').forEach(_element41 => _element41.classList.remove("white-header"));
      document.querySelectorAll('#app').forEach(_element42 => _element42.parentNode.removeChild(_element42));
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
      document.querySelectorAll('#ball').forEach(_element43 => _element43.classList.remove("with-icon", "with-blur"));
      document.querySelectorAll('#ball p').forEach(_element44 => _element44.parentNode.removeChild(_element44));
      document.querySelectorAll('#ball i').forEach(_element45 => _element45.parentNode.removeChild(_element45));
      gsap.to(document.querySelectorAll('#main-page-content, #hero, #hero-image-wrapper, #project-nav'), {
        duration: 0.3,
        opacity: 0
      });
      gsap.to(document.querySelectorAll('.next-project-image'), {
        duration: 0.6,
        scale: 1,
        opacity: 0,
        ease: Power2.easeOut
      });
      gsap.to(document.querySelectorAll('footer, .all-works'), {
        duration: 0.3,
        opacity: 0,
        ease: Power2.easeInOut
      });
    }));
  }
} // Page Load Actions
