<template>
  <h1>Disabled Component</h1>
  <input type="text" v-model="enteredValue">
  <button @click="setgoal">Set goal</button>
  <teleport to="body">
  <error-alert v-if="errorInput === true">
    <template #errorSlot>
      <h2>ERROR!!!</h2>
      <p>Please enter at least few characters..</p>
      <button @click="closeError">Close</button>
    </template>
  </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert.vue";
export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      enteredValue: '',
      errorInput: false
    }
  },
  methods: {
    setgoal() {
        const value = this.enteredValue;
        if (value ===''){
          this.errorInput = true;
        }
    },
    closeError(){
      this.errorInput = false;
    }
  }
}
</script>