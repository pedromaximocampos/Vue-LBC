const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            inputValues: '',
            taskShowed: true
        }
    },
    computed:{
        listVisualisation(){
            return {hidden: !this.taskShowed, visible: this.taskShowed}
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.inputValues);
            this.inputValues = '';
        },
        removeTask(index){
            this.tasks.splice(index, 1);
        },
        toggleVisibilite(){
            this.taskShowed = !this.taskShowed;
        }
    },

})
app.mount('#assignment')