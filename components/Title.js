const React = require('preact')

module.exports = function Title ({ glideClass = 'glide', title }) {
  if (!title) return ''
  return <div className={`${glideClass}__title`}>{title}</div>
}
