Vue.config.devtools = true;

new Vue({
  el: "#container",
  data: {
    listaImmagini : [
        {
            url:'img/01.jpg',
            title:'Svezia',
            text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        },
        {
            url:'img/02.jpg',
            title:'Svizzera',
            text:'Lorem ipsum',
        },
        {
            url:'img/03.jpg',
            title:'Gran Bretagna',
            text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            url:'img/04.jpg',
            title:'Germania',
            text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        },
        {
            url:'img/05.jpg',
            title:'Paradise',
            text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        }
    
    ],
    immagineCorrente: 0
    
  },

  methods: {
      precedente() {
          let preImmagine = this.immagineCorrente - 1;

          if(preImmagine<0) {
              preImmagine = this.listaImmagini.length -1;
          }
          this.immagineCorrente = preImmagine
      },
      successiva() {
        let succImmagine = this.immagineCorrente + 1;

        if(succImmagine>this.listaImmagini.length -1) {
            succImmagine = 0;
        }
        this.immagineCorrente = succImmagine
    }
  }
 
});


