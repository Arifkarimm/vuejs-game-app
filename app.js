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
    }
  }
});
