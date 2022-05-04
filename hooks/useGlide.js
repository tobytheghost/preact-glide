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
  const [mountedEvents, setMountedEvents] = useState([])

  const addGlideEvents = (slider, glideEvents) => {
    if (!glideEvents || !glideEvents.length) return
    return glideEvents.map(({ event, cb }) => {
      slider.on(event, cb)
      return event
    })
  }

  useEffect(() => {
    if (!carouselRef.current) return
    const slider = new Glide(carouselRef.current, glideOptions)
    if (!slider) return
    const events = addGlideEvents(slider, glideEvents)
    setMountedEvents(events)
    slider.mount(glideComponents)
    setIsMounted(true)

    return () => slider.destroy()
  }, [])

  return { isMounted, mountedEvents }
}
