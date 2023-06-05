const { createApp } = Vue

createApp({
  data() {
    return {
      imagesContainer: [
        './img/img.1.jpg',
        './img/img.2.jpg',
        './img/img.3.jpg',
        './img/img.4.jpg',
        './img/img.5.jpeg'
      ],

      indexImage:2,
    }
  },

  methods: {

  }
}).mount('#app');