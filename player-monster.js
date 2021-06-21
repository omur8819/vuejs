new Vue({
  el:"#app",
  data: {
    player_heal: 100,
    monster_heal: 100,
    game_is_on: false,
    logs: [],
  },
  methods: {
    start_game: function(){
      this.game_is_on = true;
    },
    attack: function(){
      var point = Math.ceil(Math.random() * 10);
      this.monster_heal -= point;
      this.monster_attack();
      this.add_to_log({turn: "p", text: `Attact to monster ${point} point`})
    },
    special_attack: function(){
      var point = Math.ceil(Math.random() * 25)
      this.monster_heal -= point;
      this.monster_attack();
      this.add_to_log({turn: "p", text: `Spercial attact to monster ${point} point`})
      
    },
    heal_up: function(){
      var point = Math.ceil(Math.random() * 30);
      this.player_heal += point;
      this.monster_attack();
      this.add_to_log({turn: "p", text: `Player had medicine ${point} point`})
      
      
    },
    give_up: function(){
      this.add_to_log({turn: "p", text: `Player gave up`})
      setTimeout(() => {
        this.player_heal = 0;
        this.logs = [];
      }, 500);
      
    },
    monster_attack: function(){
      var point = Math.ceil(Math.random() * 15);
      this.player_heal -= point;
      this.add_to_log({turn: "m", text: `Attact to player ${point} point`})
    },
    add_to_log: function(log){
      this.logs.push(log);
    }
  },
  watch: {
    player_heal: function(value){
      if(value <= 0){
        this.player_heal = 0;
        if(confirm("Lost Game, Would you like to try again?")){
          this.player_heal = 100;
          this.monster_heal = 100;
          this.logs = [];
        }
      } else if(value >= 100){
        this.player_heal = 100;
      }
    },
    monster_heal : function(value){
      if(value <= 0){
        this.monster_heal = 0 ;
        if(confirm("Congrats you won, Would you like to try again?")){
          this.player_heal = 100;
          this.monster_heal = 100;
          this.logs = [];
        }
      }
    },
  },
  computed: {
    player_progress: function(){
      return {width: this.player_heal + "%"}
    },
    monster_progress: function(){
      return {width: this.player_heal + "%"}
    },
  }
  
  
  
})