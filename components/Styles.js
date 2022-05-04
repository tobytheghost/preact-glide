const React = require('preact')

module.exports = function Styles ({ glideClass = 'glide' }) {
  return (
    <style className={`${glideClass}__styles`}>{glideStyles(glideClass)}</style>
  )
}

function glideStyles (glideClass) {
  return `.${glideClass} {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.${glideClass} * {
  box-sizing: inherit;
}
.${glideClass}__track {
  overflow: hidden;
}
.${glideClass}__slides {
  position: relative;
  width: 100%;
  list-style: none;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  touch-action: pan-Y;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
}
.${glideClass}__slides--dragging {
  user-select: none;
}
.${glideClass}__slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  white-space: normal;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
.${glideClass}__slide a {
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.${glideClass}__arrows {
  -webkit-touch-callout: none;
  user-select: none;
}
.${glideClass}__bullets {
  -webkit-touch-callout: none;
  user-select: none;
}
.${glideClass}--rtl {
  direction: rtl;
}`
}
