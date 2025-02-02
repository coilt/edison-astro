export function ShowcaseCarousel() {
  if (document.querySelectorAll('.showcase-carousel').length > 0) {
    document.querySelectorAll('body').forEach(_element => _element.classList.add("disable-scroll"));
    document.querySelectorAll('footer').forEach(_element2 => _element2.classList.add("showcase-footer"));
    gsap.set(document.querySelectorAll('.showcase-carousel .clapat-slider .slide-inner'), {
      opacity: 0
    });
    gsap.set(document.querySelectorAll('#filters-wrapper, .clapat-pagination, .cp-button-prev, .cp-button-next, .progress-info, footer .link-text'), {
      opacity: 0
    });
    slider = new ClapatSlider('.showcase-carousel', {
      direction: 'horizontal',
      snap: false,
      navigation: {
        nextEl: '.cp-button-next',
        prevEl: '.cp-button-prev'
      },
      parallax: [{
        element: '.section-image',
        margin: -20
      }],
      on: {
        init: function () {
          if (document.querySelectorAll('body').classList.contains('show-loader')) {
            imagesLoaded('body', function () {
              gsap.to(document.querySelectorAll('.showcase-carousel .clapat-slider .clapat-slide .slide-inner'), {
                duration: 1.2,
                opacity: 1,
                delay: 0.2,
                ease: Power4.easeOut
              });
              gsap.set(document.querySelectorAll('.showcase-carousel .clapat-slider .clapat-slide-prev-two .slide-inner'), {
                yPercent: 70
              });
              gsap.to(document.querySelectorAll('.showcase-carousel .clapat-slider .clapat-slide-prev-two .slide-inner'), {
                duration: 1.2,
                yPercent: 0,
                delay: 0.1,
                ease: Power4.easeOut
              });
              gsap.set(document.querySelectorAll('.showcase-carousel .clapat-slider .clapat-slide-prev .slide-inner'), {
                yPercent: -70
              });
              gsap.to(document.querySelectorAll('.showcase-carousel .clapat-slider .clapat-slide-prev .slide-inner'), {
                duration: 1.2,
                yPercent: 0,
                delay: 0.15,
                ease: Power4.easeOut
              });
              gsap.set(document.querySelectorAll('.showcase-carousel .clapat-slider .clapat-slide-active .slide-inner'), {
                yPercent: 70
              });
              gsap.to(document.querySelectorAll('.showcase-carousel .clapat-slider .clapat-slide-active .slide-inner'), {
                duration: 1.2,
                yPercent: 0,
                delay: 0.2,
                ease: Power4.easeOut,
                onComplete: function () {
                  document.querySelectorAll('body').forEach(_element3 => _element3.classList.remove("", "disable-scroll"));
                }
              });
              gsap.set(document.querySelectorAll('.showcase-carousel .clapat-slider .clapat-slide-next .slide-inner'), {
                yPercent: -70
              });
              gsap.to(document.querySelectorAll('.showcase-carousel .clapat-slider .clapat-slide-next .slide-inner'), {
                duration: 1.2,
                yPercent: 0,
                delay: 0.15,
                ease: Power4.easeOut
              });
              gsap.set(document.querySelectorAll('.showcase-carousel .clapat-slider .clapat-slide-next-two .slide-inner'), {
                yPercent: 70
              });
              gsap.to(document.querySelectorAll('.showcase-carousel .clapat-slider .clapat-slide-next-two .slide-inner'), {
                duration: 1.2,
                yPercent: 0,
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
          }
        }
      }
    });
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
    document.querySelectorAll('.carousel-prev').forEach(_element4 => _element4.addEventListener('click', function () {
      if (window.rotateElement && window.rotateElement.isActive()) {
        return;
      } else {
        window.rotateElement = gsap.to([].concat(...document.querySelectorAll(this).map(_element5 => _element5.querySelectorAll('i'))), {
          duration: 0.3,
          rotate: '-= 180'
        });
      }
    }));
    document.querySelectorAll('.carousel-next').forEach(_element6 => _element6.addEventListener('click', function () {
      if (window.rotateElement && window.rotateElement.isActive()) {
        return;
      } else {
        window.rotateElement = gsap.to([].concat(...document.querySelectorAll(this).map(_element7 => _element7.querySelectorAll('i'))), {
          duration: 0.3,
          rotate: '+= 90'
        });
      }
    }));
    class Item {
      constructor(DOM_el) {
        // DOM elements
        this.DOM = {
          // main element (.item)
          el: null,
          // imageWrap (.item__image-wrap)
          imageWrap: null,
          // imageCaption
          imageCaption: null,
          // image (.item__image)
          image: null,
          // imageInner (.item__image > .item__image-inner)
          imageInner: null
        };
        this.DOM.el = DOM_el;
        this.DOM.imageWrap = this.DOM.el.querySelector('.slide-moving');
        if (this.DOM.imageWrap != null) {
          this.DOM.imageCaption = this.DOM.imageWrap.querySelector('.slide-caption');
        }
        this.DOM.image = this.DOM.el.querySelector('.trigger-item');
        if (this.DOM.image != null) {
          this.DOM.imageInner = this.DOM.image.querySelector('.section-image');
        }
      }
    }

    // Placeholder for the grid items (.item__image). We'll use the gsap FLIP plugin to move the "".item .item__image" inside the grid element
    const grid = document.querySelector('.carousel-thumbs-wrapper');
    const triggeredImage = document.querySelector('.carousel-zoom-wrapper');
    let animateTitle = gsap.timeline();
    const showGrid = () => {
      document.body.classList.add('grid-open', 'disable-scroll');
      gsap.to(document.querySelectorAll('footer .link-text, .clapat-pagination, .progress-info'), {
        duration: 0.3,
        opacity: 0,
        y: 30,
        stagger: -0.05,
        ease: Power2.easeInOut
      });

      // get the DOM elements that we'll work with
      const DOM = getDOMElements();
      const allImages = DOM.grid.map(element => {
        element.item.DOM.image.setAttribute('data-slide-index', element.item_index);
        return element.item.DOM.image;
      });
      const allImagesInner = DOM.grid.map(element => element.item.DOM.imageInner);
      const currentImage = DOM.currentItem.DOM.image;
      const currentImageInner = DOM.currentItem.DOM.imageInner;
      const currentImageCaption = DOM.currentItem.DOM.imageCaption;

      // Use gsap flip for the animation
      // save the current state of the images
      const flipstate = Flip.getState([allImages]);
      const flipstate1 = Flip.getState([currentImage]);
      gsap.set(currentImage.closest('.clapat-slide'), {
        zIndex: 0
      });

      // put them inside the .grid element
      grid.append(...allImages);
      triggeredImage.append(currentImage);
      triggeredImage.append(currentImageCaption);

      // Flip it
      const _chain = document.querySelectorAll(Flip).from(flipstate, {
        duration: 0.7,
        stagger: 0.05,
        ease: 'power3.inOut',
        absolute: true
      }).toArray();
      const _chain2 = document.querySelectorAll(_chain).to(currentImageInner, {
        duration: 0.7,
        ease: 'power3.inOut',
        x: 0,
        onComplete: () => {
          gsap.set(currentImageInner, {
            clearProps: 'rotation, x, y'
          });
          document.body.classList.add('enable-trigger');
        }
      }, 0).toArray();
      Flip.from(flipstate1, {
        duration: 0.7,
        ease: 'power3.inOut',
        absolute: true
      });
      animateTitle.set('.showcase-carousel .slide-caption span', {
        y: 120,
        opacity: 0
      });
      animateTitle.to('.showcase-carousel .carousel-zoom-wrapper .slide-caption span', {
        duration: 0.5,
        y: 0,
        opacity: 1,
        delay: 0.4,
        stagger: 0.03,
        ease: Power2.easeOut
      });
    };
    const hideGrid = () => {
      gsap.to(document.querySelectorAll('.showcase-carousel .carousel-zoom-wrapper .slide-caption'), {
        duration: 0.5,
        opacity: 0,
        delay: 0.1,
        ease: Power2.easeOut
      });
      animateTitle.to('.showcase-carousel .carousel-zoom-wrapper .slide-caption span', {
        duration: 0.5,
        y: -100,
        opacity: 0,
        ease: Power2.easeInOut
      });
      document.body.classList.remove('grid-open');

      // get the DOM elements that we'll work with
      const DOM = getDOMElements();
      const allImages = document.querySelectorAll('.carousel-thumbs-wrapper .trigger-item');
      //const allImagesInner = document.querySelectorAll('.carousel-thumbs-wrapper .trigger-item .section-image');
      const currentImage = document.querySelector('.carousel-zoom-wrapper .trigger-item');
      const currentImageCaption = document.querySelector('.carousel-zoom-wrapper .slide-caption');
      const currentImageInner = document.querySelector('.carousel-zoom-wrapper .trigger-item .section-image');
      const flipstate = Flip.getState([allImages /*allImagesInner*/,, currentImage /*currentImageInner*/]);
      allImages.forEach(image => {
        let index = image.getAttribute('data-slide-index');
        let element = DOM.items[index];
        image.removeAttribute('data-slide-index');
        element.DOM.imageWrap.appendChild(image);
      });
      currentImageInner.classList.add('ease-transform');
      DOM.currentItem.DOM.imageWrap.appendChild(currentImage);

      // Remove all the elements from the grid and current triggered image divs
      const liveGrid = document.querySelector('.carousel-thumbs-wrapper');
      const liveTriggeredImage = document.querySelector('.carousel-zoom-wrapper');
      while (liveGrid.firstChild) {
        liveGrid.removeChild(liveGrid.firstChild);
      }
      Flip.from(flipstate, {
        duration: 0.7,
        stagger: 0.02,
        ease: 'power3.inOut',
        onComplete: function () {
          document.body.classList.remove('disable-scroll', 'enable-trigger');
          const triggeredItem = document.querySelector('.clapat-slide.triggered-item');
          if (triggeredItem != null) {
            triggeredItem.classList.remove('triggered-item');
          }
          const clapatSlides = document.querySelectorAll('.clapat-slide');
          clapatSlides.forEach(slide => {
            slide.style.zIndex = '';
          });
          currentImageInner.classList.remove('ease-transform');
          DOM.currentItem.DOM.imageWrap.appendChild(currentImageCaption);
          gsap.set(document.querySelectorAll('.showcase-carousel .slide-caption'), {
            clearProps: 'opacity'
          });
        }
      });
      gsap.to(document.querySelectorAll('footer .link-text, .clapat-pagination, .progress-info'), {
        duration: 0.3,
        opacity: 1,
        y: 0,
        stagger: 0.05,
        delay: 0.4,
        ease: Power2.easeInOut
      });
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
      document.querySelectorAll('#ball').forEach(_element8 => _element8.classList.remove("with-blur"));
      document.querySelectorAll('#ball p').forEach(_element9 => _element9.parentNode.removeChild(_element9));
    };

    // Returns some DOM elements that are needed for showing/hiding the grid
    const getDOMElements = () => {
      // Item instances (slides)
      const items = [];
      [...document.querySelectorAll('.clapat-slide')].forEach(item => {
        items.push(new Item(item));
      });

      // Cloned items
      const itemsCloned = [];
      [...document.querySelectorAll('.clapat-slide-clone')].forEach(item => {
        itemsCloned.push(new Item(item));
      });
      let firstVisibleIndex = -1;
      let direction = slider.opts.direction;
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let bounding = item.DOM.el.getBoundingClientRect();
        if (direction == 'vertical') {
          start = bounding.top;
          end = bounding.bottom;
        } else {
          start = bounding.left;
          end = bounding.right;
        }
        if (start <= 0 && end > 0) {
          firstVisibleIndex = i;
          break;
        }
      }
      const gridItems = [];
      let currentIndex = -1;
      if (direction == 'vertical') {
        let selectedItems = 0;
        // in case of the vertical direction cloned items are reverted, last one becomes first
        if (firstVisibleIndex >= itemsCloned.length) {
          // the first visible index is a clone, therefore iterate back to the first clone
          for (index = firstVisibleIndex; index >= itemsCloned.length; index--) {
            let item = items[index];
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item
              });
            } else {
              currentIndex = index;
            }
            selectedItems++;
          }
          // and then from the beginning the rest of the clones
          for (index = 0; selectedItems < itemsCloned.length; index++) {
            let item = items[index];
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item
              });
            } else {
              currentIndex = index;
            }
            selectedItems++;
          }
        } else {
          // the first visible index is not a clone, therefore iterate from the beginning of the items
          for (index = firstVisibleIndex; index < itemsCloned.length; index++) {
            let item = items[index];
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item
              });
            } else {
              currentIndex = index;
            }
            selectedItems++;
          }
          // and then from the end of the clones
          for (index = items.length - 1; selectedItems < itemsCloned.length; index--) {
            let item = items[index];
            if (!item.DOM.el.classList.contains('triggered-item')) {
              gridItems.push({
                item_index: index,
                item: item
              });
            } else {
              currentIndex = index;
            }
            selectedItems++;
          }
        }
      } else {
        let iterator = 0;
        while (iterator < itemsCloned.length) {
          let index = gsap.utils.wrap(0, items.length, firstVisibleIndex + iterator);
          let item = items[index];
          if (!item.DOM.el.classList.contains('triggered-item')) {
            gridItems.push({
              item_index: index,
              item: item
            });
          } else {
            currentIndex = index;
          }
          iterator++;
        }
      }
      return {
        items: items,
        grid: gridItems,
        currentItem: new Item(document.querySelector('.clapat-slide.triggered-item')),
        currentIndex: currentIndex
      };
    };
    let bGridSwiped = false;
    // Initialize the events
    const initEvents = () => {
      const items = document.querySelectorAll('.slide-inner');
      items.forEach(triggerItem => {
        triggerItem.addEventListener('click', event => {
          if (document.querySelectorAll('.showcase-carousel').length > 0) {
            event.currentTarget.closest('.clapat-slide').classList.add('triggered-item');
            showGrid();
          }
        });
      });
      window.addEventListener('wheel', event => {
        if (document.body.classList.contains('grid-open') && document.querySelectorAll('.showcase-carousel').length > 0) {
          hideGrid();
        }
      });
      window.addEventListener('touchmove', event => {
        if (document.body.classList.contains('grid-open') && document.querySelectorAll('.showcase-carousel').length > 0) {
          bGridSwiped = true;
        }
      });
      window.addEventListener('touchcancel', event => {
        if (document.body.classList.contains('grid-open')(document.querySelectorAll('.showcase-carousel').length > 0)) {
          bGridSwiped = false;
        }
      });
      window.addEventListener('touchend', event => {
        if (document.body.classList.contains('grid-open') && bGridSwiped && document.querySelectorAll('.showcase-carousel').length > 0) {
          bGridSwiped = false;
          hideGrid();
        }
      });
      const closeGrid = document.querySelector('.carousel-close-thumbs');
      if (closeGrid != null) {
        closeGrid.addEventListener('click', event => {
          if (document.body.classList.contains('grid-open') && document.querySelectorAll('.showcase-carousel').length > 0) {
            hideGrid();
          }
        });
      }
    };
    const previewModeEnabled = document.querySelector('.preview-mode-enabled');
    if (previewModeEnabled) {
      initEvents();
    }
    if (!isMobile()) {
      var dragWrapper = document.querySelectorAll('.clapat-slider');
      dragWrapper.forEach(_element10 => _element10.addEventListener('mousedown', function (evt) {
        dragWrapper.forEach(_element11 => _element11.addEventListener('mouseup mousemove', function handler(evt) {
          if (evt.type === 'mouseup') {
            // click
            gsap.to('#ball', {
              duration: 0.2,
              borderWidth: '4px',
              scale: 0.5,
              borderColor: '#999999'
            });
            document.querySelectorAll('body').forEach(_element12 => _element12.classList.remove("scale-drag-x"));
            document.querySelectorAll('#ball').forEach(_element13 => _element13.classList.remove("with-icon"));
            document.querySelectorAll('#ball i').forEach(_element14 => _element14.parentNode.removeChild(_element14));
            document.querySelectorAll('#ball').forEach(_element15 => _element15.classList.remove("with-blur"));
            document.querySelectorAll('#ball p').forEach(_element16 => _element16.parentNode.removeChild(_element16));
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
            document.querySelectorAll('body').forEach(_element17 => _element17.classList.add("scale-drag-x"));
            document.querySelectorAll('#ball').forEach(_element18 => _element18.classList.remove("with-icon"));
            document.querySelectorAll('#ball i').forEach(_element19 => _element19.parentNode.removeChild(_element19));
            document.querySelectorAll('#ball').forEach(_element20 => _element20.classList.remove("with-blur"));
            document.querySelectorAll('#ball p').forEach(_element21 => _element21.parentNode.removeChild(_element21));
          }
          dragWrapper.off('mouseup mousemove', handler);
        }));
      }));
      document.querySelectorAll('.clapat-slider').forEach(_element22 => _element22.addEventListener('mouseup touchend', function () {
        gsap.to('#ball', {
          duration: 1,
          borderWidth: '4px',
          scale: 0.5,
          borderColor: '#999999',
          ease: Elastic.easeOut
        });
        document.querySelectorAll('body').forEach(_element23 => _element23.classList.remove("scale-drag-x"));
      }));
      document.querySelectorAll('body').forEach(_element24 => _element24.addEventListener('mouseleave', function () {
        gsap.to('#ball', {
          duration: 1,
          borderWidth: '4px',
          scale: 0.5,
          borderColor: '#999999',
          ease: Elastic.easeOut
        });
        document.querySelectorAll('body').forEach(_element25 => _element25.classList.remove("scale-drag-x"));
      }));
      const _start = document.querySelectorAll('.showcase-carousel.preview-mode-enabled .clapat-slide .slide-inner');
      _start.forEach(_element50 => _element50.addEventListener('mouseenter', function () {
        if (!document.querySelectorAll('body').classList.contains('scale-drag-x')) {
          document.querySelectorAll('#ball p').forEach(_element27 => _element27.parentNode.removeChild(_element27));
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
          document.querySelectorAll('#ball').forEach(_element28 => _element28.classList.add("with-blur"));
          document.querySelectorAll('#ball').append('<p class="center-first">' + $this.data('centerline') + '</p>');
          const _start2 = document.querySelectorAll(this);
          const _chain3 = [].concat(..._start2.map(_element30 => _element30.querySelectorAll('video')));
          const _chain4 = document.querySelectorAll(_chain3).each(function () {
            const _start3 = document.querySelectorAll(this);
            const _chain5 = document.querySelectorAll(_start3).get(0).toArray();
            const _chain6 = document.querySelectorAll(_chain5).play().toArray();
          }).toArray();
        }
      }));
      _start.forEach(_element51 => _element51.addEventListener('mouseleave', function () {
        if (!document.querySelectorAll('body').classList.contains('scale-drag-x')) {
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
          document.querySelectorAll('#ball').forEach(_element31 => _element31.classList.remove("with-blur"));
          document.querySelectorAll('#ball p').forEach(_element32 => _element32.parentNode.removeChild(_element32));
          const _start4 = document.querySelectorAll(this);
          const _chain7 = [].concat(..._start4.map(_element34 => _element34.querySelectorAll('video')));
          const _chain8 = document.querySelectorAll(_chain7).each(function () {
            const _start5 = document.querySelectorAll(this);
            const _chain9 = document.querySelectorAll(_start5).get(0).toArray();
            const _chain10 = document.querySelectorAll(_chain9).pause().toArray();
          }).toArray();
        }
      }));
      const _start6 = document.querySelectorAll('.trigger-item');
      _start6.forEach(_element52 => _element52.addEventListener('mouseenter', function () {
        if (!document.querySelectorAll('body').classList.contains('scale-drag-x')) {
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
          document.querySelectorAll('#ball').forEach(_element36 => _element36.classList.add("with-blur"));
          document.querySelectorAll('#ball').append('<p class="center-first">' + $this.data('centerline') + '</p>');
          const _start7 = document.querySelectorAll(this);
          const _chain11 = [].concat(..._start7.map(_element38 => _element38.querySelectorAll('video')));
          const _chain12 = document.querySelectorAll(_chain11).each(function () {
            const _start8 = document.querySelectorAll(this);
            const _chain13 = document.querySelectorAll(_start8).get(0).toArray();
            const _chain14 = document.querySelectorAll(_chain13).play().toArray();
          }).toArray();
        }
      }));
      _start6.forEach(_element53 => _element53.addEventListener('mouseleave', function () {
        if (!document.querySelectorAll('body').classList.contains('scale-drag-x')) {
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
          document.querySelectorAll('#ball').forEach(_element39 => _element39.classList.remove("with-blur"));
          document.querySelectorAll('#ball p').forEach(_element40 => _element40.parentNode.removeChild(_element40));
          const _start9 = document.querySelectorAll(this);
          const _chain15 = [].concat(..._start9.map(_element42 => _element42.querySelectorAll('video')));
          const _chain16 = document.querySelectorAll(_chain15).each(function () {
            const _start10 = document.querySelectorAll(this);
            const _chain17 = document.querySelectorAll(_start10).get(0).toArray();
            const _chain18 = document.querySelectorAll(_chain17).pause().toArray();
          }).toArray();
        }
      }));
      document.querySelectorAll('.showcase-carousel .clapat-slide .slide-inner').forEach(_element43 => _element43.addEventListener('mouseenter', function () {
        gsap.to([].concat(...document.querySelectorAll(this).map(_element44 => _element44.querySelectorAll('.slide-caption'))), {
          duration: 0.2,
          opacity: 1,
          ease: Power2.easeOut
        });
        gsap.set([].concat(...document.querySelectorAll(this).map(_element45 => _element45.querySelectorAll('.slide-title span'))), {
          y: 40,
          opacity: 0
        });
        gsap.to([].concat(...document.querySelectorAll(this).map(_element46 => _element46.querySelectorAll('.slide-title span'))), {
          duration: 0.5,
          y: 0,
          opacity: 1,
          ease: Power2.easeOut
        });
      }));
      document.querySelectorAll('.showcase-carousel .clapat-slide .slide-inner').forEach(_element47 => _element47.addEventListener('mouseleave', function () {
        gsap.to([].concat(...document.querySelectorAll(this).map(_element48 => _element48.querySelectorAll('.slide-caption'))), {
          duration: 0.5,
          opacity: 0,
          delay: 0.1,
          ease: Power2.easeOut
        });
        gsap.to([].concat(...document.querySelectorAll(this).map(_element49 => _element49.querySelectorAll('.slide-title span'))), {
          duration: 0.5,
          y: -60,
          opacity: 0,
          ease: Power2.easeOut
        });
      }));
    }
    document.querySelectorAll('.trigger-item').forEach(_element54 => _element54.addEventListener('click', function () {
      let trigger_item = document.querySelectorAll(this);
      if (document.querySelectorAll('.showcase-carousel').classList.contains('preview-mode-enabled')) {
        document.querySelectorAll('body').forEach(_element55 => _element55.classList.add("load-project-thumb-with-title"));
      } else {
        document.querySelectorAll('body').forEach(_element56 => _element56.classList.add("load-project-thumb"));
      }
      gsap.to(document.querySelectorAll('.carousel-thumbs-wrapper .trigger-item'), {
        duration: 0.3,
        y: 160,
        x: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0,
        ease: Power2.easeIn
      });
      document.querySelectorAll('body').append('<div class="temporary-hero light-content"><div class="outer content-full-width"><div class="inner"></div></div></div>');
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
      gsap.to(document.querySelectorAll('.showcase-carousel .carousel-zoom-wrapper .slide-caption .slide-subtitle span'), {
        duration: 0.3,
        y: 30,
        opacity: 0,
        stagger: -0.03,
        ease: Power2.easeInOut
      });
      setTimeout(function () {
        const _start11 = document.querySelectorAll('.carousel-zoom-wrapper');
        const _chain19 = [].concat(..._start11.map(_element59 => _element59.querySelectorAll('.slide-title')));
        const _chain20 = document.querySelectorAll(_chain19).appendTo('.temporary-hero .inner').toArray();
        var moveTitle = document.querySelectorAll('.temporary-hero .inner').outerHeight() - document.querySelectorAll('.temporary-hero .slide-title').outerHeight();
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
        document.querySelectorAll('body').forEach(_element58 => _element58.classList.add("show-loader"));
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
      document.querySelectorAll('#ball').forEach(_element60 => _element60.classList.remove("with-blur"));
      document.querySelectorAll('#ball p').forEach(_element61 => _element61.parentNode.removeChild(_element61));
    }));
  }
} //End Showcase Carousel
