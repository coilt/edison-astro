// @ts-nocheck

if (!document.querySelector("body").classList.contains("disable-ajaxload");) {
    document.querySelector("#page-nav .page-title").on('click', function () {
      document.querySelector("body").classList.add("show-loader");
      document.querySelector("header").classList.remove("white-header");
      document.querySelector("#app").remove();
      document.querySelector(".big-title-caption").remove();

      gsap.to('#ball', {
        duration: 0.2,
        borderWidth: '4px',
        scale: 0.5,
        borderColor: '#999999',
        backgroundColor: 'transparent',
      })
      gsap.to('#ball-loader', {
        duration: 0.2,
        borderWidth: '4px',
        top: 0,
        left: 0,
      })
      document.querySelector("#ball").classList.remove("with-icon");
      document.querySelector("#ball p").remove();
      document.querySelector("#ball i").remove();

      gsap.to('.hero-arrow i', {
        duration: 0.3,
        y: -40,
        opacity: 0,
        delay: 0,
        ease: Power2.easeInOut,
      })
      gsap.to('.page-nav-caption .caption-timeline span', {
        duration: 0.3,
        y: -100,
        opacity: 0,
        delay: 0,
        stagger: 0.05,
        ease: Power2.easeInOut,
      })
      gsap.to(document.querySelector("#main-page-content, #hero, footer"), {
        duration: 0.3,
        opacity: 0,
      })
    })
  } else if (document.querySelector("body").classList.contains("disable-ajaxload");) {
    document.querySelector("#page-nav .page-title").on('click', function () {
      document.querySelector("body").classList.add("load-next-page");
      document.querySelector("body").classList.add("show-loader");
      document.querySelector("header").classList.remove("white-header");
      document.querySelector("#app").remove();
      document.querySelector(".big-title-caption").remove();

      gsap.to('#ball', {
        duration: 0.2,
        borderWidth: '4px',
        scale: 0.5,
        borderColor: '#999999',
        backgroundColor: 'transparent',
      })
      gsap.to('#ball-loader', {
        duration: 0.2,
        borderWidth: '4px',
        top: 0,
        left: 0,
      })
      document.querySelector("#ball").classList.remove("with-icon");
      document.querySelector("#ball p").remove();
      document.querySelector("#ball i").remove();

      gsap.to(document.querySelector("#main-page-content, #hero, #page-nav"), {
        duration: 0.3,
        opacity: 0,
      })
      gsap.to(document.querySelector("footer"), {
        duration: 0.3,
        opacity: 0,
        delay: 0,
        ease: Power2.easeInOut,
      })
    })
  }