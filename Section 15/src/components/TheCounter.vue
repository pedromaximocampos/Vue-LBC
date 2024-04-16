<template>
  <h3>{{ finalCounter }}</h3>

</template>

<script >
import { mapGetters} from "vuex";

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
    ...mapGetters('counter', ['finalCounter']) // point to finalCounter getter
  },



}
</script>

<style scoped>

</style>