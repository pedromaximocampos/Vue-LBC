// Primeiramente nós estamos criando uma nova instância Vue utilizando `Vue.createApp`.
const app = Vue.createApp({

  // Dentro de `data`, nós estamos definindo variáveis que queremos manter o controle.
  // No nosso caso, temos `counter`, para acompanharmos um contador, e `name`, para armazenar o valor de um campo de texto.
  data() {
    return {
      counter: 0,
      name: '',
      lastName:''
    };
  },
  watch:{
    // `watch` é uma opção de instância Vue que você pode usar para executar uma ação
    // sempre que um valor específico da instância muda. Nesse caso, você está assistindo (`watching`) a variável `counter`.
    counter(newValue, oldValue){

      if (newValue > 50) {

        // Declaração de uma constante para mantém a referência de `this`
        // no escopo atual (que se refere ao objeto Vue), a fim de poder acessá-lo dentro da função `setTimeout`.
        const that = this

        setTimeout(function () {
          that.counter=0
        },1000)
      }
    }
  },

  // `computed` é uma opção dentro da instância Vue que permitem criar propriedades computadas. Essas propriedades
  // são como métodos, mas o resultado é armazenado em cache até que alguma dependência mude. Nesse caso,
  // a propriedade computada `fullName` é usada para gerar o nome completo do usuário concatenando a partir dos valores de `name` e `lastName`.
  computed: {
    fullName(){

      if (this.name.length <= 3 || this.lastName.length <= 3){
        return '';
      }else{
        return this.name + ' ' + this.lastName;
      }
    }
  },

  // `methods` é a seção da sua instância Vue onde você pode definir qualquer método que queira usar.
  methods: {

    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
    },

    resetInput(){
      this.name = ''
      this.lastName = ''
      this.counter = 0
    }

  }
});

// Por fim, usamos o método `mount` para dizer ao Vue onde ele deve ativar nossa instância Vue no DOM. Nesse caso,
// nosso aplicativo Vue será ativado na div com id='events'.
app.mount('#events');
