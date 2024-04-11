<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :content="goal" name="goalSlot"></slot>
    </li>
  </ul>
</template>


<script >
export default {
  data(){
    return{
      goals : ['become a developer', 'dev']
    }
  }
}
</script>


<style scoped>

</style>