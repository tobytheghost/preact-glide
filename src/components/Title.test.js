const { expect } = require('expect')
const React = require('preact')
const Title = require('./Title')

const cleanUp = () => {
  document.body.innerHTML = ''
}

describe('Title', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    React.render(<Title glideClass={'test'} title={'Title'} />, element)
    document.body.append(element)
  })

  afterEach(cleanUp)

  it('Renders controls', () => {
    expect(document.body.contains(document.querySelector('.test__title'))).toBe(
      true
    )
  })
})
