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
      let damage = this.calculationDamage(3, 10);
      this.playerHealth -= damage;
      if (this.playerHealth <= 0) {
        alert("You loss");
      }

      damage = this.calculationDamage(3, 10);
      this.monsterHealth -= damage;
      if (this.monsterHealth <= 0) {
        alert("You Win");
      }
    },
    calculationDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    }
  }
});
