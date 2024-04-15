<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getAllData">Load Submitted Experiences</base-button>
      </div>

      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && errorFound !== null">{{ errorFound}}</p>
      <p v-else-if="!isLoading && !results">No Stored Experience Found</p>
      <ul v-else-if="!isLoading && results.length>0 && results">

        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axiosInstance from "@/axioshttp";


export default {
  components: {
    SurveyResult,
  },
  data(){
    return{
      results: [],
      isLoading: false,
      errorFound: null,
    }
  },
  methods:{
    getAllData(){
      this.isLoading = true;
      axiosInstance.get('')
          .then(response=>{
            this.isLoading = false
            const { data } = response; // destruturação
            this.results = Object.keys(data)// Pega todas as chaves do objeto
                // 'data', que são os 'ids', e cria um array delas
                .map(id =>({ //// Pega todas as chaves do objeto 'data',
                              // que são os 'ids', e cria um array delas
                id: data[id],
                name: data[id].name,
                rating: data[id].rating,
            }))

          })
          .catch((error)=>{
            this.isLoading =false
            this.errorFound = 'Failed to load Data, please try again later';
            console.log(error)
          })
    }
  },
  mounted() {
    this.getAllData(); // mostrar dados quando a página for montada

  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>