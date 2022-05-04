const React = require('preact')

module.exports = function Bullets ({ glideClass = 'glide', bullets, slides }) {
  if (!bullets) return ''
  if (typeof bullets === 'object' && Boolean(bullets.props)) return bullets
  if (!slides || !slides.length) return ''
  return (
    <div className={`${glideClass}__bullets`} data-glide-el='controls[nav]'>
      {slides.map((_, index) => {
        return (
          <button
            className={`${glideClass}__bullet`}
            data-glide-dir={`=${index}`}
          />
        )
      })}
    </div>
  )
}
