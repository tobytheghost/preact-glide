const { expect } = require('expect')
const React = require('preact')
const Controls = require('./Controls')

const cleanUp = () => {
  document.body.innerHTML = ''
}

describe('Controls', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    React.render(<Controls glideClass={'test'} controls />, element)
    document.body.append(element)
  })

  afterEach(cleanUp)

  it('Renders controls', () => {
    expect(
      document.body.contains(document.querySelector('.test__controls'))
    ).toBe(true)
  })
})
