const { createApp } = Vue

createApp({
  data() {
    return {
      elements: ['pippo','pluto','paperino','paperone'],
    }
  }
}).mount('#app');