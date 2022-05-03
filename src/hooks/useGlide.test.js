const React = require('preact')
const { renderHook, act } = require('@testing-library/preact-hooks')
const useGlide = require('./useGlide')

const slides = ['Slide1', 'Slide2']

describe('UseGlide', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    const glideClass = 'glide'
    React.render(
      <div className={`${glideClass}`}>
        <div className={`${glideClass}__track`} data-glide-el='track'>
          <ul className={`${glideClass}__slides`}>
            {slides.map(slide => (
              <div>{slide}</div>
            ))}
          </ul>
        </div>
      </div>,
      element
    )
    document.body.append(element)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('Renders controls', () => {
    const current = document.querySelector('.glide')
    const { result } = renderHook(() => useGlide({ carouselRef: { current } }))
    expect(result.current).toBe(true)
  })
})
