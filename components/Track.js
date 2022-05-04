const React = require('preact')

module.exports = function Track ({ glideClass, children }) {
  return (
    <div className={`${glideClass}__track`} data-glide-el='track'>
      <ul className={`${glideClass}__slides`}>
        {children.length
          ? children.map((slide, index) => {
              if (slide && typeof slide === 'object') {
                if (Boolean(slide.props)) {
                  const defaultClass = slide.props.className
                    ? slide.props.className
                    : ''
                  return React.cloneElement(slide, {
                    ...slide.props,
                    key: slide.props.key || index,
                    className: `${glideClass}__slide ${defaultClass}`
                  })
                }
                return ''
              }
              return (
                <li key={index} className={`${glideClass}__slide`}>
                  {slide}
                </li>
              )
            })
          : ''}
      </ul>
    </div>
  )
}
