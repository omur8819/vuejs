new Vue({
  el:".app",
  data: {
    color: "green",
    height: 100,
    show: true,
    sayi: 10,
    showParag: false,
    products: ["Monitor", "Keyboard", "Mouse", "Table"],
    persons: [
      {name: "omur", email: "omur@gmail.com"},
      {name: "john", email: "john@gmail.com"},
      {name: "jane", email: "jane@gmail.com"},
      {name: "philip", email: "philip@gmail.com"},
    ],
  },
  computed: {
    customStyle: function(){
      return {
        backgroundColor: this.color,
        height: this.height + "px"
      }
    }
  },
  
  
})


