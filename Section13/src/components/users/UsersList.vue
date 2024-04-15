<template>
  <ul>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save changes</button>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data(){
    return {
      changeSaved: false
    }
  },
  inject: ['users'],
  methods:{
    confirmInput(){
      this.$router.push('/teams');
    },
    saveChanges(){
      this.changeSaved = true
      alert('Changes saved')
    }
  },
  beforeRouteLeave(to, from, next){
    if (this.chagesSaved){
      next()
    }else{
      const answer =confirm('You have unsaved changes. Do you want to leave ?')
      next(answer)
    }
  }
  // beforeRouteEnter(to, from, next){
  //   console.log('beforeRouteEnter', to, from, next);
  //   next();
  // },

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>