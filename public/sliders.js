export function Sliders() {
  const contentSliders = document.querySelectorAll('.content-slider');
  if (contentSliders.length > 0) {
      let slider = new ClapatSlider('.content-slider', {
          direction: 'horizontal',
          snap: true,
          mousewheel: false,
          renderBullet: function (index, className) {
              return '<div class="parallax-wrap">' + '<div class="parallax-element">' + '<svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20">'+
                    '<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)" stroke="#FFF"'+ 'stroke-opacity="1" stroke-width="2px"></circle>' + '<circle class="solid-fill" cx="10" cy="10" r="3" fill="#FFF"></circle>' + '</svg></div></div>';
          },
      });

      const sliderButtonPrev = document.querySelectorAll(".slider-button-prev");
      const sliderButtonNext = document.querySelectorAll(".slider-button-next");

      sliderButtonPrev.forEach(button => {
          button.addEventListener('mouseenter', (e) => {
              const wrapper = button.closest(".clapat-slider-wrapper");
              if (wrapper.classList.contains("light-cursor")) {
                  document.body.classList.add("drag-cursor-white");
                  gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#fff'});
              } else if (wrapper.classList.contains("dark-cursor")) {
                  document.body.classList.add("drag-cursor-black");
                  gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#000'});
              }
              gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
              document.querySelector("#ball").classList.add("with-icon");
              document.querySelector("#ball").insertAdjacentHTML('beforeend', '<i class="fa fa-chevron-left"></i>');
          });

          button.addEventListener('mouseleave', (e) => {
              gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999',});
              gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
              document.querySelector("#ball").classList.remove("with-icon");
              document.querySelector('#ball i')?.remove();
              document.body.classList.remove("drag-cursor-black", "drag-cursor-white");
          });
      });

      sliderButtonNext.forEach(button => {
          button.addEventListener('mouseenter', (e) => {
              const wrapper = button.closest(".clapat-slider-wrapper");
              if (wrapper.classList.contains("light-cursor")) {
                  document.body.classList.add("drag-cursor-white");
                  gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#fff'});
              } else if (wrapper.classList.contains("dark-cursor")) {
                  document.body.classList.add("drag-cursor-black");
                  gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#000'});
              }
              gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
              document.querySelector("#ball").classList.add("with-icon");
              document.querySelector("#ball").insertAdjacentHTML('beforeend', '<i class="fa fa-chevron-right"></i>');
          });

          button.addEventListener('mouseleave', (e) => {
              gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999',});
              gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
              document.querySelector("#ball").classList.remove("with-icon");
              document.querySelector('#ball i')?.remove();
              document.body.classList.remove("drag-cursor-black", "drag-cursor-white");
          });
      });

      const loopedCarousels = document.querySelectorAll('.content-slider.looped-carousel .clapat-slider, .content-slider.small-looped-carousel .clapat-slider');
      loopedCarousels.forEach(carousel => {
          carousel.addEventListener('mouseenter', handleCarouselMouseEnter);
          carousel.addEventListener('mousemove', handleCarouselMouseEnter);
          carousel.addEventListener('mouseleave', handleCarouselMouseLeave);
      });

      function handleCarouselMouseEnter() {
          document.body.classList.add("scale-drag-x");
          if (this.parentElement.classList.contains("light-cursor")) {
              document.body.classList.add("drag-cursor-white");
              gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#fff'});
          } else if (this.parentElement.classList.contains("dark-cursor")) {
              document.body.classList.add("drag-cursor-black");
              gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#000'});
          }
      }

      function handleCarouselMouseLeave() {
          gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999',});
          document.body.classList.remove("scale-drag-x", "drag-cursor", "drag-cursor-white", "drag-cursor-black");
      }

      // Assuming imagesLoaded is available globally
      imagesLoaded('body', function() {
          setTimeout(function() {
              if (slider != null) {
                  slider.update();
              }
          }, 1000);
      });
  }
}
