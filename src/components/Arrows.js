const React = require('preact')

module.exports = function Arrows ({ glideClass = 'glide', arrows }) {
  if (!arrows) return ''
  if (typeof arrows === 'object' && Boolean(arrows.props)) return arrows
  return (
    <div className={`${glideClass}__arrows`} data-glide-el='controls'>
      <button
        className={`${glideClass}__arrow ${glideClass}__arrow--prev`}
        data-glide-dir='<'
      >
        prev
      </button>
      <button
        className={`${glideClass}__arrow ${glideClass}__arrow--next`}
        data-glide-dir='>'
      >
        next
      </button>
    </div>
  )
}
