const app =  Vue.createApp({
    data(){
        return{
            myName:'Pedro Máximo',
            myAge: 21,
            imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FItachi_Uchiha&psig=AOvVaw2yWGXK0ZTHp9GlBzk1xRJ8&ust=1712534880888000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiInNvnroUDFQAAAAAdAAAAABAE',
            enteredValue:'INPUTEI AQUI ZZ'
        }
    },
    methods: {
        randomNumber(){
            return Math.random().toFixed(2)
        }
    }


})

app.mount('#assignment')