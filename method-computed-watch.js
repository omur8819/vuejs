new Vue({
  el:"#app",
  data: {
    counter: 0,
    secondCounter: 0,
  },
  methods: {
    result: function(){
      console.log('Result method run')
      return this.counter > 10 ? "Bigger than 10" : "Smaller or equal than 10"
    },
  },
  computed: {
    output: function(){
      console.log('Output computed run')
      return this.counter > 10 ? "Bigger than 10" : "Smaller or equal than 10"
    },  
  },
  watch: {
    counter: function(value){
      vm = this;
      console.log(`value`, value)
      setTimeout(function(){
        vm.counter = 0;
      }, 1500)
    },
  }
})


