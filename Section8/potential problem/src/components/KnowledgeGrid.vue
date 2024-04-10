<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"

    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ["topics"], // Injetando todos os dados entregues pelo método provide, você so pode injetar dados de que foram
                      // produzidos por um elemento 'pai', ou seja, o app.vue o provider e pai do knowledge-base que e pai
                      // no Knowledge grid. Não poderíamos prover de Active element para o Knowledge grid uma vez que ele
                      // é vizinho do knowledgeBase, que por sua vez e pai de KnowledgeGrid, por tanto nao seria pai do KnowledgeGrid.

};
</script>