<template>
  <div>
    <h1>Name: </h1> <p>{{ name }}</p> <br>
    <h2>Age:  </h2><p>{{ age }}</p>
  </div>
</template>


<script >
export default {
  props:{
    'id':{
      type:Date,
      required:true,
    },
    'name':{
      required: true,
      type: String,
    },
    'age':{
      type:Number,
      required:true
    }
  },
  data() {
    return {

    };
  }
}

</script>

<style scoped>

</style>