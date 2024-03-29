new Vue({
  el: '#app',
  data() {
    return {
      range: 10,
      red: 0,
      blue: 0,
      green: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }

  },
  computed: {
    bindStyle() {
      return `width: ${this.range}px; height: ${this.range}px; background: rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
  }
})