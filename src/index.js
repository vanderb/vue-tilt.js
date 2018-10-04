/*!
 * ------------------------------
 * Vue-Tilt.js - Based on Vanilla-Tilt ()
 * https://github.com/frogbob/vue-tilt.js
 * license: MIT license (http://opensource.org/licenses/MIT)
 * ------------------------------
 */


/**
 * Custom event polyfill for IE 11 (>= 9 really)
 * Source: https://gist.github.com/gt3/787767e8cbf0451716a189cdcb2a0d08
 */
;(function() {
    if (typeof window.CustomEvent === "function") return false
  
    function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined }
      var evt = document.createEvent("CustomEvent")
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
      return evt
    }
  
    CustomEvent.prototype = window.Event.prototype
  
    window.CustomEvent = CustomEvent
})()

// Import VanillaTilt
import VanillaTilt from 'vanilla-tilt';
        
// Define VueTilt-Directive
export const VueTilt = {

    install(Vue) {  

        Vue.directive('tilt', (el, binding) => {
            VanillaTilt.init(el, Object.assign({}, binding.value) );
        });

    }

};
