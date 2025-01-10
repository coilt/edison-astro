export function ImagesLoaded(elements, callback) {
  console.log('Dummy ImagesLoaded called');
  
  const dummyInstance = {
    elements: Array.from(elements || []),
    images: Array.from(elements || []).map(el => ({
      isLoaded: true,
      img: el && el.tagName ? (el.tagName.toLowerCase() === 'img' ? el : el.querySelector('img')) : null
    }))
  };

  if (typeof callback === 'function') {
    callback.call(null, dummyInstance);
  }

  return {
    on: function(event, fn) {
      if (event === 'always' && typeof fn === 'function') {
        fn.call(null, dummyInstance);
      }
      return this;
    }
  };
}

window.imagesLoaded = ImagesLoaded;
