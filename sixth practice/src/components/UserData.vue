<template>
  <div>
  <form @submit.prevent="addNewUser">
    <label>Name:</label>
    <input type="text" v-model="enteredName">
    <label>Age:</label>
    <input type="text" v-model="enteredAge">
    <button>Submit User</button>
  </form>
  </div>
</template>

<script >
  export default {
    emits: ['add-new-user'],
    data(){
      return {
        enteredName: '',
        enteredAge:'',
      };
    },
    methods: {
      addNewUser(){
        this.$emit('add-new-user', this.enteredName, this.enteredAge);
      }
    }
}
</script>

<style scoped>

</style>