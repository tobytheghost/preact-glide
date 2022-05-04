const React = require('preact')

module.exports = function Track ({ glideClass, children }) {
  return (
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
  )
}
