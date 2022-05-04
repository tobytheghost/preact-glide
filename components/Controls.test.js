const { expect } = require('expect')
const React = require('preact')
const Controls = require('./Controls')

const cleanUp = () => {
  document.body.innerHTML = ''
}

describe('Controls', () => {
  describe('Default', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      React.render(<Controls glideClass={'test'} />, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders controls', () => {
      expect(
        document.body.contains(document.querySelector('.test__controls'))
      ).toBe(true)
    })
  })

  describe('Custom', () => {
    beforeEach(() => {
      const element = document.createElement('div')
      const CustomControls = () => <div className={'test__custom'}></div>
      React.render(<Controls glideClass={'test'} controls={<CustomControls />}/>, element)
      document.body.append(element)
    })

    afterEach(cleanUp)

    it('Renders controls', () => {
      expect(
        document.body.contains(document.querySelector('.test__custom'))
      ).toBe(true)
    })
  })
})
