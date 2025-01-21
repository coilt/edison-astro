import { gsap, Linear, ScrollTrigger } from '/node_modules/gsap/all/'



export function VerticalParallaxEffects() {
  console.log('Vertical Parallax effects loaded');

  function setupParallax() {
    // Check if the viewport width is greater than 767 pixels
    if (window.innerWidth > 767) {
      console.log('Viewport width is greater than 767px, proceeding with parallax setup.');
      
      // Select all elements with the class 'vertical-parallax'
      const parallaxElements = document.querySelectorAll('.vertical-parallax');
      console.log(`Found ${parallaxElements.length} parallax elements.`);
      
      parallaxElements.forEach((parallaxElement, index) => {
        // Log the current element being processed
        console.log(`Processing element ${index + 1}:`, parallaxElement);
        
        // Get the start and end parallax values from data attributes
        const startParallax = parseFloat(parallaxElement.dataset.startparallax) || 0;
        const endParallax = parseFloat(parallaxElement.dataset.endparallax) || 0;
        
        // Log the parsed parallax values
        console.log(`Element ${index + 1} startParallax: ${startParallax}, endParallax: ${endParallax}`);
        
        // Calculate the start and end movement based on the element's height and parallax values
        const startMovement = -(parallaxElement.offsetHeight * startParallax);
        const endMovement = -(parallaxElement.offsetHeight * endParallax);
        
        // Log the calculated movements
        console.log(`Element ${index + 1} startMovement: ${startMovement}, endMovement: ${endMovement}`);
        
        // Apply GSAP animation from startMovement to endMovement
        gsap.fromTo(
          parallaxElement,
          { y: -startMovement },
          {
            y: endMovement,
            ease: "none",
            scrollTrigger: {
              trigger: parallaxElement,
              scrub: 0.5,
            },
          }
        );
      });
    } else {
      console.log('Viewport width is less than or equal to 767px, skipping parallax setup.');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupParallax);
  } else {
    // DOM is already loaded
    setupParallax();
  }
}