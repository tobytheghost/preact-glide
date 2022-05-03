const { expect } = require('expect')
const React = require('preact')
const Carousel = require('./Carousel')

const slides = ['Slide1', 'Slide2']
const cleanUp = () => (document.body.innerHTML = '')

function Title () {
  return <div className={'test__title-component'}>Title</div>
}

describe('Carousel (No props)', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    React.render(
      <Carousel glideClass={'test'}>
        {slides.map(slide => (
          <div>{slide}</div>
        ))}
      </Carousel>,
      element
    )
    document.body.append(element)
  })

  afterEach(cleanUp)

  it('Displays', () => {
    expect(document.body.contains(document.querySelector('.test'))).toBe(true)
  })

  it('Contain slides', () => {
    expect(document.body.contains(document.querySelector('.test__slide'))).toBe(
      true
    )
  })

  it('Renders all slides', () => {
    expect(document.querySelectorAll('.test__slide').length).toBe(slides.length)
  })

  it("Doesn't render arrows", () => {
    expect(
      document.body.contains(document.querySelector('.test__arrows'))
    ).toBe(false)
  })

  it("Doesn't render bullets", () => {
    expect(
      document.body.contains(document.querySelector('.test__bullets'))
    ).toBe(false)
  })

  it("Doesn't render controls", () => {
    expect(
      document.body.contains(document.querySelector('.test__controls'))
    ).toBe(false)
  })

  it("Doesn't render title", () => {
    expect(document.body.contains(document.querySelector('.test__title'))).toBe(
      false
    )
  })
})

describe('Carousel (with default arrows)', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    React.render(
      <Carousel glideClass={'test'} arrows>
        {slides.map(slide => (
          <div>{slide}</div>
        ))}
      </Carousel>,
      element
    )
    document.body.append(element)
  })

  afterEach(cleanUp)

  it('Renders default arrows', () => {
    expect(
      document.body.contains(document.querySelector('.test__arrows'))
    ).toBe(true)
  })

  it('Renders two arrows', () => {
    expect(document.querySelectorAll('.test__arrow').length).toBe(2)
  })
})

describe('Carousel (with default bullets)', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    React.render(
      <Carousel glideClass={'test'} bullets>
        {slides.map(slide => (
          <div>{slide}</div>
        ))}
      </Carousel>,
      element
    )
    document.body.append(element)
  })

  afterEach(cleanUp)

  it('Renders default bullets', () => {
    expect(
      document.body.contains(document.querySelector('.test__bullets'))
    ).toBe(true)
  })

  it('Renders all bullets', () => {
    expect(document.querySelectorAll('.test__bullet').length).toBe(
      slides.length
    )
  })
})

describe('Carousel (with default controls)', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    React.render(
      <Carousel glideClass={'test'} controls>
        {slides.map(slide => (
          <div>{slide}</div>
        ))}
      </Carousel>,
      element
    )
    document.body.append(element)
  })

  afterEach(cleanUp)

  it('Renders default arrows', () => {
    expect(
      document.body.contains(document.querySelector('.test__controls'))
    ).toBe(true)
  })

  it('Renders two controls', () => {
    expect(document.querySelectorAll('.test__control-button').length).toBe(2)
  })
})

describe('Carousel (with title - string)', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    React.render(
      <Carousel glideClass={'test'} title={'Title'}>
        {slides.map(slide => (
          <div>{slide}</div>
        ))}
      </Carousel>,
      element
    )
    document.body.append(element)
  })

  afterEach(cleanUp)

  it('Renders title component', () => {
    expect(document.body.contains(document.querySelector('.test__title'))).toBe(
      true
    )
  })
})

describe('Carousel (with title - component)', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    React.render(
      <Carousel glideClass={'test'} title={<Title />}>
        {slides.map(slide => (
          <div>{slide}</div>
        ))}
      </Carousel>,
      element
    )
    document.body.append(element)
  })

  afterEach(cleanUp)

  it('Renders title component', () => {
    expect(
      document.body.contains(document.querySelector('.test__title-component'))
    ).toBe(true)
  })
})
