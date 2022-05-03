const { expect } = require('expect')
const React = require('preact')
const Arrows = require('./Arrows')

const cleanUp = () => {
  document.body.innerHTML = ''
}

describe('Arrows', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    React.render(<Arrows glideClass={'test'} arrows />, element)
    document.body.append(element)
  })

  afterEach(cleanUp)

  it('Renders arrows', () => {
    expect(
      document.body.contains(document.querySelector('.test__arrows'))
    ).toBe(true)
  })
})
