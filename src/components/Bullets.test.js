const { expect } = require('expect')
const React = require('preact')
const Bullets = require('./Bullets')

const slides = ['Slide1', 'Slide2']

const cleanUp = () => {
  document.body.innerHTML = ''
}

describe('Bullets', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    React.render(<Bullets glideClass={'test'} bullets slides={slides}/>, element)
    document.body.append(element)
  })

  afterEach(cleanUp)

  it('Renders bullets', () => {
    expect(
      document.body.contains(document.querySelector('.test__bullets'))
    ).toBe(true)
  })

  it('Renders all bullets', () => {
	  expect(document.querySelectorAll('.test__bullet').length).toBe(slides.length)
  })
})
