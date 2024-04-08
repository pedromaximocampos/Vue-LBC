<template>
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide': 'Show'}}Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
</template>

<script >
export default {
  data(){
    return{
      detailsAreVisible: false,
      friend: {id:'21', name:'Pedro', phone:'31203913', email:'pedro@gmail.com'}
    }
  },
  methods:{
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
}
</script>


<style >

</style>