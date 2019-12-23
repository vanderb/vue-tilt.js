Vue-Tilt.js
====================

![Vue-Tilt.js](http://api.devbar.ultrabold.de/github?text=VueTilt.js)

**Add Tilt-Effect to your elements, based on vanilla-tilt.js**

## Installation

### Install package

```javascript
npm install vue-tilt.js --save
// or
yarn add vue-tilt.js
```
    
### Import to vue

```javascript
import VueTilt from 'vue-tilt.js'
Vue.use(VueTilt)
```

## Implement into your view
Simply add the vue-directive to any element within your vue-root-element

```html
<div v-tilt>...</div>
```
    
### Options

All options with defaults

```
{
    reverse:            false,  // reverse the tilt direction
    max:                35,     // max tilt rotation (degrees)
    perspective:        1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:              1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:              300,    // Speed of the enter/exit transition
    transition:         true,   // Set a transition on enter/exit.
    axis:               null,   // What axis should be disabled. Can be X or Y.
    reset:              true    // If the tilt effect has to be reset on exit.
    easing:             "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare:              false   // if it should have a "glare" effect
    "max-glare":        1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender":  false   // false = VanillaTilt creates the glare elements for you, otherwise
    // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
}
```

# Examples

### Add options to your elements

```html
<div v-tilt="{speed: 500, perspective: 1200}">...</div>
```
