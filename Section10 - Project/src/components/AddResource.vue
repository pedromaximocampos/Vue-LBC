<template>
  <base-card>
    <template #content>
      <form @submit.prevent='handleSubmit'>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="newResource.title">
        <label for="description">Description</label>
        <textarea name="description" id="description" v-model="newResource.description"></textarea>
        <label for="link">Link</label>
        <input type="text" name="link" id="link" v-model="newResource.link">
        <button type="submit">Add Resource</button>
      </form>
    </template>
  </base-card>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue'

export default {
  components: {
    BaseCard
  },
  data(){
    return{
      newResource: {
        title: '',
        description: '',
        link: '',
        id: null,
      }
    }

  },
  methods: {
    handleSubmit() {
      this.newResource.id = Date.now();
      this.$emit('new-resource', this.newResource);
      this.newResource = {
        title: '',
        description: '',
        link: '',
        id: null,
      }
    }
  }
}
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
  margin: 10px;
}
textarea,
input{
  display: block;

  padding: 10px;
}
label{
  display: block;
  margin: 10px 0 10px 0;
  font-family: "Times New Roman", Times, serif;
  font-weight: bolder;
  font-size: 20px;
  color: purple;
}
button{
  background-color: purple;
  max-width:120px;
  max-height: 40px;
  color: white;
  height:80px;
  margin-top: 10px;
  border: 0;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 0 10px 0;
}

</style>