const React = require('preact')
const Slide = require('./Slide')

module.exports = function Track ({ glideClass, children }) {
  const slideClass = `${glideClass}__slide`
  const createSlide = (slide, index) => {
    if (slide && typeof slide === 'object') {
      if (!Boolean(slide.props)) return ''
      return (
        <Slide
          {...slide.props}
          key={slide.props.key || index}
          className={[slideClass, slide.props.className]
            .filter(Boolean)
            .join(' ')}
        >
          {slide.props.children}
        </Slide>
      )
    }
    return (
      <li key={index} className={slideClass}>
        {slide}
      </li>
    )
  }

  return (
    <div className={`${glideClass}__track`} data-glide-el='track'>
      <ul className={`${glideClass}__slides`}>
        {children.length ? children.map(createSlide) : ''}
      </ul>
    </div>
  )
}