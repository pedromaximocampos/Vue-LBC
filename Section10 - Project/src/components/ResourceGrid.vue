
<template>
  <ul>
    <resource-card v-for="card in resources" :key="card.id"
                   :id="card.id" :title="card.title" :content="card.content"
                   :link="card.link" @deleteCard="handleDeletion">
    </resource-card>
  </ul>
</template>


<script >
import ResourceCard from "@/components/ResourceCard.vue";

export default {
  components: {
    ResourceCard,

  },
  emits:["deleteCard"],
  props: ['resources'],
  methods:{
    handleDeletion(id){
      this.$emit('deleteCard', id);
    }
  },

  data() {
  },
}
</script>