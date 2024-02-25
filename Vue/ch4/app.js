const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    startGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const value = getRandomValue(5, 12);
      this.monsterHealth -= value;
      this.addLogMessage('player', 'attack', value)

      this.attackPlayer();
    },
    attackPlayer() {
      const value = getRandomValue(8, 15);
      this.playerHealth -= value;
      this.addLogMessage('monster', 'attack', value)
    },
    specialAttackMonster() {
      this.currentRound++;
      const value = getRandomValue(10, 25);
      this.monsterHealth -= value;
      this.addLogMessage('player', 'special attack', value)

      this.attackPlayer();
    },
    healPlayer() {
      const value = getRandomValue(8, 20);
      this.playerHealth += value;
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
      this.addLogMessage('player', 'heal', value)

      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        who,
        what,
        value,
      });
    },
  },
  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
  },
});

app.mount("#game");
