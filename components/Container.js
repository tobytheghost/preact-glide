const React = require('preact')
const { useRef } = require('preact/hooks')
const Arrows = require('./Arrows')
const Bullets = require('./Bullets')
const Controls = require('./Controls')
const Title = require('./Title')
const Track = require('./Track')
const useGlide = require('../hooks/useGlide')

module.exports = function Container ({
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
      {title ? <Title glideClass={glideClass} title={title} /> : ''}
      <Track glideClass={glideClass}>{children}</Track>
      {arrows ? <Arrows glideClass={glideClass} arrows={arrows} /> : ''}
      {bullets ? (
        <Bullets glideClass={glideClass} bullets={bullets}>
          {children}
        </Bullets>
      ) : (
        ''
      )}
      {controls ? <Controls glideClass={glideClass} controls={controls} /> : ''}
    </div>
  )
}
