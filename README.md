# Preact Glide

A simple wrapper for creating Glide carousels with Preact components
## Basic Example

```js
const Carousel = require('preact-glide')

const App = () => {
  return (
    <Carousel>
      {slides.map(slide => (
        <div>Slide</div>
      ))}
    </Carousel>
  )
}
```

