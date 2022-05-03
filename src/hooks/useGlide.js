const React = require('preact')
const { useEffect, useState } = require('preact/hooks')
const GlideImport = require('@glidejs/glide')
let Glide = GlideImport
if (GlideImport.__esModule) Glide = Glide.default

module.exports = function useGlide ({
  carouselRef,
  glideOptions,
  glideEvents,
  glideComponents
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!carouselRef.current) return
    const slider = new Glide(carouselRef.current, glideOptions)
    if (!slider) return
    addGlideEvents(slider, glideEvents)
    slider.mount(glideComponents)
    setIsMounted(true)

    return () => slider.destroy()
  }, [])

  return isMounted
}

function addGlideEvents (slider, glideEvents) {
  if (!glideEvents || !glideEvents.length) return
  glideEvents.map(({ event, cb }) => slider.on(event, cb))
}
