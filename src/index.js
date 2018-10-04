/*!
 * ------------------------------
 * Vue-Tilt.js - Based on Vanilla-Tilt ()
 * https://github.com/frogbob/vue-tilt.js
 * license: MIT license (http://opensource.org/licenses/MIT)
 * ------------------------------
 */

require('./_polyfills')

// Import VanillaTilt
import VanillaTilt from 'vanilla-tilt';
        
// Define VueTilt-Directive
const VueTilt = {

    install: function(Vue) {  

        Vue.directive('tilt', function (el, binding) {
            VanillaTilt.init(el, Object.assign({}, binding.value) );
        });

    }

};

export default VueTilt;
