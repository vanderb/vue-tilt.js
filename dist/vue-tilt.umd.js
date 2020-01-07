(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vanilla-tilt')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vanilla-tilt'], factory) :
    (global = global || self, factory(global.VueTilt = {}, global.VanillaTilt));
}(this, (function (exports, VanillaTilt) { 'use strict';

    VanillaTilt = VanillaTilt && VanillaTilt.hasOwnProperty('default') ? VanillaTilt['default'] : VanillaTilt;

    /*!
     * ------------------------------
     * Vue-Tilt.js - Based on Vanilla-Tilt ()
     * https://github.com/frogbob/vue-tilt.js
     * license: MIT license (http://opensource.org/licenses/MIT)
     * ------------------------------
     */

    // Define VueTilt-Directive
    var VueTilt = {
        install: function (Vue) {
            Vue.directive('tilt', function (el, binding) {
                VanillaTilt.init(el, Object.assign({}, binding.value));
            });
        }
    };

    var GlobalVue = null;
    if (typeof window !== 'undefined') {
        GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
        GlobalVue = global.vue;
    }

    if (GlobalVue) {
        GlobalVue.use(plugin);
    }

    exports.default = VueTilt;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
