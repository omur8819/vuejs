new Vue({
  el:"#app",
  data: {
    attachedClass: false,
    color: "green"
  },
  computed: {
    divClass : function(){
      return{
        yellow: this.attachedClass,
        blue: !this.attachedClass,
        
      }
    }
  }
})


