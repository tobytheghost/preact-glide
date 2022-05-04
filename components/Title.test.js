/**
 * @jest-environment jsdom
 */

const React = require('preact')
const Title = require('./Title')

const cleanUp = () => {
  document.body.innerHTML = ''
}

describe('Title', () => {
  describe('Default', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(<Title glideClass={'test'} title={'Title'} />, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders default title', () => {
      expect(
        document.body.contains(document.querySelector('.test__title'))
      ).toBe(true)
    })
  })

  describe('Custom', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      const CustomTitle = () => <div className={'test__custom'}></div>
      React.render(<Title glideClass={'test'} title={<CustomTitle />} />, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders custom title', () => {
      expect(
        document.body.contains(document.querySelector('.test__custom'))
      ).toBe(true)
    })

    it('Does not render default title', () => {
      expect(
        document.body.contains(document.querySelector('.test__title'))
      ).toBe(false)
    })
  })

  describe('Not set', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(<Title glideClass={'test'} />, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Does not render title', () => {
      expect(
        document.body.contains(document.querySelector('.test__title'))
      ).toBe(false)
    })
  })

  describe('Wrong param', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(<Title glideClass={'test'} title={{}}/>, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Does not render title', () => {
      expect(
        document.body.contains(document.querySelector('.test__title'))
      ).toBe(false)
    })
  })

  describe('No title', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(<Title glideClass={'test'} title={false}/>, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Does not render title', () => {
      expect(
        document.body.contains(document.querySelector('.test__title'))
      ).toBe(false)
    })
  })
})
