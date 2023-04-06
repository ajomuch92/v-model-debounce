import Vue from 'vue';

export { default as VModelDebounce } from './directive';
import directive from './directive';

export default {
    install() {
        Vue.directive('model-debounce', directive);
    }
}
