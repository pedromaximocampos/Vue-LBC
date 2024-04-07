// Vue.createApp({}) cria uma nova instância do aplicativo Vue
const app = Vue.createApp({
    // data() é uma função que retorna um objeto
    // Este objeto contém todos os dados (propriedades) que você deseja usar neste aplicativo Vue
    data(){
        return {
            courseGoal: ['Finish the course and make  a LBC project', 'Be a better programmer', 'Start front-end projects'],
            vueLink:'https://vuejs.org/',
            cardTitle:'<h4> My Course Goal </h4>',
        }
    },
    // methods{} é um objeto que contém métodos (funções)
    // Estes métodos podem ser usados em qualquer lugar neste aplicativo Vue (na maior parte das vezes usado em declarações v-on)
    methods: {
        // randomGoal é uma função que retorna um item aleatório do array courseGoal
        randomGoal(){
            //Nos métodos do Vue, a palavra-chave this se refere à instância do Vue na qual o método está sendo chamado.
            // Isso significa que você pode usar this para acessar propriedades e métodos definidos na mesma instância do Vue.
            const randomNum = Math.floor(Math.random() * this.courseGoal.length);
            return this.courseGoal[randomNum];
        }
    }
});
// mount() é um método que diz ao Vue para 'montar' esta instância do aplicativo Vue em um determinado elemento na DOM
// Neste caso, o elemento tem o id 'user-goal'
app.mount('#user-goal');

