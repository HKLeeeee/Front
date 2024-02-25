const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    up(num) {
      this.counter += num;
    },
    down(num) {
      this.counter -= num;
    },
    changeName(event, LastName) {
      this.name = event.target.value + " " + LastName;
    },
    submitForm(event) {
      // event.preventDefault();
      alert("Submitted!");
    },
    confirmInput(event) {
      this.confirmName = event.target.value;
    },
  },
});

app.mount("#events");
