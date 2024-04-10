<template>
 <section>

   <form @submit.prevent="addNewFriend">
     <div>
      <label>Name</label>
      <input type="text" placeholder="Name"  v-model="enteredName" />
     </div>
     <div>
       <label>Email</label>
       <input type="text" placeholder="Email"  v-model="enteredEmail">
     </div>
     <div>
       <label>Phone</label>
       <input type="text" placeholder="Phone"  v-model="enteredPhone">
     </div>
      <div>
        <button >Add Contact</button>
      </div>
   </form>
 </section>
</template>


<script>
export default {
  emits: ['add-friend'],
  data(){
    return{
      enteredName: '',
      enteredEmail: '',
      enteredPhone: '',
    }
  },
  methods:{
    addNewFriend(){
      this.$emit('add-friend', this.enteredName, this.enteredEmail, this.enteredPhone,);
    }
  }
}
</script>


<style>

</style>