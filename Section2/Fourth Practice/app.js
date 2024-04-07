// Crie uma nova aplicação Vue.
const app = Vue.createApp({
    // data é uma função que retorna um objeto envolvendo todas as propriedades que o componente precisa.
    // Estas propriedades são reativas, significando que o Vue vai atualizar a página sempre que seus valores mudam.
    data() {
        return {
            actualUserStyle: '', // Este é um string que é usada para definir uma classe dinamicamente.
            show: true,          // Um booleano que será usado para alternar a visibilidade de um elemento.
            inlineStyle: ''      // Este é um string que armazena um valor de estilo CSS para aplicação dinâmica.
        }
    },

    // Os valores computados no Vue são valores que dependem de um ou mais valores reativos,
    // e que são recalculados automaticamente quando esses valores mudam.
    computed: {
        changeVisibility() {
            // Este valor computado retorna um objeto com as propriedades sendo nomes de classes,
            // e os valores	booleanos indicando se a classe deve ser aplicada ou não.

            // O nome da classe CSS usada é determinado pelo valor de actualUserStyle neste momento.
            // A classe 'visible' será aplicada se o valor de 'show' for verdadeiro,
            // e a classe 'hidden' será aplicada se o valor de 'show' for falso.
            return {
                [this.actualUserStyle]: true,
                visible: this.show,
                hidden: !this.show
            }
        }
    },

    // methods é um objeto que contém todas as funções que são usadas como métodos no componente.
    methods: {
        toggleButton() {
            // Este método alterna o valor de 'show' a cada vez que é chamado,
            // causando o efeito de alternar a visibilidade de um elemento.
            this.show = !this.show
        }
    }
})

// 'app.mount('#assignment')' diz ao Vue para controlar o elemento com o id 'assignment'
// e tratar tudo dentro dele como parte desta instância Vue.
app.mount('#assignment')