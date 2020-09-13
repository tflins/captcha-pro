(function(window) {
  'use strict'

  function optionsVerify(options) {
    if (options.content && typeof options.content !== 'string') {
      throw new TypeError(`${options.content} not a string`)
    }
    if (options.width && typeof options.width !== 'number') {
      throw new TypeError(`${options.width} not a number`)
    }
    if (options.height && typeof options.height !== 'number') {
      throw new TypeError(`${options.height} not a number`)
    }
    if (options.fontSize && typeof options.fontSize !== 'number') {
      throw new TypeError(`${options.fontSize} not a number`)
    }
  }

  class Captcha {
    constructor(options = {}) {
      optionsVerify(options)

      this.content = options.content
      this.width = options.width
      this.height = options.height
      this.fontSize = options.fontSize
    }
  }

}(window))