const React = require('preact')
const { useEffect, useRef } = require('preact/hooks')
const Arrows = require('./Arrows')
const Bullets = require('./Bullets')
const Controls = require('./Controls')
const Title = require('./Title')
const useGlide = require('../hooks/useGlide')

module.exports = function Carousel ({
  glideClass = 'glide',
  glideOptions,
  glideComponents,
  glideEvents,
  arrows = false,
  bullets = false,
  controls = false,
  title = false,
  children
}) {
  const carouselRef = useRef()

  useGlide({
    carouselRef,
    glideOptions,
    glideComponents,
    glideEvents
  })

  return (
    <div className={`${glideClass}`} ref={carouselRef}>
      <Title glideClass={glideClass} title={title} />
      <div className={`${glideClass}__track`} data-glide-el='track'>
        <ul className={`${glideClass}__slides`}>
          {children.length
            ? children.map((slide, index) => {
                return React.cloneElement(slide, {
                  ...slide.props,
                  key: index,
                  className: `${glideClass}__slide ${slide.props.className &&
                    slide.props.className}`
                })
              })
            : ''}
        </ul>
      </div>
      <Arrows glideClass={glideClass} arrows={arrows} />
      <Bullets glideClass={glideClass} bullets={bullets} slides={children} />
      <Controls glideClass={glideClass} controls={controls} />
    </div>
  )
}
