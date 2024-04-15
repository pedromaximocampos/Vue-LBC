<template>
  <the-header></the-header>
  <manager-component />
</template>

<script >
import TheHeader from "@/components/Layout/TheHeader.vue";
import ManagerComponent from "@/components/ManagerComponent.vue";


export default{
  components:{
    TheHeader,
    ManagerComponent,
  },
  methods:{

  },
  }

</script>

<style >
  *{
    margin: 0;
    padding: 0;
    font-family: "Times New Roman",serif;
  }
</style>