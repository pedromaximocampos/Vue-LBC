<template>
  <button @click="login" v-if="!userIsAuthenticated">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "UserAuth",

  methods:{
    ...mapActions(['login', "logout"])

  },
  computed: {
    ...mapGetters(['userIsAuthenticated'])

  }
}
</script>


<style scoped>

</style>