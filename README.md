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

## Styles (Less)

```less
@import './node_modules/preact-glide/carousel.less';
```

### Overriding default className

In the case that you are using a non-standard className (when overriding `glideClass` prop) you can override the default `@glide` less variable as follows:

```less
@import './node_modules/preact-glide/carousel.less';
@glideClass: ~'.new-class';
```

## Props

- [`glideClass`: String](#glideclass)
- [`glideOptions`: Object](#glideoptions)
- [`glideComponents`: Object](#glidecomponents)
- [`glideEvents`: Array](#glideevents)
- [`arrows`: Boolean | Component](#arrows)
- [`bullets`: Boolean | Component](#bullets)
- [`controls`: Boolean | Component](#controls)
- [`title`: Component](#title)

---
### glideClass 

(String)

Used to override the default Glide className `glide`.

#### Example

```js
const App = () => {
  return (
    <Carousel glideClass={'new-class'}>
      {slides.map(slide => (
        <div>Slide</div>
      ))}
    </Carousel>
  )
}
```

---

### glideOptions 

(Object)

Glide JS options object: https://glidejs.com/docs/options/

---

### glideComponents 

(Object)

Glide JS Components object: https://glidejs.com/docs/extending-components/

---

### glideEvents 

(Array)

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

---

### arrows 

(Boolean | Component)

Set `true` to use default component. 

#### Example 

(Default)

```js
const App = () => {
  return (
    <Carousel arrows>
      {slides.map(slide => (
        <div>Slide</div>
      ))}
    </Carousel>
  )
}
```

#### Example (Custom Component)

```js
const CustomArrows = () => <div>Arrows</div>

const App = () => {
  return (
    <Carousel arrows={<CustomArrows />}>
      {slides.map(slide => (
        <div>Slide</div>
      ))}
    </Carousel>
  )
}
```

---

### bullets 

(Boolean | Component)

Set `true` to use default component.

#### Example (Default)

```js
const App = () => {
  return (
    <Carousel bullets>
      {slides.map(slide => (
        <div>Slide</div>
      ))}
    </Carousel>
  )
}
```

#### Example (Custom Component)

```js
const CustomBullets = () => <div>Bullets</div>

const App = () => {
  return (
    <Carousel bullets={<CustomBullets />}>
      {slides.map(slide => (
        <div>Slide</div>
      ))}
    </Carousel>
  )
}
```

---

### controls 

(Boolean | Component)

Set `true` to use default component.

#### Example (Default)

```js
const App = () => {
  return (
    <Carousel controls>
      {slides.map(slide => (
        <div>Slide</div>
      ))}
    </Carousel>
  )
}
```

#### Example (Custom Component)

```js
const CustomControls = () => <div>Controls</div>

const App = () => {
  return (
    <Carousel controls={<CustomControls />}>
      {slides.map(slide => (
        <div>Slide</div>
      ))}
    </Carousel>
  )
}
```

---

### title 

(Component)

Used to pass in a component that sits above the carousel.

Example:

```js
const Carousel = require('preact-glide')

const Title = () => <div>Title</div>

const App = () => {
  return (
    <Carousel title={<Title />}>
      {slides.map(slide => (
        <div>Slide</div>
      ))}
    </Carousel>
  )
}

```
