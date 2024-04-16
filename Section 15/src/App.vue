<template>
  <base-container title="UserAuth">
      <user-auth></user-auth>
  </base-container>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <TheCounter></TheCounter>
    <favorite-value></favorite-value>
    <button @click="incrementCounter">Add1</button>
    <button @click="increaseCounter({num:10})">Add10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "@/components/TheCounter.vue";
import ChangeCounter from "@/components/ChangeCounter.vue";
import FavoriteValue from "@/components/FavoriteValue.vue";
import UserAuth from "@/components/UserAuth.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    UserAuth,
    FavoriteValue,
    ChangeCounter,
    BaseContainer,
    TheCounter,
  },
  methods:{
    // Add1(){
      // // do action not mutations
      // this.$store.dispatch('incrementCounter')
      ...mapActions('counter', ['incrementCounter', 'increaseCounter']),

  },
  computed:{
    ...mapGetters(['userIsAuthenticated'])
  }

};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>