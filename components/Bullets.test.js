/**
 * @jest-environment jsdom
 */

const React = require('preact')
const Bullets = require('./Bullets')

const slides = ['Slide1', 'Slide2']

const cleanUp = () => {
  document.body.innerHTML = ''
}

describe('Bullets', () => {
  describe('Default', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(<Bullets glideClass={'test'}>{slides}</Bullets>, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders bullets', () => {
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
  describe('Custom', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      const CustomBullets = ({ children }) => (
        <div className={'test__custom'}>
          {children.map(child => (
            <div className={'test__custom-bullet'}>{child}</div>
          ))}
        </div>
      )
      React.render(
        <Bullets
          glideClass={'test'}
          bullets={<CustomBullets>{slides}</CustomBullets>}
        >
          {slides}
        </Bullets>,
        element
      )
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders bullets', () => {
      expect(
        document.body.contains(document.querySelector('.test__custom'))
      ).toBe(true)
    })

    it('Renders all bullets', () => {
      expect(document.querySelectorAll('.test__custom-bullet').length).toBe(
        slides.length
      )
    })
  })

  describe('Wrong Prop - object', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(
        <Bullets glideClass={'test'} bullets={{}}>
          {slides}
        </Bullets>,
        element
      )
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Does not render bullets', () => {
      expect(document.body.contains(document.querySelector('.test'))).toBe(
        false
      )
    })
  })

  describe('Wrong Prop - undefined', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(
        <Bullets glideClass={'test'} bullets={undefined}>
          {slides}
        </Bullets>,
        element
      )
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Does not render bullets', () => {
      expect(document.body.contains(document.querySelector('.test'))).toBe(
        false
      )
    })
  })

  describe('No children', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(
        <Bullets glideClass={'test'}></Bullets>,
        element
      )
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Does not render bullets', () => {
      expect(document.body.contains(document.querySelector('.test'))).toBe(
        false
      )
    })
  })
})
