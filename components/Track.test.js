/**
 * @jest-environment jsdom
 */

const React = require('preact')
const Track = require('./Track')

const slides = ['Slide1', 'Slide2']

const cleanUp = () => {
  document.body.innerHTML = ''
}

describe('Track', () => {
  describe('Slides', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(
        <Track glideClass={'test'}>
          {slides.map(slide => (
            <div>{slide}</div>
          ))}
        </Track>,
        element
      )
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders track', () => {
      const element = document.querySelector('.test__track')
      expect(document.body.contains(element)).toBe(true)
    })

    it('Renders slides', () => {
      const element = document.querySelector('.test__slide')
      expect(document.body.contains(element)).toBe(true)
    })
  })

  describe('List', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(<Track glideClass={'test'}>{slides}</Track>, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders track', () => {
      const element = document.querySelector('.test__track')
      expect(document.body.contains(element)).toBe(true)
    })

    it('Renders slides', () => {
      const element = document.querySelector('.test__slide')
      expect(document.body.contains(element)).toBe(true)
    })
  })

  describe('Wrong param', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(<Track glideClass={'test'}>{[{}, {}]}</Track>, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders track', () => {
      const element = document.querySelector('.test__track')
      expect(document.body.contains(element)).toBe(true)
    })

    it('Renders slides', () => {
      const element = document.querySelector('.test__slide')
      expect(document.body.contains(element)).toBe(false)
    })
  })
})
