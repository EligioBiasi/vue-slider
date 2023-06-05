const { createApp } = Vue

createApp({
  data() {
    return {
      imagesContainer: [
        './img/img.1.jpg',
        './img/img.2.jpg',
        './img/img.3.jpg',
        './img/img.4.jpg',
        './img/img.5.jpg'
      ],

      indexImage:2,
    }
  },

  methods: {
    bottomButton(){
        if(this.indexImage == 0){
            this.indexImage = this.imagesContainer.length - 1;
        }else{
            this.indexImage = this.indexImage -1;
        }
    },

    topButton(){
        if(this.indexImage == this.imagesContainer.length - 1){
            this.indexImage = 0;
        }else{
            this.indexImage = this.indexImage + 1;
        }
    },

    setIndexImage(index) { 
        this.indexImage= index;
    },

    nextImages(){
        myTimeout = setInterval(()=> {
        indexImage + 1;
    
        if(indexImage == imagesContainer.length - 1){
            indexImage = 0;
        }else{
            indexImage = indexImage + 1;
        }
    },3000);
}
  },

  beforeCrate() {
    this.nextImages();
  },

}).mount('#app');