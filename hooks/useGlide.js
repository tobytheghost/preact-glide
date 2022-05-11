const React = require('preact')
const { useEffect, useState } = require('preact/hooks')
const GlideImport = require('@glidejs/glide')
let Glide = GlideImport
if (GlideImport.__esModule) Glide = Glide.default

module.exports = function useGlide ({
  carouselRef,
  glideOptions = {},
  glideEvents = [],
  glideComponents = [],
  slides = []
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

  const setupOnViewCallback = slider => {
    const slidesPerView = slider.settings.perView
    const getSlide = i => {
      return slides[i]
    }

    const fireViewEvent = i => {
      const slide = getSlide(i)
      if (!slide || typeof slide !== 'object') return
      const { onView } = slide.props
      if (onView && typeof onView === 'function') onView()
    }

    let prevViewIndex = 0
    const onViewCallback = ({ init = false } = {}) => {
      if (slider.index === prevViewIndex && !init) return
      const rightIndex = slider.index + Math.ceil(slidesPerView) - 1
      const leftIndex = slider.index

      if (init) {
        for (let i = prevViewIndex; i <= rightIndex; i++) {
          fireViewEvent(Math.ceil(i))
        }
      } else if (prevViewIndex < leftIndex) {
        const startViewIndex = prevViewIndex + slidesPerView
        for (let i = startViewIndex; i <= rightIndex; i++) {
          fireViewEvent(Math.ceil(i))
        }
      } else {
        const endViewIndex = prevViewIndex - 1
        for (let i = endViewIndex; i >= slider.index; i--) {
          fireViewEvent(Math.ceil(i))
        }
      }
      prevViewIndex = slider.index
    }
    return onViewCallback
  }

  useEffect(() => {
    if (!carouselRef.current) return

    const slider = new Glide(carouselRef.current, glideOptions)
    if (!slider) return

    const onViewCallback = setupOnViewCallback(slider)
    const onViewEvent = { event: 'move.after', cb: onViewCallback }

    const events = addGlideEvents(slider, glideEvents)
    setMountedEvents(events)

    addGlideEvents(slider, [onViewEvent])

    slider.mount(glideComponents)
    setIsMounted(true)

    onViewCallback({ init: true })

    return () => slider.destroy()
  }, [])

  return { isMounted, mountedEvents }
}
