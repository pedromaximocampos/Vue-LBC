<template>
    <li>
      <base-card>
        <template #header>
        <div id="resource-card__header">
          <h3>{{ title }}</h3>
          <button @click="$emit('deleteCard', id)">Delete</button>
        </div>
        </template>
        <template #content>
        <div id="resource-card__body">
          <p>{{ content }}</p>
          <nav>
          <a :href='link'>View Resource</a>
          </nav>
        </div>
        </template>
      </base-card>
    </li>
</template>

<script >
 import BaseCard from '@/components/UI/BaseCard.vue';

export default {
  components:{
    BaseCard,
  },
  props:{
    id:{
      type: Number,
      required: false,
    },
    title:{
      type: String,
      required: true,
    },
    link:{
        type: String,
        required: true,
      },
    content:{
      type: String,
      required: true,
    }

  },
  data(){

  }
}
</script>

<style scoped>
* {
  font-family: "Times New Roman", Times, serif;
}
#resource-card__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;

}
#resource-card__body{
  margin: 15px;
}
button{
  background-color: white;
  border: none;
  color: purple;
  font-weight: bold;

  font-size: 15px;
}
button:hover{
  color: white;
  background-color: red;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  box-shadow: #2f0b0b;

}
</style>