/**
 * @jest-environment jsdom
 */

const React = require('preact')
const Arrows = require('./Arrows')

const cleanUp = () => {
  document.body.innerHTML = ''
}

describe('Arrows', () => {
  describe('Default', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(<Arrows glideClass={'test'} />, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders arrows', () => {
      expect(
        document.body.contains(document.querySelector('.test__arrows'))
      ).toBe(true)
    })
  })

  describe('Custom', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      const CustomArrows = () => <div className={'test__custom'}></div>
      React.render(
        <Arrows glideClass={'test'} arrows={<CustomArrows />} />,
        element
      )
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders arrows', () => {
      expect(
        document.body.contains(document.querySelector('.test__custom'))
      ).toBe(true)
    })
  })

  describe('Wrong Prop - object', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(
        <Arrows glideClass={'test'} arrows={{}} />,
        element
      )
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Does not render arrows', () => {
      expect(
        document.body.contains(document.querySelector('.test'))
      ).toBe(false)
    })
  })

  describe('Wrong Prop - undefined', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(
        <Arrows glideClass={'test'} arrows={undefined} />,
        element
      )
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Does not render arrows', () => {
      expect(
        document.body.contains(document.querySelector('.test'))
      ).toBe(false)
    })
  })
})
