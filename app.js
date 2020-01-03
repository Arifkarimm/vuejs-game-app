new Vue({
  el: "#app",
  data: {
    isGameLoading: false,
    playerHealth: 100,
    monsterHealth: 100,
    turns: []
  },
  methods: {
    startGame() {
      this.isGameLoading = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack() {
      let damage = this.calculationDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Monster Damage " + damage
      });
      if (this.checkResult()) {
        return;
      }
      this.monsterHealthDamage();
    },
    specialAttack() {
      let damage = this.calculationDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Monster special Damage " + damage
      });
      if (this.checkResult()) {
        return;
      }
      this.monsterHealthDamage();
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: "Player Heal +10"
      });
      this.monsterHealthDamage();
    },
    giveUp() {
      this.isGameLoading = false;
    },
    monsterHealthDamage() {
      let damage = this.calculationDamage(5, 12);
      this.playerHealth -= damage;
      this.checkResult();
      this.turns.unshift({
        isPlayer: false,
        text: "Player Damage " + damage
      });
    },
    calculationDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkResult() {
      if (this.playerHealth <= 0) {
        if (confirm("You Loss ! Start New Game")) {
          this.startGame();
        } else {
          this.isGameLoading = false;
        }
        return true;
      } else if (this.monsterHealth <= 0) {
        if (confirm("You Win ! Start New Game")) {
          this.startGame();
        } else {
          this.isGameLoading = false;
        }
        return true;
      }
      return false;
    }
  }
});
