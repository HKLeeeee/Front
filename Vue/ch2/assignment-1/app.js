const app = Vue.createApp({
  data() {
    return {
      enteredName: "",
      name: "이희경",
      age: 25,
      img: "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/633/7ebc763c42c22b6cedab3d33ed340649_res.jpeg",
    };
  },

  methods: {
    getRandomNumber() {
      return Math.random();
    },
    inputName() {
      this.name = this.enteredName;
    },
  },
});

app.mount("#assignment");
