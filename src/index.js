const React = require('preact')
const { useEffect, useRef } = require('preact/hooks')
const Arrows = require('./components/Arrows')
const Bullets = require('./components/Bullets')
const Controls = require('./components/Controls')
const Title = require('./components/Title')
const Styles = require('./components/Styles')
const GlideImport = require('@glidejs/glide')
let Glide = GlideImport
if (GlideImport.__esModule) Glide = Glide.default

const Carousel = ({
  glideClass = 'glide',
  glideOptions,
  glideComponents,
  glideEvents,
  arrows = false,
  bullets = false,
  controls = false,
  title = false,
  styles = false,
  children
}) => {
  const carousel = useRef()

  useEffect(() => {
    if (!carousel.current) return
    const slider = new Glide(carousel.current, glideOptions)
    if (!slider) return
    addGlideEvents(slider, glideEvents)
    slider.mount(glideComponents)

    return () => slider.destroy()
  }, [])

  return (
    <div className={`${glideClass}`} ref={carousel}>
      <Title glideClass={glideClass} title={title} />
      <div className={`${glideClass}__track`} data-glide-el='track'>
        <ul className={`${glideClass}__slides`}>
          {children.map((slide, index) => {
            return React.cloneElement(slide, {
              ...slide.props,
              key: index,
              className: `${glideClass}__slide ${slide.props.className &&
                slide.props.className}`
            })
          })}
        </ul>
      </div>
      <Arrows glideClass={glideClass} arrows={arrows} />
      <Bullets glideClass={glideClass} bullets={bullets} slides={children} />
      <Controls glideClass={glideClass} controls={controls} />
      <Styles glideClass={glideClass} styles={styles}/>
    </div>
  )
}

function addGlideEvents (slider, glideEvents) {
  if (!glideEvents || !glideEvents.length) return
  glideEvents.map(({ event, cb }) => slider.on(event, cb))
}

module.exports = Carousel
