/**
 * @jest-environment jsdom
 */

const React = require('preact')
const { renderHook } = require('@testing-library/preact-hooks')
const useGlide = require('./useGlide')

const slides = ['Slide1', 'Slide2']
const glideClass = 'test'
const BasicCarousel = () => (
  <div className={`${glideClass}`}>
    <div className={`${glideClass}__track`} data-glide-el='track'>
      <ul className={`${glideClass}__slides`}>
        {slides.map(slide => (
          <div>{slide}</div>
        ))}
      </ul>
    </div>
  </div>
)

describe('UseGlide', () => {
  beforeEach(() => {
    const element = document.createElement('div')
    React.render(<BasicCarousel />, element)
    document.body.append(element)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('Mounts glide', () => {
    const current = document.querySelector('.test')
    const carouselRef = { current }
    const { result } = renderHook(() => useGlide({ carouselRef }))
    expect(result.current.isMounted).toBe(true)
  })

  it('Mounts glide events', () => {
    const current = document.querySelector('.test')
    const carouselRef = { current }
    const glideEvents = [
      {
        event: 'run.before',
        cb: () => {}
      },
      {
        event: 'run.after',
        cb: () => {}
      }
    ]
    const { result } = renderHook(() => useGlide({ carouselRef, glideEvents }))
    expect(result.current.mountedEvents.length).toBe(2)
  })
})
