const app = Vue.createApp({
    data() {
        return {
            output: '',
            output2: '',
        }
    },
    methods:{
        alertMethod (){
            alert('This is an alert!!')
        },
        outputMethod(event){
            this.output = event.target.value
        },
        outputMethod2(event){
            this.output = event.target.value
        },
        confirmOutput(){
            this.output2 = this.output
        }
    }
})
app.mount('#assignment')