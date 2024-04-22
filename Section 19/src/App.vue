<template>
  <section class="container">
    <UserData :first-name="user.firstName" :last-name="user.lastName" ></UserData>
    <button @click="newAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" ref="firstNameInput" /> <br>
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setName">Set Name</button>
    </div>
  </section>
</template>

<script setup>
// import {
// ref, isRef, isReactive, toRefs, computed ,
// onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onMounted
// } from "vue";
// import { useRoute, useRouter } from 'vue-router'
// route = useRoute()
// console.log(route)
// router = useRouter()
// router.push('/products')
// console.log(isReactive(user))
// const uName = ref('Maximilian');
// const age = ref(31)
// data() {
//   return {
//     userName: 'Maximilian',
//   };
// },
import {reactive, watch, ref, provide} from 'vue';
import UserData from "@/components/UserData.vue";

const user = reactive ({
  // name: 'Maximilian',
  firstName: '',
  lastName: '',
  age:31,
})

const lastNameInput = ref(null)
const firstNameInput = ref(null)

function setName(){
  user.lastName = lastNameInput.value.value
  user.firstName = firstNameInput.value.value
}
function newAge(){
  user.age +=3
}

watch( () => [user.age, user.firstName, user.lastName], function (newValue, oldValue){
    console.log('Old Age: ' + oldValue[0] + ', age: ' + newValue[0]);
    console.log('Old FirstName: ' + oldValue[1] + ', NewFirstName: ' + newValue[1]);
    console.log('Old LastName: ' + oldValue[2] + ', NewLastName: ' + newValue[2]);
} ) // para propriedades de objeto!

// watch ([age, firstName, lastName] , function(newValue, oldValue){
// console.log('Old Age:' + oldValue[0] + ', age:' + newValue[0]);
// console.log('Old FirstName:' + oldValue[1] + ', NewFirstName:' + newValue[1]);
// console.log('Old LastName:' + oldValue[2] + ', NewLastName:' + newValue[2]);
// } )  para propriedades sozinhas (nao englobadas)!
setTimeout(function(){
  user.name = 'Pedro';
  user.age = 21;
}, 2000)

provide('user', user)

</script>

<style>
div{
  margin: 20px;
}
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>