const React = require('preact')

module.exports = function Bullets ({ glideClass = 'glide', bullets, children }) {
  if (bullets && typeof bullets === 'object') return Boolean(bullets.props) ? bullets : ''
  if (!children || !children.length) return ''
  return (
    <div className={`${glideClass}__bullets`} data-glide-el='controls[nav]'>
      {children.map((_, index) => {
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
