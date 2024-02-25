import { createApp } from "vue";
const app = createApp({
  data() {
    return {
      style: "",
      isVisible: true,
      backgroundColor: "",
    };
  },
  computed: {
    pStyle() {
      return [this.style, { visible: this.isVisible, hidden: !this.isVisible }];
    },
    inlineBackgroundColor() {
      return `background-color: ${this.backgroundColor}`;
    },
  },
  methods: {
    changeStyle({ target }) {
      console.log("changeStyle");
      this.style = target.value;
    },
    toggleParagraph() {
      console.log("toggleParagraph");
      this.isVisible = !this.isVisible;
    },
    inputBackgroundColor({ target }) {
      console.log("inputBackgroundColor");
      this.backgroundColor = target.value;
    },
  },
});

app.mount("#assignment");
