
# v-model-debounce

Package with a custom directive to use a debounced v-model behaviour


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## API Reference

#### Install

```js
import VModelDebounce from 'v-model-debounce';

Vue.use(VModelDebounce);
```

#### Or use on a component:
```js
import { VModelDebounceDirective } from 'v-model-debounce';

export default {
    ...
    directive: {
        'v-model-debounce': VModelDebounceDirective
    },
    ...
}
```

#### Usage

##### Instead of v-model

```html
  <my-component :value="myDebouncedVariable" v-model-debounce.800="myDebouncedVariable" />
```

##### With v-model

```html
  <my-component v-model="myMainVariable" v-model-debounce.800="myDebouncedVariable" />
```

#### Modifiers

| Modifier | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| *`milliseconds`*      | `Number` | **Required**. This is the number of milliseconds to debounce the event. This should be the first modifier placed next to v-model-debounce directive |
| `trim`      | ---- | Modifier to trim the result |
 `number`      | ---- | Modifier to parse the result into a number |

#### Events

You can listen for each events on the component like this: 

```js
export default {
    ...
    mounted() {
        this.$on('on-debounce', this.debounceHandler);
    },
    beforeDestroy() {
        this.$off('on-debounce', this.debounceHandler);
    },
    methods: {
        debounceHandler(ev) {
            console.log(ev.event); // Last Event emitted from component
            console.log(ev.value); // Value emitted
        }
    }
}
```

## Authors

- [@ajomuch92](https://www.github.com/ajomuch92)


## Contributing

Contributions are always welcome. Create a PR [here](https://github.com/ajomuch92/v-model-debounce/pulls) or an issue [here](https://github.com/ajomuch92/v-model-debounce/issues).
