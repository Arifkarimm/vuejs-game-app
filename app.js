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

      this.monsterHealthDamage();
      if (this.monsterHealth <= 0) {
        alert("You Win");
      }
    },
    specialAttack() {
      let damage = this.calculationDamage(10, 20);
      this.playerHealth -= damage;
      if (this.playerHealth <= 0) {
        alert("You loss");
      }

      this.monsterHealthDamage();
      if (this.monsterHealth <= 0) {
        alert("You Win");
      }
    },
    monsterHealthDamage() {
      let damage = this.calculationDamage(5, 12);
      this.monsterHealth -= damage;
    },
    calculationDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    }
  }
});
