const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
  //Vue também inclui várias funções de ciclo de vida que permite que você execute código em vários pontos da duração do seu componente. Exemplo:

  //beforeCreate: chamado antes da instância do Vue ser criada.
  beforeCreate() {
    console.log('beforeCreate()');
  },
  //created: chamado depois que a instância do Vue é criada.
  created() {
    console.log('created()');
  },
  //beforeMount: chamado antes que a instância do Vue seja montada no DOM.
  beforeMount() {
    console.log('beforeMount()');
  },
  //mounted: chamado depois que a instância do Vue é montada no DOM.
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});
//Este aplicativo Vue é então montado em um elemento específico do DOM usando app.mount('#app').
app.mount('#app');

//Este código usa a função setTimeout para desmontar o aplicativo do elemento do DOM após 3 segundos.
setTimeout(function () {
  app.unmount();
}, 3000);

//Este é outro exemplo de um aplicativo Vue,
// desta vez muito mais simples e usando a opção template para definir a renderização de HTML.
const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza',
    };
  },
});

app2.mount('#app2');

// A última parte do código usa a API Proxy do JavaScript para
// criar um objeto de dados reativos manualmente. Isso é semelhante ao que o Vue.js faz internamente
const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!',
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

console.log(proxy.longMessage);
//Aqui, data é um objeto normal com duas propriedades. handler é um objeto que define um manipulador
// personalizado para a operação de configuração no Proxy.
// Se a propriedade 'message' for modificada no objeto proxy, 'longMessage' também será atualizado
// automaticamente.
// Este é um exemplo de como o Vue.js realiza a reatividade de seus dados.
// Note que a implementação real do Vue.js de dados reativos é bem mais complexa e
// otimizada do que este exemplo.