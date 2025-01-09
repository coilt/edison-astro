




import { gsap, Power2 } from '/node_modules/gsap/all'

export function Core() {
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  }
		
	if (!isMobile() && !document.body.classList.contains('disable-cursor')) {
		const currentElement = this
		const mouse = { x: 0, y: 0 }
    const pos = { x: 0, y: 0 }
    const ratio = 0.65
    const active = false
    const offsetX = 40
		const ball = document.getElementById("ball");
		const ballloader = document.getElementById("ball-loader");

		document.addEventListener('mousemove', mouseMove)

			var mouse = { x: 0, y: 0 };
			var pos = { x: 0, y: 0 };
			var ratio = 0.65;			
			var active = false;			
		
			var offsetX = 40;
			
			
			gsap.set(ball, { xPercent: -50, yPercent: -50, scale:0.5, borderWidth: '4px' });
			
			document.addEventListener("mousemove", mouseMove);
			
			function mouseMove(e) {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				mouse.x = e.pageX;
				mouse.y = e.pageY - scrollTop;

			}
			
			gsap.ticker.add(updatePosition);
			
			function updatePosition() {
				if (!active) {
					pos.x += (mouse.x - pos.x) * ratio;
					pos.y += (mouse.y - pos.y) * ratio;
			
					gsap.to(ball, { duration: 0.4, x: pos.x, y: pos.y });
				}
			}
			
			$(".sticky.left").mouseenter(function(e) {
				var rcBounds = $(this)[0].getBoundingClientRect();		  
				var positionX = rcBounds.left - offsetX;
				var positionY = rcBounds.top + rcBounds.height/2;		  
				gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale: 0.9, borderWidth: '2px'});
				gsap.ticker.remove(updatePosition);
			})
			
			$(".sticky.right").mouseenter(function(e) {
				var rcBounds = $(this)[0].getBoundingClientRect();		  
				var positionX = rcBounds.right + offsetX;
				var positionY = rcBounds.top + rcBounds.height/2;		  
				gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale: 0.9, borderWidth: '2px'});
				gsap.ticker.remove(updatePosition);
			})
			
			$("#main .sticky.left").mouseenter(function(e) {		  
				var rcBounds = $(this)[0].getBoundingClientRect();		  
				var positionX = rcBounds.left - offsetX + 10;
				var positionY = rcBounds.top + rcBounds.height/2;		  
				gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale:0.7, opacity:0.6, borderWidth: '6px', borderColor:'#999999'});
				gsap.ticker.remove(updatePosition);
			})
			
			$("#main .sticky.right").mouseenter(function(e) {		  
				var rcBounds = $(this)[0].getBoundingClientRect();		  
				var positionX = rcBounds.right + offsetX - 10;
				var positionY = rcBounds.top + rcBounds.height/2;		  
				gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale:0.7, opacity:0.6, borderWidth: '6px', borderColor:'#999999'});
				gsap.ticker.remove(updatePosition);
			})
			
			$(".clapat-button .sticky.left").mouseenter(function(e) {		  
				var rcBounds = $(this)[0].getBoundingClientRect();		  
				var positionX = rcBounds.left  + 22;
				var positionY = rcBounds.top + rcBounds.height/2;		  
				gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale:0.4, opacity:1, borderWidth: '6px', borderColor:'#000'});
				gsap.ticker.remove(updatePosition);
			})
			
			$(".clapat-button .sticky.right").mouseenter(function(e) {		  
				var rcBounds = $(this)[0].getBoundingClientRect();		  
				var positionX = rcBounds.right  - 22;
				var positionY = rcBounds.top + rcBounds.height/2;		  
				gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale:0.4, opacity:1, borderWidth: '6px', borderColor:'#000'});
				gsap.ticker.remove(updatePosition);
			})
			
			$(".sticky").mouseleave(function(e) {			
				gsap.to(ball, { duration: 0.2, scale:0.5, borderWidth: '4px', borderColor:'#999999', opacity:1 });
				gsap.ticker.add(updatePosition);		  
			})	
			
			$(".parallax-wrap").mouseenter(function(e) {
				gsap.to(this, { duration: 0.3, scale: 2 });
				gsap.to(ball, { duration: 0.3, scale: 0.9, borderWidth: '2px',opacity:1 });
				gsap.to($( this ).children(), {duration: 0.3, scale:0.5});
				active = true;
			});
			
			$("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
				gsap.to(ball, { duration: 0.3, scale: 0.7, borderWidth: '6px', opacity:0.6, borderColor:'#999' });
			});
			
			$(".clapat-button .parallax-wrap.icon-wrap").mouseenter(function(e) {
				gsap.to(ball, { duration: 0.05, scale: 0.4, borderWidth: '0px', opacity:1, borderColor:'#000' });
			});
			
			$(".parallax-wrap.bigger").mouseenter(function(e) {
				gsap.to(ball, { duration: 0.3, scale: 1.35, borderWidth: '2px', opacity:1 });
			});
			
			$(".parallax-wrap").mouseleave(function(e) {
				gsap.to(this, { duration: 0.3, scale: 1 });
				gsap.to(ball, { duration: 0.3, scale: 0.5, borderWidth: '4px', opacity:1, borderColor:'#999999'  });
				gsap.to($( this ).children(), {duration: 0.3, scale:1, x: 0, y:0});
				active = false;
			});		
			
			
			$(".sticky").mouseenter(function(e) {
				gsap.to(ball, { duration: 0.5, borderColor:$("body").data('primary-color') });
			});
			$("#main .sticky").mouseenter(function(e) {
				gsap.to(ball, { duration: 0.5, borderColor:'#999' });
			});
			$(".clapat-button .sticky").mouseenter(function(e) {
				if ($('#page-content').hasClass("light-content")) {
					gsap.to(ball, { duration: 0.5, borderColor:'#000' });
				} else {
					gsap.to(ball, { duration: 0.5, borderColor:'#fff' });  
				}
			});
			$(".parallax-wrap").mouseenter(function(e) {
				gsap.to(ball, { duration: 0.3, borderColor:$("body").data('primary-color')  });
			});
			$(".clapat-button .parallax-wrap").mouseenter(function(e) {
				if ($('#page-content').hasClass("light-content")) {
					gsap.to(ball, { duration: 0.05, borderColor:'#000'  });
				} else {
					gsap.to(ball, { duration: 0.05, borderColor:'#fff'  });
				}
			});
			$(".parallax-wrap.bigger").mouseenter(function(e) {
				gsap.to(ball, { duration: 0.3, borderColor:$("body").data('primary-color')  });
			});
			$("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
				gsap.to(ball, { duration: 0.3, borderColor:'#999'});
			});			 
			
			$(".parallax-wrap").mousemove(function(e) {
				parallaxCursor(e, this, 2);
				callParallax(e, this);
			});
			
			function callParallax(e, parent) {
				parallaxIt(e, parent, parent.querySelector(".parallax-element"), 20);
			}
			
			function parallaxIt(e, parent, target, movement) {
				var boundingRect = parent.getBoundingClientRect();
				var relX = e.pageX - boundingRect.left;
				var relY = e.pageY - boundingRect.top;
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				
				gsap.to(target, {
					duration: 0.3,
					x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
					y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.height * movement,
					ease: Power2.easeOut
				});
			}
			
			function parallaxCursor(e, parent, movement) {
				var rect = parent.getBoundingClientRect();
				var relX = e.pageX - rect.left;
				var relY = e.pageY - rect.top;
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
				pos.y = rect.top + rect.height / 2  + (relY - rect.height / 2 - scrollTop)  / movement ;
				gsap.to(ball, { duration: 0.3, x: pos.x, y: pos.y });
			}
			
			$(".hide-ball").mouseenter(function(e) {	
				gsap.to('#ball', {duration: 0.2, borderWidth: '1px', scale: 1, opacity:0});
			});	
					
			$(".hide-ball").mouseleave(function(e) {
				gsap.to('#ball', {duration: 0.3, borderWidth: '4px', scale:0.5, opacity:1});
			});
			
			$(".link, .button").mouseenter(function(e) {	
				gsap.to('#ball', {duration: 0.2, borderWidth:"0px",scale:1.5,backgroundColor:"rgba(153, 153, 153, 1)",opacity:0.15});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 4, left: 4});
			});	
					
			$(".link, .button").mouseleave(function(e) {
				gsap.to('#ball', {duration: 0.3, borderWidth:"4px",scale:0.5,backgroundColor:"rgba(153, 153, 153, 0)",opacity:1});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
			});
			
			//Blog Hover Effects			
			$("#blog-page-nav .page-numbers li a, .post-page-numbers, #post-content a, #post-form a, #post-comments a, .wp-block-search__button, .clapat-sidebar-widget a").mouseenter(function(e) {	
				gsap.to('#ball', {duration: 0.2, borderWidth: '1px', scale: 1, opacity:0});
			});	
					
			$("#blog-page-nav .page-numbers li a, .post-page-numbers, #post-content a, #post-form a, #post-comments a, .wp-block-search__button, .clapat-sidebar-widget a").mouseleave(function(e) {
				gsap.to('#ball', {duration: 0.3, borderWidth: '4px', scale:0.5, opacity:1});
			});
		}
		
		if ($('body').hasClass("disable-ajaxload")) {
			return 
		}
		
		jQuery(document).ready(function(){
			  var isAnimating = false,
				newLocation = '';
				firstLoad = false;
			  
			  //trigger smooth transition from the actual page to the new one 
			  $('main').on('click', '[data-type="page-transition"]', function(event){
				event.preventDefault();
				//detect which page has been selected
				var newPage = $(this).attr('href');
				//if the page is not already being animated - trigger animation
				if( !isAnimating ) changePage(newPage, true);
				firstLoad = true;
			  });
			
			  //detect the 'popstate' event - e.g. user clicking the back button
			  $(window).on('popstate', function() {
				if( firstLoad ) {

				  /*
				  Safari emits a popstate event on page load - check if firstLoad is true before animating
				  if it's false - the page has just been loaded
				  */
				  var newPage = location.href;

				  if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
				}
				firstLoad = true;
				});
			
				function changePage(url, bool) {
				isAnimating = true;
				// trigger page animation
				$('body').addClass('page-is-changing');
				$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					loadNewContent(url, bool);
				  newLocation = url;
				  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});
				//if browser doesn't support CSS transitions
				if( !transitionsSupported() ) {
				  loadNewContent(url, bool);
				  newLocation = url;
				}
				}
			
				function loadNewContent(url, bool) {
					url = ('' == url) ? 'index.html' : url;
				
				var section = $('<div class="cd-main-content "></div>');
						
					
				section.load(url+' .cd-main-content > *', function(event){
				  // load new content and replace <main> content with the new one
				  
				  	$('main').html(section);
				  
				 	var clapat_title = event.match(/<title[^>]*>([^<]+)<\/title>/)[1];
					$('head title').html( clapat_title );
				  
					// if we have Elementor inline styles in the target page
					headTags = [
								'style[id*=elementor-frontend-inline]',
								'style[id*="elementor-post"]',
								'link[id*="elementor-post"]',
								'link[id*="google-fonts"]',
							];
					var head = document.head;
					var newPageRawHead = event.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0];
					newPageHead = document.createElement('head');
					
					newPageHead.innerHTML = newPageRawHead;

					var oldHeadTags = head.querySelectorAll(headTags);
					var newHeadTags = newPageHead.querySelectorAll(headTags);
					
					// append new and remove old tags
					for (let i = 0; i < newHeadTags.length; i++) {
						if (typeof oldHeadTags[i] !== 'undefined') {
							head.insertBefore(newHeadTags[i], oldHeadTags[i].nextElementSibling);
							head.removeChild(oldHeadTags[i]);
						} else {
							head.insertBefore(newHeadTags[i], newHeadTags[i - 1]);
						}
					}
					
					$('html, body').scrollTop(0);
				  
				  //if browser doesn't support CSS transitions - dont wait for the end of transitions
				  var delay = ( transitionsSupported() ) ? 30 : 0;
				  setTimeout(function(){
					//wait for the end of the transition on the loading bar before revealing the new content				
					$('body').removeClass('page-is-changing');
					$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					  isAnimating = false;
					  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
					})
				
				
				LoadViaAjax();
				
				if (!isMobile() && !$('body').hasClass("disable-cursor")) {
					$(".sticky.left").mouseenter(function(e) {
						var rcBounds = $(this)[0].getBoundingClientRect();		  
						var positionX = rcBounds.left - offsetX;
						var positionY = rcBounds.top + rcBounds.height/2;		  
						gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale: 0.9, borderWidth: '2px'});
						gsap.ticker.remove(updatePosition);
					})
					
					$(".sticky.right").mouseenter(function(e) {
						var rcBounds = $(this)[0].getBoundingClientRect();		  
						var positionX = rcBounds.right + offsetX;
						var positionY = rcBounds.top + rcBounds.height/2;		  
						gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale: 0.9, borderWidth: '2px'});
						gsap.ticker.remove(updatePosition);
					})
					
					$("#main .sticky.left").mouseenter(function(e) {		  
						var rcBounds = $(this)[0].getBoundingClientRect();		  
						var positionX = rcBounds.left - offsetX + 10;
						var positionY = rcBounds.top + rcBounds.height/2;		  
						gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale:0.7, opacity:0.6, borderWidth: '6px', borderColor:'#999999'});
						gsap.ticker.remove(updatePosition);
					})
					
					$("#main .sticky.right").mouseenter(function(e) {		  
						var rcBounds = $(this)[0].getBoundingClientRect();		  
						var positionX = rcBounds.right + offsetX - 10;
						var positionY = rcBounds.top + rcBounds.height/2;		  
						gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale:0.7, opacity:0.6, borderWidth: '6px', borderColor:'#999999'});
						gsap.ticker.remove(updatePosition);
					})
					
					$(".clapat-button .sticky.left").mouseenter(function(e) {		  
						var rcBounds = $(this)[0].getBoundingClientRect();		  
						var positionX = rcBounds.left  + 22;
						var positionY = rcBounds.top + rcBounds.height/2;		  
						gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale:0.4, opacity:1, borderWidth: '6px', borderColor:'#000'});
						gsap.ticker.remove(updatePosition);
					})
					
					$(".clapat-button .sticky.right").mouseenter(function(e) {		  
						var rcBounds = $(this)[0].getBoundingClientRect();		  
						var positionX = rcBounds.right  - 22;
						var positionY = rcBounds.top + rcBounds.height/2;		  
						gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale:0.4, opacity:1, borderWidth: '6px', borderColor:'#999999'});
						gsap.ticker.remove(updatePosition);
					})
					
					$(".sticky").mouseleave(function(e) {			
						gsap.to(ball, { duration: 0.2, scale:0.5, borderWidth: '4px', borderColor:'#999999', opacity:1 });
						gsap.ticker.add(updatePosition);		  
					})	
					
					$(".parallax-wrap").mouseenter(function(e) {
						gsap.to(this, { duration: 0.3, scale: 2 });
						gsap.to(ball, { duration: 0.3, scale: 0.9, borderWidth: '2px',opacity:1 });
						gsap.to($( this ).children(), {duration: 0.3, scale:0.5});
						active = true;
					});
					
					$("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
						gsap.to(ball, { duration: 0.3, scale: 0.7, borderWidth: '6px', opacity:0.6, borderColor:'#999' });
					});
					
					$(".clapat-button .parallax-wrap.icon-wrap").mouseenter(function(e) {
						gsap.to(ball, { duration: 0.05, scale: 0.4, borderWidth: '0px', opacity:1, borderColor:'#000' });
					});
					
					$(".parallax-wrap.bigger").mouseenter(function(e) {
						gsap.to(ball, { duration: 0.3, scale: 1.35, borderWidth: '2px', opacity:1 });
					});
					
					$(".parallax-wrap").mouseleave(function(e) {
						gsap.to(this, { duration: 0.3, scale: 1 });
						gsap.to(ball, { duration: 0.3, scale: 0.5, borderWidth: '4px', opacity:1, borderColor:'#999999'  });
						gsap.to($( this ).children(), {duration: 0.3, scale:1, x: 0, y:0});
						active = false;
					});		
					
					$(".sticky").mouseenter(function(e) {
						gsap.to(ball, { duration: 0.5, borderColor:$("body").data('primary-color') });
					});
					$("#main .sticky").mouseenter(function(e) {
						gsap.to(ball, { duration: 0.5, borderColor:'#999' });
					});
					$(".clapat-button .sticky").mouseenter(function(e) {
						if ($('#page-content').hasClass("light-content")) {
							gsap.to(ball, { duration: 0.5, borderColor:'#000' });
						} else {
							gsap.to(ball, { duration: 0.5, borderColor:'#fff' });  
						}
					});
					$(".parallax-wrap").mouseenter(function(e) {
						gsap.to(ball, { duration: 0.3, borderColor:$("body").data('primary-color')  });
					});
					$(".clapat-button .parallax-wrap").mouseenter(function(e) {
						if ($('#page-content').hasClass("light-content")) {
							gsap.to(ball, { duration: 0.05, borderColor:'#000'  });
						} else {
							gsap.to(ball, { duration: 0.05, borderColor:'#fff'  });
						}
					});
					$(".parallax-wrap.bigger").mouseenter(function(e) {
						gsap.to(ball, { duration: 0.3, borderColor:$("body").data('primary-color')  });
					});
					$("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
						gsap.to(ball, { duration: 0.3, borderColor:'#999'});
					});
					
					$(".parallax-wrap").mousemove(function(e) {
						parallaxCursor(e, this, 2);
						callParallax(e, this);
					});
					
					function callParallax(e, parent) {
						parallaxIt(e, parent, parent.querySelector(".parallax-element"), 20);
					}
					
					function parallaxIt(e, parent, target, movement) {
						var boundingRect = parent.getBoundingClientRect();
						var relX = e.pageX - boundingRect.left;
						var relY = e.pageY - boundingRect.top;
						var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
						
						gsap.to(target, {
							duration: 0.3,
							x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
							y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.height * movement,
							ease: Power2.easeOut
						});
					}
					
					function parallaxCursor(e, parent, movement) {
						var rect = parent.getBoundingClientRect();
						var relX = e.pageX - rect.left;
						var relY = e.pageY - rect.top;
						var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
						pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
						pos.y = rect.top + rect.height / 2  + (relY - rect.height / 2 - scrollTop)  / movement ;
						gsap.to(ball, { duration: 0.3, x: pos.x, y: pos.y });
					}
					
					$(".hide-ball").mouseenter(function(e) {	
						gsap.to('#ball', {duration: 0.2, borderWidth: '1px', scale: 1, opacity:0});
					});	
							
					$(".hide-ball").mouseleave(function(e) {
						gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, opacity:1});
					});
					
					$(".link, .button").mouseenter(function(e) {	
						gsap.to('#ball', {duration: 0.2, borderWidth:"0px",scale:1.5,backgroundColor:"rgba(153, 153, 153, 1)",opacity:0.15});
						gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 4, left: 4});
					});
								
					$(".link, .button").mouseleave(function(e) {
						gsap.to('#ball', {duration: 0.3, borderWidth:"4px",scale:0.5,backgroundColor:"rgba(153, 153, 153, 0)",opacity:1});
						gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					});
					
					//Blog Hover Effects			
					$("#blog-page-nav .page-numbers li a, .post-page-numbers, #post-content a, #post-form a, #post-comments a, .wp-block-search__button, .clapat-sidebar-widget a").mouseenter(function(e) {	
						gsap.to('#ball', {duration: 0.2, borderWidth: '1px', scale: 1, opacity:0});
					});	
							
					$("#blog-page-nav .page-numbers li a, .post-page-numbers, #post-content a, #post-form a, #post-comments a, .wp-block-search__button, .clapat-sidebar-widget a").mouseleave(function(e) {
						gsap.to('#ball', {duration: 0.3, borderWidth: '4px', scale:0.5, opacity:1});
					});
				}
				
				
				
				
				if( !transitionsSupported() ) isAnimating = false;
				  }, delay);			  
				  if(url!=window.location && bool){
					window.history.pushState({path: url},'',url);
				  }
					});
			  }
			
			  function transitionsSupported() {
				return $('html').hasClass('csstransitions');
			  }
			});
			
		
	}