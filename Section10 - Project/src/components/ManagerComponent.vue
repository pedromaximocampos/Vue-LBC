<template>
    <base-card>
      <template #content>
        <button @click="setSelectedTab('resource-grid')">Stored Resources</button>
        <button @click="setSelectedTab('add-resource')">Add Resource</button>
      </template>
    </base-card>
    <component :is="selectedTab" :resources="goals" @new-resource="addNewResource"
               @deleteCard="deleteResource">

    </component>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue'
import ResourceGrid from '@/components/ResourceGrid.vue'
import AddResource from '@/components/AddResource.vue'
export default{
  components:{
    BaseCard,
    'resource-grid': ResourceGrid,
    AddResource
  },
  provide(){
    return{
      resource: this.goals
    }

  },
  data(){
    return {
      selectedTab: 'resource-grid',
      goals: [
        {
          id: 1,
          title: 'User Name',
          content: 'User Name',
          link: 'https://google.com',
        },
        {
          id: 2,
          title: 'User Name',
          content: 'User Name',
          link: 'https://google.com',
        }
      ]
    }
  },
  methods:{
     setSelectedTab(tab){
       this.selectedTab = tab
     },
     addNewResource(newR){
       this.goals.push(newR)
     },
    deleteResource(id){
      this.goals = this.goals.filter(goal => goal.id !== id);
      }
  }
}
</script>

<style scoped>
button{
  background-color: white;
  max-width:200px;
  max-height: 50px;
  color:purple;
  height:80px;

  border: 0;
  font-weight: bold;
  font-size: 16px;
  margin-right: 15px;
  border-radius: 5px;
  padding: 0 10px 0 10px;
}
button:hover{
  color: white;
  background-color: purple;
}
</style>