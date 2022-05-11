const React = require('preact')
const { useEffect, useRef } = require('preact/hooks')
const { onClickOrDrag } = require('../helpers')

module.exports = function Slide (props) {
  const slide = useRef()
  const { type, onClick, children } = props

  useEffect(() => {
    if (!onClick) return
    const { current } = slide
    if (!current) return
    const cleanup = onClickOrDrag(current, onClick)
    return () => {
      cleanup()
    }
  }, [])

  return React.h(
    type || 'div',
    { ...props, ref: slide, onClick: undefined },
    children
  )
}
