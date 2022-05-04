const React = require('preact')

module.exports = function Controls ({ glideClass = 'glide', controls }) {
  if (!controls) return ''
  if (typeof controls === 'object' && Boolean(controls.props)) return controls
  return (
    <div className={`${glideClass}__controls`} data-glide-el='controls'>
      <button
        className={`${glideClass}__control-button ${glideClass}__control-button--start`}
        data-glide-dir='<<'
      >
        Start
      </button>
      <button
        className={`${glideClass}__control-button ${glideClass}__control-button--end`}
        data-glide-dir='>>'
      >
        End
      </button>
    </div>
  )
}
