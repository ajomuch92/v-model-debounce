<template>
  <div id="app">
    <input v-model="myMainVariable" v-model-debounce.1000="myDebounceVariable" type="text" placeholder="Type your text..." style="padding: 4px;" />
    <p>Main Variable: {{ myMainVariable }}</p>
    <p>Debounce variable: {{ myDebounceVariable }}</p>
    <p>{{ fromEvent }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    myMainVariable: '',
    myDebounceVariable: '',
    fromEvent: 'Event',
  }),
  mounted() {
    this.$on('on-debounce', this.onDebounceHandler);
  },
  beforeDestroy() {
    this.$off('on-debounce', this.onDebounceHandler);
  },
  methods: {
    onDebounceHandler({ value }) {
      this.fromEvent = `From event: ${value}`;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
