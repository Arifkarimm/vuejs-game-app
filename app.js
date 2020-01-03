new Vue({
  el: "#app",
  data: {
    isGameLoading: false,
    playerHealth: 100,
    monsterHealth: 100
  },
  methods: {
    startGame() {
      this.isGameLoading = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      let min = 3;
      let max = 10;
      let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.playerHealth -= damage;

      min = 3;
      max = 10;
      damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.monsterHealth -= damage;
    }
  }
});
