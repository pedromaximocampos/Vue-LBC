/*
Este código cria uma aplicação Vue que contém um componente friend-list.
Este componente pode ser usado para mostrar informações detalhadas sobre um amigo
 e possui um botão para alternar a visibilidade destes detalhes.
As principais características aqui são a definição de componente,
a diretiva v-if (usada para fazer renderização condicional baseada em um valor booleano)
 e o uso de @click para executar uma função quando o botão é clicado.
 */

const app = Vue.createApp({
    data(){
        return{
            // Array de amigos, inicialmente vazio.
            friends:[
                {id:'', name:'', phone:'', email:''},
            ],
        }
    }
})

/* Define um novo componente chamado 'friend-list'.
Este componente terá seu próprio modelo e dados. */
app.component('friend-list', {
    /* O template define o HTML que será renderizado para este componente.
    Neste caso, é uma lista com informações sobre um amigo.
    A diretiva v-if controla se certas informações são mostradas na página. */
    template:`<li>
                  <h2>{{friend.name}}</h2>
                  <button @click="toggleInfo()">
                  {{ infoIsToggled ? 'hide': 'Show' }} Details</button>
                  <ul v-if="infoIsToggled">
                      <li><strong>Phone:</strong>{{friend.phone}} </li>
                      <li><strong>Email:</strong> {{friend.email}}</li>
                  </ul>
              </li>`,
    /* Os dados para este componente.
    Observe a função toggleInfo que inverte o valor de infoIsToggled cada vez que é chamada. */
    data(){
        return {
            friend:  {id:'3', name:'PEDRO', phone:'dadadadad', email:'Dadadadad'},
            infoIsToggled: false,
        }
    },
    methods:{
        /* Função para alternar a visibilidade das informações do amigo
        cada vez que o botão é clicado, infoIsToggled é invertido */
        toggleInfo(){
            this.infoIsToggled = !this.infoIsToggled
        }
    }
})

// Monta a aplicação Vue na div com ID 'app' no HTML.
app.mount('#app')

app.component('friend-list', {
    template:`<li>
                  <h2>{{friend.name}}</h2>
                  <button @click="toggleInfo()">
                  {{ infoIsToggled ? 'hide': 'Show' }} Details</button>
                  <ul v-if="infoIsToggled">
                      <li><strong>Phone:</strong>{{friend.phone}} </li>
                      <li><strong>Email:</strong> {{friend.email}}</li>
                  </ul>
              </li>`,

    data(){
        return {
            friend:  {id:'3', name:'PEDRO', phone:'dadadadad', email:'Dadadadad'},
            infoIsToggled: false,
        }
    },
    methods:{
        toggleInfo(){
            this.infoIsToggled = !this.infoIsToggled
        }
    }
})
app.mount('#app')