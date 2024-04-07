const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    watch:{
        result(value){
            var that = this
            setTimeout(function(){
                that.result = 0
            }, 5000);
        }
    },
    computed:{
        results(){
            if(this.result < 37 && this.result !== 0){
                return 'Not there yet'
            }else if (this.result >37  && this.result !== 0){
                return "Too much!"
            }else{
                return this.result
            }
        }
    },
    methods: {
        addFive(){
            this.result += 5
        },
        addOne(){
            this.result += 1
        }
    }
})
app.mount('#assignment')