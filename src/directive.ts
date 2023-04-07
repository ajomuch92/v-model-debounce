import { DirectiveBinding, DirectiveFunction, DirectiveOptions } from 'vue/types/options';
import { VNode } from 'vue/types/vnode';

let listener: (ev: Event) => void;

interface EmitEvent {
    event: Event;
    value: number | string;
}

const directive: DirectiveOptions | DirectiveFunction =  {
    inserted: (el: HTMLElement, def: DirectiveBinding, vnode: VNode) => {
        const { modifiers } = def;
        const keys = Object.keys(modifiers);
        let debounce: number | undefined;
        const ms: number = parseInt(keys[0], 10);
        if (isNaN(ms)) {
            throw new Error('First modifiers should be a number');
        }
        if (keys.length > 0) {
            listener = (event: Event) => {
                if (debounce) {
                    clearTimeout(debounce);
                    debounce = undefined;
                }
                debounce = setTimeout(() => {
                    let val = (event.target as any).value;
                    if (modifiers.trim) {
                        val = val.toString().trim();
                    }
                    if (modifiers.number) {
                        val = parseFloat(val);
                    }
                    if (vnode.context && def.expression) {
                        vnode.context.$data[def.expression] = val;
                        vnode.context.$emit('on-debounce', { event, value: val } as EmitEvent);
                    }
                    debounce = undefined;
                }, ms);
            };
            el.addEventListener('input', listener);
        }
    },
    unbind: (el: HTMLElement) => {
        el.removeEventListener('input', listener);
    },
}

export default directive;