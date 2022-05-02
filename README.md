# Preact Glide

A simple wrapper for creating Glide JS carousels with Preact components

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

## Props

- `glideClass`: String
- `glideOptions`: Object
- `glideComponents`: Object
- `glideEvents`: Array
- `arrows`: Boolean | Component
- `bullets`: Boolean | Component
- `controls`: Boolean | Component
- `styles`: Boolean
- `title`: Component

### glideClass - (String)

Used to override the default Glide className `glide`.

### glideOptions - (Object)

Glide JS options object: [https://glidejs.com/docs/options/]

### glideComponents - (Object)

Glide JS Components object: [https://glidejs.com/docs/extending-components/]

### glideEvents - (Array)

List of Glide events with callbacks. Events are passed in the following format:

```js
{
  event: '' // Event name
  cb: () => {} // Callback function
}
```

Example:

```js
const glideEvents = [
  {
    event: 'run.after'
    cb: () => alert('Hello, world!')
  }
]

```

### arrows - (Boolean | Component)

Set `true` to use default component.

### bullets - (Boolean | Component)

Set `true` to use default component.

### controls - (Boolean | Component)

Set `true` to use default component.

### styles - (Boolean)

Set `true` to use default component.

### title - (Component)

Used to pass in a component that sits above the carousel.

Example:

```js
const Carousel = require('preact-glide')

const Title = () => <div>This is the title</div>

const App = () => {
  return (
    <Carousel title={Title}>
      {slides.map(slide => (
        <div>Slide</div>
      ))}
    </Carousel>
  )
}

```
