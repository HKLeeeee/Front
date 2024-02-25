const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      dataFullName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      console.log("fullName run");
      return this.name === "" ? "" : this.name + " " + "LastName";
    },
  },
  methods: {
    outputFullName() {
      console.log("outputFullName run");
      return this.name === "" ? "" : this.name + " " + "LastName";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");

/**
 * Methods, Computed, Watch 의 차이
 *
 * Method:
 **** Use with event binding or data binging
 **** Data binding : Method is executed for every "re-render" cycle of the component
 **** Use for events or data that really needs to be re-evaluated all the time
 * Computed :
 **** Use with data binding
 **** Computed properties are only re-evaluated if one of their "used valued" changed
 **** Use for data that depends on other data
 * Watch: (가장 사용 빈도가 낮을껄)
 **** Not used directly in template
 **** Allows you to run any code in reaction to some changed data (e.g. send Htp request etc.)
 **** Use for any non-data update you want to make
 */

 /**
  * v-on === @
  * v-bind === : ( v-bind:value === :value)
  */
