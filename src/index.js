;(function (window) {
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

  function isHtmlElement(node) {
    return node && node.nodeType === Node.ELEMENT_NODE
  }

  function getRandomInt(min, max) {
    return ~~(Math.random() * (max - min + 1) + min)
  }

  function getRandomColor(min, max) {
    const r = getRandomInt(min, max)
    const g = getRandomInt(min, max)
    const b = getRandomInt(min, max)

    return `rgba(${r}, ${g}, ${b})`
  }

  class Captcha {
    constructor(options = {}) {
      optionsVerify(options)

      const defaultOptions = {
        width: 100,
        height: 30
      }

      options = Object.assign(defaultOptions, options)

      this.el = options.el
      this.content = options.content
      this.width = options.width
      this.height = options.height
      this.fontSize = options.fontSize

      this.init()
    }

    init() {
      if (isHtmlElement(this.el)) this.$el = this.el
      else this.$el = document.querySelector(this.el)

      this.$canvas = document.createElement('canvas')
      this.ctx = this.$canvas.getContext('2d')
      this.draw()
      this.$el.appendChild(this.$canvas)
    }

    draw() {
      this.ctx.fillStyle = getRandomColor(200, 220)
      this.ctx.fillRect(0, 0, this.width, this.height)
    }

    drawCanvas() {}

    drawContent() {}

    drawLine() {}

    drawDot() {}
  }

  window.Captcha = Captcha
})(window)
