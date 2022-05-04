/**
 * @jest-environment jsdom
 */

const React = require('preact')
const Styles = require('./Styles')

const cleanUp = () => {
  document.body.innerHTML = ''
}

describe('Styles', () => {
  describe('Default', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(<Styles />, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders styles element', () => {
      const element = document.querySelector('.glide__styles')
      expect(document.body.contains(element)).toBe(true)
    })

    it('Renders styles', () => {
      const element = document.querySelector('.glide__styles')
      const hasStyles = /\.glide/i.test(element.textContent)
      expect(hasStyles).toBe(true)
    })
  })

  describe('Custom', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(<Styles glideClass={'test'}/>, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders styles element', () => {
      const element = document.querySelector('.test__styles')
      expect(document.body.contains(element)).toBe(true)
    })

    it('Renders styles', () => {
      const element = document.querySelector('.test__styles')
      const hasStyles = /\.test/i.test(element.textContent)
      expect(hasStyles).toBe(true)
    })
  })
})
