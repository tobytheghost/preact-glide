module.exports = function onClickOrDrag (element, clickCallback, dragCallback) {
  const delta = 6
  let startX
  let startY

  const onMouseDown = e => {
    startX = e.pageX
    startY = e.pageY
  }

  const onMouseUp = e => {
    const diffX = Math.abs(e.pageX - startX)
    const diffY = Math.abs(e.pageY - startY)

    if (diffX < delta && diffY < delta) {
      if (clickCallback) clickCallback(element)
    } else {
      if (dragCallback) dragCallback(element)
    }
  }

  element.addEventListener('mousedown', onMouseDown)
  element.addEventListener('mouseup', onMouseUp)

  return () => {
    element.removeEventListener('mousedown', onMouseDown)
    element.removeEventListener('mouseup', onMouseUp)
  }
}
