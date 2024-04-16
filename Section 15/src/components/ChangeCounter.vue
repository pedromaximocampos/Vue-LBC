<template>
 <button @click="addOne">Add1</button>
</template>

<script>
export default {
  methods:{
    addOne(){
      this.$store.state.counter +=1;
    }
  }
}
</script>

<style scoped>

</style>