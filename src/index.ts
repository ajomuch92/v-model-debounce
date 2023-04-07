import Vue from 'vue';

import directive from './directive';
export { default as VModelDebounceDirective } from './directive';

export default {
    install() {
        Vue.directive('model-debounce', directive);
    }
}
