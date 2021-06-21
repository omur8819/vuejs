var cmp = {
  data: function(){
    return{
      status: "Pasif"
    }
  },
  template: '<p>Sunucu Durumu : {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
    changeStatus: function(){
      if(this.status == "Pasif"){
        this.status = "Aktif";
      } else {
        this.status = "Pasif";
      }
    }
  }
};

new Vue({
  el:"#app",
  components: {
    "my-comp": cmp
  }
})

new Vue({
  el:"#app2",
  components: {
    "my-comp": cmp
  }
})