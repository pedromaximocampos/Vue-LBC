const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: '',
      confirmedName:''

    };
  },
  methods:{
    submitForm(){
      alert("Submitted!" + this.counter);
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      if (this.counter - num >= 0) this.counter = this.counter - num
    },
    setName(event, lastName){
      this.yourName = event.target.value + ' ' + lastName;
    },
    confirmName(){
        this.confirmedName = this.yourName;
    }
  }
});

app.mount('#events');
