const React = require('preact')

module.exports = function Title ({ glideClass = 'glide', title }) {
  if (!title) return ''
  if (title && typeof title === 'object') return Boolean(title.props) ?  title : ''
  return <div className={`${glideClass}__title`}>{title}</div>
}
