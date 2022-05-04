# Preact Glide

A simple wrapper for creating Glide JS carousels with Preact components

## Contents

  - [Installation](#installation)
  - [Basic Example](#basic-example)
  - [Included Styles](#included-styles)
    - [Component](#component)
    - [Import](#import)
      - [Less](#less)
      - [Scss](#scss)
  - [Props](#props)
    - [glideClass](#glideclass)
    - [glideOptions](#glideoptions)
    - [glideComponents](#glidecomponents)
    - [glideEvents](#glideevents)
    - [arrows](#arrows)
    - [bullets](#bullets)
    - [controls](#controls)
    - [styles](#styles)
    - [title](#title)
  - [Components](#components)
    - [Arrows](#arrows-1)
    - [Bullets](#bullets-1)
    - [Container](#container)
    - [Controls](#controls-1)
    - [Title](#title-1)
    - [Track](#track)
  - [Hooks](#hooks)
    - [useGlide](#useglide)

## Installation

```
npm install preact-glide
```

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

## Styles

### Component

Automatically include styles. Uses `glideClass` if set.

```js
const App = () => {
  return (
    <Carousel styles>{slides}</Carousel>
  )
}
```

### Import

#### Less Import

```less
@import './node_modules/preact-glide/styles/carousel.less';
```

Overriding default className

In the case that you are using a non-standard className (when overriding `glideClass` prop) you can override the default `@glideClass` less variable as follows:

```less
@import './node_modules/preact-glide/styles/carousel.less';
@glideClass: ~'.new-class';
```

#### Scss Import

```scss
@import './node_modules/preact-glide/styles/carousel.scss';
```

Overriding default className

In the case that you are using a non-standard className (when overriding `glideClass` prop) you can override the default `$glideClass` less variable as follows:

```less
@import './node_modules/preact-glide/styles/carousel.scss';
$glideClass: ".new-class";
```

## Props



### glideClass

(String)

Used to override the default Glide className `glide`.

Example:

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



### glideOptions

(Object)

Glide JS options object: https://glidejs.com/docs/options/



### glideComponents

(Object)

Glide JS Components object: https://glidejs.com/docs/extending-components/



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

### arrows

(Boolean | Component)

Set `true` to use default component.

Example (Default):

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

Example (Custom Component):

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



### bullets

(Boolean | Component)

Set `true` to use default component.

Example (Default):

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

Example (Custom Component):

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



### controls

(Boolean | Component)

Set `true` to use default component.

Example (Default):

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

Example (Custom Component):

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


### styles

(Boolean)

Set `true` to include default styles - uses `glideClass` by default.

Example:

```js
const Carousel = require('preact-glide')

const App = () => {
  return (
    <Carousel styles>
      {slides.map(slide => (
        <div>Slide</div>
      ))}
    </Carousel>
  )
}
```

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

## Components

Single components can be exported from `preact-glide/components`

```js
const {
  Arrows,
  Bullets,
  Container,
  Controls,
  Title,
  Track
} = require('preact-glide/components')
```

### Arrows

- `glideClass` - Override default glide class
- `arrows` - Override default component

```js
const { Arrows } = require('preact-glide/components')

const App = () => {
  return (
    <Arrows />
  )
}
```

### Bullets

- `glideClass` - Override default glide class
- `bullets` - Override default component
- `children` - Array of Slides

```js
const { Bullets } = require('preact-glide/components')

const App = () => {
  return (
    <Bullets>
      {arrayOfSlides}
    </Bullets>
  )
}
```
### Container

- `glideClass` - Override default glide class

```js
const { Container } = require('preact-glide/components')

const App = () => {
  return (
    <Container />
  )
}
```
### Controls

- `glideClass` - Override default glide class
- `controls` - Override default component

```js
const { Controls } = require('preact-glide/components')

const App = () => {
  return (
    <Controls />
  )
}
```

### Title

- `glideClass` - Override default glide class
- `title` - Component or string to be rendered

```js
const { Title } = require('preact-glide/components')

const App = () => {
  return (
    <Title />
  )
}
```
### Track

- `glideClass` - Override default glide class
- `children` - Array of Slides

```js
const { Track } = require('preact-glide/components')

const App = () => {
  return (
    <Track>
      {arrayOfSlides}
    <Track/>
  )
}
```
## Hooks

The hooks can be exported from `preact-glide/hooks`

```js
const { useGlide } = require('preact-glide/hooks')
```

### useGlide

Takes an object as a parameter with the following properties

- `carouselRef` - (required) useRef reference to carousel element
- `glideOptions` - Glide JS options object: https://glidejs.com/docs/options/
- `glideComponents` - Glide JS Components object: https://glidejs.com/docs/extending-components/
- `glideEvents` - List of Glide events with callbacks.

```js
const { useGlide } = require('preact-glide/hooks')

const App = () => {
  const carouselRef = useRef()

  useGlide({ carouselRef })

  return (
    <div className={`glide`} ref={carouselRef}>
      <div className={`glide__track`} data-glide-el='track'>
        <ul className={`glide__slides`}>
          <li className={`glide__slide`}>Slide</li>
        </ul>
      </div>
    </div>
  )
}
```

_Note_: HTML structure inside `carouselRef` will need to contain the glide structure and classes
