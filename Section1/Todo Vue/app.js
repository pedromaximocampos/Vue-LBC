Vue.createApp({
  /*
   A função 'data' retorna um objeto que representa o estado do aplicativo.
   Este estado pode ser acessado e modificado pelos métodos abaixo.
  */
  data() {
    return {
      // O array 'goals' armazena as metas que o usuário inseriu.
      goals: [],
      // A string 'enteredValue' contém o valor atual que o usuário digitou.
      enteredValue: ''
    };
  },
  // 'methods' é um objeto que contém todos os métodos que este aplicativo Vue.js pode chamar.
  // Estes métodos podem ser chamados no template do aplicativo Vue.
  methods: {
    // O método 'addGoal' é responsável por adicionar uma nova meta ao array 'goals'.
    addGoal() {
      // O método 'push' é usado para adicionar o valor atual de 'enteredValue' ao fim do array 'goals'.
      this.goals.push(this.enteredValue);
      // 'enteredValue' é então limpo para permitir a entrada de uma nova meta.
      this.enteredValue = '';
    }
  }
// A chamada para a função 'mount' diz ao Vue.js para exibir este aplicativo Vue.js no elemento HTML com o ID 'app'.
}).mount('#app');



// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);