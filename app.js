new Vue({
  el:"#app",
  data: {
    title: "merhaba",
    message: " kablosuz kedi",
    link: "https://wwww.videosinif.com",
    bloglink: "<a href='https://www.google.com'>Google</a>",
    counter: 0,
    x: 0,
    y: 0,

  },
  methods: {
    hello: function(){
      this.title = "hello!!"
      return this.title
    },
    showAlert: function(name){
      alert(name);
    },
    decreaseNumber: function(step){
      this.counter -= step;
    },
    updateCoords: function(step, event){
      this.counter -= step;
      this.x = event.clientX;
      this.y = event.clientY;
    },
    showAlert2 : function(event){
      alert(event.target.value)
    },
  }
})