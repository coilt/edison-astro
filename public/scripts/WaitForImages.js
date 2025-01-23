export function WaitForImages() {
  // Define a dummy waitForImages function
  function waitForImages(element, callback) {
    console.warn(
      'waitForImages is deprecated and will be removed in the future',
    )

    // If a callback is provided, call it immediately
    if (typeof callback === 'function') {
      callback.call(element)
    }

    // Return a promise that resolves immediately
    return Promise.resolve()
  }

  // Attach the function to the Element prototype to mimic jQuery plugin behavior
  Element.prototype.waitForImages = function (callback) {
    return waitForImages(this, callback)
  }

  // Also attach to NodeList prototype for queries that return multiple elements
  NodeList.prototype.waitForImages = function (callback) {
    return Promise.all(
      Array.from(this).map((el) => waitForImages(el, callback)),
    )
  }

  // Helper function to get elements (mimicking jQuery's behavior)
  function $(selector) {
    const elements = document.querySelectorAll(selector)
    return elements.length === 1 ? elements[0] : elements
  }
}
