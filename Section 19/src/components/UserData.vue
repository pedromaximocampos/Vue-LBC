<template>
  <h1>{{ fullName }}</h1>
  <h3>{{ user.age }}</h3>
  <slot></slot>
</template>


<script setup>
// import {defineEmits} from 'vue'
// const emit = defineEmits(['update'])
import { defineProps, computed, inject} from "vue";


const props = defineProps({
  firstName: String,
  lastName: String,

})
const  user = inject('user')

const fullName = computed(() => `${props.firstName} ${props.lastName}`);
</script>


<style scoped>

</style>