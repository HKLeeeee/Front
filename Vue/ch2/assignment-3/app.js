const Result_String = {
  Under: "Not there yet",
  Over: "Too much!",
};
const app = Vue.createApp({
  data() {
    return {
      num: 0,
    };
  },
  computed: {
    result() {
      if (this.num === 37) {
        return this.num;
      } else if (this.num > 37) {
        return Result_String.Over;
      } else {
        return Result_String.Under;
      }
    },
  },
  watch: { // computed에 적힌 것도 가능
    result() {
      setTimeout(() => {
        this.num = 0;
      }, 5000);
    },
  },

  methods: {
    add(amount) {
      this.num += amount;
      console.log(this.num);
    },
  },
});

app.mount("#assignment");
