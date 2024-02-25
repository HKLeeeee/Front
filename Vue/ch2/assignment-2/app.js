Vue.createApp({
  data() {
    return {
      result1: "",
      result2: "",
      EnteredResult: "",
    };
  },
  methods: {
    pressed() {
      alert("pressed!");
    },
    input1({ target }) {
      this.result1 = target.value;
    },
    input2({ target }) {
      this.result2 = target.value;
    },
    confirmedInput() {
      this.EnteredResult = this.result2;
    },
  },
}).mount("#assignment");
