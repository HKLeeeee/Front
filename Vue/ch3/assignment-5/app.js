const app = Vue.createApp({
  data() {
    return {
      assignment: "",
      tasks: [],
      isHide: false,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.assignment);
      this.assignment = "";
    },
    toggleHide() {
      this.isHide = !this.isHide;
    },
  },
  computed: {
    hideString() {
      return this.isHide ? "Show List" : "Hide";
    },
  },
});

app.mount("#assignment");
