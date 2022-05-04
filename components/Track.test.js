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
    expect(document.body.contains(document.querySelector('.test__track'))).toBe(
      true
    )
  })

  it('Renders slides', () => {
    expect(document.body.contains(document.querySelector('.test__slide'))).toBe(
      true
    )
  })
})
