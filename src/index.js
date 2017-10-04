window._ = require('lodash');

import VanillaTilt from 'vanilla-tilt';
        
const VueTilt = {

    install(Vue) {
                
        Vue.directive('tilt', (el, binding) => {
            let options = {};
            _.merge(options, binding.value);
            VanillaTilt.init(el, options);
        });
        
    }

}

export default VueTilt;